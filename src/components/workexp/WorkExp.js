import React from "react";
import { Footer } from "../footer";
import { Card } from "../card";
import "./workexp.css";

export function WorkExp({ workExpList }) {
  return (
    <>
      <h2 className="workexp_h2">Work Experience</h2>
      <div className="workexpContainer">
        {workExpList.map(({ title, years, description, skills }, index) => {
          return <Card key={index} title={title} years={years} description={description} skills={skills} />;
        })}
      </div>
      <Footer back="/education" forward="/aboutme" />
    </>
  );
}
