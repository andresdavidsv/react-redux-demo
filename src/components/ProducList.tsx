import { useSelector, useDispatch } from 'react-redux';
import {
  addProductToCart,
  removeProductFromCart,
  Product,
} from '../reducers/cart/cartSlice';
import { RootState } from '../app/store';

interface ProductsListProps {
  products: Product[];
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const dispatch = useDispatch();

  const { productsList } = useSelector((state: RootState) => state.cart);

  const handleAddOrRemoveProduct = (productId: number) => {
    const product = products.find((product) => product.id === productId);
    if (product === undefined) return;
    if (productsList.find((pdt) => pdt.id === productId)) {
      dispatch(removeProductFromCart(productId));
    } else {
      dispatch(addProductToCart(product));
    }
  };

  return (
    <>
      <h2>Listado de productos</h2>
      <div className="row">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mt-"
            >
              <h4>{product.name}</h4>
              <p>
                <b>Price:</b> {product.price}
              </p>
              <p>
                <b>Category:</b> {product.category}
              </p>
              <button
                className={`btn ${
                  productsList.find((pdt) => pdt.id === product.id)
                    ? 'btn-danger'
                    : 'btn-success'
                }`}
                onClick={() => handleAddOrRemoveProduct(product.id)}
              >
                {productsList.find((pdt) => pdt.id === product.id)
                  ? 'Remove'
                  : 'Add'}{' '}
                to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
