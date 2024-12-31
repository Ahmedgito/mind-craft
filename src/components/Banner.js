import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/mi_logo.png";
import 'animate.css';
import Cbutton from './Cbutton';
import { useInView } from 'react-intersection-observer';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer.", "App Developer.", "UI/UX Designer."];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="banner" id="home" ref={sectionRef}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5} className="order-1 order-md-2">
           
          </Col>
          <Col xs={12} md={6} xl={7} className="order-2 order-md-1">
            <div className={inView ? "animate__animated animate__fadeIn" : ""}>
              <span className="tagline">MIND CRAFT INNOVATIONS</span>
              <h1>
                {`We are Innovative`}
                <br />
                <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Web Developer.", "App Developer.", "UI/UX Designer. " ]'>
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Welcome to Mindcraft Innovation, where creativity meets technology! We're a team of innovative thinkers and skilled makers, dedicated to crafting exceptional digital experiences. From building robust and responsive websites to designing intuitive mobile apps, stunning graphics, and seamless UI/UX experiences, we bring your vision to life. At Mindcraft Innovation, we're passionate about merging art and technology to deliver tailored solutions that exceed our clients' expectations.
              </p>
              <Cbutton href="https://wa.me/923366028955?text=Thank%20You%20for%20contacting%20MindCraft%20Innovation" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
