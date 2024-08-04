import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg01 from "../assets/img/Project1.png";
import projImg02 from "../assets/img/Project2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Host A Website on Amazon S3!",
      description: "Host your static website effortlessly on Amazon S3 for scalable and cost-effective web hosting.",
      imgUrl: projImg01,
    },
    {
      title: "Visualize Netflix Data using Amazon QuickSight",
      description: "Create insightful visualizations of Netflix data using Amazon QuickSight for actionable business intelligence.",
      imgUrl: projImg02,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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
                <p>Welcome to the Projects section of my website! Here, I share the latest and most exciting projects I've been working on. As a DevOps engineer with a passion for continuous learning and hands-on experience, I regularly take on new challenges and explore innovative solutions in the world of DevOps and data science.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>I am always working on something new and exciting. Stay tuned for updates on ongoing and upcoming projects. Whether it's optimizing CI/CD pipelines, automating infrastructure, or diving into data analytics, there's always something innovative in the pipeline.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Check back often to see what new projects I've been working on and to follow along with my latest adventures in DevOps and data science.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="gulbarge.tech" src={colorSharp2}></img>
    </section>
  )
}
