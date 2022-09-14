import { Nav, Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const  NavigationBar = ()=>{
return(
 
    <Navbar className="navbar">
        <Container>
            <Navbar.Brand href='/' className="text-white"><h4 className='mt-3 text-greenl'>Whyu_n</h4></Navbar.Brand>
            <Nav>
                <Nav.Link href='#project' className="text-white">Project</Nav.Link>
                <Nav.Link href='#contact' className="text-white">Contact</Nav.Link>
                <Nav.Link  className="text-white">|</Nav.Link>
                <Nav.Link href='https://github.com/Whyu2' className="text-white"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                <Nav.Link href='https://www.linkedin.com/in/wahyu-nugroho-ab4b721b7/' className="text-white"> <FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
   
);
}

export default NavigationBar