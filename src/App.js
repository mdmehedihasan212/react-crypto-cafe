import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/About/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import CardDetails from './components/CardDetails/CardDetails';
import BdAddress from './components/Contact/BdAddress';
import UsAddress from './components/Contact/UsAddress';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/coin-details/:id" element={<CardDetails></CardDetails>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          <Route path="bd-address" element={<BdAddress></BdAddress>}></Route>
          <Route path="us-address" element={<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
