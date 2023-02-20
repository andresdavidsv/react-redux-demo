import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fakeApi from '../api/fakeApi';

import { RootState } from '../app/store';
import { unSetUser } from '../reducers/user/userSlice';
import { Product } from '../reducers/product/productSlice';

import { ProductsList } from '../components/ProducList';
import { Search } from '../components/SearchComponent';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const user = useSelector((state: RootState) => state.user);
  const searchQuery = useSelector(
    (state: RootState) => state.product.searchQuery
  );

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fakeApi.get('/products');
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    dispatch(unSetUser());
    navigate('/');
  };

  return (
    <>
      <h2>Home</h2>
      <p>
        Welcome {user.fullName} / {user.email}
      </p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Log out
      </button>
      <hr />
      <Search />
      <hr />
      <ProductsList products={filteredProducts} />
    </>
  );
};
