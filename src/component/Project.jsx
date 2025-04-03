import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import colorSharp2 from "../color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Photo1 from "../Airplane.jpg";
import Photo2 from "../Burger.jpg";
import Photo3 from "../Dino world.jpg";

export const Projects = () => {

  const projects = [
    {
      title: "SKYE",
      techstack: "Personalised-Flight Booking website ",
      link:"https://www.figma.com/design/g6ulU2FBV6qk2O8SQxfAth/SKYE?node-id=0-1&t=8PWB63pcOX25DkCj-1",
      imgUrl:Photo1,
    },
    {
      title: "Burger Singh",
      techstack: "Burger-Singh book your burger",
      link:"https://www.figma.com/design/qopQNiUatmODQisOncSNQB/burger-singh?node-id=0-1&t=i2hIoNhZQtkiF3jz-1",
      imgUrl:Photo2,
    },
    {
        title: "Dino World",
        techstack: "Encyclopidea Explore Dino Now",
        link:"https://www.figma.com/design/CI0jDrQxpuQUu8FmBrMN7A/Dino-World?node-id=0-1&t=fxDzOWDo2O0oJ4Ri-1",
        imgUrl:Photo3,
    },
 
  ];

  return (
    <section className="project" id="projects">
      <Container>
        
        <h2>Projects</h2>
        <p>"Showcasing a collection of diverse projects that highlight my expertise in user oriented development, problem-solving, and innovative solutions. Each project reflects a commitment to quality, functionality, and user interface."</p>
        <Row className="cards" id="projects-card">
            {
                projects.map((projects,index)=>{
                    return(
                        <Col size={12}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                           
                            <Card  className="carding" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={projects.imgUrl} />
                                <Card.Body>
                                    <Card.Title>{projects.title}</Card.Title>
                                    <Card.Text>
                                    {projects.techstack}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href={projects.link}>View Project</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    )
                })
            }
            
            
        </Row>
      </Container>
      <img className="background-image-right"src={colorSharp2}></img>
    </section>
  )
}
