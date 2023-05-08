import React from "react";
import "../component/About.css";
import { useState } from "react";

function About() {
  const [leadMembers, setLeadMembers] = useState([
    {
      name: "Parveen Anand",
      role: "Lead Designer",
      imgSrc:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/3.jpg",
      extraContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.",
      showExtraContent: false,
    },
    {
      name: "Parveen Anand",
      role: "Lead Designer",
      imgSrc:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/3.jpg",
      extraContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.",
      showExtraContent: false,
    },
  ]);

  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Parveen Anand",
      role: "Lead Designer",
      imgSrc:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/3.jpg",
      extraContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.",
      showExtraContent: false,
    },

    {
      name: "Larry Parker",
      role: "Lead Developer",
      imgSrc:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/1.jpg",
      extraContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.",
      showExtraContent: false,
    },

    {
      name: "Parveen Anand",
      role: "Lead Designer",
      imgSrc:
        "https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/3.jpg",
      extraContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.",
      showExtraContent: false,
    },
  ]);

  const handleExtraContent = (index, isLeadMember) => {
    const members = isLeadMember ? leadMembers : teamMembers;
    const updatedMembers = [...members];
    updatedMembers[index].showExtraContent =
      !updatedMembers[index].showExtraContent;
    isLeadMember
      ? setLeadMembers(updatedMembers)
      : setTeamMembers(updatedMembers);
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="text-center">
          <h2 className="section-heading text-uppercase mt-5 mb-5">
            Meet Our Amazing Team
          </h2>

          <h3 className="section-subheading text-muted"></h3>
        </div>
        <div className="row justify-content-center">
          {leadMembers.map((member, index) => (
            <div className="col-lg-4 mt-5" key={index}>
              <div className="team-member">
                <img
                  className="mx-auto"
                  src={member.imgSrc}
                  alt={member.name}
                />
                <h4>{member.name}</h4>
                <p className="text-muted">{member.role}</p>
                <a
                  className="read-more-link"
                  style={{
                    textDecoration: "none",
                    color: "darkblue",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={() => handleExtraContent(index, true)}
                >
                  <p>{member.showExtraContent ? "Learn Less" : "Learn More"}</p>
                </a>
                {member.showExtraContent && (
                  <div className="extra-content">
                    <p className="extra-content">{member.extraContent}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 mt-5" key={index}>
              <div className="team-member">
                <img
                  className="mx-auto"
                  src={member.imgSrc}
                  alt={member.name}
                />
                <h4>{member.name}</h4>
                <p className="text-muted">{member.role}</p>
                <a
                  className="read-more-link"
                  style={{
                    textDecoration: "none",
                    color: "darkblue",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={() => handleExtraContent(index, false)}
                >
                  <p>{member.showExtraContent ? "Learn Less" : "Learn More"}</p>
                </a>
                {member.showExtraContent && (
                  <div className="extra-content">
                    <p className="extra-content">{member.extraContent}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
