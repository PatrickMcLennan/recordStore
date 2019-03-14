import styled from 'styled-components';
import media from './queries';

const Badge = styled.img`
  height: 10rem;
  width: 10rem;
  display: block;
  border-radius: 100%;
  border: 1px solid white;
  margin: 0 auto;
  ${media.ten`
    margin: ${props =>
      props.margin === 'right' ? '0 0 0 auto;' : '0 0 auto 0'}
  `}
`;

export default Badge;
