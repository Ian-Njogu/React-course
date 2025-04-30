import React from "react";
import  {Text1, Text2} from './components/anotherComponent.jsx';
import  {MyComponent, AnotherComponent} from './components/MyComponent.jsx';
import  Test3,  {Test1, Test2} from './components/test.jsx';
import Greeting from './components/Expressions.jsx';
import Drive from "./components/test2.jsx";
import Start from "./components/children2.jsx";
import Greet from "./components/Class.jsx";
import Greetings from "./components/Props.jsx";
import Details from "./components/Details.jsx";
import ParentComponent from "./components/Parent.jsx";
import Submit from "./components/FormSubmit.jsx";
import PackingList from "./components/PackingList.jsx";
import LiveInputDisplay from "./components/display.jsx";
import Counter from "./components/State.jsx";
function App() {


  return (
   <>
    {/* <h1>Javascript capstone</h1>
    <p>Presentation tomorrow</p>

    <AnotherComponent/> 
    <MyComponent/>
    <Test1/>
    <Test2/>
    <Test3/> */}
    {/* <Greeting/> */}
    <Drive/>
    <Greetings occupation="Singer"/>
    <Details />
    
    
    <Greet name="Ian"/>
    <ParentComponent/>
    <Submit/>
    <PackingList/>
    <LiveInputDisplay/> 
    <Counter/>
    </>
  )
}

export default App
