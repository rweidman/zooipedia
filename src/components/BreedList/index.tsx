import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';


// styled components
import * as S from './styles';
import { Container } from '../UI/Container';

// types
import type { Breed } from '../../types/types';

// props
type BreedListProps = {
	breeds: Breed[];
};

const BreedList = ({ breeds }: BreedListProps) => {
	if (!breeds || !Array.isArray(breeds)) return null;

	return (
		<Container>
			<S.BreedList>
				{breeds.map((breed) => (
					<li key={breed.slug}>
						<S.StyledLink to={`/breed/${breed.slug}`}>
							<GatsbyImage alt='' image={breed.media.gatsbyImageData} />
							<S.Title>{breed.breedName}</S.Title>
						</S.StyledLink>

						<div dangerouslySetInnerHTML={{ __html: "" }} />

					</li>
				))}
			</S.BreedList>
		</Container>
	);
};

export default BreedList;
