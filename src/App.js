import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/' element={<ProductListing/>} />

          <Route exact path='/product/:productId' element={<ProductDetails/>} />

            
            
        
        </Routes>
      </Router>
      <Header/>
    </div>
  );
}

export default App;
