
import React, { useState } from "react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/joy/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import project1img from "./imgdata/441-proj-pic.png"
  
export default function AccordCourseCard (props) {

    const {CourseNumber, CourseTitle, Desc, FaveProject, ProjectImg, ImgCaption} = props;
    const CourseName = '' + CourseNumber + ': ' + CourseTitle

    const captionedImg = ({ img, caption }) => {
        return (
            <div style={{ textAlign: 'center' }}>
                {/*<img src={src} alt="Your Image" style={{ display: 'block', margin: '0 auto' }} />*/}
                {img}
                <p style={{ fontStyle: 'italic' }}>{caption}</p>
            </div>
        );
    };

    return (
        <Card>
            <Typography level="h3" variant="h5" component="div" style={{color: 'white'}}> {CourseName} </Typography>
            <CardContent>
                <Accordion defaultExpanded={false} style={{backgroundColor: 'inherit'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography level="h4" variant="h6" component="div" style={{color: 'white'}}>
                        Why I liked it:
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                        {Desc}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded={true} style={{backgroundColor: 'inherit'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography level="h4" variant="h6" component="div" style={{color: 'white'}}>
                        My favorite course project ... 
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <div class="row" height="100%">
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                                {FaveProject}
                            </Typography>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 align-items-center d-flex justify-content-center">
                            <div style={{ textAlign: 'center' }}>
                                <br />
                                {ProjectImg}
                                <br />
                                <p style={{ fontStyle: 'italic', color: 'white', fontSize: 12}}>{ImgCaption}</p>
                                <br />
                            </div>
                        </div>
                    </div>
                    </AccordionDetails>
                </Accordion>
            
            </CardContent>
        </Card>
    )
}