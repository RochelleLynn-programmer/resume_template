import React from "react";
import "./popup.css";
import { useHistory } from "react-router";

export function PopUp({ match }) {
  const history = useHistory();

  return (
    <>
      <div className="PopUp_container">
        <img className="PopUp_img" src={`${process.env.PUBLIC_URL}/assets/${match.params.id}`} alt="fullsize of cert" />

        <button className="PopUp_button" onClick={() => history.goBack()}>
          Go Back to Education
        </button>
      </div>
    </>
  );
}
