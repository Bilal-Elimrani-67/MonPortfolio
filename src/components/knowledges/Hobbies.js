import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRunning,
  faHiking,
  faDumbbell,
  faEarth,
  faBiking,
} from "@fortawesome/free-solid-svg-icons";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hoby">
          <FontAwesomeIcon icon={faBiking}></FontAwesomeIcon> Cyclisme
        </li>
        <li className="hoby">
          <FontAwesomeIcon icon={faHiking}></FontAwesomeIcon> Randonnée
        </li>

        <li className="hoby">
          <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Musculation &
          Fitness
        </li>
        <li className="hoby">
          <FontAwesomeIcon icon={faEarth}></FontAwesomeIcon> Voyage
          <span></span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
