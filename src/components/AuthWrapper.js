import { useAuth0 } from '@auth0/auth0-react';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <section className='page'>
        <div className='loading' />
      </section>
    );
  }

  if (error) {
    return (
      <section className='page'>
        <h2>{error.message}</h2>
      </section>
    );
  }

  return children;
};

export default AuthWrapper;
