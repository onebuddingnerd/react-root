
import React, { useState } from "react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
  
export default function FliplessCard (props) {
    const {ProjectName, ProjectDesc, ProjectSubtitle, ProjectLinks, ProjectImg} = props;

    return (
        <Card>
            <CardContent>
                <Typography level="h3" variant="h5" component="div" style={{color: 'white'}}>
                    {ProjectName}
                </Typography>
                <Typography sx={{fontStyle: 'italic'}} level="body-md" variant="body1" style={{color: 'white'}}>
                    {ProjectSubtitle}
                </Typography>
                <div class="row" height="100%">
                    <div class="col-lg-8 col-md-8 col-sm-12">
                        <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                            {ProjectDesc}
                        </Typography>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 align-items-center d-flex justify-content-center">
                        {ProjectImg}
                    </div>
                </div>
                <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                    {ProjectLinks}
                </Typography>
            </CardContent>
        </Card>
    )
}