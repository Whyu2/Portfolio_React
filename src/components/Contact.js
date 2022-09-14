import { Button,Col, Container, Row } from 'react-bootstrap';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const  Contact = ()=>{
    return(
        <div className='cont' id='contact'>
        <Container>
          <Row>
          <Col className='text-greenl  text-center mb-2'><h1>Contact Me</h1></Col>
          <Row>
            <Col className='text-center' >  <Button href="https://api.whatsapp.com/send?phone=62895396784047" className=' mt-4 btn-success bg-transparent btn-outline-white '><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp Me</Button></Col>
            </Row>
          </Row>
          </Container>
        </div>
    )}

    export default Contact;