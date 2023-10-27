import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fontSize } from '@mui/system';

export default function BasicAccordion(props) {
  const {heading, content, startsExpanded} = props;

  return (
    <div class="RootTab" style={{width: "100%", paddingLeft: "5%", paddingRight: "5%"}}>
      <Accordion defaultExpanded={startsExpanded}>
        <AccordionSummary class="RootTab"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize: 24}}> <b> {heading} </b></Typography>
        </AccordionSummary>
        <AccordionDetails class="RootTab">
          <Typography style={{fontSize: 20}}>
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );f
}