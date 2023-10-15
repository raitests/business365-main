import Slider from "react-slick";
import testimonial from "../../../data/testimonial";
import testimonial2 from "../../../data/testimonial2";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 4,
    pauseOnHover: false, // Don't pause on hover
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  var settings1 = {
    dots: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false, // Don't pause on hover
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true, // Add this line to slide to the right
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {testimonial.slice(0, 5).map((item) => (
          <div className="item" key={item.id}>
            <div className="feedback-block-eleven" style={{ marginBottom: '10px' }}>
              <div className="top-header d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="tx-dark m0">{item.title}</h4>
                  <ul className="style-none d-flex rating pt-15">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill" />
                      </li>
                    ))}
                  </ul>
                </div>
                <img src="images/icon/icon_112.svg" alt="" width={50} />
              </div>
              <p className="tx-dark" style={{ fontSize: '17px' }}>{item.text}</p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="cost fw-500 tx-dark fs-20">
                  {item.author},{" "}
                  <span className="opacity-50 fw-normal">{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settings1}>
        {testimonial2.slice(0, 5).map((item) => (
          <div className="item" key={item.id}>
            <div className="feedback-block-eleven" style={{ marginTop: '10px' }}>
              <div className="top-header d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="tx-dark m0">{item.title}</h4>
                  <ul className="style-none d-flex rating pt-15">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill" />
                      </li>
                    ))}
                  </ul>
                </div>
                <img src="images/icon/icon_112.svg" alt="" width={50} />
              </div>
              <p className="tx-dark" style={{ fontSize: '17px' }}>{item.text}</p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="cost fw-500 tx-dark fs-20">
                  {item.author},{" "}
                  <span className="opacity-50 fw-normal">{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
