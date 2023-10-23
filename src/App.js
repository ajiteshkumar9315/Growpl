import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Content from './Component/Content/Content';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import RegisterForm from './Component/Register/RegisterForm';
import Login from './Component/Login/Login';

function App() {
  return (
    <>
    {/* <Navbar/>
    <Content/>
    <br />
    <Footer/> */}

    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Content/>}>
        </Route>
        <Route exact path="/Login" element={<Login/>}>
        </Route>
        <Route exact path="/RegisterForm" element={<RegisterForm/>}>
        </Route>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/Services" element={<Services />}>
        </Route>
        <Route exact path="/About" element={<About/>}>
        </Route>
      </Routes>
    </Router>
    {/* <Content/>
    <br />
    <Footer/>  */}
    </>
  );
}

export default App;


