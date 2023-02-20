import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

// Components
import { Index } from './pages';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

export const App = () => {
  const { totalCount } = useSelector((state: RootState) => state.cart);
  const { token } = useSelector((state: RootState) => state.user);

  return (
    <div className="container">
      <div className="d-flex py-4">
        {token === '' ? (
          <Link className="btn btn-info mx-2" to="/">
            Login
          </Link>
        ) : (
          <Link className="btn btn-info mx-2" to="/home">
            Home
          </Link>
        )}
        {token !== '' && (
          <div className="ms-auto">
            <Link className="btn btn-primary position-relative" to="/cart">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalCount}
                <span className="visually-hidden">products in cart</span>
              </span>
            </Link>
          </div>
        )}
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Index />} />
        {token !== '' && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </>
        )}
      </Routes>
    </div>
  );
};
