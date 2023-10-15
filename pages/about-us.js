import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Faq from "../components/services/Faq";
import Testimonial from "../components/home-page/home-1/Testimonial";
import Team3 from "../components/team/Team3";
import Link from "next/link";
import VideoBlock from "../components/about/VideoBlock";

const AboutUsV1 = () => {
  const features = [
    { text: "Amazing communication." },
    { text: "Best trending designing experience." },
    { text: "Email & Live chat." },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="About Us" />

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
              <div className="title-style-five mb-65 md-mb-40">
                <h2 className="main-title fw-500 text-center tx-dark">
                  About Business 365
                </h2>
              </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 ms-auto">
                <p className="text-lg text-center tx-dark">
                Business 365 is a leading software company renowned for its innovative and robust Enterprise Resource Planning (ERP) solutions. With a commitment to excellence, we design software that integrates various business processes, enabling organizations to operate more efficiently and make data-driven decisions. Our ERP solutions are tailored to meet the unique needs of diverse industries, providing a seamless experience that enhances collaboration, automates workflows, and ensures compliance with industry standards. Leveraging cutting-edge technology and a customer-centric approach, Business 365 empowers businesses to thrive in a competitive landscape, fostering growth and success.
                </p>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* <!-- 
			=============================================
				Feature Section Fifty Two
			============================================== 
			--> */}
      <VideoBlock />

      {/* <!-- /.fancy-feature-fiftyTwo --> */}

      {/*
			=====================================================
				Team Section Two
			=====================================================
			*/}
      <div className="team-section-two position-relative pt-100 lg-pt-120">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row align-items-center">
                <div className="title-style-six text-center pb-40 lg-pb-20 md-pb-10">
                  <h2 className="main-title fw-500 tx-dark">Our Team</h2>
                  <p className="cr-text text-center text-lg tx-dark" data-aos="fade-up">
              Our committed team members are powering Biz365</p>
                </div>
            </div>
            {/* /.row */}
            <div className="row">
              <Team3 />
            </div>
            {/* /.row */}
          </div>
          {/* /.wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.team-section-two */}

      {/*
			=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
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
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <h2 className="main-title fw-500 tx-dark">
                    Biz365 Solutions
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  Do you have questions?<br />  Reach out to us with a message for prompt assistance and support. We&apos;re here to help you.
                </p>
                <div className="btn-eighteen position-relative d-inline-block tx-dark">
                  <Link href="/contact" className="fw-500 tran3s">
                    More About solution
                    <i className="fa-solid fa-angle-right" />
                  </Link>
                </div>
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default AboutUsV1;
