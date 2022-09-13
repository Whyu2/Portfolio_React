import { Button,Col, Container, Row } from 'react-bootstrap';

const  Contact = ()=>{
    return(
        <div className='cont'>
        <Container>
          <Row>
          <Col className='text-greenl  text-center mb-2'><h1>Contact Me</h1></Col>
          <Row>
            <Col className='text-center' >  <Button className=' mt-4 btn-success bg-transparent btn-outline-white '>Email Me</Button></Col>
            </Row>
          </Row>
          </Container>
        </div>
    )}

    export default Contact;