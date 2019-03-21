import styled from 'styled-components';
import media from './queries';

const Form = styled.form`
  padding: 0 2.5vw;
  ${({ theme: { flexin } }) => flexin('space-around', 'center', 'column')};

  .errorMsg {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    font-style: italic;
    ${({ theme: { typo } }) => typo.letterSpacingSecondary}
  }

  label {
    width: 100%;
    margin: 5vh 0;
    position: relative;

    > * {
      ${({ theme: { typo } }) => typo.letterSpacingPrimary}
    }

    p {
      position: absolute;
      font-size: 2rem;
      text-transform: uppercase;
      font-style: italic;
      top: 1.5vh;
      left: 10%;
      color: ${({ theme: { colors } }) => colors.whiteOpaque};
      ${({ theme: { transitions } }) => transitions.main};
      ${({ theme: { typo } }) => typo.letterSpacingPrimary};
    }

    &[for='register'],
    &[for='remember'] {
      color: ${({ theme: { colors } }) => colors.whitePrimary};
      font-style: normal;
      cursor: pointer;

      p {
        text-align: right;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        content: '';
        display: block;
        height: 3rem;
        width: 3rem;
        border: 1px solid ${({ theme: { colors } }) => colors.whitePrimary};
        ${({ theme: { transforms } }) => transforms.whiteFill.rest}
      }
    }
  }

  input {
    color: ${({ theme: { colors } }) => colors.whitePrimary};
    padding: 1vh;
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.whitePrimary};
    font-size: 2.5rem;
    display: block;
    width: 80%;
    margin: 0 auto;
    ${media.seven`
      width: 90%;
    `}
    ${media.four`
      font-size: 2rem;
    `}

    &:not([type='submit']):active + p,
    &:not([type='submit']):focus + p,
    &:not([type='checkbox']):valid + p,
    &[type='checkbox']:checked + label p {
      font-size: 1.75rem;
      font-style: normal;
      top: -2.25rem;
      left: 10%;
      color: ${({ theme: { colors } }) => colors.whitePrimary};
      letter-spacing: 0.75rem;

      &::before {
        content: '';
        width: 1px;
        height: 120%;
        display: inline-block;
        background: white;
        position: absolute;
        top: 0;
        left: -1rem;
      }
    }

    &[type='submit'] {
      border: 1px solid ${({ theme: { colors } }) => colors.whitePrimary};
      padding: 0.75rem 3rem;
      cursor: pointer;
      font-weight: 300;
      text-transform: uppercase;
      width: 50%;
      margin: 3.5vh 0;
      ${({ theme: { typo } }) => typo.letterSpacingPrimary};
      ${({ theme: { transforms } }) => transforms.whiteFill.rest}
      ${media.six`
        padding: .75rem 1rem
      `}

      &:hover,
      &:focus,
      &:active {
        color: ${({ theme: { colors } }) => colors.blackPrimary};
        ${({ theme: { transforms } }) => transforms.whiteFill.active}
      }
    }
    &[type='checkbox'] {
      visibility: hidden;

      &:checked + label::before {
        ${({ theme: { transforms } }) => transforms.whiteFill.active}
      }
    }
  }

  textarea { 
    background: none;
    text-align: center;
    font-size: 2rem;
    width: 60%;
    height: 6rem;
    margin: 0 20%;
    line-height: 1.3;
    ${({ theme: { typo } }) => typo.letterSpacingSecondary}
    color: ${({ theme: { colors } }) => colors.whitePrimary};
  }
`;

export default Form;
