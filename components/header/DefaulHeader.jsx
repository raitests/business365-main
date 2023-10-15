import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link href="/" className="d-block">
              <img src="/images/logo/logo_01.png" alt="" width={200} />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="/login"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
            >
              <i className="bi bi-person" /> Login
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
