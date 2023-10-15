import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import PortfolioTopTitle from "../components/portfolio/PortfolioTopTitle";
import PortfolioGallery1 from "../components/portfolio/PortfolioGallery1";
import Link from "next/link";

const PortfolioV1 = () => {
  return (
    <>
      <Seo pageTitle="Portfolio" />
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
      <PortfolioTopTitle />

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
      <PortfolioGallery1 />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV1;
