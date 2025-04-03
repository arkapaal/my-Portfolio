import { useState ,useEffect} from "react"
import { Navbar,Container,Nav } from "react-bootstrap"
import NavIcon1 from 'file:///C:/Portfolio/portfolio/nav-icon1.svg';
import NavIcon2 from 'file:///C:/Portfolio/portfolio/icons8-github (3).svg';
import NavIcon3 from 'file:///C:/Portfolio/portfolio/nav-icon3.svg';


export const NavBar=()=>{
    const [activeLink,setActiveLink] =useState('home');
    const [scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const onScroll =()=>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);
        return ()=>window.removeEventListener("scroll",onscroll)
    },[])
    const onUpdateActiveLink =(value) =>{
        setActiveLink(value);
    }

    return (
      <div>
        <Navbar expand="lg" className={scrolled?"scrolled":""}>
        <Container>
            {/* <Navbar.Brand href="#home">
                <img src={''} alt="logo"/>
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home') }>Home </Nav.Link>
                <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills </Nav.Link>
                <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects </Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://github.com/arkapaal"><img src={NavIcon2} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/arka-pal-b4a672285/"><img src={NavIcon1} alt="LinkedIN" /></a>
                    <a href="https://www.instagram.com/coff.260/"><img src={NavIcon3} alt="Instagram" /></a>
                </div>
                <button className="contactus" onClick={()=>onUpdateActiveLink('connect')}>Lets Connect</button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    )
}
export default NavBar
