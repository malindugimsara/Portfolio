import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, demoUrl }) => {
  const [showDetails] = useState(false);

  return (
    <Col sm={6} md={4} className="d-flex">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        
        {/* The main overlay triggered by the button */}
        <div className={`proj-txtx ${showDetails ? "show-content" : ""}`}>
          <h4>{title}</h4>
          <span>{description}</span>
          
          <div className="proj-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="github-link">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer" className="live-link">
                <i className="fa-solid fa-up-right-from-square"></i> Live Demo
              </a>
            )}
          </div>
          
          {/* Close button to return to image view */}
          {/* <button className="hide-btn" onClick={() => setShowDetails(false)}>
            Back
          </button> */}
        </div>

        {/* The initial button seen on top of the image */}
        {/* {!showDetails && (
          <div className="show-details-overlay">
            <button className="details-btn" onClick={() => setShowDetails(true)}>
              Show Details
            </button>
          </div>
        )} */}
      </div>
    </Col>
  );
};