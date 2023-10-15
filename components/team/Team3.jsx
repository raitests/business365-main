import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Balkrishna",
    role: "Chairperson",
    imgSrc: "/images/team/balkrishna.png",
  },
  {
    id: 2,
    name: "Mr. Bishwabandhu",
    role: "Co-Founder & Executive Officer",
    imgSrc: "/images/team/bishwabandhu.png",
  },
  {
    id: 3,
    name: "Mr. Pravin",
    role: "Co-Founder & Lead Developer",
    imgSrc: "/images/team/pravin.png",
  },
  {
    id: 4,
    name: "Mr. Saroj",
    role: "Head of Marketing (Restro365)",
    imgSrc: "/images/team/saroj.png",
  },
];

const Team3 = () => {
  return (
    <>
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={`${member.id * 100}`}
        >
          <div className="team-block-two mt-40">
            <div className="img-meta position-relative">
              <Image
                width={312}
                height={281}
                src={member.imgSrc}
                alt={member.name}
                className="lazy-img team-img w-100"
              />
              <div className="info text-center">
                <h5 className="tx-dark fs-20 mb-5">{member.name}</h5>
                <div className="tx-dark opacity-75">{member.role}</div>
              </div>
              {/* /.info */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* /.team-block-two */}
        </div>
        /* End .col-3 */
      ))}
    </>
  );
};

export default Team3;
