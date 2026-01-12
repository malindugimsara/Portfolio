import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, demoUrl }) => {
  return (
    <Col sm={6} md={4} className="d-flex">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="github-link">
                <i className="fa-brands fa-github"></i>
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer" className="live-link">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};