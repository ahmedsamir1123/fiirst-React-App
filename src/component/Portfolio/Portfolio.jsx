import React from 'react'
import poer1 from "../../assets/image/poert1.png"
import poer2 from "../../assets/image/port2.png"
import poer3 from "../../assets/image/port3.png"

export default function Portfolio() {
  return (
    <>
      <section className='text-center'>
        <h1>portfolio component</h1>

        
        <div className='container mb-4 w-25'>
            <div className="row">
              <div className='col-md-1'></div>
              <div className="col-md-4">
                <div className='line bg-black'></div>

              </div>
              <div className="col-md-1 position-relative">

                <i class="fa-solid fa-star position-absolute top-0 "></i>


              </div><div className="col-md-5">
                <div className='line bg-black'></div>

              </div>
            </div>
          </div>
        <div className='contaoner'>
          <div className="row m-2 p-2">
            <div className="col-md-4">

              <img src={poer1} alt="" className='w-75 pb-4' />

            </div>
            <div className="col-md-4">

              <img src={poer2} alt="" className='w-75 pb-4' />

            </div>
            <div className="col-md-4">

              <img src={poer3} alt="" className='w-75 pb-4' />

            </div>
            <div className="col-md-4">

              <img src={poer1} alt="" className='w-75 pb-4' />

            </div>
            <div className="col-md-4">

              <img src={poer2} alt="" className='w-75 pb-4' />

            </div>
            <div className="col-md-4">

              <img src={poer3} alt="" className='w-75 pb-4' />

            </div>
          </div>

        </div>

      </section>

    </>
  )
}
