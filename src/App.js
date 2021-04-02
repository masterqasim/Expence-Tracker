
import './App.css';
import Header  from "./components/Header";
import imgs from './images/expenceTrackerBg.png'

function App() {
  return (
    <div className="App">
  
        <h1 style={{textAlign:'center'}}>Expence tracker app</h1>
    <div style={{display:'flex',justifyContent:'space-evenly',}}>
      <div style={{marginTop:'60px'}}>
        <Header/>
      </div>
      <div className="bgimg">
        <img src={imgs} height='500vh' width="600vw"/>
      </div>
    </div>    
    </div>
  );
}

export default App;
