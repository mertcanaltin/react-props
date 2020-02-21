import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import User from "./components/User";

import './App.css';


class App extends Component {
render(){

 return (
   
    <div className="container">
  <Navbar title ="User App"/>
  <hr/>
  <User name ="Mert Can Altın" departman="Bilişim" maas="50"/>
  <User name ="Ceren Fatoş" departman="Bilişim" maas="5000"/>
  <User name ="Gizem" departman="Bilişim" maas="5000" izingun="cumartesi"/>

    </div>
  );
}
}
export default App;
