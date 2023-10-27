import React, {useState} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RevisedProjectCard(props) {

    const {heading, content} = props;

    return (
      <div class="RootTab">
        <Card sx={{ minWidth: 275 }} class="RootTab">
            <CardContent class="RootTab">
                <Typography variant="h5" component="div">
                {heading}
                </Typography>
                <br />
                <Typography variant="body1">
                {content}
                <br />
                </Typography>
            </CardContent>
        </Card>
      </div>
    );
}