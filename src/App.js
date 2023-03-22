import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CartProvider } from './components/CartContext';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage';
import Einkaufskorb from './pages/Einkaufskorb';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fachbuecher from './components/kategorien/Fachbuecher';
import Jugendbuecher from './components/kategorien/Jugendbuecher';
import Neuheiten from './components/kategorien/Neuheiten';
import Kinderbuecher from './components/kategorien/Kinderbuecher';
import SelectedItem from './pages/SelectedItem';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="background-color" />
      <CartProvider>
        <div className='components-container'>
          <div>
            <Header />
          </div>

          <div className="main-container">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/bücher/fachbücher" element={<Fachbuecher />} />
              <Route path="/bücher/jugendbücher" element={<Jugendbuecher />} />
              <Route path="/bücher/neuheiten" element={<Neuheiten />} />
              <Route path="/bücher/kinderbücher" element={<Kinderbuecher />} />
              <Route
                path="/bücher/kinderbücher/:name"
                element={<SelectedItem />}
              />
              <Route path="/einkaufskorb" element={<Einkaufskorb />} />
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
