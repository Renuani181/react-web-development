import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
        );

        // Accessing the nested data structure
        const restaurantData =
          response.data?.data?.cards
            ?.find(
              (card) =>
                card.card?.card?.id === 'restaurant_grid_listing'
            )?.card.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        setRestaurants(restaurantData.map((item) => item.info)); // Extracting `info` for each restaurant
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="restaurant-list">
      <h2>Restaurants</h2>
      {restaurants.length > 0 ? (
        <div>
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.locality}, {restaurant.areaName}</p>
              <p>Cost for Two: {restaurant.costForTwo}</p>
              <p>Cuisines: {restaurant.cuisines.join(', ')}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No restaurants available to display.</p>
      )}
    </div>
  );
}



export default PostList;
