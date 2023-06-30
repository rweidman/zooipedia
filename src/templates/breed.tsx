import React from 'react';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// styled components
import * as S from './styles';
import { Container } from '../components/UI/Container';
import { LI, UL } from '../components/UI/List';

// types
import type { NextPrevious, SingleBreed } from '../types/types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Rating } from 'react-simple-star-rating'

import { renderRichText } from 'gatsby-source-contentful/rich-text'

import {richTextOptions} from '../richText'


type GraphQLResult = {
	contentfulBreed: SingleBreed;
	next: NextPrevious;
	previous: NextPrevious;
};

const BreedTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
	const breed = data.contentfulBreed;
	const { previous } = data;
	const { next } = data;

	console.log(breed)

	return (
		<Layout location={location}>
			<Seo title={breed.breedName} />

			<Container>
				
				<S.Breed>
				
					{(previous || next) && (
						<S.Navigation>
							<ul>
								{previous && (
									<li>
										<Link to={`/breed/${previous.slug}`} rel='prev'>
											← {previous.breedName}
										</Link>
									</li>
								)}
								{next && (
									<li>
										<Link to={`/breed/${next.slug}`} rel='next'>
											{next.breedName} →
										</Link>
									</li>
								)}
							</ul>
						</S.Navigation>
					)}
					<S.BreedDetails>
					<GatsbyImage alt='' image={breed.media.gatsbyImageData} />
					<div>
					<S.Body>
					<S.H1>{breed.breedName}</S.H1>
						{breed.body.body}</S.Body>
					
					<UL>
						<LI><strong>Origin: </strong>{breed.origin}</LI>
						<LI><strong>Lifespan: </strong> {breed.longevity_min} - {breed.longevity_max}</LI>
						<LI><strong>{breed.ratingName}</strong>: <Rating size={20} initialValue={breed.rating}  readonly /> </LI>
						<LI><strong>{breed.ratingName2}</strong>: <Rating size={20} initialValue={breed.rating2}  readonly /> </LI>
					</UL>
					</div>
					</S.BreedDetails>

					{(previous || next) && (
						<S.Navigation>
							<ul>
								{previous && (
									<li>
										<Link to={`/breed/${previous.slug}`} rel='prev'>
											← {previous.breedName}
										</Link>
									</li>
								)}
								{next && (
									<li>
										<Link to={`/breed/${next.slug}`} rel='next'>
											{next.breedName} →
										</Link>
									</li>
								)}
							</ul>
						</S.Navigation>
					)}
				</S.Breed>
			</Container>
		</Layout>
	);
};

export default BreedTemplate;

export const pageQuery = graphql`
	query BreedBySlug($slug: String!, $previousBreedSlug: String, $nextBreedSlug: String) {
		contentfulBreed(slug: { eq: $slug }) {
			slug
			breedName			
			media {
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
				resize(height: 630, width: 1200) {
					src
				}
			}
			origin
			longevity_min
			longevity_max
			ratingName
			rating
			ratingName2
			rating2
			body {
				body
			}

		}
		previous: contentfulBreed(slug: { eq: $previousBreedSlug }) {
			slug
			breedName
		}
		next: contentfulBreed(slug: { eq: $nextBreedSlug }) {
			slug
			breedName
		}
	}
`;
