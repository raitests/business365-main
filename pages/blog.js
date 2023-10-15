import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Blog from "../components/BlogPage";

const GridWithSidebar = () => {
  return (
    <>
      <Seo pageTitle="Blog" />
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
              <div className="title-style-five mb-65 lg-mb-40">
                <h2 className="main-title fw-500 text-center tx-dark">
                  Latest update from Biz365
                </h2>
              </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <div className="row">
                    <Blog />
                  </div>
              </div>
              {/* End .col-lg-8 */}
            </div>
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default GridWithSidebar;
