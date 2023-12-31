import React from 'react';
import { Link } from 'gatsby';

// styled components
import * as S from './styles';
import { StaticImage } from 'gatsby-plugin-image';

const Navigation = () => (
	<S.Nav role='navigation' aria-label='Main'>
		<S.LogoLink to='/'>
			<StaticImage src="../../../static/images/logo.jpg" alt="Logo" />
		</S.LogoLink>

		
	</S.Nav>
);

export default Navigation;
