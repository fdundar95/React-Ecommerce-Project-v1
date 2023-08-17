import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from '../components';

const HomeLayout = () => {
  const value = 'some value';

  return (
    <>
      <Navbar />
      <Sidebar />
      <section className='page'>
        <Outlet context={{ value }} />
      </section>
      <Footer />
    </>
  );
};
export default HomeLayout;
