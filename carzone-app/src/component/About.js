import React from "react";
import "../component/About.css"

const About = () => {
  return (
    <div>
      <>
        {/* Masthead*/}
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading">
              <h1 className="welcome">
                Welcome To <span> Car Zone!</span>{" "}
              </h1>
            </div>
            <p>
              {" "}
              CAR ZONE Is A Platform Designed To Help People and car showrooms
              to Get The Services That Are Required Related to buying, selling,
              and investing in cars by finding the easiest way to find your
              dreams car{" "}
            </p>
            <a
              className="btn btn-primary btn-xl text-uppercase"
              href="#services"
            >
              Tell Me More
            </a>
          </div>
        </header>
        {/* Team*/}
        <section className="page-section bg-white" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Meet Our Amazing Team
              </h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/3.jpg"
                    alt="..."
                  />
                  <h4>Parveen Anand</h4>
                  <p className="text-muted">Lead Designer</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/2.jpg"
                    alt="..."
                  />
                  <h4>Diana Petersen</h4>
                  <p className="text-muted">Lead Marketer</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/1.jpg"
                    alt="..."
                  />
                  <h4>Larry Parker</h4>
                  <p className="text-muted">Lead Developer</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/3.jpg"
                    alt="..."
                  />
                  <h4>Parveen Anand</h4>
                  <p className="text-muted1">Lead Designer</p>
                </div>
              </div>

              <div className="col-lg-3 ">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/2.jpg"
                    alt="..."
                  />
                  <h4>Diana Petersen</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default About;
