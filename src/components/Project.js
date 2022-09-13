import { Button,Card,Col, Container, Row } from 'react-bootstrap';
import projek1 from "../assets/images/bio/Projek1.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode,faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const  Project = ()=>{
    return(
        <div>
            <Container>
            <Row>
           <Col  className='text-greenl text-center mb-4 '><h1>Past Project <FontAwesomeIcon icon={faCode} /> </h1></Col>
           <Row >
            <Col md={4} className='project-cardfoto'>
         <Card.Img variant="top" src={projek1}/>
        <Card.Body className='project-cardbody text-white'>
          <Col className='p-2 text-center'>
            <div><h4>HPPku</h4></div>
          <div className=' text-center mb-2'><p className='text-green2'>Laravel, Bootstrap, MySQL</p></div>
          <div className=' text-center'><p className='deskripsi'>Some quick example text to build on the card title and make up the
            bulk of the card's content.</p></div>
       
        <Col   className='d-flex justify-content-center'> 
        <Row>
        <Col > <Button className='mt-1 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faGithub} /></Button></Col>
        <Col> <Button className='mt-1 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button></Col>
        </Row>
        </Col>
            </Col>
        </Card.Body>
            </Col>
            <Col md={4} className='project-cardfoto'>
         <Card.Img variant="top" src={projek1}/>
        <Card.Body className='project-cardbody text-white'>
          <Col className='p-2 text-center'>
            <div><h4>HPPku</h4></div>
          <div className=' text-center mb-2'><p className='text-green2'>Laravel, Bootstrap, MySQL</p></div>
          <div className=' text-center'><p className='deskripsi'>Some quick example text to build on the card title and make up the
            bulk of the card's content.</p></div>
       
        <Col   className='d-flex justify-content-center'> 
        <Row>
        <Col > <Button className='mt-1 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faGithub} /></Button></Col>
        <Col> <Button className='mt-1 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button></Col>
        </Row>
        </Col>
            </Col>
        </Card.Body>
            </Col>
            <Col md={4} className='project-cardfoto'>
         <Card.Img variant="top" src={projek1}/>
        <Card.Body className='project-cardbody text-white'>
          <Col className='p-2 text-center'>
            <div><h4>HPPku</h4></div>
          <div className=' text-center mb-2'><p className='text-green2'>Laravel, Bootstrap, MySQL</p></div>
          <div className=' text-center'><p className='deskripsi'>Some quick example text to build on the card title and make up the
            bulk of the card's content.</p></div>
       
        <Col   className='d-flex justify-content-center'> 
        <Row>
        <Col > <Button className='mt-1 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faGithub} /></Button></Col>
        <Col> <Button className='mt-1 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button></Col>
        </Row>
        </Col>
            </Col>
        </Card.Body>
            </Col>
            <Col md={4} className='project-cardfoto'>
         <Card.Img variant="top" src={projek1}/>
        <Card.Body className='project-cardbody text-white'>
          <Col className='p-2 text-center'>
            <div><h4>HPPku</h4></div>
          <div className=' text-center mb-2'><p className='text-green2'>Laravel, Bootstrap, MySQL</p></div>
          <div className=' text-center'><p className='deskripsi'>Some quick example text to build on the card title and make up the
            bulk of the card's content.</p></div>
       
        <Col   className='d-flex justify-content-center'> 
        <Row>
        <Col > <Button className='mt-1 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faGithub} /></Button></Col>
        <Col> <Button className='mt-1 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button></Col>
        </Row>
        </Col>
            </Col>
        </Card.Body>
            </Col>
           

            </Row>

            </Row>
            </Container>
        </div>
     
    )};

    export default Project;