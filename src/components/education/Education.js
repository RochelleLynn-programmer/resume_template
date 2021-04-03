import React from "react";
import { Card } from "../card";
import { Footer } from "../footer";
import "./education.css";
export function Education({ educationList }) {
  return (
    <div className="Education_container">
      <h2 className="education_h2">Education</h2>
      <div>
        {educationList.map(({ title, years, description, skills, thumbnail }, index) => {
          return (
            <Card
              key={index}
              title={title}
              years={years}
              description={description}
              skills={skills}
              thumbnail={thumbnail}
            />
          );
        })}
      </div>
      <Footer back="/" forward="/workexp" />
    </div>
  );
}
