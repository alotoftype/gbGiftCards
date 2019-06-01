import React from "react";

import '../styles/main.scss';
import Logo from '../assets/svg/gb-logo.svg';
import Carousel from '../components/carousel';
import Img1 from '../images/section-1.jpg';
import Img2 from '../images/section-2.jpg';
import Img3 from '../images/section3.jpg';
 //import Layout from '../components/layout';



const IndexPage = () => (
<>

  <header>
  <section className="important-nav">
  <ul className="left">
    <li><a href="/">about</a></li>
     <li> <a href="/">Corporate Gifts</a></li>
      <li><a href="/">Customer</a></li>
  </ul>
  <div className="promo">
    <p><a href="/">$15 Off First 3 Orders</a></p>
  </div>
  </section>
  <section className="main-nav">
  <Logo className="logo" />
  <nav>
    <ul>
      <li>Popular Now</li>
      <li>Top Gifts</li>
      <li>sweets</li>
    </ul>
  </nav>
  </section>
  
  </header>
  
  <main>
  <Carousel/>
  <div className="container-flex">
  <section><img src={Img1} alt="" className="fill"/> </section>
  <section><img src={Img2} alt=""/></section>
  <section><img src={Img3} alt=""/></section>
    </div>
  </main>
  <footer>
    this is my footer
  </footer>

</>
)



export default IndexPage
