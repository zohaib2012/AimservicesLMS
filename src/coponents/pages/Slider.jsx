
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'

const Slider = () => {
    
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div>

<Carousel
  swipeable={false}
  draggable={false}
//   showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={2000}
  autoPlay={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

  {/* <div><img  className="w-full h-96"  src="/public/1.jpg" alt="" /></div> */}
  <div><img  className="w-full h-96"  src="/public/WhatsApp Image 2024-12-19 at 12.11.38.jpeg" alt="" /></div>
  <div><img  className="w-full h-96"  src="/public/WhatsApp Image 2024-12-18 at 19.58.58.jpeg" alt="" /></div>
  <div><img  className="w-full h-96"  src="/public/WhatsApp Image 2024-12-20 at 14.25.44.jpeg" alt="" /></div>
  {/* <div><img  className="w-full h-96"  src="/public/WhatsApp Image 2024-12-18 at 20.10.40.jpeg" alt="" /></div> */}
  <div><img  className="w-full h-96"  src="/public/WhatsApp Image 2024-12-19 at 12.04.36.jpeg" alt="" /></div>
  <div><img  className="w-full h-96"  src="/public/WhatsApp Image 2024-12-20 at 12.35.56.jpeg" alt="" /></div>
  <div><img  className="w-full h-96"  src="/public/WhatsApp Image 2024-12-20 at 12.29.59.jpeg" alt="" /></div>
  <div><img  className="w-full h-96"  src="/public/WhatsApp Image 2024-12-20 at 12.53.36.jpeg" alt="" /></div>


</Carousel>;

    </div>
  )
}

export default Slider