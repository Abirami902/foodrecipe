import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';
import { Button } from 'react-bootstrap';


function SearchResult() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (!location.state || !location.state.key) {
            setError("No search term provided");
            return;
        }
        const fetchData = async () => {
            setIsLoading(true);
            setError('');
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${location.state.key}`);
                setData(response.data.meals || []);
                if (!response.data.meals) {
                    setError('No results found');
                }
            } catch (error) {
                setError('Failed to fetch data. Please try again.');
                console.error('Search API error: ', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [location.state]);

    return (
        <div className='d-flex flex-wrap justify-content-center'>
          <Search/>
            {error && <p>{error}</p>}
            {isLoading ? <p>Loading...</p> : data.map((item, index) => (
              <Link to={`/category/${location.state.key}/${item.idMeal}`} key={index}>
                <Card style={{ width: '18rem' }} className='m-3 mx-5 border-0 shadow-lg'>
                    <Card.Img src={item.strMealThumb} variant='top' />
                    <Card.Body>
                        <Card.Title >{item.strMeal}</Card.Title>
                        <Link to={`/Description/${item.idMeal}`}>
                     <Button className='btn-sm viewbtns1'>View details</Button>
                    </Link>
                    </Card.Body>
                </Card>
              </Link>
            ))}
        </div>
    );
}

export default SearchResult;