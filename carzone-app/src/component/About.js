import React from "react";
import "../component/About.css";
import { useState } from "react";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function About() {
  const [leadMembers, setLeadMembers] = useState([
    {
      name: "Fahmi Aldairi",
      role: "Scurm Master",
      imgSrc: 'https://cdn.discordapp.com/attachments/1103605090721472583/1105115652802478192/IMG_20230131_061654.jpg',
      extraContent:
        "Civil Engineering",
      showExtraContent: false,
    },
    {
      name: "Ahmad Abughaush",
      role: "Product Onwer",
      imgSrc: 'https://cdn.discordapp.com/attachments/1103605039345434637/1105118471597076541/ahmad.jpg',
      extraContent:
        "Electrical Engineering",
      showExtraContent: false,
    },
  ]);

  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Amani Zyoud",
      role: "Team Member",
      imgSrc: 'https://media.discordapp.net/attachments/1088354284460056587/1105120255539429449/1675084461337.jpg?width=490&height=669',
      extraContent:
        "Computer Engineering",
      showExtraContent: false,
    },

    {
      name: "Razan Aboushi",
      role: "Team Member",
      imgSrc: 'https://cdn.discordapp.com/attachments/1080409954923593773/1105116319298375680/MyImage.jpg',
      extraContent:
        "Mangement Information System",
      showExtraContent: false,
    },

    {
      name: "Asma Rasheed",
      role: "Team Member",
      imgSrc:
        'https://media.discordapp.net/attachments/1087337773725401109/1105118741873831987/329367558_197682316280856_6511780600509055397_n.jpg?width=669&height=669',
      extraContent:
        "Physics",
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
      
<div className="d-flex m-5">
<Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="dark" href="/">
            <h5 className="text-dark">Home</h5>
          </Link>
          <Typography color="text.primary"> <h5 className="text-dark">About us</h5></Typography>
        </Breadcrumbs>
</div>
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
