import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {Network,Vision,HPC,DDM,ML} from '../Images/Images';

const itemsData = [
  { id: 1, name: 'Events and Reunions', img: Network, note: 'Reunion of alumni and events'},
  { id: 2, name: 'Career Services', img: Vision , note: 'Access personalized career advice, job search assistance, and professional development resources'},
  { id: 3, name: 'Networking', img: HPC, note: 'Join exclusive events, connect with fellow alumni, and expand your professional network.' },
  { id: 4, name: 'Data Distribution Management (DDM) Lab', img: DDM },
  { id: 5, name: 'Deep Learning and Information Systems Lab', img: ML },
  
];

const Benefits = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = itemsData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(itemsData.length / itemsPerPage);

  return (
    <div className='px-[5%] pt-[56px] pb-[72px] flex flex-col gap-[56px] bg-[#f0f8ff] rounded-[30px] w-[110.5%] ml-[-5%]'>
      <h1 className="text-[#1c1d20] text-[16px] md:text-[32px]">Benefits and Opportunities</h1>
      <ul className='flex flex-row xl:grid xl:grid-cols-3 xl:gap-x-[20px] gap-x-[15px] justify-center w-full items-center flex-wrap xl:gap-y-[20px] gap-y-[30px] xs:justify-start'>
        {currentItems.map((item) => (
          <li key={item.id} className='h-[488px]'>
            <div className='flex flex-col gap-[20px] justify-center items-center sm:justify-start sm:items-start'>
              <div className='2xl:w-[520px] xl:w-[380px] xl:h-[380px] w-[300px] h-[350px] rounded-[32px]' style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover', aspectRatio: 16/9, objectFit: 'cover', backgroundPosition: 'center center'}}></div>
              <div className='flex flex-col gap-[8px] '>
                
                  
                <h5 className='text-[#1c1d20] text-[20px] ps-[5px]'>
                    <Link to= {`/research/ddm-lab`} className="hover:hoverMode text-2xl" >{item.name}</Link>
                </h5>
                <div className='flex gap-[10px] '>
                    <div><div className='mt-2 w-[6px] h-[6px] bg-[#3798a6] rounded-full'></div></div>
                    <p className='text-[16px] opacity-50 xl:w-[500px] w-[250px]'>{item.note}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <StyledPaginate
        previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
        nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Benefits;

const StyledPaginate = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  padding: 0;
  justify-content: center;

  li {
    margin: 0 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 50%;

    &.active a {
      background-color: #3798a6;
      opacity: .7;
      color: white;
    }

    @media (max-width: 640px) {
      margin: 0 1px;
    }

    a {
      width: 40px;
      height: 40px;
      text-decoration: none;
      color: #1c1d20;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding-top: 2px;

      &:hover {
        background: #3798a6;
        color: white;
        transition: all .3s ease-in-out;
      }

      &.disabled {
        color: #ddd;
        cursor: not-allowed;
      }

      @media (max-width: 640px) {
        width: 25px;
        height: 25px;
        font-size: 12px;
      }
    }
  }

  .break-me {
    cursor: default;
  }
`;


