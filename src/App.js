import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from "./components/Headers";
import Footers from "./components/Footers";
import ProductDetails from "./components/ProductDetails";
import AddProducts from "./admin/AddProduct";



function App() {
  return (
    <Router>
      <Headers/>
          <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/about" element = {<About/>}/>
              <Route path = "/contact" element = {<Contact/>}/>
              <Route path = "/services" element = {<Services/>}/>
              <Route path = "/admin/product/add" element = {<AddProducts/>}/>
          </Routes>
      <Footers/>
    </Router>
  );
}

export default App;
