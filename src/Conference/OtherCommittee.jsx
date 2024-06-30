import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Div = styled.div`
  background: url(${props => require(`../Images/${props.image}`)});
  background-size: cover;
  aspect-ratio: 16/9;
  object-fit: cover;
  background-position: center center;
  width: 60px;
  height: 60px;
`;

function OtherCommittie() {
  const organizing = useSelector((state) => state.data.value.organizing_committee);
  const local = useSelector((state) => state.data.value.program_committee.local);
  const foreign = useSelector((state) => state.data.value.program_committee.foreign);
  const program = local.concat(foreign);
  const allPeople = [...organizing, ...program, ...local, ...foreign];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // Reset to first page when category changes
  };

  const getCategoryData = () => {
    switch (selectedCategory) {
      case 'Organizing':
        return organizing;
      case 'Program':
        return program;
      case 'Local':
        return local;
      case 'Foreign':
        return foreign;
      default:
        return allPeople;
    }
  };

  const categories = [
    { name: 'All', count: allPeople.length },
    { name: 'Organizing', count: organizing.length },
    { name: 'Program', count: program.length },
    { name: 'Local', count: local.length },
    { name: 'Foreign', count: foreign.length },
  ];

  const categoryVariants = {
    hidden: {
      opacity: 0,
      x: '10%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.2,
        duration: 0.3,
        stiffness: 300,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      x: '-10%',
      transition: {
        duration: 0.3,
      },
    },
  };

  // Pagination logic
  const offset = currentPage * itemsPerPage;
  const currentPageData = getCategoryData().slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(getCategoryData().length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="otherCommittie w-full flex flex-col gap-[15px] sm:gap-[30px] mt-[30px]">
      <div className="Categories flex flex-row w-[100%] md:w-[70%] lg:w-[60%] xl:w[50%] justify-between items-center mb-2">
        <p className="text-[#1c1d20] opacity-50 text-[11px] md:text-[16px]">Filter By:</p>
        {categories.map((category) => (
          <div
            className="relative cursor-pointer"
            key={category.name}
            onClick={() => handleCategoryChange(category.name)}
          >
            <p
              className="text-[#1c1d20] text-[13px] md:text-[20px]"
              style={{ opacity: selectedCategory === category.name ? 1 : 0.5 }}
            >
              {category.name}
            </p>
            <span
              className="text-[#1c1d20] text-[8px] md:text-[12px] absolute"
              style={{ left: '100%', top: 0, opacity: selectedCategory === category.name ? 1 : 0.5 }}
            >
              {category.count}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          variants={categoryVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ul className="w-full flex flex-row flex-wrap justify-between gap-[15px]">
            {currentPageData.map((person, index) => (
              <div key={index} className="flex justify-start gap-[10px] w-[350px]">
                <Div className="flex-none w-[50px] md:w-[75px] bg-[#ccc] rounded-md" image={person[0]}></Div>
                <div className="flex flex-col">
                  <p className="text-[11px] md:text-[16px] text-[#3798a6]">{person[1].split(",")[0]}</p>
                  <p className="text-[10px] md:text-[16px] text-[#1c1d20] opacity-70">{person[1].split(",")[1]}</p>
                  <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">{person[1].split(",")[2]}</p>
                </div>
              </div>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

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
}

export default OtherCommittie;

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
