import './App.css'; 
import myphoto23 from "./imgdata/me-profile-23.png";
import myphoto231 from "./imgdata/profile-elliptical.png";
import eeawo_photo from "./imgdata/eeawo-thumbnail-1.png"
import pe_photo from "./imgdata/pe-thumbnail-1.png"
import ggg_photo from "./imgdata/ggg-thumbnail-1.png"
import pirnn_photo from "./imgdata/pirnn-thumbnail-1.png"
import nutrez_photo from "./imgdata/nutrez-thumbnail-1.png"
import proj1photo from "./imgdata/441-proj-pic.png"
import proj2photo from "./imgdata/210-proj-pic.png"
import proj3photo from "./imgdata/301-proj-pic.png"

import 'react-multi-carousel/lib/styles.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import PDFPane from './PDFPane';
import CodeIcon from '@mui/icons-material/Code';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

import BasicAccordion from './MuiAccordion';

import * as React from 'react';
import BasicTabs from './TabLayout';
import SplashCard from './SplashCard';
import FliplessCard from './MinimalProjectCard';

import { TypeAnimation } from 'react-type-animation';
import AccordCourseCard from './AccordionCourseCard';
import { Typography } from '@mui/material';

function App() {

  const projectCarouselItems = [
    (<div class="d-flex align-items-center">
    <FliplessCard ProjectName="Parallelization of Inference on Recurrent Neural Networks"
              ProjectDesc="Research on implementation decisions that optimally negotiate the competing priorities of speed and accuracy in GPU-accelerated, parallelized speedups of the forward-pass of recurrent neural networks--a process that typically requires purely sequential execution layout for full correctness."
              ProjectSubtitle="Nov. - Dec. 2021 • C++, CUDA, Bash, R"
              ProjectLinks={<div style={{display: 'flex', flexFlow: 'row'}}> 
                            <CodeIcon /> &#160; <a href="https://github.com/onebuddingnerd/418_finalproject_code" style={{color:'white', whiteSpace: 'nowrap'}}> Source Code</a> &#160;•&#160; <SlideshowIcon /> &#160; <a href="https://onebuddingnerd.github.io/418-react/" style={{color:'white'}}> Research Showcase</a> </div>}
                            ProjectImg={<img src={pirnn_photo} class="img-responsive center-block" style={{maxWidth: '80%', width: '100%', height: 'auto', paddingTop: '10px', paddingBottom: '10px'}}/>}
      />
    </div>), 
    (<div>
      <FliplessCard ProjectName="GGG: Gamified Grocery Guessing" ProjectDesc="A GUI, with support for multiple profiles accessed by face-based authentication, that generates advice on (and offers gesture-based triggering of automated followup actions for) food purchases, informed by outputs from a custom-architected/-hyperparametrized model (a simple 3-layer linear transform) trained on a public dataset of millions of transactions at Aldi."
                  ProjectSubtitle="Feb. 2021 • Python, Bash"
                  ProjectLinks={<div style={{display: 'flex', flexFlow: 'row'}}> 
                  <CodeIcon /> &#160; <a href="https://github.com/onebuddingnerd/coolimagetech" style={{color:'white', whiteSpace: 'nowrap'}}> Source Code</a> &#160;•&#160; <SlideshowIcon /> &#160; <a href="https://github.com/onebuddingnerd/coolimagetech/blob/main/README.md" style={{color:'white'}}> Description & Usage</a> </div>}
                  ProjectImg={<img src={ggg_photo} class="img-responsive center-block" style={{maxWidth: '80%', width: '100%', height: 'auto', paddingTop: '10px', paddingBottom: '10px'}} />}
      />
    </div>),
    (<div>
     <FliplessCard ProjectName="Nutr-EZ Nutrition Aid" ProjectDesc="A webapp catering to students interested in pursuing optimal on-campus venues/offerings for their dietary parameters and fitness goals, featuring adaptive content aiming to best combine profile-specific details, user feedback, and data gathered by a bootstrapped apparatus for querying the college's dining webpages."
                  ProjectSubtitle="Sept. 2020 • Python3 (back-end + analytics), HTML/CSS (front-end)"
                  ProjectLinks={<div style={{display: 'flex', flexFlow: 'row'}}> 
                  <CodeIcon /> &#160; <a href="https://github.com/onebuddingnerd/HackCMU20_Final" style={{color:'white', whiteSpace: 'nowrap'}}> Source Code</a> &#160;•&#160; <SlideshowIcon /> &#160; <a href="https://devpost.com/software/nutr-ez-cdgm8p" style={{color:'white'}}> Project Submission</a> </div>}
                  ProjectImg={<img src={nutrez_photo} class="img-responsive center-block" style={{maxWidth: '80%', width: '100%', height: 'auto', paddingTop: '10px', paddingBottom: '10px'}}/>}
    />
    </div>),
    (<div >
    <FliplessCard ProjectName="Everything Everywhere All wat Once" ProjectDesc="A webapp tabulating basic business categorization and sentiment information on details of customer-affecting incidents, in addition to providing an expanded menu containing a live-chat interface with editable messages and content selections produced by generative models (invoked in real-time with ad-hoc tuning options and prompt ingestion available through APIs) on IBM's watsonx platform."
                  ProjectSubtitle="Aug. 2023 • Python3 (data-handling), Golang (middleware for using Watson APIs), React.js (front-end)"
                  ProjectLinks={<div style={{display: 'flex', flexFlow: 'row'}}> 
                  <SlideshowIcon /> &#160; <a href="https://drive.google.com/file/d/1yuh9uIq4eHaii8U3bYh-6UsixgOlmw2N/view?usp=sharing" style={{color:'white', whiteSpace: 'nowrap'}}> Project Video</a> </div>}
                  ProjectImg={<img src={eeawo_photo} class="img-responsive center-block" style={{maxWidth: '80%', width: '100%', height: 'auto', paddingTop: '10px', paddingBottom: '10px'}}/>}
    />
    </div>),
    (<div >
    <FliplessCard ProjectName="Tagging of Resources on IBM Cloud with Projects" ProjectDesc="An expository demonstration of the process for tagging resources provisioned in IBM Cloud with identifiers that associate them with &quot;Projects&quot;, which culminated an effort at IBM in 2023 to bring to the Cloud console new back-end functions to reorganize resources for clearer overviews on their billing and security details."
                  ProjectSubtitle="Dec. 2023 • React.js (front-end), Node.js and Go (back-end), and Bash and Python3 scripting (DevOps)"
                  ProjectLinks={<div style={{display: 'flex', flexFlow: 'row'}}> 
                  <SlideshowIcon /> &#160; <a href="https://drive.google.com/file/d/1_cy2Rjcs0l3E5VQNieEsRmAxFTTKZ9H5/view?usp=sharing" style={{color:'white'}}> Video </a> </div>}
                  ProjectImg={<img src={pe_photo} class="img-responsive center-block" style={{maxWidth: '80%', width: '100%', height: 'auto', paddingTop: '10px', paddingBottom: '10px'}}/>}
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

  const cvContentDiv = (
    <div style={{width: '100%%', paddingBottom: '20px'}}>
       <center>
        <hr width="90%" height='1px' border='1px' style={{'background-color': 'black'}} />  
        </center>

        <div style={{width: '100%%', paddingBottom: '20px'}}>
          <BasicAccordion
          heading={ <h4> <center> My CV <a href={require('./CV_online.pdf')}> ↓ </a> </center> </h4> }
            content={
              <>
                <center>
                  <div style={{width: '100%%', paddingBottom: '20px'}}>
                    <PDFPane />
                  </div>
                </center>
              </>
            }
          />
        </div>
    </div>
  );

  const basicCVContentDiv = (
    <div style={{ paddingBottom: '20px'}}>
        <PDFPane />
    </div>
  );

  const quickLinksContentDiv = (
    <>
        <center>
          <hr width="90%" height='1px' border='1px' style={{'background-color': 'black'}} />  
          <h2>
            <a href="https://www.linkedin.com/in/anupam-pokharel-onebuddingnerd/"> <LinkedInIcon style={{color: 'white', fontSize: 48}}/> </a> 
            <a href={require("./CV_online.pdf")}> <ContactPageIcon style={{color:'white', fontSize: 48}} /> </a> 
            <a href="https://github.com/onebuddingnerd"> <GitHubIcon style={{color: 'white', fontSize: 48}} /> </a> 
          </h2>
        </center>
    </>
  );

  const mkBootStrappedAdaptableDiv = (jsxContent, excludeLinks) => (
    <div style={{maxWidth: '1000px'}}>
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
      {!excludeLinks && quickLinksContentDiv}
    </div>
  );

  const aboutTabContentDiv = mkBootStrappedAdaptableDiv(
      <>
        <div class="container" height="100%" style={{maxWidth: '850px'}}>
          <div class="row" height="100%">
            <div class="col-lg-4 col-md-4 col-sm-12">
            
                <div class="d-flex align-items-center" style={{"min-height": "100%"}}>
                  <div class="col-md-12">
                    <center>
                    <img src={myphoto231} class="img-responsive center-block"/>
                    </center>
                  
                </div>
              </div>
              
              
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 align-items-center d-flex">
              <TypeAnimation 
                sequence={["Hi, I'm Anupam \"Anup\" Pokharel! I like learning about and building technology that innovatively enables or inspires its users to be creative", 1000, 
                "Hi, I'm Anupam \"Anup\" Pokharel! I like learning about and building technology that innovatively enables or inspires its users to be productive", 1000, 
                "Hi, I'm Anupam \"Anup\" Pokharel! I like learning about and building technology that innovatively enables or inspires its users to be entertained.", 1000]}
                speed={80}
                style={{fontSize: 28, fontFamily: 'Roboto, sans-serif', textAlign: "center"}}
                repeat={Infinity}
              />
            </div>
          </div>
          <br />
          <SplashCard
            heading="About"
            content={[
              "My upbringing was mostly set in Hokie town in southwest Virginia, where I lived throughout my primary and secondary schooling (save for a few years' summers spent in my parents hometowns in Nepal). I then moved to Pittsburgh, PA for my undergraduate studies and earned a B.S. in Statistics & Machine Learning from Carnegie Mellon University.",
              <br/>, <br/>, 
              "Currently, I work as a full stack software engineer at the Austin, TX location of IBM, where I develop, compose DevOps assets for, and contribute to release-readying of the ",
              <a href='https://www.ibm.com/cloud/cli'>Cloud CLI</a>,
              " (and its ",
              <a href='https://github.com/IBM-Cloud/ibm-cloud-cli-sdk'>SDK</a>,
              " for plug-ins). My responsibilities have expanded into a key development role in a recent initiative to streamline customers' experiences in resource provisioning and infrastructure management within IBM Cloud ", 
              <a href="https://www.ibm.com/blog/announcement/projects-and-cost-estimation/">Projects</a>, 
              ", and my tasks have touched on a wide range of the involved service stacks: augmenting back-end APIs and making tooling to facilitate use of them in service middleware, building webpages revised through several cycles of design feedback and internal testing, and assisting in some portions of the DevOps (namely, deployments of new images built with my team's codebase to pre-production computing environments) ahead of the rollout to customers.",
              <br/>, <br/>, 
              "Apart from work, I enjoy playing sports that have sorta unintentionally converged into a mono-thematic format of paddle/racquet-and-ball: table tennis, pickleball, and tennis are all my jams. Hiking is also an activity that I find to be refreshing and fun, but it has taken a back seat to other hobbies; one of the main reasons for that is my budding interest in dancing to music, which I am finding out the hard way is much greater learning curve away from karaoke (another favorite of mine, especially in cars) than I thought. When I'm in the mood for aerobically undemanding downtime, you'll probably find me reading (usually about financial markets, blockchain and its implementations like DeFi and Web3, neuroscience, nutrition, or new consumer tech), trying to build something (legos, choreo steps, or software), or watching a movie or some TV."
            ]}
          />
        </div>
      </>,
  false);

  const recentProjectsTabContentDiv = mkBootStrappedAdaptableDiv(
    <>
       <div class="container" height="100%" style={{maxWidth: '850px'}}>
          <h3> <center> A handful of projects, done solo and as a team </center> </h3>
          <br></br>
          
              {projectCarouselItems.map((item) => 
                <div style={{width: '100%%', paddingBottom: '20px'}}>
                  {item}
                </div>
              )}
      </div>
    </>,
  false);

  const courseDescriptionContentDiv = mkBootStrappedAdaptableDiv(
    <>
          <div class="container" height="100%" style={{maxWidth: '850px'}}>
            <h3> <center> A selection of my most memorable undergraduate coursework </center> </h3>
            <br/>
              <div style={{width: '100%%', paddingBottom: '20px'}}>
                <AccordCourseCard 
                  CourseNumber="15-441" CourseTitle="Networking and the Internet"
                  Desc="15-441 provided a thorough inquiry into the underpinnings of the internet. Course content started with foundational principles of robust and interoperable connectivity among dispersed endpoints, to contextualize algorithmic thinking within internet design paradigms like distance-vector routing, and then delved into the inner workings of each layer of the OSI model. The course's projects markedly leveled-up my skillset in highly intensive analysis at very low-levels of programs' control flows: they routinely entailed replicating and precisely altering large components of flagship protocols of the industry's state-of-the-art, like TCP, to deliver operational behavior meeting desirable network attributes (end-to-end correctness, congestion control, etc.). I particularly enjoyed that my prior learning of computer systems topics like multithreading, mutual exclusion, and lean memory management were maximally utilized in projects where correctness depended on well-reasoned and meticulous application of the relevant techniques."
                  FaveProject="...was an implementation of an adaptive bitrate proxy functioning as an intermediary for a server delivering video feeds to multiple clients at the highest qualities transmissible without delays, as constrained by real-time calculations of network throughput based on each active connection's round-trip. The project also pre-required use of an HTTP request handler with a parser, coded nearly from-scratch earlier in the course, to better control the exact pre-/post-conditions surrounding redirections to the proxy."
                  ProjectImg={
                    <img src={proj1photo} class="img-responsive center-block" style={{maxWidth: '80%', width: '100%', height: 'auto', paddingTop: '10px', paddingBottom: '10px'}} />
                  }
                  ImgCaption="A logical diagram of the entities involved in the operation of the proxy, which is positioned in the center"
                />
              </div>

              <div style={{width: '100%%', paddingBottom: '20px'}}>
                <AccordCourseCard 
                  CourseNumber="15-210" CourseTitle="Parallel and Sequential Data Structures and Algorithms"
                  Desc={["15-210's curriculum centered around in-depth analysis of computation tasks such as graph pathing optimization for opportunities to upgrade performance by parallel speedup (and the practical tradeoffs in overhead incurred in its pursuit). I learned a wide variety of algorithmic intuitions for achieving--and rigorously proving the mathematical soundness of--the best complexity class of implementation runtime (and ancillary work, e.g. optimal data-collating/-retrieval), for many frequently-encountered flavors of logical problems. This was also the highest-level course I took that had its programming exclusively in SML/NJ, a functional programming language that I developed an unexpected penchant for in this course's pre-requisite: but my experience as a doubter-turned-enthusiast is far from unique, as the course lectures steadfastly uphold the mantra that \"functions are values\" (check out the", <a href='http://www.cs.cmu.edu/~15150/faq.html'> bottom FAQ item</a>, ", xD) and convince students about the conceptual elegance of that central idea."]}
                  FaveProject="...was the creation of a program that performs &quot;seam-carving&quot; on an input image, enabling unequal downsizing across the vertical and horizontal dimensions with robust preservation of critical features and overall proportionality of pictured subjects/objects. It was fascinating that this process reduced to a traversal-minimization problem (based on the Bellman Ford algorithm) upon representing pixels as individual contributors of &quot;energy&quot;, quantitatively captured by finite-difference estimations of gradients, in an image."
                  ProjectImg={
                    <img src={proj2photo} class="img-responsive center-block" style={{maxWidth: '80%', width: '100%', height: 'auto', paddingTop: '10px', paddingBottom: '10px'}} />
                  }
                  ImgCaption="Graph states' progression in an example execution of the Bellman Ford algorithm"
                />
              </div>

              <div style={{width: '100%%', paddingBottom: '20px'}}>
                <AccordCourseCard 
                  CourseNumber="10-301" CourseTitle="Introduction to Machine Learning"
                  Desc="10-301 explored the flourishing research occurring at the intersection of statistical inference and computer science, starting with mechanistic teachings on basic classifiers such as the perceptron to lead to intuitions and concepts that are required for a technically-informed understanding of complex neural networks (and how to optimize implementations for compute-efficiency). It was very fulfilling to observe my caliber of grasp on the subject increase to ably keep up with the course material once it transitioned, towards the end, to more sophisticated gradient descent for high-dimensionality data and even emergent topics like model-free reinforcement learning. Additionally, because the course doubled as an offering in the graduate-level machine learning department, I interacted as a study-buddy with many more people than in other courses and, in doing so, enhanced my appreciation for the diversity of curiosities, approach angles, and explanation strategies that can be precursors to overcoming conceptual hurdles." 
                  FaveProject="...required me to execute Viterbi decoding to travel in the reverse direction of most prediction tasks (namely, generating guessed inputs given values of later computation stages of a model with hidden states) by way of accumulative max. likelihood estimation--which I had learned about in prior classes--operations. Additionally, I intellectually enjoyed the chances to apply lessons from 15-210's unit on dynamic programming, when devising a subproblem structure in the logic that resolved the likeliest sequence of hidden states."
                  ProjectImg={
                    <img src={proj3photo} class="img-responsive center-block" style={{maxWidth: '80%', width: '100%', height: 'auto', paddingTop: '10px', paddingBottom: '10px'}} />
                  }
                  ImgCaption="A snapshot of probabilities computed when formulating pathways for reversed traversal across neurons in the hidden layers of a sample RNN"
                />
              </div>

            </div>
        <br></br>
    </>,
  true);

  const cvPaneWithCouseContentDiv = (
    <div style={{overflowX: 'auto'}}>
      {courseDescriptionContentDiv}
      <h3> <center> My CV (<a href={require('./CV_online.pdf')}>download</a>) </center> </h3>
      <br />
      <PDFPane />
      {quickLinksContentDiv}
    </div>
  );

    return (
      <div class="App">
        <BasicTabs
          childJSX={[
            aboutTabContentDiv, recentProjectsTabContentDiv, cvPaneWithCouseContentDiv
          ]}
        />
      </div>
    )
}

export default App;
