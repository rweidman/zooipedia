import styled from 'styled-components';

export const H1 = styled.h1`
font-size: 24px;
margin-bottom:12px;
margin-top:0;
padding-top:0;
	font-family:Verdana;
`

export const Meta = styled.span`
	font-family: 'Times New Roman', Times, serif;
	font-size: 18px;
	font-style: italic;
	margin: 0 auto 1em;
	max-width: 80rem;
	padding-bottom: 24px;
	padding-left: 24px;
	position: relative;
	top: -1em;
`;

export const BreedDetails = styled.div`
	display:flex;

	.gatsby-image-wrapper {
		min-height:100%;
		min-width: 50%;
	}
	
`

export const Breed = styled.article`
	display: grid;
	font-size: 16px;
	gap: 20px;
	letter-spacing: -0.011em;
	line-height: 1.75;
	padding: 24px 24px calc(24px * 2);


	a {
		border-bottom: 1.5px solid currentColor;
		font-weight: 500;

		&:hover {
			border-bottom-color: transparent;
			color: #4a90e2;
		}
	}



	p {
		margin-bottom: 1.5em;
		margin-top: 0;
	}

	h1,
	h2 {
		font-size: 24px;
	
	}

	h3,
	h4,
	h5,
	h6 {
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 0.5em;
		margin-top: 3em;
	}

	li {
		margin-bottom: 0.5em;
	}
`;

export const Body = styled.div`
	padding-left:25px;
`;

export const Navigation = styled.nav`
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		list-style: none;
		padding: 0;
	}
`;
