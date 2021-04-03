import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export function Card({ title, years, description, skills, thumbnail }) {
  return (
    <>
      <div className="CardContainer">
        <div className="Card_titleContain">
          <div className="Card_titleLeft">
            <h2 className="Card_title">{title}</h2>
            <div className="Card_years">{years}</div>
          </div>
          <div className="Card_imgContain">
            {thumbnail ? (
              <Link to={`/cert/${thumbnail}`}>
                <img
                  className="Card_Img"
                  src={`${process.env.PUBLIC_URL}/assets/${thumbnail}`}
                  alt="thumbnail of cert"
                />
              </Link>
            ) : null}
          </div>
        </div>

        <div className="Card_descContain">
          <h4 className="Card_descH4">Description:</h4>
          <hr className="Card_hr" />
          <p className="Card_descP">{description}</p>
        </div>
        <div className="Card_skillContain">
          <h4 className="Card_skillsH4">Skills:</h4>
          <hr className="Card_hr" />
          <ul className="Card_skillsList">
            {skills.map((skill, index) => {
              return (
                <li className="Card_skillItem" key={index}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
