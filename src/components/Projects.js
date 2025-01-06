import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import webImg1 from "../assets/img/auto.jpg";
import webImg2 from "../assets/img/nizam.jpg";
import webImg3 from "../assets/img/web3 (2).png";
import webImg4 from "../assets/img/w7.PNG";
import webImg5 from "../assets/img/web5.jpg";
import webImg6 from "../assets/img/web6.webp";
import appImg1 from "../assets/img/app.webp";
import appImg2 from "../assets/img/app1.webp";
import appImg3 from "../assets/img/app2.webp";
import appImg4 from "../assets/img/app3.webp";
import appImg5 from "../assets/img/app4.webp";
import appImg6 from "../assets/img/app5.webp";
import uiImg1 from "../assets/img/1.webp";
import uiImg2 from "../assets/img/2.webp";
import uiImg3 from "../assets/img/ui1.jpg";
import uiImg4 from "../assets/img/ui2.jpg";
import uiImg5 from "../assets/img/ui3.jpg";
import uiImg6 from "../assets/img/ui4.jpg";
import uiImg7 from "../assets/img/uiw1.jpg";
import uiImg8 from "../assets/img/uiw2.jpg";
import uiImg9 from "../assets/img/uiw3.jpg";
import lImg1 from "../assets/img/l1.jpg";
import lImg2 from "../assets/img/l2.jpg";
import lImg3 from "../assets/img/l3.jpg";
import lImg4 from "../assets/img/l4.jpg";
import lImg5 from "../assets/img/l5.jpg";
import loImg1 from "../assets/img/lo1.jpg";
import loImg2 from "../assets/img/lo2.jpg";
import loImg3 from "../assets/img/lo3.jpg";
import loImg4 from "../assets/img/lo4.jpg";
import loImg5 from "../assets/img/lo5.jpg";
import cbImg1 from "../assets/img/cb1.jpg";
import cbImg2 from "../assets/img/cb2.jpg";
import cbImg3 from "../assets/img/cb3.jpg";
import cbImg4 from "../assets/img/cb4.jpg";
import cbImg5 from "../assets/img/cb5.jpg";
import cbImg6 from "../assets/img/cb6.jpg";
import cbImg7 from "../assets/img/b1.jpg";
import cbImg8 from "../assets/img/b2.jpg";
import smImg1 from "../assets/img/sm1.jpg";
import smImg2 from "../assets/img/sm2.jpg";
import smImg3 from "../assets/img/sm3.jpg";



import 'animate.css';
import { useState,useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const categories = {
    "App Development": {
      subCategories: ["Flutter", "React Native"],
      projects: {
        "Flutter": [
          { title: "Quran App", description: "Flutter", imgUrl: appImg1 },
          { title: "Social App", description: "Flutter", imgUrl: appImg2 },
          { title: "SpeedWave", description: "Flutter", imgUrl: appImg4 },
          { title: "Notepad", description: "Flutter", imgUrl: appImg3 },
        ],
        "React Native": [
          { title: "E-Commerce Store", description: "React Native", imgUrl: appImg6 },
          { title: "E-Commerce Store", description: "React Native", imgUrl: appImg5 },
        ],
      },
    },
    "Web Development": {
      subCategories: ["ReactJS", "WordPress"],
      projects: {
        "ReactJS": [
          { title: "Personal Portfolio", description: "ReactJS", imgUrl: webImg3 },
          { title: "Vitality", description: "ReactJS", imgUrl: webImg4 },
          { title: "Auto History Inspection", description: "ReactJS", imgUrl: webImg1 },
          { title: "Nizam WorkWare", description: "ReactJS", imgUrl: webImg2 },
        ],
        "WordPress": [
          { title: "Coffee Store", description: "WordPress", imgUrl: webImg5 },
          { title: "Online Food Shop", description: "WordPress", imgUrl: webImg6 },
        ],
      },
    },
    "UI/UX": {
      subCategories: ["Website", "Application", "Landing Page"],
      projects: {
        "Website": [
          { title: "Meal Box", description: "UI/UX", imgUrl: uiImg7 },
          { title: "Office Web", description: "UI/UX", imgUrl: uiImg8 },
          { title: "GGE", description: "UI/UX", imgUrl: uiImg9 },
        ],
        "Application": [
          { title: "Chatting App", description: "UI/UX", imgUrl: uiImg1 },
          { title: "Calling App", description: "UI/UX", imgUrl: uiImg2 },
        ],
        "Landing Page": [
          { title: "Education Web", description: "UI/UX", imgUrl: uiImg3 },
          { title: "Clothing Store", description: "UI/UX", imgUrl: uiImg4 },
          { title: "Company Portfolio", description: "UI/UX", imgUrl: uiImg5 },
          { title: "Company Portfolio", description: "UI/UX", imgUrl: uiImg6 },
        ],
      },
    },
    "Graphic Design": {
      subCategories: ["Logo", "Company Branding", "T-shirt Design", "Social Media Posts"],
      projects: {
        "Logo": [
          { title: "Logo Design", description: "", imgUrl: loImg1 },
          { title: "Logo Design", description: "", imgUrl: loImg2 },
          { title: "Logo Design", description: "", imgUrl: loImg3 },
          { title: "Logo Design", description: "", imgUrl: loImg4 },
          { title: "Logo Design", description: "", imgUrl: loImg5 },
        ],
        "Company Branding": [
          { title: "ezzy", description: "", imgUrl: cbImg1 },
          { title: "Company Branding", description: "", imgUrl: cbImg2 },
          { title: "Aman & co", description: "", imgUrl: cbImg3 },
          { title: "H & A", description: "", imgUrl: cbImg4 },
          { title: "H & A", description: "", imgUrl: cbImg5 },
          { title: "ACL Digital", description: "Complete Branding", imgUrl: cbImg6 },
          { title: "Tourism", description: "Brochure Designing", imgUrl: cbImg7 },
          { title: "Car Wash", description: "Brochure Designing", imgUrl: cbImg8 },
        ],
        "T-shirt Design": [
          { title: "T-Shirt Design", description: "", imgUrl: lImg1 },
          { title: "T-Shirt Design", description: "", imgUrl: lImg2 },
          { title: "T-Shirt Design", description: "", imgUrl: lImg3 },
          { title: "T-Shirt Design", description: "", imgUrl: lImg4 },
          { title: "T-Shirt Design", description: "", imgUrl: lImg5 },
        ],
        "Social Media Posts": [
          { title: "Social Media Post", description: "H & A", imgUrl: smImg1 },
          { title: "Social Media Post", description: "H & A", imgUrl: smImg2 },
          { title: "Social Media Post", description: "H & A", imgUrl: smImg3 },
        ],
      },
    },
  };

  useEffect(() => {
    const defaultCategory = Object.keys(categories)[0];
    const defaultSubCategory = categories[defaultCategory]?.subCategories[0];
    setSelectedCategory(defaultCategory);
    setSubCategories(categories[defaultCategory]?.subCategories || []);
    setSelectedSubCategory(defaultSubCategory);
    setShowSubCategories(true);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSubCategories(categories[category]?.subCategories || []);
    setSelectedSubCategory(categories[category]?.subCategories[0]);
    setShowSubCategories(true);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false); // Simulate loading completion
    }, 1500); // Adjust delay as needed
  };

  const handleImageClick = (imgUrl) => {
    setFullscreenImage(imgUrl);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h1>Projects</h1>
              <p>Crafting Experiences, Shaping Ideas: A Journey Through Innovation and Design.</p>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                {Object.keys(categories).map((category) => (
                  <Nav.Item key={category}>
                    <Nav.Link
                      active={selectedCategory === category}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              {showSubCategories && (
                <div className="fade-in">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                    {subCategories.map((subCategory) => (
                      <Nav.Item key={subCategory}>
                        <Nav.Link
                          active={selectedSubCategory === subCategory}
                          onClick={() => handleSubCategoryClick(subCategory)}
                        >
                          {subCategory}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>
              )}
              {loading ? (
                <div className="loading-text">Loading...</div>
              ) : (
                selectedCategory &&
                selectedSubCategory && (
                  <Row>
                    {categories[selectedCategory].projects[selectedSubCategory]?.map((project, index) => (
                      <ProjectCard key={index} {...project} onImageClick={handleImageClick} />
                    ))}
                  </Row>
                )
              )}
            </div>
          </Col>
        </Row>
      </Container>
      {fullscreenImage && (
        <div className="fullscreen-container active" onClick={closeFullscreenImage}>
          <img src={fullscreenImage} alt="Full Screen" />
        </div>
      )}
    </section>
  );
};