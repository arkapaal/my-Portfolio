// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../background-skill.png";


export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <section id="skills">
            <Container>
                <Row className='skill-container'>
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                                MY SKILLS
                        </h2>
                        <p>"Proficient in frontend and backend development with expertise in HTML, CSS, JavaScript, React, and Tailwind CSS. Skilled in APIs, databases, DSA, and OOP, I create efficient, scalable, and user-centric web solutions."</p>
                        <Carousel responsive={responsive} infinite={true}  className="skill-slider">
                            <Carousel.Item className='item'>
                                <h5>Programming Language</h5>
                                    <li>C/C++</li>
                                    <li>Java</li>
                                                                
                            </Carousel.Item>
                            <Carousel.Item className='item'>
                                <h5>Frontend Development</h5>
                                    <li>Html</li>
                                    <li>Css</li>
                                    <li>Javascript</li>
                                    <li>UI/UX</li>
                            
                            </Carousel.Item> 
                            {/* <Carousel.Item className='item'>
                                <h5>Backend Development</h5>

                            </Carousel.Item> */}
                            <Carousel.Item className='item'>
                                <h5>Other Technical Skill</h5>
                                <li>DBMS</li>
                                <li>DSA</li>
                                <li>OOPj</li>

                            </Carousel.Item>
                            <Carousel.Item className='item'>
                                <h5>Soft Skills</h5>
                                <li>Communication</li>
                                <li>Team Work</li>
                                <li>Problem-solving</li>
                                <li>Time Management</li>
                            </Carousel.Item>
                            <Carousel.Item className='item'>
                                <h5>Tools and Framework</h5>
                                <li>Figma </li>
                                <li>WIX studio</li>
                                <li>Relume</li>
                                <li>Prototyping</li>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="bg-img" className='background-image-left' />
        </section>
    )

}