import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Navbar, Sidebar } from '../components';

const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <>
          <Navbar />
          <Sidebar />
          <Wrapper className='page-100'>
            <section>
              <h1>404</h1>
              <h3>We can't seem to find page you are looking for </h3>
              <Link to='/' className='btn'>
                back home
              </Link>
            </section>
          </Wrapper>
          <Footer />
        </>
      );
    }
    if (error.status === 401) {
      return (
        <>
          <Navbar />
          <Sidebar />
          <Wrapper className='page-100'>
            <section>
              <h1>oh!</h1>
              <h3>You aren't authorized to see this</h3>
              <Link to='/' className='btn'>
                back home
              </Link>
            </section>
          </Wrapper>
          <Footer />
        </>
      );
    }

    if (error.status === 503) {
      return (
        <>
          <Navbar />
          <Sidebar />
          <Wrapper className='page-100'>
            <section>
              <h1>oh!</h1>
              <h3>Looks like our API is down</h3>
              <Link to='/' className='btn'>
                back home
              </Link>
            </section>
          </Wrapper>
          <Footer />
        </>
      );
    }
  }
  return (
    <>
      <Navbar />
      <Sidebar />
      <Wrapper className='page-100'>
        <section>
          <h1>oh!</h1>
          <h3>something went wrong</h3>
          <Link to='/' className='btn'>
            back home
          </Link>
        </section>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
