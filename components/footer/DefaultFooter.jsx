import Link from "next/link";
import Footer from ".//Footer";


const DefaultFooter = () => {
  return (
    <div className="footer-style-ten theme-basic-footer zn2 position-relative">
    <div className="container">
      <div className="inner-wrapper">
        <div className="row justify-content-between">
          <div className="col-lg-3 footer-intro mb-40">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo/logo_02.png" alt="logo" width={200} />
              </Link>
            </div>
            <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
            Business 365 provides collection of business suits tailored for all kinds of business requirements.
            </p>
            <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
              © 2018 - {new Date().getFullYear()}{" "}
              Business Three Six Five
            </p>
          </div>
          <Footer />
        </div>
      </div>
      {/* /.inner-wrapper */}
    </div>
    {/* End .container */}
  </div>
  );
};

export default DefaultFooter;
