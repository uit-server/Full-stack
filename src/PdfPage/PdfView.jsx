import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';

// Setting up the worker path for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Styled components
const ViewerContainer = styled.div`
  display: flex;
  flex-direction: row; /* Change to 'column' for vertical layout */
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  overflow: auto;
`;

const PageContainer = styled.div`
  width: 600px;
  height: 500px;
  border: 1px solid #dee2e6;
  padding: 10px;
  background-color: #fff;
  overflow: auto;
  margin-top: 20px;
`;

const PdfView = ({ file }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <ViewerContainer>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <PageContainer key={`page_${index + 1}`}>
            <Page pageNumber={index + 1} width={480} />
          </PageContainer>
        ))}
      </Document>
    </ViewerContainer>
  );
};

export default PdfView;
