const Block = () => {
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <img
            src="/images/shape/shape_136.svg"
            alt="shape"
            className="lazy-img d-none d-sm-inline-block"
          />
        </div>
        <div className="col-md-7 col-sm-8 wow fadeInDown">
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#FFAE10" }}>300+</h3>
            <p>Customers using our Biz365 to operate business.</p>
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7 wow fadeInDown">
          <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#9650EF" }}>
              10+</h3>
            <p>
              Industries can use our software to boost<br /> their productivity.
            </p>
            <img
              src="/images/shape/shape_138.svg"
              alt="sahpe"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-sm-5 wow fadeInUp">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#00BDE6" }}>
              <span>24/7</span>
            </h3>
            <p>Get Support by expert easily.</p>
          </div>
          {/* /.block-wrapper */}
          <img
            src="/images/shape/shape_137.svg"
            alt="shape"
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
          />
        </div>
      </div>
    </>
  );
};

export default Block;
