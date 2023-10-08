import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion(props) {
  const {heading, content, startsExpanded} = props;

  return (
    <div style={{width: "100%", paddingLeft: "5%", paddingRight: "5%"}}>
      <Accordion defaultExpanded={startsExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> <b> {heading} </b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}