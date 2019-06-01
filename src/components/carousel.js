import React from "react";
import Flickity from "react-flickity-component";
import Carousel1 from '../images/heroOne.jpg';
import Carousel2 from '../images/heroTwo.jpg';
import Carousel3 from '../images/heroThree.jpg';

const flickityOptions = {
    autoPlay: 1500,
    initialIndex: 1,
    contain: true,
    pageDots:false,
    wrapAround:true,
  }
  
export const Carousel = (props) => (
    
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    > 
      <img src={Carousel1} alt={'first one'}/>
      <img src={Carousel2} alt={'animals'}/>
      <img src={Carousel3} alt={'animals'}/>
    </Flickity>
  )

  export default Carousel;