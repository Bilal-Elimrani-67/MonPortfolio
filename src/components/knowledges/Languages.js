import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "CSS,SASS", xp: 1.8 },
      { id: 2, value: "JavaScript", xp: 1 },
      { id: 3, value: "Figma", xp: 0.5 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.8 },
      { id: 2, value: "Bootstrap", xp: 1 },
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
          title="languages & Editeurs"
        />
        <ProgressBar
          frameworks={frameworks}
          className="frameworksDisplay"
          title="frameworks, bibliothèques & logiciels "
        />
      </div>
    );
  }
}

export default Languages;
