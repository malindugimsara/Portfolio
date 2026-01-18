import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Education</h2>
              <p>My academic journey and professional foundations.</p>
              
              <div className="education-timeline">
                
                {/* --- University Section --- */}
                <div className="timeline-item">
                  <div className="education-header">
                    <span className="edu-year">2023 - 2027</span>
                    <h3>Bachelor of Information and Communication Technology</h3>
                    <h4 className="institution">University of Sri Jayewardenepura</h4>
                  </div>
                  <div className="edu-content">
                    <p>The University of Sri Jayewardenepura is a leading state university in Sri Lanka, known for its industry-focused ICT education and strong academic foundation.</p>
                    <ul className="edu-list">
                      <li><strong>Software Development:</strong> Solid expertise in OOP, Data Structures & Algorithms, Software Engineering, MERN-Stack, and Web & Mobile Development.</li>
                      <li><strong>Data Science & AI:</strong> Emphasis on Machine Learning, Data Mining, and Data Analytics alongside DBMS and Cloud Computing.</li>
                      <li><strong>Specialized Tech:</strong> Exposure to IoT with Embedded Systems and Cybersecurity to adapt to industry demands.</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-divider"></div>

                {/* --- School Section --- */}
                <div className="timeline-item">
                  <div className="education-header">
                    <span className="edu-year">2021(2022)</span>
                    <h3>G.C.E. Advanced Level</h3>
                    <h4 className="institution">Dharmasoka College, Ambalangoda</h4>
                  </div>
                  <div className="edu-content">
                    <p>Dharmasoka College is a respected national school in Sri Lanka, known for its strong academic culture and holistic student development.</p>
                    <ul className="edu-list">
                      <li><strong>Achievement:</strong> Achieved <strong>3 As</strong>, securing <strong>12th place in the Galle District</strong>.</li>
                      <li><strong>Key Skills:</strong> Developed strong analytical thinking, consistency, and the ability to perform under high academic pressure.</li>
                      <li><strong>Foundation:</strong> This academic training laid the groundwork for my problem-solving mindset and pursuit of technology.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Decorative background pattern"/>
    </section>
  )
}