import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import BasicModal from './MuiModal';

export default function MediaCardForCourse(props) {
  const {mediaSrc, CourseNumber, CourseTitle, isClassCard, 
            Desc, FaveProject, ProjectName, ProjectDesc} = props;
  
  const [leftButtonOpen, setLeftButtonOpen] = React.useState(false);
  const handleLeftButtonOpen = () => setLeftButtonOpen(true);
  const handleLeftButtonClose = () => setLeftButtonOpen(false);

  const [rightButtonOpen, setRightButtonOpen] = React.useState(false);
  const handleRightButtonOpen = () => setRightButtonOpen(true);
  const handleRightButtonClose = () => setRightButtonOpen(false);

  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={mediaSrc}
        title={CourseTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {CourseNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {CourseTitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLeftButtonOpen}>Why I liked it </Button>
        <Button size="small" onClick={handleRightButtonOpen}>My favorite course assignment ... </Button>
      </CardActions>
      <BasicModal 
        openStatus={leftButtonOpen}
        closeHandler={handleLeftButtonClose}
        modalTitle='Why I liked it'
        modalContent={Desc}
      />
      <BasicModal 
        openStatus={rightButtonOpen}
        closeHandler={handleRightButtonClose}
        modalTitle='My favorite course assignment ...'
        modalContent={FaveProject}
      />
    </Card>
  );
}