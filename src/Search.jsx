import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";



function Search() {

    const [recipie, setRecipie] = useState('');
    const navigate=useNavigate();
    let handleChange = (event) => {
        setRecipie(event.target.value);
    };
    let handleSubmit = async () => {
        if (!recipie) {
            alert('Please enter a search term');
            return;
        }
        navigate("/searchresult",{state:{key:recipie}})
    };
    let handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };  
    return (
        <Container fluid className=''>
           <h6 className='text-center mt-5 fs-2 '>
  SEARCH FOR A RECIPE
</h6>
<div className="d-flex justify-content-center mt-3 w-25 mx-auto flex-wrap ">
            <input type="search" id="form1" className="form-control m-2" placeholder='search'
             onChange={handleChange}  value={recipie} onKeyDown={handleKeyPress}/>
          <button type="button" onClick={handleSubmit} className=" search btn btn-dark" data-mdb-ripple-init>
          <IoIosSearch />
          </button>
   </div>
           
        </Container>
            
           
    );
}

export default Search;