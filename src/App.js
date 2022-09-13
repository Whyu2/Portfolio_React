

import './App.css';
import NavigationBar from './components/NavigationBar';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
import "./style/Home.css";


function App() {
  return (
  <div>
    <div className='Intro'>
     <NavigationBar/>
     <Bio/>
    </div>
      <div className='project'>
      <Project/>
         </div>
         <div className='contact'>
      <Contact/>
         </div>
         <div className='footer'>
      <Footer/>
         </div>
     </div>
  );
}

export default App;
