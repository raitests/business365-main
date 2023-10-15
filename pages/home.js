import Link from "next/link";
import Seo from "../components/common/Seo";
import Footer from "../components/footer/Footer";
import DefaulHeader from "../components/header/DefaulHeader";
import AppBanner from "../components/home-page/home-1/AppBanner";
import Banner from "../components/home-page/home-1/Banner";
import Block from "../components/home-page/home-1/Block";
import Blog from "../components/Blog";
import ContactForm from "../components/home-page/home-1/ContactForm";
import Feature from "../components/home-page/home-1/Feature";
import Hero from "../components/home-page/home-1/Hero";
import IntroAbout from "../components/home-page/home-1/IntroAbout";
import Service from "../components/home-page/home-1/Service";
import Testimonial from "../components/home-page/home-1/Testimonial";
import WhyChoose from "../components/home-page/home-1/WhyChoose";
import StickyNavbar from "../components/test/StickyNavbar";

const Home = () => {
  return (
    <>
      <Seo pageTitle="Business 365" />
      {/* <!-- 
      =============================================
			Theme Default Menu
			============================================== 	
      --> */}
      {/* <StickyNavbar /> */}

      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
    --> */}
      <div
        class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2016/10/17/14/31/background-1747792_1280.jpg")`,
        }}
      >
        <div class="mask" style={{ backgroundColor: (0, 0, 0, 0.6) }}>
          <DefaulHeader />
          <Hero />
        </div>
      </div>
      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}
      <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">
            <Feature />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      {/*
			=====================================================
				Feature Section Thirty Five
			=====================================================
			*/}
      <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
        <div className="container" data-aos="fade-up">
          <Banner />
          {/* /.top-banner */}
        </div>
        {/* End .container */}

        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout />
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-thirtyFive */}
      {/* 
			=============================================
				Feature Section Thirty Six
			============================================== 
			*/}
      <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    Discover <br /> Our Business Solutions
                  </h2>
                </div>
                <div className="text-center md-mt-50">
                  <Link
                    href="/portfolio"
                    className="btn-twentyTwo fw-500 tran3s"
                    data-aos="fade-left"
                  >
                    View all Products
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <Service />
            </div>
            {/* /.row */}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySix */}
      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <h2 className="main-title fw-500 tx-dark m0">
                    What makes
                    <br />
                    <span>Biz365</span> the best?
                  </h2>
                </div>
                <WhyChoose />
                {/* /.accordion-style-five */}
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySeven */}
      {/*=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className="feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="feedback_slider_seven">
            <Testimonial />
          </div>

          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>
      {/* /.feedback-section-eleven */}
      {/* =============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner />
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtyEight */}
      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <img
                        src="/images/icon/icon_114.svg"
                        alt="icon"
                        className="lazy-img mb-30"
                      />
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Let’s talk <br /> with sales team.
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                        Our experienced sales team will help you decide which
                        product is best for you by analyzing the pain points of
                        your business.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-two md-mb-40">
                      <ContactForm />
                    </div>
                    {/* /.form-style-two */}
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
              Fill the <br />
              form
            </div>
            <img
              src="/images/shape/shape_90.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <img
              src="/images/shape/shape_91.svg"
              alt="shape"
              className="lazy-img shapes shape-two"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-thirteen */}
      {/* =============================================
		   Blog Section Three
		   ============================================== */}
      <div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">Our Blog</h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
            {/* /.row */}
            <div className="row gx-xxl-5">
              <Blog />
            </div>
            {/* /.row */}
            <div className="text-center xs-mt-40">
              <Link
                href="/blog"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Go to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.blog-section-three */}
      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/images/logo/logo_02.png"
                      alt="logo"
                      width={200}
                    />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Business 365 provides collection of business suits tailored
                  for all kinds of business requirements.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © 2018 - {new Date().getFullYear()} Business Three Six Five
                </p>
              </div>
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
      </div>
      {/* /.footer-style-ten */}
    </>
  );
};

export default Home;
