import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


const Detail = () => { 
    let {catName}=useParams()
    const [details,setDetails]=useState([''])
useEffect(()=>{
    let fetchData=async ()=>{
        let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
        console.log(response);
        setDetails(response.data.meals)
    }
    fetchData()
},[])
  return (
     <div className='d-flex flex-wrap gap-4 justify-content-center text-md-center  '>
            {details?.map((item)=>(
                   <div class="card"style={{width:'380px'}}>
                   
                    <img className=' w-75 fs-5 hi' src={item.strMealThumb} alt="" />
                   
                    <h2 className='fs-5'>{item.strMeal}</h2>
                    <Link to={`/Description/${item.idMeal}`}>
                    <Button className='btn-sm viewbtn'>View details</Button>
                    </Link>
                  </div>
            ))}    
    </div>
  )
}

export default Detail