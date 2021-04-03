import React from "react";
import "./footer.css";

export function Footer({ back, forward }) {
  let backAPageLink = "";
  let forwardAPageLink = "";

  if (back) {
    backAPageLink = (
      <a className="Footer_link" href={back}>
        Back
      </a>
    );
  } else {
    backAPageLink = <span className="Footer_notLink">Back</span>;
  }

  if (forward) {
    forwardAPageLink = (
      <a className="Footer_link" href={forward}>
        Forward
      </a>
    );
  } else {
    forwardAPageLink = <span className="Footer_notLink">Forward</span>;
  }
  return (
    <div className="Footer_container">
      <div className="Footer_buttonLinks">
        {backAPageLink}
        <span className="Footer_span">|</span>
        <a className="Footer_link" href="#top">
          Top of Page
        </a>
        <span className="Footer_span">|</span>
        {forwardAPageLink}
      </div>
    </div>
  );
}
