import { useInView } from "react-intersection-observer";
import 'react-multi-carousel/lib/styles.css';
import Card from "./Cards";
import appdev from '../assets/img/app-development.webp';
import uiux from '../assets/img/ui-ux.png';
import webdev from '../assets/img/coding.png';
import graphic from '../assets/img/web-design.png';

export const Skills = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardRefs = [
    useInView({ triggerOnce: true, threshold: 0.1 }),
    useInView({ triggerOnce: true, threshold: 0.1 }),
    useInView({ triggerOnce: true, threshold: 0.1 }),
    useInView({ triggerOnce: true, threshold: 0.1 }),
  ];

  const cardsData = [
    { service: "Web Dev", description: "Tailored Web Development", icon: webdev },
    { service: "App Dev", description: "Innovative Apps, Tailored Solutions", icon: appdev },
    { service: "Graphic Designing", description: "Stunning Visuals, Creative Designs", icon: graphic },
    { service: "UI/UX Designing", description: "Seamless Design, Intuitive Experiences", icon: uiux },
  ];

  return (
    <section className="skill" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12" >
            <div className="skill-bx">
              <h2>Our Services</h2>
              <p>
                Transforming ideas into reality with expert Web & App Development, stunning Graphic Designing,
                <br /> and user-centric UI/UX Solutions. Let’s build your digital future together!
              </p>
              <div className="card-container">
                {cardsData.map((card, index) => (
                  <div
                    className={`item ${
                      cardRefs[index].inView
                        ? `animate__animated animate__fadeInUp delay-${index}`
                        : ""
                    }`}
                    ref={cardRefs[index].ref}
                    key={index}
                  >
                    <Card
                      service={card.service}
                      href="https://wa.me/923366028955?text=Thank%20You%20for%20contacting%20MindCraft%20Innovation"
                      description={card.description}
                      icon={card.icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
