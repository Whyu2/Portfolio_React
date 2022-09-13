import {Col, Container, Row } from 'react-bootstrap';
import { faReact, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const  Footer = ()=>{
    return(
        <div className='fot'>
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