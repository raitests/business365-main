const PortfolioTopTitle = () => {
  return (
    <div className="fancy-feature-fiftyOne position-relative mt-200">
      <div className="container">
        <div className="row">
            <h2 className="main-title fw-500 tx-dark" style={{ textAlign: 'center' }}>
                Check out our Products.
            </h2>
        </div>
      </div>
      {/* /.container */}
      <img
        src="/images/shape/shape_172.svg"
        alt="shap"
        className="lazy-img shapes shape-two"
      />
      <img
        src="/images/shape/shape_175.svg"
        alt="shap"
        className="lazy-img shapes shape-three"
      />
    </div>
  );
};

export default PortfolioTopTitle;
