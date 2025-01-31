import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
<nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid ">
    <Link class="navbar-brand text-white" to="/">Start Framework</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <Link class="nav-link active text-white" to="about">about</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link text-white" to="portfolio">Portfolio</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link text-white" to="contact">contact</Link>
        </li>
   
      </ul>
     
    </div>
  </div>
</nav>
        </>
    )
}
