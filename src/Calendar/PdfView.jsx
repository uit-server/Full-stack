import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight, FaPlus, FaMinus } from 'react-icons/fa';

// Set the workerSrc for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #666;
    color: #fff;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
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
    border: 1px solid #ccc;
    height: auto;
    width: 100%;
    overflow: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PdfView = ({file}) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [zoomPercentage, setZoomPercentage] = useState(150);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const handleNextPage = () => setPageNumber(prevPage => Math.min(prevPage + 1, numPages));
    const handlePreviousPage = () => setPageNumber(prevPage => Math.max(prevPage - 1, 1));
    const handleZoomIn = () => setZoomPercentage(prevZoom => prevZoom + 10);
    const handleZoomOut = () => setZoomPercentage(prevZoom => Math.max(prevZoom - 10, 10));

    const scale = zoomPercentage / 100;

    return (
        <Container>
            <Controls>
                <ControlButton onClick={handlePreviousPage} disabled={pageNumber <= 1}>
                    <FaArrowLeft />
                </ControlButton>
                <span>Page {pageNumber} / {numPages}</span>
                <ControlButton onClick={handleNextPage} disabled={pageNumber >= numPages}>
                    <FaArrowRight />
                </ControlButton>
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
                    <Page pageNumber={pageNumber} scale={scale} />
                </Document>
            </PdfContainer>
        </Container>
    );
};

export default PdfView;
