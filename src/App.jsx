import React, { Profiler } from "react";
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
import Counter, { Login } from "./components/State.jsx";
import Userprofile from "./components/Profile.jsx";
import FormData from "./components/Form.jsx";
import MultipleFormInput from "./components/Form.jsx";
import UncontrolledForm from "./components/uncontrolledForm.jsx";
import Counters from "./components/UseEffect.jsx";
import Navbar from "./components/navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import LogIn from "./components/Login.jsx";
import { UserProvider } from "./components/Context.jsx";

import DashBoard from "./components/Dashboard.jsx";
function App() {

  
  return (
   
  //  <Router>
  //   <Navbar/>
  //   <DashBoard/>
  //   <Routes>
  //     <Route path= '/' element={<Counters/>}/>
  //     <Route path= '/Profile' element={<Userprofile/>}/>
  //     <Route path= '/Form' element={<MultipleFormInput/>}/>
    
    
  //  {/* <h1>Javascript capstone</h1>
  //  <p>Presentation tomorrow</p> */}

  //   {/* <AnotherComponent/> 
  //   <MyComponent/>
  //   <Test1/>
  //   <Test2/>
  //   <Test3/> 
  //   <Greeting/>
  //   <Drive/>
  //   <Greetings occupation="Singer"/>
  //   <Details />
    
    
  //   <Greet name="Ian"/>
  //   <ParentComponent/>
  //   <Submit/>
  //   <PackingList/>
  //   <LiveInputDisplay/> 
  //  <Counter/>
  //   <Login/>
  //   <Userprofile/>
  //   <MultipleFormInput/> 
  //   <UncontrolledForm/> */}
  //   {/* <Counters/> */}
    
  //   </Routes>
  //   </Router>
  <UserProvider>
  <Profile/>
  <Login/>
  </UserProvider>
  )
}

export default App
