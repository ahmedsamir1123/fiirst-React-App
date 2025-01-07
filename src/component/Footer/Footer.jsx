import React from 'react'
export default function Footer() {
    return (
        <>
            <section className='footer p-5'>
                <div className="container">
                    <div className="row text-white text-center">
                        <div className="col-md-4">
                            <h1>LOCATION</h1>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4">
                            <h1>AROUND THE WEB</h1>
                            <div>
                                <i className='border border-1 m-1 p-2 rounded-circle'><i class="fa-brands fa-facebook"></i></i>
                                <i className='border border-1 m-1 p-2 rounded-circle'><i class="fa-brands fa-twitter"></i></i>
                                <i className='border border-1 m-1 p-2 rounded-circle'><i class="fa-brands fa-linkedin"></i></i>
                                <i className='border border-1 m-1 p-2 rounded-circle'><i class="fa-solid fa-globe"></i></i>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <h1>ABOUT FREELANCER</h1>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>

                    </div>
                </div>

            </section>
            <section className='copyRight text-center text-white'>
                <p>Copyright © Your Website 2021</p>

            </section>
        </>
    )
}
