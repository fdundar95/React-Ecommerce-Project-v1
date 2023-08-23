import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrapper>
      <h5>&copy; {new Date().getFullYear()}</h5>
      <span> AeonArtifacts </span>
      <h5> All rights reserved </h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    font-family: Kola;
    font-size: 1.3rem;
    color: var(--clr-primary-5);
  }
  h5 {
    font-family: Ranade;
    color: var(--clr-white);
    margin: 0.1rem;
    margin-left: 1rem;
    margin-right: 1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
