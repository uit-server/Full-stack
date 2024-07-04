import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

// Set the workerSrc for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background: #f0f8ff;
  border: 1px solid #ccc;

  &:hover .controls {
    opacity: 1;
  }
  
`;

const Controls = styled.div`
  display: flex;
  opacity: 0;
  justify-content: space-between;
  align-items: center;
  background-color: #077d8a;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  transition: opacity .3s ease-in-out;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 5px;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PdfContainer = styled.div`
  
  height: 100vh; /* Adjust the height as needed */
  width: 100%;
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PdfView = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [zoomPercentage, setZoomPercentage] = useState(150);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleZoomIn = () => setZoomPercentage(prevZoom => prevZoom + 10);
  const handleZoomOut = () => setZoomPercentage(prevZoom => Math.max(prevZoom - 10, 10));

  const scale = zoomPercentage / 100;

  return (
    <Container>
      <Controls className='controls'>
        <ControlButton onClick={handleZoomOut}>
          <FaMinus />
        </ControlButton>
        <span>Zoom {zoomPercentage}%</span>
        <ControlButton onClick={handleZoomIn}>
          <FaPlus />
        </ControlButton>
      </Controls>
      <PdfContainer>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          // onLoadError={console.error}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
          ))}
        </Document>
      </PdfContainer>
    </Container>
  );
};

export default PdfView;
