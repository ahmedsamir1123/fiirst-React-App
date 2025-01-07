import React from 'react'
import logo from "../../assets/image/avataaars.svg"

export default function Home() {
  return (
    <>
      <section className='home greenbg d-flex justifay-content-center'>

        <div className='mx-auto text-center text-white '>
          <img src={logo} className='w-100 ' />
          <h2>start Framework</h2>
          <div className='container  mb-3'>
            <div className="row">
              <div className="col-md-4">
                <div className='line'></div>

              </div>
              <div className="col-md-4 position-relative">

                <i class="fa-solid fa-star position-absolute top-0 "></i>


              </div><div className="col-md-4">
                <div className='line'></div>

              </div>
            </div>
          </div>

          <p>Graphic Artist - Web Designer - Illustrator</p>

        </div>

      </section>
    </>
  )
}
