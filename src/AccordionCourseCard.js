
import React, { useState } from "react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  
export default function AccordCourseCard (props) {
    const {CourseNumber, CourseTitle, Desc, FaveProject} = props;
    const CourseName = '' + CourseNumber + ': ' + CourseTitle

    return (
        <Card>
             <Typography level="h3" variant="h5" component="div" style={{color: 'white'}}> {CourseName} </Typography>
            <CardContent>
                <Accordion defaultExpanded={false} className="RootTab">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography level="h4" variant="h5" component="div" style={{color: 'white'}}>
                        Why I liked it
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                        {Desc}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded={true} className="RootTab">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography level="h4" variant="h5" component="div" style={{color: 'white'}}>
                        My favorite course project ... 
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                        {FaveProject}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            
            </CardContent>
        </Card>
    )
}