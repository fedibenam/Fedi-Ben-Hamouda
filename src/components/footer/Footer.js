import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import {footerImage} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const currentYear = new Date().getFullYear();
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {footerImage.display && (
          <div className="footer-image-wrap">
            <img
              src={footerImage.image}
              alt={footerImage.alt || "Footer image"}
              className="footer-image"
            />
          </div>
        )}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(`Built with care by Fedi Ben Hamouda © ${currentYear}`)}
        </p>
      </div>
    </Fade>
  );
}
