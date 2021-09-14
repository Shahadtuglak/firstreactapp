import Header from "./components/Header";
import Section from './components/Section';
import Greet from './components/Greet';
import Welcome from "./components/Welcome";
import Message from "./components/message";
import "./App.css";
import Counter from "./components/Counter";
import Functionclick from "./components/Functionclick";
import Classclick from "./components/Classclick";
import Eventbind from "./components/Eventbind";
import Test from "./components/Test";

import Usergreeting from "./Usergreeting";
import Personlist from "./components/Personlist";

function App() {
  return(
    <div className="App">
      <Header/>
      {/* <Test/> */}
      <Personlist/>
      {/* <Usergreeting/> */}
   
     
      {/* <Functionclick/> */}
      {/* <Classclick/> */}

      {/* <Eventbind/> */}


      {/* <Message/> */}
      
      {/* <Counter/>
      <Greet name="Shahad" age="20" >
        <p>Web Developer</p>
      </Greet> */}
    {/* <Greet name="Aman" age="26"/>
      <Greet name="babbar" age="28"/>


      <Welcome name="Anuj" />
     
     <Message/> 
      <Section/> */}
    </div>
   
  )
}

export default App;




