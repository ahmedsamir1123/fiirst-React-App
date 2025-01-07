import React from 'react'

export default function About() {
  return (
    <>
      <section className='about greenbg d-flex justifay-content-center text-center text-white '>
        <div className='mx-auto'>
          <h1>about component</h1>

          <div className='container  mb-3 w-25'>
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

            
          <div className="container m-5">
            <div className="row">

              <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

              </div>
              <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div></div>
        </div>

      </section>
    </>
  )
}
