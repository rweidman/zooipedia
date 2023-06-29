import { Link } from 'gatsby';
import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	max-width: 80rem;
	align-items: center;
	margin: 0 auto;
	padding: 24px 24px;
`;

export const MenuList = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	gap: 20px;
`;

export const MenuItem = styled.li`
	display: inline-flex;
	align-items: center;
	flex-direction: row;

	a {
		border-bottom: 1.5px solid transparent;
		color: currentColor;
		text-decoration: none;

		&:hover {
			border-bottom-color: #4a90e2;
			color: #4a90e2;
		}
	}
`;

export const LogoLink = styled(Link)`
	display: flex;
	font-weight: 500;
	align-items: center;
	flex-direction: row;
	flex-shrink: 0;
	gap: 8px;

	@media (max-width: 767px) {
		& > span:last-child {
			border: 0;
			clip: rect(0, 0, 0, 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			white-space: nowrap;
			width: 1px;
		}
	}
`;

export const Logo = styled.span`
	height: 24px;
	width: 24px;
	display: block;
	background-image: url("static/images/logo.jpg");
`;
