import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/entry.webpack';
import CVDoc from './CV_online.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function PDFPane() {

  const pdfPaneDiv = (
        <div class="container" style={{width: 'inherit', justifyContent: 'center', alignContent: 'center'}}>
          <Document className={"doc_centeralign"} file={CVDoc}>
            <div className={"scrollable_cv_div"}>
              <Page pageNumber={1} />
            </div>
          </Document>
        </div>
  );

  return (
    pdfPaneDiv
  );
}