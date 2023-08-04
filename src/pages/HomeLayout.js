import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
      <Footer />
    </>
  );
};
export default HomeLayout;
