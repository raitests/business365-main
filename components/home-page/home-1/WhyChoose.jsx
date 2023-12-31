const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/support-48.png",
    title: "Support and Training",
    content:
      "Business 365 offers extensive support through 24/7 customer service, online resources, and community forums.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_110.svg",
    title: "Security and Compliance",
    content:
      "Business 365 adheres to stringent security protocols and complies with various industry regulations including data encryption.",
  },
  {
    id: 3,
    icon: "/images/icon/width-48.png",
    title: "Scalability and Flexibility",
    content:
      "Business 365 offers various plans that cater to different business sizes and needs. It allows businesses to add or remove users as needed.",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
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

export default WhyChoose;
