import React from 'react';

// components
import { Container } from '../UI/Container';

// styled components
import * as S from './styles';

const Footer = () => (
	<Container>
		<S.Footer>
			Built with <a href='https://contentful.com/'>Contentful</a> and{' '}
			<a href='https://gatsbyjs.com'>Gatsby</a>
		</S.Footer>
	</Container>
);

export default Footer;
