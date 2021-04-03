import React from "react";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import "./header.css";

export function Header() {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(4);

  return (
    <>
      <div className="header_header">
        <div className="header_title">
          <h2 className="header_h2">Resume for Rochelle </h2>
          <h4 className="header_h4">Junior Software Engineer</h4>
        </div>
        <div className="header_nav">
          <div className={isOpen ? "visible" : ""} role="menu">
            <a {...itemProps[0]} href="/">
              Home
            </a>
            <a {...itemProps[1]} href="/education">
              Education
            </a>

            <a {...itemProps[2]} href="/workexp">
              Work
            </a>
            <a {...itemProps[3]} href="/aboutme">
              About
            </a>
          </div>
          <button {...buttonProps} className="header_button">
            Navigation
          </button>
        </div>
      </div>
    </>
  );
}
