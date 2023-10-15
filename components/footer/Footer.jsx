import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Pricing", href: "/pricing" },
        { label: "About us", href: "/about-v1" },
        { label: "Careers", href: "#" },
        { label: "Features", href: "#" },
      ],
    },
    {
      id: 2,
      title: "Services",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Restaurant Management System", href: "/service-details" },
        { label: "Healthcare ERP System", href: "/service-details" },
        { label: "Retail ERP System", href: "/service-details" },
        { label: "Manufacturing ERP System", href: "/service-details" },
      ],
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-35">
          KMC-32, Koteshwor<br />
          Kathmandu, Nepal 44600<br />
          Reg. No: 310174/079/080<br />
          Hotline: +977 980 109 6633<br />
          Email: csd@biz365.org
        </p>
      </div>
    </>
  );
};

export default Footer;
