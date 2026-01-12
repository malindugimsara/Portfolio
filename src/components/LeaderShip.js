import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Leadership = () => {
  return (
    <section className="leadership" id="leadership">
      <Container>
        <Row>
          <Col size={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Leadership & Volunteering</h2>
              <p>Actively contributing to the tech community and university ecosystem.</p>
              
              <div className="leadership-grid">
                {/* --- Role 1 --- */}
                <div className="lead-item">
                  <div className="lead-icon">💼</div>
                  <h4>Finance Team Member</h4>
                  <h5>CryptX 1.0 - ICTS Organizing Committee</h5>
                  <p>University of Sri Jayewardenepura</p>
                  <span className="event-date">February 15, 2025</span>
                </div>

                {/* --- Role 2 --- */}
                <div className="lead-item">
                  <div className="lead-icon">👥</div>
                  <h4>HR Team Member</h4>
                  <h5>Envision - ICTS Organizing Committee</h5>
                  <p>University of Sri Jayewardenepura</p>
                </div>

                {/* --- Role 3 --- */}
                <div className="lead-item">
                  <div className="lead-icon">🚀</div>
                  <h4>Organizing Committee Member</h4>
                  <h5>Touch the Peak 2025: FOT & FAS Episode</h5>
                  <p>Career Skills Development Society, University of Sri Jayewardenepura</p>
                </div>

                {/* --- Award --- */}
                <div className="lead-item award-highlight">
                  <div className="lead-icon">🏆</div>
                  <h4>Best Performance Awards</h4>
                  <h5>ICT Society (ICTS)</h5>
                  <p>University of Sri Jayewardenepura</p>
                </div>
              </div>

              <div className="workshops-section">
                <h3>Workshops & Certifications</h3>
                <div className="workshop-list">
                  <div className="workshop-card">
                    <strong>Prompt Engineering:</strong> Unlocking the Power of AI Communication (ICIET 2024)
                  </div>
                  <div className="workshop-card">
                    <strong>Beyond Code:</strong> Exploring Tech Careers & AI Tools (ICTS & IFS)
                  </div>
                  <div className="workshop-card">
                    <strong>AI-Driven Development:</strong> Low-Code & No-Code Future (ICIET 2025)
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}