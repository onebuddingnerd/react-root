import logo from './logo.svg';
import './App.css'; 

import cv_ico from "./imgdata/cv-material.png"
import home_ico from "./imgdata/home-material.png"
import github_ico from "./imgdata/github-material.png"
import myphoto from "./imgdata/possibleprofile_nocrop.jpeg"
// import { Divider } from 'rsuite';

import ClassDescDiv from './ClassDescDiv';

import './bootstrap-custom.scss';

function App() {
  
  return (
    
    <div>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <link
        rel="stylesheet"
        href=
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  
      <script src=
      "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
      </script>
      <script src=
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js">
      </script>
      <script src=
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js">
      </script>

        <link href=
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"/>
        <center> <h1>Hi, I'm Anup!</h1> 
        <hr class="rounded" width="90%" /> 
        </center>
        
         <h3> <center> A Quickstart on Me! </center> </h3>
        
        <div class="container" height="100%">
          <div class="row" height="100%">
            <div class="col-lg-4 col-md-12 col-sm-12">
            
                <div class="d-flex align-items-center" style={{"min-height": "100%"}}>
              {/*<div class="container"> */}
                  <div class="col-md-12">
                    <center>
                    <img src={myphoto} class="img-responsive center-block"/>
                    </center>
                  
                </div>
              </div>
              
              
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
              <div width="50vw">
                <br/>
                <p> <b><i> Intro: </i></b>  My name is Anupam "Anup" Pokharel. I like learning about and building technology that innovatively inspires or enables its users to be creative, productive, or entertained.  </p>

                <p> <b><i> Education: </i></b> I earned a B.S. in Statistics &#38; Machine Learning in December 2021 from Carnegie Mellon University.</p>

                <p> <b><i> Work: </i></b> Currently, I work as a full stack software engineer at the Austin, TX location of IBM, where I mainly develop and contribute to release preparation for the company's Cloud CLI.</p>

                <p> <b> <i> A Few of My Non-Vocational Interests: </i> </b> <ul> <li> Playing table tennis </li>
                      <li> Reading, usually about financial markets, blockchain (and implementations like DeFi and Web3), and neuroscience (esp. BCI)</li>
                      <li> Dancing and choreographing </li>
                    </ul> </p>
              </div>
            </div>
          </div>
        </div>

        <center> <hr class="rounded" width="90%" /> </center>
        <h3> <center> More about my Education </center> </h3>
        <center><h5>A selection of my most memorable undergrad coursework:</h5> </center>
        <div class="container">
          <br/>
          <div class="row" height="100%">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <ClassDescDiv Name="15-441: Networking and the Internet" 
              Desc="15-441 provided thorough inquiry into the underpinnings of the internet. Course content started with foundational principles of robust connectivity among data dispersed data, to contextualize algorithmic thinking within internet design paradigms like distance-vector routing, and delved into the inner workings of each layer of the OSI model. Projects demanded rigorous low-level analysis in replicating and precisely altering large components of flagship protocols of the industry's state-of-the-art, like TCP, to deliver operational behavior meeting desirable network attributes (end-to-end correctness, congestion control, etc.)." 
              Project="...was an implementation of an adaptive bitrate proxy functioning as an intermediary for a server delivering video feeds to multiple clients at the highest respective qualities transmissible without delays, as calculated by real-time observations of network throughput. The project also pre-required use of an HTTP parser, coded nearly from-scratch earlier in the course, to fully control the processing of requests and responses." />
            </div>

            <div class="col-lg-4 col-md-12 col-sm-12">
              <ClassDescDiv Name="15-210: Parallel and Sequential Data Structures and Algorithms" 
              Desc="15-210's curriculum chiefly involved rigorous analysis of computation tasks such as graph pathing optimization for opportunities to upgrade performance by parallel speedup (and the practical tradeoffs in overhead incurred in its pursuit). I learned a wide variety of algorithmic intuitions for achieving--and robustly proving the mathematical soundness of--the best complexity class of implementation runtime (and ancillary work, e.g. optimal data-collating/-retrieval), for many frequently-encountered flavors of logical problems." 
              Project="...was the creation of an image scaler that performs &quot;seam-carving&quot; on an image, enabling downsizing across either the vertical or horizontal dimension with robust preservation of critical features and overall proportionality of pictured subjects/objects. It was fascinating that this process reduced to a traversal-minimization problem (based on the Bellman Ford algorithm) upon representing pixels as individual contributors of &quot;energy&quot; in an image." />
            </div>

            <div class="col-lg-4 col-md-12 col-sm-12">
              <ClassDescDiv Name="10-301: Introduction to Machine Learning" 
              Desc="10-301 explored the flourishing research occurring at the intersection of statistical inference and computer science, starting with the mechanistic teachings on basic classifiers such as the perceptron and gradually accumulating intuitions and concepts to impart to students a thorough understanding of complex neural networks (and how to optimize implementations for compute-efficiency). Course content then transitioned to nuances of sophisticated gradient descent for high-dimensionality data and even emergent topics like model-free reinforcement learning." 
              Project="...required me to execute Viterbi decoding to travel in the reverse direction of most prediction tasks (namely, generating guessed inputs given values of later computation stages of a convolutional model) by way of successive MLE--which I had learned about in prior classes--operations. Additionally, it was intellectually enriching to deploy some of the insights in devising an optimal subproblem structure that I had learned in 15-210's teachings in dynamic programming." />
            </div>

          </div>
        </div>
        <br></br>

        <center> <hr class="rounded" width="90%" /> </center>
        <h3> <center> Projects </center> </h3>
        <br></br>
        <center><b><i></i></b> </center>
        <div class="container">
          <div class="row" height="100%">
          </div>
        </div>
        <br></br>

        <center>
        <hr class="rounded" width="90%" /> 
        <h2>
          <a href="https://onebuddingnerd.github.io/react-root"><img src={home_ico} style={{width:"auto"}} /></a> 
          <a href={require("./filesdata/CV_online.pdf")}> <img src={cv_ico} style={{width:"auto"}} /></a> 
          <a href="https://github.com/onebuddingnerd"><img src={github_ico} style={{width:"auto"}} /></a> 
        </h2>
        </center>
      
        

    </div>
  );
}

export default App;
