import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import BreedList from '../components/BreedList';
import Layout from '../components/Layout';

// types
import type { Breed } from '../types/types';

type GraphQLResult = {
	allContentfulBreed: {
		nodes: Breed[];
	};
};

const Home = ({ data, location }: PageProps<GraphQLResult>) => {
	const breeds = data.allContentfulBreed.nodes;

	return (
		<Layout location={location}>
			<BreedList breeds={breeds} />
		</Layout>
	);
};

export default Home;

export const pageQuery = graphql`
	query HomeQuery {
		allContentfulBreed(sort: {breedName: ASC}) {
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
