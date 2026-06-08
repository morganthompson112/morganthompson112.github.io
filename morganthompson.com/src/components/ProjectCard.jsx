import "../css/ProjectCard.css";

import React from 'react';

export default function ProjectCard(props) {
  const [display, setDisplay] = React.useState(false);

  function handleLinkClick(e) {
    const currentDisplay = display;
    if (e.target.innerHTML != "Visit Site") 
      setDisplay(!currentDisplay);
  }

  return (
    <button className={"project-card "+ (display ? "" : "project-card-hover")} onClick={(e) => {
      props.link && handleLinkClick(e);
    }}>
      <h3 style={{
        fontSize: "25px"
      }}>{props.title}</h3>
      <iframe src={props.link} scrolling="no" style={{
        overflow: "hidden",
        width: "100%",
        height: "30vh",
        border: "none",
        borderRadius: "5px",
        pointerEvents: "none",
        marginTop: "10px"
      }}></iframe>
      {props.children}

      {display && props.link && (
        <div className="project-background">
          <div className="project-iframe-header"> 
            <h2>{props.title}</h2>

            <button onClick={(e) => {
              window.open(props.link, "_blank");
              handleLinkClick(e);
            }}>Visit Site</button>

            <svg id="project-iframe-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
            </svg>
          </div>
          <iframe src={props.link} title={props.title}></iframe>
        </div>
      )}
    </button>
  );
}