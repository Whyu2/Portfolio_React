import {Col, Container, Row } from 'react-bootstrap';
import { faReact, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollToTop from "react-scroll-to-top";
const  Footer = ()=>{
    return(
        <div className='fot'>
               <ScrollToTop smooth color='rgb(32, 201, 151)' style={{background:'rgb(22, 28, 45)'}} viewBox="0 0 245 245"/>
        <Container>
          <Row>
          <Col className=' mt-4 text-center mb-2'><p className='text-green2'>Created By Wahyu. With ReactJS <FontAwesomeIcon icon={faReact} /> </p></Col>
    <Row>
            
            </Row>
          </Row>
          </Container>
        </div>

    )}

    export default Footer;