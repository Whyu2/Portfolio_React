import { Button, CardImg, Col, Container, Row } from 'react-bootstrap';
import fotobio from "../assets/images/bio/bio.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLaravel,faBootstrap,faCss3, faNodeJs, faHtml5,faPhp,faGit, faReact, } from '@fortawesome/free-brands-svg-icons'
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
                <div className='tittle'>Wahyu Nugroho</div>
         
                <div className='mt-3 deskripsi'>Fresh graduate majoring in computer science (Information Systems). Experienced in web application development using PHP with Laravel framework with database side using MySQL. I'm also experienced in Bootstrap CSS. My focus is currently exploring the back end side by learning Laravel and NodeJS </div>

                <Button href='https://drive.google.com/file/d/1Whut6Wem6NiGPIr4O0Q07RnCAMkBwHtA/view?usp=sharing' className='mt-3 btn-success bg-transparent btn-outline-white'>Resume / CV</Button>
                <Row>
                <Col className='icon p-4'><FontAwesomeIcon icon={faHtml5} /></Col>
                <Col className='icon p-4'><FontAwesomeIcon icon={faCss3} /></Col>
                <Col  className='icon p-4'><FontAwesomeIcon icon={faPhp} /></Col>
                <Col  className='icon p-4'><FontAwesomeIcon icon={faLaravel} /></Col>
                <Col  className='icon p-4'><FontAwesomeIcon icon={faBootstrap} /></Col>
                <Col  className='icon p-4'><FontAwesomeIcon icon={faNodeJs} /></Col>
                <Col  className='icon p-4'><FontAwesomeIcon icon={faReact} /></Col>
                <Col  className='icon p-4'><FontAwesomeIcon icon={faGit} /></Col>
                </Row>
            </Col>
          </Row>
        </Container>
       </div>
)};
export default Bio