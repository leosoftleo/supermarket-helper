import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import fetchOnlinePriceWatch from './controllers/fetchOnlinePriceWatch';
import { updateProductData } from './actions/productDataActions';
import NavBar from './components/NavBar/NavBar';
import { Routes } from './Routes';
import { sortByName } from './helper/productData/productDataHelper';

function App() {
  const dispatch = useDispatch();

  // fetch product data and update state
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOnlinePriceWatch();
      dispatch(updateProductData(sortByName(data)));
    }
    fetchData();
  }, [dispatch]);

  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <NavBar />
          <Routes />
        </div>
      </DndProvider>
    </Router>
  );
}

export default App;
