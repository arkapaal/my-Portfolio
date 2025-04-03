import { Container, Row, Col } from "react-bootstrap";
import NavIcon1 from '../nav-icon1.svg';
import NavIcon2 from '../icons8-github (3).svg';
import NavIcon3 from '../nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" >
          <Col size={12} sm={6}>
            <h3></h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                    <a href="https://github.com/arkapaal"><img src={NavIcon2} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/arka-pal-b4a672285/"><img src={NavIcon1} alt="LinkedIN" /></a>
                    <a href="https://www.instagram.com/coff.260/"><img src={NavIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
