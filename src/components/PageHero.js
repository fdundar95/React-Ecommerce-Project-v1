import styled from 'styled-components';
import { Link } from 'react-router-dom';
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home /</Link>
          {product && <Link to={'/products'}>Products /</Link>}
          {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background: var(--clr-primary-8); */

  display: flex;
  align-items: center;
  width: 100%;
  min-height: 20vh;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-4);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  // pattern

  --u: 4vmin;
  --c1: var(--clr-primary-10);
  --c2: var(--clr-primary-9);
  --c3: var(--clr-primary-8);
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

export default PageHero;
