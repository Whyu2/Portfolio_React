import { Nav, Container, Navbar } from "react-bootstrap";

const  NavigationBar = ()=>{
return(
    <Navbar className="navbar">
        <Container>
            <Navbar.Brand className="text-white">WHYU</Navbar.Brand>
            <Nav>
                <Nav.Link className="text-white">Project</Nav.Link>
                <Nav.Link className="text-white">Contack me</Nav.Link>
                <Nav.Link className="text-white"></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);
}

export default NavigationBar