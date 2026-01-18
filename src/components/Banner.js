import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowDownCircle, Download, ClipboardCheck } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const ROTATING_TEXTS = ["Web Developer", "Web Designer"];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  const period = 2000;

  const copyEmail = () => {
    const email = "gimsaramalindu2002@gmail.com";
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  const tick = useCallback(() => {
  const i = loopNum % ROTATING_TEXTS.length;
  const fullText = ROTATING_TEXTS[i];
  const updatedText = isDeleting
    ? fullText.substring(0, text.length - 1)
    : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
    setDelta((prev) => prev / 2);
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setDelta(period);
  } else if (isDeleting && updatedText === "") {
    setIsDeleting(false);
    setLoopNum((prev) => prev + 1);
    setDelta(500);
  }
}, [isDeleting, loopNum, text, period, ROTATING_TEXTS]);


  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>

                  <h1 style={{ marginTop: "10px" }}>
                    {`Hi! I'm Malindu `}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    I am a Full Stack Developer focused on building modern,
                    scalable web applications with clean user interfaces and
                    reliable backend systems.
                  </p>

                  <div className="banner-buttons">
                    <a
                      href="/M.G.S.Amarasekara_cv.pdf"
                      download="Malindu_CV"
                      style={{ textDecoration: "none" }}
                    >
                      <button style={{ marginTop: "10px" }}>
                        Download CV <Download size={25} />
                      </button>
                    </a>

                    <button onClick={copyEmail} style={{ marginTop: "10px" }}>
                      Copy Email <ClipboardCheck size={25} />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      document
                        .querySelector("#projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Scroll Down <ArrowDownCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header" className="header-img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
