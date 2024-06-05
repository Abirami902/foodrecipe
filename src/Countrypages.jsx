import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Countrypages = () => {
  let { item } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${item}`);
        setItems(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleItemClick = (selectedItem) => {
    // Do something with the selected item, such as navigating to its details
    console.log('Clicked item:', selectedItem);
    // Example: Navigate to the item details page
    // history.push(`/meals/${selectedItem.idMeal}`);
  };

  return (
    <div className='d-flex flex-wrap gap-4 justify-content-center text-md-center'>
      {items?.map((item) => (
        <div className="card" style={{ width: '250px' }} key={item.idMeal}>
          <Link to={`/meals/${item.idMeal}`}>
            <img className='w-75 img2' src={item.strMealThumb} alt="" />
          </Link>
          <h2 className='fs-4'>{item.strMeal}</h2>
          <Link to={`/Description/${item.idMeal}`}>
          <Button className='btn-sm viewbtns'>View details</Button>
          </Link>
          
        </div>
        
      ))}
    </div>
  );
}

export default Countrypages;