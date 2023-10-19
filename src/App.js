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
import Footer from './Component/Footer/Footer';
// import RegisterForm from './Component/Register/RegisterForm';
// import Login from './Backend/Views/Login';

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
      <Route exact path="/Home" element={<Home />}>
          </Route>
          <Route exact path="/Services" element={<Services />}>
          </Route>
          <Route exact path="/About" element={<About/>}>
          </Route>
      </Routes>
    </Router>
    <Content/>
    <br />
    <Footer/> 
    </>
  );
}

export default App;

// import './App.css';
// import Navbar from './content/Navbar';

// function App() {
//     return (
//       <>
//       <Navbar/>
//        </>
//     );
//   }

//  export default App;


