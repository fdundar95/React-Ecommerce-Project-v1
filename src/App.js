import {
  Home,
  Layout,
  Products,
  SingleProduct,
  About,
  Cart,
  Checkout,
  Error,
  Private,
} from './pages';
import { AuthWrapper } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='cart' element={<Cart />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<SingleProduct />} />
            <Route
              path='checkout'
              element={
                <Private>
                  <Checkout />
                </Private>
              }
            />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
};

export default App;
