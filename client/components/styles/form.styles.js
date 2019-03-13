import styled from 'styled-components';

const Form = styled.form`
  padding: 0 2.5vw;
  ${({ theme: { flexin } }) => flexin('space-around', 'center', 'column')};

  label {
    width: 100%;
    margin: 4vh 0;
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
      left: 2.5vw;
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
    width: 80%;
    margin: 0 10%;

    &:not([type='submit']):active + p,
    &:not([type='submit']):focus + p,
    &:not([type='checkbox']):valid + p,
    &[type='checkbox']:checked + label p {
      font-size: 1.75rem;
      font-style: normal;
      top: -2.5vh;
      left: 10%;
      color: ${({ theme: { colors } }) => colors.whitePrimary};
      letter-spacing: 0.75rem;

      &::before,
      &::after {
        content: '';
        width: 1px;
        height: 110%;
        display: inline-block;
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        left: -1vw;
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

      &:hover,
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
`;

export default Form;