

import './App.css';
import NavigationBar from './components/NavigationBar';
import Bio from './components/Bio';
import Project from './components/Project';
import "./style/Home.css";


function App() {
  return (
  <div>
    <div className='background'>
     <NavigationBar/>
     <Bio/>
   
    </div>
      <div className='project'>
      <Project/>
         </div>
     </div>
  );
}

export default App;
