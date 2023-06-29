import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components

import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// types
import type { Breed } from '../types/types';
import BreedList from '../components/BreedList';

type GraphQLResult = {
	allContentfulBreed: {
		nodes: Breed[];
	};
};

const Breed = ({ data, location }: PageProps<GraphQLResult>) => {
	const breeds = data.allContentfulBreed.nodes;

	return (
		<Layout location={location}>
			<Seo title='Breeds' />
			<Hero title='Breeds' />
			<BreedList breeds={breeds} />
		</Layout>
	);
};

export default Breed;

export const pageQuery = graphql`
	query BreedQuery {
		allContentfulBreed(sort: {breedName: DESC}) {
			nodes {
				breedName
				slug
				media {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
				}
			}
		}
	}
`;
