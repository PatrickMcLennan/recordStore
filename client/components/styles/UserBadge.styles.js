import styled from 'styled-components';
import media from './queries';

const Badge = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 100%;
  border: 1px solid white;
  display: block;
  margin: 0 auto;
  z-index: 10;
  ${media.ten`
    margin: ${props => (props.margin === 'right' ? '0 0 0 auto;' : '0 auto;')}
  `}
`;

export default Badge;
