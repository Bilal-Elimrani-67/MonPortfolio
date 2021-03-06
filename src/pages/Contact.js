import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact ">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Strasbourg</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0770029500">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié");
                  }}
                >
                  {" "}
                  07 70 02 95 00
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="bilal.elimrani@icloud.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié");
                  }}
                >
                  {" "}
                  bilal.elimrani@icloud.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/belimrani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Bilal-Elimrani-67?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/BilalElim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/bilal.elim/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Instagram</h4>
              <i className="fab fa-instagram"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
