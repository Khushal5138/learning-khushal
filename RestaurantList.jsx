import React from 'react';
import './RestaurantList.css';

function RestaurantList({ restaurants, deleteRestaurant, editRestaurant, viewDetails }) {
    return (
        <div className="restaurant-list">
            <h2 className="list-header">Restaurant List</h2>
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id} className="restaurant-item">
                        <span>{restaurant.attributes.name}</span>
                        <button onClick={() => viewDetails(restaurant)}>Details</button>
                        <button onClick={() => editRestaurant(restaurant)}>Edit</button>
                        <button onClick={() => deleteRestaurant(restaurant.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantList;
