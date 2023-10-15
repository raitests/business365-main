import Image from "next/image";
import React from "react";

const Hero1 = () => {
  const options = [
    { value: 0, display: "Select insurance type.." },
    { value: 1, display: "Life Home" },
    { value: 2, display: "Health insurance" },
    { value: 3, display: "Property insurance" },
    { value: 4, display: "Motor insurance" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-500 tx-dark">
              <span>Business 365</span>
              <br /> Tailoring Success for Every Business
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Introducing Business Suits for Every Venture.
            </p>
            {/* End form */}

            <div>
              <div
                className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80"
                style={{ color: "#000000" }}
              >
                <img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>Approved by Inland Revenue Department of Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={487}
        height={649}
        src="/images/13.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        layout="intrinsic"
      />
      <Image
        width={537}
        height={658}
        src="/images/12.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        layout="intrinsic"
      />
    </div>
  );
};

export default Hero1;
