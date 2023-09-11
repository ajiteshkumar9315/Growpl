import React from 'react'
import Navbar from '../Component/Navbar/Navbar'

const Plants = () => {
  return (
    <>
      <Navbar/>
      <div>
        {/* section2 */}
        <div className="container">
          <h3>Hot Selling Plants</h3>
        </div>

        {/* section2.2 */}
        <div className="container">
          <h3>Common Plants</h3>
        </div>

                {/* section3 */}
        <div className="container">
            <h3>Herbal Plants</h3>
        </div>

        {/* section4 */}
        <div className="container">
            <h3>Flower Plants</h3>
        </div>

        {/* section5 */}
        <div className="container">
            <h3>Vegetable Plants</h3>
        </div>

        {/* section6 */}
        <div className="container">
            <h3>Fruits Plants</h3>
        </div>
      </div>

    </>
  )
}

export default Plants
