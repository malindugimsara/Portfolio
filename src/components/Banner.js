import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowDownCircle, ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Download, ClipboardCheck } from 'react-bootstrap-icons';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer"];
  const copyEmail = () => {
    const email = "gimsaramalindu2002@gmail.com"; 
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!"); 
  }
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 style={{ marginTop: '10px' }}>{`Hi! I'm Malindu`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer"]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a Full Stack Developer focused on building modern, scalable web applications with clean user interfaces and reliable backend systems.</p>

                  <div className="banner-buttons">
                      {/* Download CV Button */}
                      <a href="/M.G.S.Amarasekara_cv.pdf" download="Malindu_CV" style={{ textDecoration: 'none' }}>
                        <button style={{ marginTop: '10px' }}>
                          Download CV <Download size={25} />
                        </button>
                      </a>
                      {/* Copy Email Button */}
                      <button onClick={copyEmail} style={{ marginTop: '10px' }}>
                        Copy Email <ClipboardCheck size={25} />
                      </button>
                  </div>
                  
                    {/* Your original Scroll Down Button */}
                      <button onClick={() => {
                          const section = document.querySelector('#projects');
                          section?.scrollIntoView({ behavior: 'smooth' });
                      }}>
                          Scroll Down <ArrowDownCircle size={25} />
                      </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
