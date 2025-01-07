import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import colorSharp2 from "../color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Photo1 from "../Project-img1.png";
import Photo2 from "../Project-img2.png";
import Photo3 from "../Project-img3.png";

export const Projects = () => {

  const projects = [
    {
      title: "my-Portflio",
      techstack: "react,tailwind.",
      link:"https://github.com/arkapaal/my-Portfolio",
      imgUrl:Photo1,
    },
    {
      title: "News-App",
      techstack: "react,api..",
      link:"https://github.com/arkapaal/news-channel-using-news-api",
      imgUrl:Photo2,
    },
    {
        title: "Amazon-Clone",
        techstack: "html,css..",
        link:"https://github.com/arkapaal/Amazon-clone",
        imgUrl:Photo3,
    },
 
  ];

  return (
    <section className="project" id="projects">
      <Container>
        
        <h2>Projects</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
