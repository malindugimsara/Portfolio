import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/SMPS.jpeg"; 
import projImg2 from "../assets/img/printshop.png";
import projImg3 from "../assets/img/lost-and-found.jpeg";
import projImg4 from "../assets/img/iot.jpeg";
import projImg5 from "../assets/img/glamwed.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const fullStackProjects = [
    
    {
      title: "Print Shop Management System",
      description: "MERN Stack | Admin Analytics Dashboard",
      imgUrl: projImg2,
      githubUrl: "https://github.com/malindugimsara/print-shop-test",
      demoUrl: "https://print-shop-v2.vercel.app/"
    },
    {
      title: "Smart Postal Delivery System",
      description: "MERN Stack | Role-based Access & Tracking",
      imgUrl: projImg1,
      githubUrl: "https://github.com/malindugimsara/smart-postal-managment-system",
      demoUrl: "https://smart-postal-managment-system.vercel.app/"
    },
    {
      title: "Lost & Found Web App",
      description: "MERN & Supabase | Real-time Updates",
      imgUrl: projImg3,
      githubUrl: "https://github.com/dilshansethmina2002/Lost-and-find-item",
     
    },
  ];

  const specializedProjects = [
    {
      title: "IoT Product Quality System",
      description: "C#, Arduino & Robotics | Automation",
      imgUrl: projImg4,
      demoUrl: "https://www.linkedin.com/posts/malindu-gimsara-181441321_iot-innovation-technology-activity-7295458614914301952-FXF-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFmi7EBd4mVDdrzf08dFE2HSOlPEdS3pXQ"
    },
  ];

  const htmldProjects = [
    
    {
      title: "GlamWed Studio",
      description: "PHP & WAMP | Wedding Management",
      imgUrl: projImg5,
      githubUrl: "https://github.com/dilshansethmina2002/Web-Group-Project",
      
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As an IT undergraduate at the University of Sri Jayewardenepura, I have developed full-stack applications and IoT systems that solve real-world logistical and management challenges. My work focuses on building scalable, secure, and user-friendly platforms.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Full-Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Foundations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">IoT & Systems</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          fullStackProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          htmldProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          specializedProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}