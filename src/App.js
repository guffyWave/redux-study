import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getEmployeesLisApi } from './components/app-redux/cartSlice';
import {
  fetchProducts,
  doWork,
  doWork2,
  anotherDoWork,
} from './components/app-redux/productAction';
import QoutesComponent from './components/Qoutes/QoutesComponent';
import FruitsComponent from './components/fruits/FruitsComponent';

function App() {
  let isCartVisible = useSelector((state) => state.uiManager.isCartVisible);
  const loadingStatus = useSelector((state) => state.uiManager.status);
  const loadingTitle = useSelector((state) => state.uiManager.title);
  const loadingMessage = useSelector((state) => state.uiManager.message);

  ///products
  const { products, loading, error } = useSelector((state) => state.productsManager.products);

  const dispatch = useDispatch();
  return (
    <Layout>
      <p style={{ background: '#ff0', height: 50 }}>
        {loading}
        Products List
        <ul>
          {products?.map((productItem) => (
            <li>{productItem?.title}</li>
          ))}
        </ul>
      </p>
      {isCartVisible ? <Cart /> : null}
      <Products />
      <button
        onClick={() => {
          // dispatch(getEmployeesLisApi());
          //  getEmployeesLisApi();
          dispatch(fetchProducts());
          //  dispatch(doWork());
          // dispatch(doWork2());
          // dispatch(anotherDoWork());
        }}
      >
        Click ME
      </button>
      <br />
      <br /> <br /> <br />
      <QoutesComponent />
      <br /> <br /> <br /> <br />
      <FruitsComponent />
      <br /> <br /> <br /> <br />
    </Layout>
  );
}

export default App;
