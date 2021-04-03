import React from "react";
import "./aboutme.css";
import { Footer } from "../footer";

export function AboutMe() {
  return (
    <>
      <h2 className="aboutme_h2">Contact and About</h2>
      <div className="AboutMe_container">
        <div className="AboutMe_contact">
          <h4>Connect with me:</h4>
          <a href="https://www.linkedin.com/">
            <img
              className="AboutMeThumbnail"
              src={`${process.env.PUBLIC_URL}/assets/linkedInIcon.png`}
              alt="linkedinLogo"
            />
          </a>
        </div>
        <div className="AboutMe_contact">
          <h4>View My Public Repos:</h4>
          <a href="https://github.com/">
            <img className="AboutMeThumbnail" src={`${process.env.PUBLIC_URL}/assets/GitHub.png`} alt="GitHubLogo" />
          </a>
        </div>
        <div className="AboutMe_contact">
          <h4>Contact me:</h4>
          <a href="mailto:email@email.com">
            <img className="AboutMeThumbnail" src={`${process.env.PUBLIC_URL}/assets/Gmail-logo.png`} alt="Email" />
          </a>
        </div>
      </div>
      <div className="AboutMe_container">
        <div>
          <h4>Brief Introduction</h4>
          <hr className="AboutMe_hr" />
          <p>
            About Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque in lectus vel
            malesuada. Curabitur eget dui facilisis risus maximus tempor. Quisque dictum quis elit id condimentum.
            Vivamus egestas ultricies neque, in sagittis nisl. Etiam interdum aliquam elit, eget ullamcorper neque
            cursus ut. Integer in urna at nibh gravida scelerisque sit amet ac enim. Curabitur ut tortor at arcu
            tristique hendrerit et at dui. Quisque et efficitur nunc, eu finibus metus. Ut ac mollis augue. Nulla sit
            amet velit placerat, vulputate nisl a, suscipit quam. Nulla orci orci, vehicula sit amet enim non, congue
            aliquam justo. Vestibulum sollicitudin dolor ac justo cursus tempus. Cras dictum tristique lobortis. Donec
            nec ante auctor, vehicula neque et, vehicula dolor. Nam id eleifend diam. Fusce congue magna a odio ultrices
            pellentesque. Donec vel porta lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam
            erat volutpat. Ut sit amet orci consectetur, lacinia massa eu, fermentum nisl. Ut congue quam at orci
            fermentum dictum. Sed efficitur ornare tempus. Duis quis sem ac nibh tincidunt porttitor consectetur non
            est. Curabitur tempus velit et erat luctus accumsan. Fusce lobortis nulla nec nisl sagittis ultricies.
          </p>
        </div>
      </div>
      <div className="AboutMe_container">
        <div>
          <h4>Long Term Goals</h4>
          <hr className="AboutMe_hr" />
          <p>
            About Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque in lectus vel
            malesuada. Curabitur eget dui facilisis risus maximus tempor. Quisque dictum quis elit id condimentum.
            Vivamus egestas ultricies neque, in sagittis nisl. Etiam interdum aliquam elit, eget ullamcorper neque
            cursus ut. Integer in urna at nibh gravida scelerisque sit amet ac enim. Curabitur ut tortor at arcu
            tristique hendrerit et at dui. Quisque et efficitur nunc, eu finibus metus. Ut ac mollis augue. Nulla sit
            amet velit placerat, vulputate nisl a, suscipit quam.
          </p>
        </div>
      </div>
      <Footer back="/workexp" />
    </>
  );
}
