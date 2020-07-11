import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from 'lib/styles/palette';

const NoDecorationLink = styled(Link)`
	text-decoration: none;
	font-weight: 200;
	color: ${(props) => (props.color ? props.color : palette.black)};
	user-drag: none;
`;

export default NoDecorationLink;
