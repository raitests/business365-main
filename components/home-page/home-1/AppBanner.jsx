const AppBanner = () => {
  const features = [
    "Daily Sales & Purchase Report",
    "Complete analysis of Business trends",
    "Realtime Financial Report",
  ];

  const buttons = [
    {
      platform: "Google play",
      icon: "images/icon/playstore.svg",
      className: "windows-button",
    },
    {
      platform: "App store",
      icon: "images/icon/apple-black.svg",
      className: "ios-button",
    },
  ];

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one">
            <h2 className="main-title fw-500 tx-dark m0">
              Download <br />Biz365 Application.
            </h2>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
            Get control of your business anywhere, anytime with Biz365
          </p>
          <ul className="style-none list-item">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {/* End list */}

          <div className="d-sm-flex align-items-center platform-button-group-three mt-55 lg-mt-30">
            {buttons.map((button, index) => (
              <a
                href="#"
                className={`d-flex align-items-center ${button.className}`}
                key={index}
              >
                <img src={button.icon} alt="" className="lazy-img icon" />
                <div>
                  <span>Get it on</span>
                  <strong>{button.platform}</strong>
                </div>
              </a>
            ))}
          </div>
          {/* /.platform-button-group-three */}
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6 wow fadeInRight">
        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
          <img
            src="images/media/img_57.png"
            alt=""
            className="lazy-img main-img ms-auto"
          />
          <img
            src="images/media/img_56.png"
            alt=""
            className="lazy-img screen-two"
          />
          <img
            src="images/shape/shape_139.svg"
            alt=""
            className="lazy-img shapes shape-one"
          />
          <img
            src="images/shape/shape_140.svg"
            alt=""
            className="lazy-img shapes shape-two"
          />
        </div>{" "}
        {/* /.illustration-holder */}
      </div>
    </div>
  );
};

export default AppBanner;
