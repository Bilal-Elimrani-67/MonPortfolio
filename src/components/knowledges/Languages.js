import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "HTML/CSS", xp: 1.8 },
      { id: 2, value: "JS/React", xp: 1 },
    ],
    frameworks: [
      { id: 3, value: "Figma", xp: 0.5 },

      { id: 3, value: "GIT", xp: 1.8 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          frameworks={frameworks}
          className="frameworksDisplay"
          title="Logiciels"
        />
      </div>
    );
  }
}

export default Languages;
