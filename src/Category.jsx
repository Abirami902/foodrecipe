import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Category = () => {
    const[category,setCategory]=useState([])
    useEffect(()=>
    {
        let fetchdata=async()=>{
            let response=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            console.log(response.data)
            setCategory(response.data.categories)
        }
        fetchdata()
        },[])
  return (
    <>
    <div>
    <img src='f0.jpg' alt='hi' className='img1 img-fluid'></img>
    <h1 className='h1 fw-bold'>TASTING  THE WORLD , ONE  DISH  AT  A  TIME </h1>
    <Link to='/search'>
    <Button variant="success" className='butt'>FIND YOUR TASTES</Button>
    </Link>
  </div>
<div>
<h3 className='h3 fw-bold '>CATEGORIES</h3>

      <div className='categories d-flex flex-wrap gap-4 justify-content-center'>
      {category.map((item,index)=>(
        <div class="card "style={{width:'400px'}}>

<Link to={`/detail/${item.strCategory}`}>
<img src={item.strCategoryThumb}  class="img card-img-top" alt="recipe"/>
 </Link>

 <p class=" fw-bold text-danger fs-5 card-text text-center">{item.strCategory}</p>
        </div>
    ))}
    </div>
    </div>

    </>
  )
}

export default Category