import './Card.css'

import React, {useState} from "react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function SplashCard(props) {

    const {heading, content} = props;

    return (
      <div class="RootTab">
        <Card sx={{ minWidth: 275 }} class="RootTab" >
            <CardContent class="RootTab" >
                <Typography level="h3" variant="h5" component="div" style={{color: 'white'}}>
                {heading}
                </Typography>
                <br />
                <Typography level="body-lg" variant="body1" style={{color: 'white'}}>
                {content}
                <br />
                </Typography>
            </CardContent>
        </Card>
      </div>
    );
}