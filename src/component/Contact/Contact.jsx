import React from 'react'

export default function Contact() {
  return (
    <>
      <section className=' p-5 '>

        <h1 className='text-center'>conatct section</h1>

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

        <form className='p-5 w-50 mx-auto'>
          <input type="text" className='form-control mb-5' placeholder="UserName" />
          <input type="text" className='form-control mb-5 ' placeholder="UserAge" />
          <input type="email" className='form-control mb-5' placeholder="UserEmail" />
          <input type="password" className='form-control mb-4' placeholder="UserPassword" />
          <button type='button' className='btn btn-success  '>send message</button>

        </form>

      </section>

    </>
  )
}
