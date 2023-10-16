import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};
const sliderImageUrl = [
  {
    url: "https://cdn.pixabay.com/photo/2021/11/20/05/45/website-mockup-6810925_1280.png",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_1280.png",
  },
  {
    url: "https://cdn.pixabay.com/photo/2021/07/01/11/31/youtube-6379150_1280.png",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-devices-2017980_1280.png",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_1280.png",
  },
];
const PortfolioSlider = () => {
  return (
    <div className="pt-90 pb-60 ">
      <h3>Featured</h3>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="product" />
            </div>
          );
        })}
      </Carousel>
      <Link href="/contact" className="d-flex justify-content-center mt-30">
        <button className="btn btn-dark btn-group-lg ">Discover more</button>
      </Link>
    </div>
  );
};
export default PortfolioSlider;
