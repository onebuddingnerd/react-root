
import React, { useState } from "react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
  
export default function FliplessCard (props) {
    const {ProjectName, ProjectDesc, ProjectSubtitle, ProjectLinks} = props;

    return (
        <Card>
            <CardContent>
                <Typography level="h3" variant="h5" component="div" style={{color: 'white'}}>
                    {ProjectName}
                </Typography>
                <Typography sx={{fontStyle: 'italic'}} level="body-md" variant="body1" style={{color: 'white'}}>
                    {ProjectSubtitle}
                </Typography>
                <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                    {ProjectDesc}
                </Typography>
                <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                    {ProjectLinks}
                </Typography>
            </CardContent>
        </Card>
    )
}