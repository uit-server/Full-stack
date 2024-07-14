import React,{ useRef,useEffect,useState } from 'react';
import { InstantSearch, connectSearchBox,connectHits, connectStateResults } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeSearch } from '../store/searchSlice';
import { useSelector } from 'react-redux';


const Div = styled.div`
  &::-webkit-scrollbar {
    width: 5px;
    height: 12px; 
}


&::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

`

const Div2 = styled.div`
  &:hover {
    background-color: #3798A6;

    path {
      fill: #ffffff;
    
  }
  }

  
`

const searchClient = algoliasearch('643IX7KDD6', '6fbc4ab6f1c102f42173cee482f6fa81');

const CustomHits = ({ hits,query }) => {
 
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyEnter = (event, hit) => {
      if (event.key === 'Enter' && hit ) {
        navigate(hit[0].link); // Navigate to hit.link
      }
     
    };

    // Add event listener when component mounts
    const handleKeyDown = (event) => handleKeyEnter(event, hits);

    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [hits, navigate]);
  return (
  <Div className="pt-6 flex flex-col gap-y-4 max-h-[150px] overflow-y-scroll  ">
    {hits.map(hit => (
      <div key={hit.objectID} >
        <Link reloadDocument to={hit.link} id="navigation" ><h2 className="hover:hoverMode font-normal text-lg leading-[27px] underline underline-offset-1">{(!hit.name.includes(query) && query.length > 0) && <span className="text-[#1C1D2080] font-normal leading-[18px] text-base">In </span>}{hit.name}</h2></Link>


        
      </div>
    ))}



  </Div>
)
};

const ConnectedHits = connectHits(CustomHits);

const Results = connectStateResults(
  ({ searchState, searchResults, children }) => {
    const query = searchState && searchState.query ? searchState.query : '';
    return(
      <>
      {(searchResults && searchResults.nbHits > 0  && query.length > 0 && searchResults) && React.cloneElement(children, { query })}
      
  
</>
     
    )
  }
    
);




const CustomSearchBox = ({ currentRefinement, refine }) => {
  const dispatch = useDispatch()

  const inputRef = useRef(null);

  // Function to focus the input field
 

  // Function to handle search on pressing Enter
 

  const handleInputChange = (event) => {
    if(event.currentTarget.value[0] !== "/")
      dispatch(changeSearch(event.currentTarget.value));
      refine(event.currentTarget.value);
    
  };


  const handleClearSearch = () => {
    refine('');

  };

 

  return (
    <>
      <input
      ref={inputRef}
      type="text"
      value={currentRefinement}
      onChange={handleInputChange}
      className="w-full placeholder:font-normal placeholder:text-xl placeholder:leading-7 placeholder:text-[#1C1D2080] bg-[#F7F7F7]" placeholder="I’m looking for..."
    />
    
        <Div2 className="bg-[#FFFFFF] rounded-[32px] p-3 cursor-pointer transition duration-500" onClick={handleClearSearch}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none transition duration-500 ">
                            <path d="M8.27455 6L11.686 2.58852C12.1047 2.16989 12.1047 1.49114 11.686 1.07216L10.9278 0.313977C10.5092 -0.104659 9.83045 -0.104659 9.41148 0.313977L6 3.72545L2.58852 0.313977C2.16989 -0.104659 1.49114 -0.104659 1.07216 0.313977L0.313977 1.07216C-0.104659 1.4908 -0.104659 2.16955 0.313977 2.58852L3.72545 6L0.313977 9.41148C-0.104659 9.83011 -0.104659 10.5089 0.313977 10.9278L1.07216 11.686C1.4908 12.1047 2.16989 12.1047 2.58852 11.686L6 8.27455L9.41148 11.686C9.83011 12.1047 10.5092 12.1047 10.9278 11.686L11.686 10.9278C12.1047 10.5092 12.1047 9.83045 11.686 9.41148L8.27455 6Z" fill="#1C1D20" />
                        </svg>
        </Div2>
      
    </>
    
  );
};

const ConnectedSearchBox = connectSearchBox(CustomSearchBox);

const SearchBox = () =>  {

  let body = useSelector((state) => state.search.value);

 
 
  const [focus, setFocus] = useState(false);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const input = document.querySelector('input[type="text"]');


    const checkFocus = () => {
      if (document.activeElement === input) {
        setFocus(true);
      } else {
        setFocus(false);
      }
    };
    const handleKeyPress = (event) => {
      
      if (event.key === '/') {
        
        if (input) {
          
          input.focus();
        }
      }
    };





    checkFocus();

    // Event listeners for checking focus
    if (input) {
      input.addEventListener('focus', checkFocus);
      input.addEventListener('blur', checkFocus);
    }

    window.addEventListener('keypress', handleKeyPress);


    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      if (input) {
        input.removeEventListener('focus', checkFocus);
        input.removeEventListener('blur', checkFocus);
      }
    };
  }, [focus]);

  return(
    <div className="mt-12 bg-[#F7F7F7] py-6 px-8 rounded-[32px]">
         
         <InstantSearch searchClient={searchClient} indexName="pageSearch" >
         <div className="w-full flex items-center h-7 pt-1 " >
            <ConnectedSearchBox />
    
            </div>
            <div className={`${ (body.length > 0) && "border-t-2 border-[#3798A6] mt-6" }  `}>
            <Results>
              <ConnectedHits />
              
            </Results>

            {(body.length > 0) && <Link reloadDocument to={`/search/${body}1`} id="navigation"><h2 className="text-[#1C1D2080] font-normal leading-[18px] text-base mt-4">Search <span className="hover:hoverMode font-normal text-lg leading-[27px] underline underline-offset-1 text-[#1C1D20]">{body}</span> in news</h2></Link>}
            {(body.length > 0) && <Link reloadDocument to={`/search/${body}2`} id="navigation" ><h2 className="text-[#1C1D2080] font-normal leading-[18px] text-base mt-2">Search <span className="hover:hoverMode font-normal text-lg leading-[27px] underline underline-offset-1 text-[#1C1D20]">{body}</span> in activities</h2></Link>}
            </div>
            
             

            
            
  </InstantSearch>
         </div>

  )
    
    
  
};

export default SearchBox;