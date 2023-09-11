import React from 'react'

const Content = () => {
  return (
    <>
      <div class="container">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <img src="../images/fitness1,2.jfif" class="d-block w-100" alt="..." height="500px" width="500px"/><h3 class=" imag">Plants</h3>
        </div>
        <div class="carousel-item">
          <img src="../images/fitness2,1.avif" class="d-block w-100" alt="..." height="500px" width="500px"/><h3 class="imag">Flowerpot</h3>
        </div>
        <div class="carousel-item">
          <img src="../images/fitness2,2.jpg" class="d-block w-100" alt="..." height="500px" width="500px"/><h3 class="imag">Fertilizers/pesticide</h3>
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
      <div className="container">
        <h3>Hot Selling Plants</h3>
    </div>

    {/* section2.2 */}
    <div className="container">
        <h3>Common Plants</h3>
    </div>

    {/* section2.3 */}
    <div className="container">
        <h3>Decorative Plants</h3>
    </div>

    {/* section2.4 */}
    <div className="container">
        <h3>Fertilizers/pesticide</h3>
    </div>

    {/* section2.5 */}
    <div className="container">
        <h3>Flowerpot</h3>
    </div>
    </>
  )
}

export default Content
