import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/entry.webpack';

import CVDoc from './filesdata/CV_online.pdf';

export default function PDFPane() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <center>
      <Document className={"doc_centeralign"} file={CVDoc}>
      <center>
        <Page pageNumber={1} />
      </center>
      </Document>
    </center>
  );
}