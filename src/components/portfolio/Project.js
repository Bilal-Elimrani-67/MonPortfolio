import React, { Component } from "react";

class Project extends Component {
  render() {
    console.log(this.props);
    let { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
