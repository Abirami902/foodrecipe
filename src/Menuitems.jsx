import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Menuitems = () => {
  let { item } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
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
    <div>
    <h3 className=' h4 fw-bold justify-content-center mt-5'>ALL ITEMS</h3>
          <div className='d-flex flex-wrap gap-4 justify-content-center text-md-center mt-5'>
      {items?.map((item) => (
          <div key={item.idMeal} className="card" style={{ width:'400px' }} onClick={() => handleItemClick(item)}>
          <Link to={`/meals/${item.idMeal}`}>
            <img className='w-75 img2' src={item.strMealThumb} alt="" />
          </Link>
          <h2>{item.strMeal}</h2>
          <Link to={`/Description/${item.idMeal}`}>
          <Button className='btn-sm viewbtns'>View details</Button>
          </Link>
        </div>
        
      ))}

    </div>
    </div>

      </>
  );
};

export default Menuitems;