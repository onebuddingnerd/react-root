import logo from './logo.svg';
import './App.css';

import cv_ico from "./imgdata/cv-material.png"
import home_ico from "./imgdata/home-material.png"
import github_ico from "./imgdata/github-material.png"

function App() {
  return (
    <div>
    <h1>Currently in development</h1>
    
        <p>This webpage will be up and running soon. In the meantime, please feel free to take a look at my <a href={require("./filesdata/CV_online.pdf")}>CV</a> </p>
        <p>&mdash; Anupam Pokharel a.k.a. <a href="https://github.com/onebuddingnerd"> onebuddingnerd </a> </p>
        <br/><br/>
        <center>
        <h2>
          <a href="https://onebuddingnerd.github.io/react-root"><img src={home_ico}/></a> 
          <a href={require("./filesdata/CV_online.pdf")}> <img src={cv_ico}/></a> 
          <a href="https://github.com/onebuddingnerd"><img src={github_ico}/></a> 
        </h2>
        </center>
    </div>
  );
}

export default App;
