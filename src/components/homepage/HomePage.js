import React from "react";
import "./homepage.css";
import { Footer } from "../footer";
export function HomePage() {
  const skillsHomePage = [
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
    "PlaceHolder",
  ];
  return (
    <>
      <div className="HomePage_card">
        <div className="HomePage_titleContain">
          <img
            className="HomePage_profileImg"
            src={`${process.env.PUBLIC_URL}/assets/profilePic.jpeg`}
            alt="profilepic"
          />
          <div className="HomePage_titleInfo">
            <h3>Junior Full Stack Developer for Hire</h3>

            <h3>Some Persons FullName</h3>
            <h4>Date Available for Hire</h4>
            <hr className="HomePage_hr" />
            <div className="HomePage_contactInfoContainer">
              <div className="HomePage_contact">
                <a href="https://www.linkedin.com/">
                  <img
                    className="HomePageThumbnail"
                    src={`${process.env.PUBLIC_URL}/assets/linkedInIcon.png`}
                    alt="linkedinLogo"
                  />
                </a>
              </div>
              <div className="HomePage_contact">
                <a href="https://github.com/">
                  <img
                    className="HomePageThumbnail"
                    src={`${process.env.PUBLIC_URL}/assets/GitHub.png`}
                    alt="GitHubLogo"
                  />
                </a>
              </div>
              <div className="HomePage_contact">
                <a href="mailto:email@email.com">
                  <img
                    className="HomePageThumbnail"
                    src={`${process.env.PUBLIC_URL}/assets/Gmail-logo.png`}
                    alt="Email"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="HomePage_hr" />
        <div>
          <ul className="HomePage_skillsOverview">
            {skillsHomePage.map((skill, index) => {
              return (
                <li className="HomePage_skillItem" key={index}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer forward="/education" />
    </>
  );
}
