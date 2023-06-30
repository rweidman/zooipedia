import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type Breed = {
	breedName: string;
	slug: string;
	media: {
		gatsbyImageData: IGatsbyImageData;
	};
	origin: string;
	longevity_min: number;
	longevity_max: number;
	ratingLabel: string;
	rating: number;
	ratingLabel2: string;
	rating2: number
};


export type SingleBreed = {
	media: {
		gatsbyImageData: IGatsbyImageData;
		resize: {
			src: string;
		};
	};
	slug: string;
	breedName: string;
	origin: string;
	longevity_min: number;
	longevity_max: number;
	ratingName: string;
	rating: number;
	ratingName2: string;
	rating2: number
	body: {
		body: string;
	};
};

export type NextPrevious = { slug: string; breedName: string } | null;
