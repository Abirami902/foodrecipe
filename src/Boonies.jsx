import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './App.css'


const Boonies = () => {
  let { item } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        setItems(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [item]);

  const handleItemClick = (selectedItem) => {
    // Do something with the selected item, such as navigating to its details
    console.log('Clicked item:', selectedItem);
    // Example: Navigate to the item details page
    // history.push(`/meals/${selectedItem.idMeal}`);
  };

  return (
    <>
    <div >
    <h3 className='h4 fw-bold '>COUNTRIES</h3>
          <div className=' d-flex flex-wrap p-5 mt-5 gap-4 justify-content-center text-md-center'>
      {items?.map((item) => (
          <div key={item.idMeal} className="card " style={{ width: '200px' }} onClick={() => handleItemClick(item)}>
      
          <Link to={`/Countrypages/${item.strArea}`}>
          <h2 className='fw-bold a'>{item.strArea}</h2>
          </Link>
        </div>
        
      ))}

    </div>
    </div>

      </>
  );
};

export default Boonies;