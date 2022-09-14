import { Button,Card,Col, Container, Row } from 'react-bootstrap';
import projek1 from "../assets/images/bio/Projek1.PNG"
import projek2 from "../assets/images/bio/Projek2.PNG"
import projek3 from "../assets/images/bio/Projek3.PNG"
import projek4 from "../assets/images/bio/Projek4.PNG"
import projek5 from "../assets/images/bio/Projek5.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode,faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const  Project = ()=>{
    return(
        <div>
            <Container>
            <Row>
           <Col  className='text-greenl text-center mb-4 ' id='project'><h1>Past Project <FontAwesomeIcon icon={faCode} /> </h1></Col>
           <Row >
           <Col md={4} className='project-cardfoto'>
         <Card.Img className='project-img' variant="top" src={projek3}/>
        <Card.Body className='project-cardbody text-white'>
          <Col className='p-2 text-center'>
            <div><h4>FindCat-FrontEnd (On Process)</h4></div>
          <div className=' text-center mb-2'><p className='text-green2'>ReactJS, Bootstrap</p></div>
          <div className=' text-center'><p className='deskripsi'>Social media to share things related to cat pictures. Developed with ReactJS</p></div>
       
        <Col   className='d-flex justify-content-center'> 
        <Row>
        <Col > <Button href="https://github.com/Whyu2/React_FindCat" className='mb-2 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faGithub} /></Button></Col>
      
        </Row>
        </Col>
            </Col>
        </Card.Body>
            </Col>
          
            <Col md={4} className='project-cardfoto'>
         <Card.Img className='project-img' variant="top" src={projek4}/>
        <Card.Body className='project-cardbody text-white'>
          <Col className='p-2 text-center'>
            <div><h4>FindCat-BackEnd (On Process)</h4></div>
          <div className=' text-center mb-2'><p className='text-green2'>NodeJS, MySQL</p></div>
          <div className=' text-center'><p className='deskripsi'>API endpoint for FindCat WebApp. Developed with Node.js using JWT authentication</p></div>
       
        <Col   className='d-flex justify-content-center'> 
        <Row>
        <Col > <Button href='https://github.com/Whyu2/FindCat_web_serve' className='mb-2 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faGithub} /></Button></Col>

        </Row>
        </Col>
            </Col>
        </Card.Body>
            </Col>
            <Col md={4} className='project-cardfoto'>
         <Card.Img className='project-img' variant="top" src={projek1}/>
        <Card.Body className='project-cardbody text-white'>
          <Col className='p-2 text-center'>
            <div><h4>HPPku</h4></div>
          <div className=' text-center mb-2'><p className='text-green2'>Laravel, Bootstrap, MySQL</p></div>
          <div className=' text-center'><p className='deskripsi'>WebApp for Calculation Cost  Food Production (Case Study of Hotel Sahid Jaya Solo). Developed with Laravel version 8 with database using mySQL</p></div>
       
        <Col   className='d-flex justify-content-center'> 
        <Row>
        <Col > <Button href='https://github.com/Whyu2/HPPKu' className='mb-2 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faGithub} /></Button></Col>
        <Col> <Button href="http://hppku.webapp.skom.id/" className='mb-2 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button></Col>
        </Row>
        </Col>
            </Col>
        </Card.Body>
            </Col>
            <Col md={4} className='project-cardfoto'>
         <Card.Img className='project-img' variant="top" src={projek2}/>
        <Card.Body className='project-cardbody text-white'>
          <Col className='p-2 text-center'>
            <div><h4>Infovac</h4></div>
          <div className=' text-center mb-2'><p className='text-green2'>Laravel, Bootstrap, MySQL</p></div>
          <div className=' text-center'><p className='deskripsi'>WebApp for information on covid-19 vaccination sites. Developed with Laravel version 8 with database using mySQL</p></div>
       
        <Col   className='d-flex justify-content-center'> 
        <Row>
        <Col > <Button href='https://github.com/Whyu2/infovac' className='mb-2 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faGithub} /></Button></Col>
        <Col> <Button href='https://infovac.herokuapp.com/' className='mb-2 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button></Col>
        </Row>
        </Col>
            </Col>
        </Card.Body>
            </Col>
            <Col md={4} className='project-cardfoto'>
         <Card.Img className='project-img' variant="top" src={projek5}/>
        <Card.Body className='project-cardbody text-white'>
          <Col className='p-2 text-center'>
            <div><h4>TemanCOD</h4></div>
          <div className=' text-center mb-2'><p className='text-green2'>PHP Native, Bootstrap, MySQL</p></div>
          <div className=' text-center'><p className='deskripsi'>Marketplace website for buying and selling used mobile phones in the Yogyakarta area, developed with native PHP</p></div>
       
        <Col   className='d-flex justify-content-center'> 
        <Row>
        <Col > <Button href='https://github.com/Whyu2/TemanCod'className='mb-2 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faGithub} /></Button></Col>
        <Col> <Button href='http://temancod.webapp.skom.id/' className='mb-2 btn-success bg-transparent btn-outline-white'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button></Col>
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