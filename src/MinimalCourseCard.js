
import React, { useState } from "react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
  
export default function MinCourseCard (props) {
    const {CourseNumber, CourseTitle, Desc, FaveProject} = props;

    return (
        <Card>
            <CardContent>
                <Typography level="h3" variant="h5" component="div" style={{color: 'white'}}>
                    {CourseNumber} : {CourseTitle}
                </Typography>
                {/* <Typography sx={{fontStyle: 'italic'}} level="body-md" variant="body1" style={{color: 'white'}}>
                    {ProjectSubtitle}
                </Typography> */}
                <Typography level="h4" variant="h5" component="div" style={{color: 'white'}}>
                    Why I liked it:
                </Typography>
                <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                    {Desc}
                </Typography>
                <Typography level="h4" variant="h5" component="div" style={{color: 'white'}}>
                    My favorite project ...
                </Typography> 
                <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                    {FaveProject}
                </Typography>
            </CardContent>
        </Card>
    )
}