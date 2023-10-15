const accordionItems = [
  {
    id: 1,
    title: "Comprehensive ERP Solutions by Business 365",
    content:
      "Our solutions integrate business processes, enhance efficiency, foster collaboration, automate workflows, and provide data-driven insights tailored to industry needs.",
  },
  {
    id: 2,
    title: "Transforming Business with ERP Excellence",
    content:
      "Business 365's ERP solutions unify operations, streamline management, optimize resources, support growth, and drive success across diverse industries.",
  },
  {
    id: 3,
    title: "ERP Solutions Tailored by Business 365",
    content:
      "Our ERP solutions are designed to enhance collaboration, provide real-time insights, automate tasks, support scalability, and boost overall performance.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 1 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 1 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
