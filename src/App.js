import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/Home" element={<Home />}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/Services" element={<Services/>}>
          </Route>
        
      </Routes>
    </Router>
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

