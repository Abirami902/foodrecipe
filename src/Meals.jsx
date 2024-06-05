import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { removeFav, setFav } from './favSlice';

const Meals = () => {
    const { meals } = useParams(); // Access meals from params object
    const [meal, setMeal] = useState([]);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favstore.fav);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`);
                console.log(response.data.meals);
                setMeal(response.data.meals);
            } catch (error) {
                console.error('Error fetching meal:', error);
            }
        };
        fetchData();
    }, [meals]); 

    const handleFavoriteToggle = (item) => {
        const isFavorite = favorites.some((fav) => fav.id === item.idMeal);
        if (isFavorite) {
            dispatch(removeFav(item.idMeal));
        } else {
            dispatch(setFav({ id: item.idMeal, ...item }));
        }
    };

    if (!meal.length) {
        return <div>Loading...</div>; // Show loading or placeholder
    }

    return (
        <div className='d-flex flex-wrap gap-4 justify-content-center text-md-center mt-5'>
            {meal.map((item) => (
                <>
                
                  <div class="card detail mt-5">
                  <img src={item.strMealThumb} alt="abhi" />
                  <h2 className='fs-4 text-success  '>{item.strMeal}<button className='btnheart ' onClick={() => handleFavoriteToggle(item)}>
                        {favorites.some((fav) => fav.id === item.idMeal) ? <FaHeart /> : <FaRegHeart />}
                  </button> 

                  </h2>
                  </div>
                        
                <div>
                 <p className='mt-5 fs-3 fw-bold'>INSTRUCTIONS</p>
                 <p className='mt-3 fs-6 text-dark '>{item.strInstructions}</p>
                 <p className='mt-5 fs-3 fw-bold '>INGREDIANTS</p>
                 <div style={{ textAlign: 'center' }}>
                 <ul style={{ textAlign: 'left', paddingLeft: 0 }}>
        {[...Array(20)].map((_, i) => {
            const ingredient = item[`strIngredient${i + 1}`];
            // Check if both ingredient and measure exist
            if (ingredient) {
                return (
                    <li key={i} style={{ listStyleType: 'disc', marginLeft: '1em' }}>{` ${ingredient}`}</li>
                );
            }
            return null;
        })}
    </ul>
</div>
<p className='mt-5 fs-3 fw-bold '>Video for making your cooking easy</p>
{item.strYoutube && (
                            <iframe
                                width="500"
                                height="315"
                                src={`https://www.youtube.com/embed/${item.strYoutube.split('v=')[1]}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                   )}


               
                 </div>
          </>
          ))}
  </div>
)
}
export default Meals;