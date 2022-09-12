import { Button, CardImg, Col, Container, Row } from 'react-bootstrap';
import fotobio from "../assets/images/bio/bio.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLaravel,faBootstrap,faCss3,  faNodeJs, faHtml5,faPhp,} from '@fortawesome/free-brands-svg-icons'
const  Bio = ()=>{
    return(
        <div className='bio'>
        <Container>
          <Row>
            <Col md={4} >
            <CardImg className='bio-foto' src={fotobio}></CardImg>
            </Col>
            <Col md={8} className='text-white'>
                <h4 className='mt-2 text-greenl'>Hello, I am</h4>
                <div className='tittle'>Wahyu  </div>
         
                <div className='mt-3 deskripsi'>Fresh graduate majoring in computer science (Information Systems). Experienced in web application development using PHP with Laravel framework with database side using MySQL. I'm also experienced in Bootstrap CSS. My focus is currently exploring the back end side by learning node js </div>

                <Button className='mt-3 btn-success bg-transparent btn-outline-white'>Contack me</Button>
                <Row>
                <Col className='icon p-4'><FontAwesomeIcon icon={faHtml5} /></Col>
                <Col className='icon p-4'><FontAwesomeIcon icon={faCss3} /></Col>
                <Col  className='icon p-4'><FontAwesomeIcon icon={faPhp} /></Col>
                <Col  className='icon p-4'><FontAwesomeIcon icon={faLaravel} /></Col>
                <Col  className='icon p-4'><FontAwesomeIcon icon={faBootstrap} /></Col>
                <Col  className='icon p-4'><FontAwesomeIcon icon={faNodeJs} /></Col>
                
                </Row>
            </Col>
          </Row>
        </Container>
       </div>
)};
export default Bio