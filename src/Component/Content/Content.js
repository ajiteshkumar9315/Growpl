import React from 'react'
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faIndianRupeeSign, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
// import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer';

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
  <br />

    {/* section2 */}
      <div className="container con_box m-6 p-3">
        <h3 className="pb-4">Hot Selling Plants & Flowers</h3>
        <button type="button" class="btn con_btn_see1 fw-bold">See all <FontAwesomeIcon icon={faGreaterThan} size="sm" style={{color: "#030303",}} /></button>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Flowers/marigold.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..\img\Flowers\rose.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Rose(Gulab)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/Tulsi.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Tulsi(Tulsi)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/cactus.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Cactus(Cactus)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
</div>
    </div>
    <br />
    <br />

    {/* section2.2 */}
    <div className="container con_box m-6 p-3">
        <h3 className="pb-4">Plants</h3>
        <button type="button" class="btn con_btn_see2 fw-bold">See all <FontAwesomeIcon icon={faGreaterThan} size="sm" style={{color: "#030303",}} /></button>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/aloevera.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Aloevera(Aloevera)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..\img\Plants\cactus.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Cactus(Cactus)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/kaner.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">kaner(kaner)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/moneyplant.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">MoneyPlant(MoneyPlant)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
</div>
    </div>
    <br />
    <br />

      {/* section2.3 */}
      <div className="container con_box m-6 p-3">
        <h3 className="pb-4">Flowers</h3>
        <button type="button" class="btn con_btn_see3 fw-bold">See all <FontAwesomeIcon icon={faGreaterThan} size="sm" style={{color: "#030303",}} /></button>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Flowers/hibiscus.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Hibiscus(Adhul)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..\img\Flowers\jasmin.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Jasmin(Chameli)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Flowers/pansy.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Pansy(Pansy)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Flowers/marigold.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
</div>
    </div>
    <br />
    <br />

    {/* section2.4 */}
    <div className="container con_box m-6 p-3">
        <h3 className="pb-4">Decorative Plants</h3>
        <button type="button" class="btn con_btn_see4 fw-bold">See all <FontAwesomeIcon icon={faGreaterThan} size="sm" style={{color: "#030303",}} /></button>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/pinonpics.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Pinonpics(Pinonpics)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..\img\Plants\tp3.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Pam(Pam)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plants/moneyplant.webp" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Moneyplant(Moneyplant)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Plant.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
</div>
    </div>
    <br />
    <br />

    {/* section2.5 */}
    <div className="container con_box m-6 p-3">
        <h3 className="pb-4">Fertilizers/pesticide</h3>
        <button type="button" class="btn con_btn_see5 fw-bold">See all <FontAwesomeIcon icon={faGreaterThan} size="sm" style={{color: "#030303",}} /></button>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Fertilizers/f1.jpg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Fertilizers/f2.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Fertilizers/f5.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Fertilizers/f7.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
</div>
    </div>
    <br />
    <br />

    {/* section2.6 */}
    <div className="container con_box m-6 p-3">
        <h3 className="pb-4">Flowerpot</h3>
        <button type="button" class="btn con_btn_see6 fw-bold">See all <FontAwesomeIcon icon={faGreaterThan} size="sm" style={{color: "#030303",}} /></button>
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="../img/Pots/p4.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Pots/p5.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Pots/p2.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="../img/Pots/p3.jpeg" className="card-img-top img1" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Marigold(ganda)</h5>
        <p><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{color: "#141415",}} />  150</p>
        {/* <button>Add to List</button> */}
        <FontAwesomeIcon icon={faBookmark} pull="left" size="lg"  className='con_icon'/>
        <button type="submit" className='con_btn'>Buy</button>
      </div>
    </div>
  </div>
</div>
    </div>
    <br />
    <br />
    <Footer/>
    </>
  )
}

export default Content
