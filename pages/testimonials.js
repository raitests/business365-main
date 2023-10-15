import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Testimonial from "../components/home-page/home-1/Testimonial";

const Testimonials = () => {
  return (
    <>
      <Seo pageTitle="Testimonials" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
              <div className="title-style-five text-center mb-65 lg-mb-20">
                <h2 className="main-title fw-500 tx-dark">
                  Client Feedback About us.
                </h2>
              </div>
            </div>
        </div>

        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div className="feedback-section-eleven position-relative pt-10 pb-50 lg-pt-10 lg-pb-50 wow fadeInUp">
        {/* End .container */}
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
            {/* /.feedback_slider_seven */}
          </div>
          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>
      {/* /.feedback-section-eleven */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default Testimonials;
