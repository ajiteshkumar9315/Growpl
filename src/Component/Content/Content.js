import React from 'react'
import './Content.css'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import RegisterForm from '../Register/RegisterForm';
import { useNavigate } from 'react-router-dom'

const Content = () => {
  // const navigate=useNavigate();

  // function handleClick(){
  //   navigate("/RegisterForm");
  // }

  return (
    <>
      <div class="container p-5">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <img src="../img/plant2.webp" class="d-block w-100" alt="..." height="500px" width="500px"/>
        </div>
        <div class="carousel-item">
          <img src="../img/Pots/pot.jpg" class="d-block w-100" alt="..." height="500px" width="500px"/>
        </div>
        <div class="carousel-item">
          <img src="../img/Fertilizers/f1.jpg" class="d-block w-100" alt="..." height="500px" width="500px"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

    {/* section2 */}
    {/* <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/RegisterForm" element={<RegisterForm />}>
          </Route>
      </Routes>
      </Router> */}
      <div className="container con_box m-5 p-3">
        <h3 className="pb-3">Hot Selling Plants & Flowers</h3>
        <a href="/Plants" className="btn btn-outline-success" role="button" >See All </a>
        {/* <Link to="RegisterForm" className="btn btn-outline-success" role="button">See All </Link> */}
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Flowers/marigold.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Marigold(ganda)</h5>
        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
        <p> $ 150</p>
        <button>Add to List</button>
        <button type="submit">Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..\img\Flowers\rose.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/Tulsi.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/cactus.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>

    {/* section2.2 */}
    <div className="container con_box m-5 p-3">
        <h3 className="pb-3">Plants</h3>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/aloevera.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..\img\Plants\cactus.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/kaner.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/moneyplant.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>

      {/* section2.3 */}
      <div className="container con_box m-5 p-3">
        <h3 className="pb-3">Flowers</h3>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Flowers/hibiscus.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..\img\Flowers\jasmin.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Flowers/pansy.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Flowers/marigold.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>

    {/* section2.4 */}
    <div className="container con_box m-5 p-3">
        <h3 className="pb-3">Decorative Plants</h3>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/pinonpics.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..\img\Plants\tp3.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/moneyplant.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plant.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>
    {/* section2.5 */}
    <div className="container con_box m-5 p-3">
        <h3 className="pb-3">Fertilizers/pesticide</h3>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Fertilizers/f1.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Fertilizers/f2.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Fertilizers/f5.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Fertilizers/f7.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>

    {/* section2.6 */}
    <div className="container con_box m-5 p-3">
        <h3 className="pb-3">Flowerpot</h3>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Pots/p4.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Pots/p5.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Pots/p2.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Pots/p3.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Content
