import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import webImg1 from "../assets/img/web.PNG";
import webImg2 from "../assets/img/dwdw.PNG";
import webImg3 from "../assets/img/web3 (2).png";
import webImg4 from "../assets/img/web4.jpg";
import webImg5 from "../assets/img/web5.jpg";
import webImg6 from "../assets/img/web6.jpg";
import appImg1 from "../assets/img/app.jpg";
import appImg2 from "../assets/img/app1.jpg";
import appImg3 from "../assets/img/app2.jpg";
import appImg4 from "../assets/img/app3.jpg";
import appImg5 from "../assets/img/app4.jpg";
import appImg6 from "../assets/img/app5.jpg";
import gdImg1 from "../assets/img/gd1.jpg";
import gdImg2 from "../assets/img/gd2.jpg";
import gdImg3 from "../assets/img/gd3.jpg";
import gdImg4 from "../assets/img/gd4.jpg";
import gdImg5 from "../assets/img/gd5.jpg";
import gdImg6 from "../assets/img/gd6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const webprojects = [
    {
      title: "Auto History Inspection",
      description: "ReactJS",
      imgUrl: webImg1,
    },
    {
      title: "Nizam WorkWare",
      description: "ReactJS",
      imgUrl: webImg2,
    },
    {
      title: "Personal Portfolio",
      description: "ReactJS",
      imgUrl: webImg3,
    },
    {
      title: "E-commerce Store",
      description: "UI/UX",
      imgUrl: webImg4,
    },
    {
      title: "Coffee Store",
      description: "WordPress",
      imgUrl: webImg5,
    },
    {
      title: "Online Food Shop",
      description: "WordPress",
      imgUrl: webImg6,
    },
  ];

  const appprojects = [
    {
      title: "Quran App",
      description: "Flutter",
      imgUrl: appImg1,
    },
    {
      title: "Social App",
      description: "Flutter",
      imgUrl: appImg2,
    },
    {
      title: "Notepad",
      description: "Flutter",
      imgUrl: appImg3,
    },
    {
      title: "SpeedWave",
      description: "React Native",
      imgUrl: appImg4,
    },
    {
      title: "E-Commerce Store",
      description: "React Native",
      imgUrl: appImg5,
    },
    {
      title: "Online Food Shop",
      description: "React Native",
      imgUrl: appImg6,
    },
  ];

  const gdprojects = [
    {
      title: "Quran App",
      description: "Flutter",
      imgUrl: gdImg1,
    },
    {
      title: "Social App",
      description: "Flutter",
      imgUrl: gdImg2,
    },
    {
      title: "Notepad",
      description: "Flutter",
      imgUrl: gdImg3,
    },
    {
      title: "SpeedWave",
      description: "React Native",
      imgUrl: gdImg4,
    },
    {
      title: "E-Commerce Store",
      description: "React Native",
      imgUrl: gdImg5,
    },
    {
      title: "Online Food Shop",
      description: "React Native",
      imgUrl: gdImg6,
    },
  ];

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div ref={sectionRef} className={inView ? "animate__animated animate__fadeIn" : ""}>
              <h2>Projects</h2>
              <p>Crafting Experiences, Shaping Ideas: A Journey Through Innovation and Design.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">App Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Web Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Graphic Design</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={inView ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {appprojects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {webprojects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {gdprojects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
