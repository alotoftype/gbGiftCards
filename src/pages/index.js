import React from "react";

import '../styles/main.scss';
import Carousel from '../components/carousel';
import Img1 from '../images/section-1.jpg';
import Img2 from '../images/section-2.jpg';
import Img3 from '../images/section3.jpg';
import Header from '../components/newHeader';
import Footer from '../components/newFooter';
 //import Layout from '../components/layout';



const IndexPage = () => (
<>

  
  <Header/>
  <main>
  <Carousel/>
  <div className="container-flex">
  <section><img src={Img1} alt="" className="fill"/> </section>
  <section><img src={Img2} alt=""className="fill"/></section>
  <section><img src={Img3} alt=""className="fill"/></section>
    </div>
    
  </main>
<Footer/>

</>
)



export default IndexPage
