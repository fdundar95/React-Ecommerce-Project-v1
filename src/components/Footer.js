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
    color: var(--clr-primary-10);
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
  // pattern
  --u: 4vmin;
  --c1: var(--clr-primary-1);
  --c2: var(--clr-primary-2);
  --c3: var(--clr-primary-3);
  --gp: 50% / calc(var(--u) * 5) calc(var(--u) * 10);
  --bp: calc(var(--u) * -2.5) calc(var(--u) * -5);
  --bg: radial-gradient(circle at 50% 25%, var(--c2) 15%, #fff0 30% 100%)
      var(--gp),
    conic-gradient(from 270deg at 34% 46%, var(--c2) 0 12.5%, #fff0 0 100%)
      var(--gp),
    conic-gradient(from 45deg at 66% 46%, var(--c2) 0 12.5%, #fff0 0 100%)
      var(--gp),
    conic-gradient(from 180deg at 50% 80%, var(--c2) 0 12.5%, #fff0 0 100%)
      var(--gp),
    conic-gradient(from 135deg at 50% 80%, var(--c2) 0 12.5%, #fff0 0 100%)
      var(--gp),
    conic-gradient(from 0deg at 0% 20%, var(--c2) 0 12.5%, #fff0 0 100%)
      var(--gp),
    conic-gradient(from -45deg at 100% 20%, var(--c2) 0 12.5%, #fff0 0 100%)
      var(--gp),
    linear-gradient(
        180deg,
        var(--c2) 0 4.5%,
        #fff0 0 45.25%,
        var(--c2) 0 50%,
        #fff0 0% 100%
      )
      var(--gp),
    radial-gradient(
        circle at 50% 25%,
        #fff0 0 25%,
        var(--c2) 26% 32%,
        #fff0 0 100%
      )
      var(--gp),
    linear-gradient(165deg, var(--c3) 15%, var(--c1) 44%, #fff0 0 100%)
      var(--gp),
    linear-gradient(180deg, var(--c1) 50%, #fff0 0 100%) var(--gp);
  background: var(--bg), var(--bg);
  background-position: var(--bp), var(--bp), var(--bp), var(--bp), var(--bp),
    var(--bp), var(--bp), var(--bp), var(--bp), var(--bp), var(--bp), 0 0, 0 0,
    0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
`;

export default Footer;
