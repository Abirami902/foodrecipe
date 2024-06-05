import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";
import { removeFav } from './favSlice';
import { Link } from 'react-router-dom';
import { Card, CardFooter, CardImg, CardTitle } from 'react-bootstrap';

function Fav() {
    const favorites = useSelector(state => state.favstore.fav);
    const dispatch =useDispatch();
    const handleDelete =(id) =>{
        dispatch(removeFav(id))
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>favourite Recipes</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {favorites.map((item, index) => (
                    <Card key={index} style={{ width: '18rem' }} className='m-3 mx-5 border-0 shadow-lg'>
                        <CardImg variant='top' src={item.strMealThumb} alt={item.strMeal}/>
                        <Link to={`/Description/${item.idMeal}`} >
                        <Card.Body>
                            <CardTitle>
                                {item.strMeal}
                            </CardTitle>
                            
                        </Card.Body>
                        </Link>
                        <CardFooter>
                        <button className='viewbtns2' onClick={()=>handleDelete(item.id)}>Remove</button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Fav;