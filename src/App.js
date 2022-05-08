import './App.css';
import Mainapp from './components/Mainapp';
import Menu from './components/Menu';
import Credits from './components/Credits';

import { useState , useEffect} from 'react';
function App() {
  const [menu, setMenu] = useState(true);
  const [credits, setCredits] = useState(false);
  
  const opencredits = ()=>{
    setCredits(true);
  }
  const playgame = () => {
    setMenu(false);
  }
  const closecredits = () => {
    setCredits(false);
  }
  const gotomenu = () => {
    setMenu(true);
  }
  
  return (
    <div className = 'rootdiv'>
      {menu? <Menu opencredits = {opencredits}  playgame = {playgame}/> : <Mainapp gotomenu = {gotomenu}/>}
      {credits? <Credits closecredits = {closecredits}/> : null}
    </div>
    
  );
}

export default App;
