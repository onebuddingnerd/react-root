import './App.css'; 

import cv_ico from "./imgdata/cv-material.png"
import github_ico from "./imgdata/github-material.png"
import linkedin_ico from './imgdata/linkedin_icon.png';
// import myphoto from "./imgdata/possibleprofile_nocrop.jpeg";
import myphoto23 from "./imgdata/profile-portfolio-candidate.jpeg";
import CardDiv from './CardDiv'
// import CarouselSlider from "react-carousel-slider";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import PDFPane from './PDFPane';
import MediaCardForCourse from './MuiCardDiv';
import internet_ico from './imgdata/wallpaper-15441-card.jpeg'
import dsalgo_ico from './imgdata/icon-15210-card.jpeg'
import nnet_ico from './imgdata/icon-10301-card.jpeg'

import BasicAccordion from './MuiAccordion';

import * as React from 'react';
import BasicTabs from './TabLayout';
import SplashCard from './SplashCard';

import { TypeAnimation } from 'react-type-animation';

// import React, { useState } from "react";
// import Toggle from "react-toggle";

function App() {

  const projectCarouselItems = [
    (<div>
    <CardDiv ProjectName="Parallelization of Inference on Recurrent Neural Networks" 
      ProjectDesc="Research on implementation decisions that optimally negotiate the competing priorities of speed and accuracy in GPU-accelerated, parallelized speedups of the forward-pass of recurrent neural networks--a process that typically requires purely sequential execution layout for full correctness." 
              linksContent="Source code (Github), Research showcase (Github Pages)" 
              flipContent={[<b style={{color:"white"}}>When:</b>, 
              <p style={{color:"white"}}> • Nov. - Dec. 2021</p>,  
              <b style={{color:"white"}}>Implemented in:</b>,
              <p style={{color:"white"}}> • C++, CUDA, Bash, R</p>,
              <b style={{color:"white"}}>Links:</b>,
              <p style={{color:"white"}}> • <a href="https://github.com/onebuddingnerd/418_finalproject_code" style={{color: 'purple'}}>Source Code</a> <br/> 
              • <a href="https://onebuddingnerd.github.io/418-react/" style={{color: 'purple'}}> Research Showcase</a> </p>]}
    />
    </div>), 
    (<div>
      <CardDiv ProjectName="GGG: Gamified Grocery Guessing" ProjectDesc="A GUI, with support for multiple profiles accessed by face-based authentication, that generates advice on (and offers gesture-based triggering of automated followup actions for) food purchases, informed by outputs from a custom-architected/-hyperparametrized model (a simple 3-layer linear transform) trained on a public dataset of millions of transactions at Aldi."
                  linksContent="Source code (Github), Technical Summary (Github)"
                  flipContent={[<b style={{color:"white"}}>When:</b>, 
                  <p style={{color:"white"}}> • Feb. 2021</p>,  
                  <b style={{color:"white"}}>Implemented in:</b>,
                  <p style={{color:"white"}}> • Python, Bash</p>,
                  <b style={{color:"white"}}>Links:</b>,
                  <p style={{color:"white"}}> • <a href="https://github.com/onebuddingnerd/coolimagetech" style={{color: 'purple'}}>Source Code</a> <br/> 
                  • <a href="https://github.com/onebuddingnerd/coolimagetech/blob/main/README.md" style={{color: 'purple'}}> Project Description and Usage</a></p>]}
      />
    </div>),
    (<div>
    <CardDiv ProjectName="Nutr-EZ Nutrition Aid" ProjectDesc="A webapp catering to students interested in pursuing optimal on-campus venues/offerings for their dietary parameters and fitness goals, featuring adaptive content aiming to best combine profile-specific details, user feedback, and data gathered by a bootstrapped apparatus for querying the college's dining webpages."
                linksContent="Source code (Github), Submission Exhibition for HackCMU (Devpost)" 
                flipContent={[<b style={{color:"white"}}>When:</b>, 
                      <p style={{color:"white"}}> • Sept. 2020</p>,  
                      <b style={{color:"white"}}>Implemented in:</b>,
                      <p style={{color:"white"}}> • Python (back-end + analytics), HTML/CSS (front-end)</p>,
                      <b style={{color:"white"}}>Links:</b>,
                      <p style={{color:"white"}}> • <a href="https://github.com/onebuddingnerd/HackCMU20_Final" style={{color: 'purple'}}>Source Code</a>  <br/> 
                      • <a href="https://devpost.com/software/nutr-ez-cdgm8p" style={{color: 'purple'}}> Project Demo (Devpost)</a> </p>]}
    />
    </div>),
    (<div >
    <CardDiv ProjectName="Everything Everywhere All wat Once" ProjectDesc="A webapp tabulating basic business categorization and sentiment information on details of incidents, in addition to providing an expanded menu containing a live-chat interface with editable message selections produced by generative models (invoked in real-time with ad-hoc tuning options and prompt ingestion available through APIs) on IBMs watsonx platform"
                linksContent="Source code (Github), Submission Exhibition for HackCMU (Devpost)" 
                flipContent={[<b style={{color:"white"}}>When:</b>, 
                      <p style={{color:"white"}}> • Aug. 2023</p>,  
                      <b style={{color:"white"}}>Implemented in:</b>,
                      <p style={{color:"white"}}> • Python (data-handling), Golang (invoking Watson APIs through a custom middleware layer)</p>,
                      <p style={{color:"white"}}> • React.js (front-end)</p>,
                      <b style={{color:"white"}}>Links:</b>,
                      <p style={{color:"white"}}> • <a href="https://github.com/onebuddingnerd/HackCMU20_Final" style={{color: 'purple'}}>Project Video</a> </p>]}
    />
    </div>),
    (<div >
    <CardDiv ProjectName="Installing Pixel Software on Non-Pixel Devices" ProjectDesc="A video and written guide on altering the bootloader, installing a flashed recovery program on a temporary partition reversed later in the process, and overwriting OS files with those of a &quot;vanilla&quot; Android developed by community contributors (and distributed as &quot;Pixel Experience&quot;), for use with Android smartphones not manufactured by Google."
                linksContent="Source code (Github), Submission Exhibition for HackCMU (Devpost)" 
                flipContent={[<b style={{color:"white"}}>When:</b>, 
                      <p style={{color:"white"}}> • Jun. 2020</p>,  
                      <b style={{color:"white"}}>Implemented in:</b>,
                      <p style={{color:"white"}}> • Text editor and iMovie ☺ </p>,
                      <b style={{color:"white"}}>Links:</b>,
                      <p style={{color:"white"}}> • <a href="https://www.youtube.com/watch?v=QBssO73E1LI" style={{color: 'purple'}}> Video </a> <br/> 
                      • <a href="https://drive.google.com/file/d/1lIRUpUrC35QE2A7MI9nK-N1MspzZ0td6/view" style={{color: 'purple'}}> Written Instructions </a> </p>]}
    />
    </div>)
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const cvAndQuicklinksContentDiv = (
    <>
       <center>
        <hr width="90%" height='1px' border='1px' style={{'background-color': 'black'}} />  
        </center>

        <BasicAccordion
         heading={ <h4> <center> My CV <a href={require('./CV_online.pdf')}> ↓ </a> </center> </h4> }
          content={
            <>
              <center>
                <PDFPane />
                </center>
            </>
          }
        />
        <center>
          <hr width="90%" height='1px' border='1px' style={{'background-color': 'black'}} />  
          <h2>
            <a href="https://www.linkedin.com/in/anupam-pokharel-onebuddingnerd/"><img src={linkedin_ico} style={{width:"48px"}} /></a> 
            <a href={require("./CV_online.pdf")}> <img src={cv_ico} style={{width:"48px"}} /></a> 
            <a href="https://github.com/onebuddingnerd"><img src={github_ico} style={{width:"48px"}} /></a> 
          </h2>
        </center>
    </>
  );

  const mkBootStrappedAdaptableDiv = (jsxContent) => (
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
      {jsxContent}
      {cvAndQuicklinksContentDiv}
    </div>
  );

  const aboutTabContentDiv = mkBootStrappedAdaptableDiv(
      <>
        
        <div class="container" height="100%">
          <div class="row" height="100%">
            <div class="col-lg-4 col-md-12 col-sm-12">
            
                <div class="d-flex align-items-center" style={{"min-height": "100%"}}>
                  <div class="col-md-12">
                    <center>
                    <img src={myphoto23} class="img-responsive center-block"/>
                    </center>
                  
                </div>
              </div>
              
              
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
              <br />
              <br />
              <TypeAnimation 
                sequence={["Hi, I'm Anupam \"Anup\" Pokharel! I like learning about and building technology that innovatively inspires or enables its users to be creative", 1000, 
                "Hi, I'm Anupam \"Anup\" Pokharel! I like learning about and building technology that innovatively inspires or enables its users to be productive", 1000, 
                "Hi, I'm Anupam \"Anup\" Pokharel! I like learning about and building technology that innovatively inspires or enables its users to be entertained.", 1000]}
                speed={80}
                style={{fontSize: 36, textAlign: "center"}}
                repeat={Infinity}
              />
            </div>
          </div>
          <br />
          <SplashCard heading="Education"
                  content="I earned a B.S. in Statistics &#38; Machine Learning in December 2021 from Carnegie Mellon University."
                /> <br/>
          <SplashCard heading="Work" 
                  content={[
                    "Currently, I work as a full stack software engineer at the Austin, TX location of IBM, where I develop, compose DevOps assets for, and contribute to release-readying of the ",
                    <a href='https://www.ibm.com/cloud/cli'>Cloud CLI</a>,
                    " (and its ",
                    <a href='https://github.com/IBM-Cloud/ibm-cloud-cli-sdk'>SDK</a>,
                    " for plug-ins). My responsibilities have expanded into a key development role in a recent initiative to streamline customers' experiences in resource provisioning and infrastructure management within the \"IBM Cloud Projects\" product offering, and my tasks have touched on a wide range of the involved service stacks (from tooling serving as middleware for interfacing with newly-unveiled APIs, to front-end coding for webpages hosting the UI for upcoming product features). ",
                  ]}
                /> <br/>

          <SplashCard heading="A Few of my Non-Vocational Interests:" 
            content={(
              <p> - Playing table tennis xor hiking -- kinda alternates in phases <br/> - Reading, usually about financial markets, blockchain (and implementations like DeFi and Web3), neuroscience, nutrition, or new consumer tech <br/> - Dancing and listening to music </p>
            )}
          /> <br/>
        </div>
      </>
  );

  const recentProjectsTabContentDiv = mkBootStrappedAdaptableDiv(
    <>
        <h3> <center> Some recent projects </center> </h3>
        <center><h5>A handful of endeavors, done solo and as a team:</h5> </center>
        <br></br>
        

        <div class="scrollContainer" style={{"height": "100%"}}>

            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >
            {projectCarouselItems.map((item) => 
              <div>
                {item}
              </div>
            )}
            </Carousel>

        </div>

        <br/>
    </>
  );

  const courseDescriptionContentDiv = mkBootStrappedAdaptableDiv(
    <>
        
        <h3> <center> More about my Education </center> </h3>
        <center><h5>A selection of my most memorable undergrad coursework:</h5> </center>
        <div class="scrollContainer">
          {/* <style>{divCssContainer}</style> */}
          <div class="container" style={{"height": "100%"}}>
            <br/>
            <div class="row" height="100%">
              <div class="col-lg-4 col-md-12 col-sm-12">
                <MediaCardForCourse 
                  CourseNumber="15-441" CourseTitle="Networking and the Internet" mediaSrc={internet_ico}
                  Desc="15-441 provided a thorough inquiry into the underpinnings of the internet. Course content started with foundational principles of robust and interoperable connectivity among dispersed endpoints, to contextualize algorithmic thinking within internet design paradigms like distance-vector routing, and then delved into the inner workings of each layer of the OSI model. The course's projects markedly leveled-up my skillset in highly intensive analysis at very low-levels of programs' control flows: they routinely entailed replicating and precisely altering large components of flagship protocols of the industry's state-of-the-art, like TCP, to deliver operational behavior meeting desirable network attributes (end-to-end correctness, congestion control, etc.). I particularly enjoyed that my prior learning of computer systems topics like multithreading, mutual exclusion, and lean memory management were maximally utilized in projects where correctness depended on well-reasoned and meticulous application of the relevant techniques."
                  FaveProject="...was an implementation of an adaptive bitrate proxy functioning as an intermediary for a server delivering video feeds to multiple clients at the highest qualities transmissible without delays, as constrained by real-time calculations of network throughput based on each active connection's round-trip. The project also pre-required use of an HTTP request handler with a parser, coded nearly from-scratch earlier in the course, to better control the exact pre-/post-conditions surrounding redirections to the proxy."
                />
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12">
                <MediaCardForCourse 
                  CourseNumber="15-210" CourseTitle="Parallel and Sequential Data Structures and Algorithms" mediaSrc={dsalgo_ico}
                  Desc={["15-210's curriculum centered around in-depth analysis of computation tasks such as graph pathing optimization for opportunities to upgrade performance by parallel speedup (and the practical tradeoffs in overhead incurred in its pursuit). I learned a wide variety of algorithmic intuitions for achieving--and rigorously proving the mathematical soundness of--the best complexity class of implementation runtime (and ancillary work, e.g. optimal data-collating/-retrieval), for many frequently-encountered flavors of logical problems. This was also the highest-level course I took that had its programming exclusively in SML/NJ, a functional programming language that I developed an unexpected penchant for in this course's pre-requisite: but my experience as a doubter-turned-enthusiast is far from unique, as the course lectures steadfastly uphold the mantra that \"functions are values\" (check out the", <a href='http://www.cs.cmu.edu/~15150/faq.html'> bottom FAQ item</a>, ", xD) and convince students about the conceptual elegance of that central idea."]}
                  FaveProject="...was the creation of a program that performs &quot;seam-carving&quot; on an input image, enabling unequal downsizing across the vertical and horizontal dimensions with robust preservation of critical features and overall proportionality of pictured subjects/objects. It was fascinating that this process reduced to a traversal-minimization problem (based on the Bellman Ford algorithm) upon representing pixels as individual contributors of &quot;energy&quot;, quantitatively captured by finite-difference estimations of gradients, in an image."
                />
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12">

                <MediaCardForCourse 
                  CourseNumber="10-301" CourseTitle="Introduction to Machine Learning" mediaSrc={nnet_ico}
                  Desc="10-301 explored the flourishing research occurring at the intersection of statistical inference and computer science, starting with mechanistic teachings on basic classifiers such as the perceptron to lead to intuitions and concepts that are required for a technically-informed understanding of complex neural networks (and how to optimize implementations for compute-efficiency). It was very fulfilling to observe my caliber of grasp on the subject increase to ably keep up with the course material once it transitioned, towards the end, to more sophisticated gradient descent for high-dimensionality data and even emergent topics like model-free reinforcement learning. Additionally, because the course doubled as an offering in the graduate-level machine learning department, I interacted as a study-buddy with many more people than in other courses and, in doing so, enhanced my appreciation for the diversity of curiosities, approach angles, and explanation strategies that can be precursors to overcoming conceptual hurdles." 
                  FaveProject="...required me to execute Viterbi decoding to travel in the reverse direction of most prediction tasks (namely, generating guessed inputs given values of later computation stages of a model with hidden states) by way of accumulative max. likelihood estimation--which I had learned about in prior classes--operations. Additionally, I intellectually enjoyed the chances to apply lessons from 15-210's unit on dynamic programming, when devising a subproblem structure in the logic that resolved the likeliest sequence of hidden states."
                />
                
              </div>
            </div>
            </div>
          </div>
        <br></br>
    </>
  );

    return (
      // <>
      //   {aboutTabContentDiv}
      //   {recentProjectsTabContentDiv}
      //   {courseDescriptionContentDiv}
      //   {cvAndQuicklinksContentDiv}
      // </>
      <div class="App">
        <BasicTabs
          childJSX={[
            aboutTabContentDiv, recentProjectsTabContentDiv, courseDescriptionContentDiv
          ]}
        />
      </div>
    )

}

export default App;
