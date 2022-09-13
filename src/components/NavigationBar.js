import { Nav, Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const  NavigationBar = ()=>{
return(
    <Navbar className="navbar">
        <Container>
            <Navbar.Brand className="text-white">     <h4 className='text-greenl'>Whyu_n</h4></Navbar.Brand>
            <Nav>
                <Nav.Link className="text-white">Project</Nav.Link>
                <Nav.Link className="text-white">Contact</Nav.Link>
                <Nav.Link className="text-white">|</Nav.Link>
                <Nav.Link className="text-white"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                <Nav.Link className="text-white"> <FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
            </Nav>
            
        </Container>
    </Navbar>
);
}

export default NavigationBar