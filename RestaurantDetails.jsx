import React from 'react';
import './RestaurantDetails.css';

function RestaurantDetails({ restaurant, onEdit, onDelete, onCloseDetails }) {
    if (!restaurant) return null;

    return (
        <div className="details-container">
            <h2 className="details-header">Restaurant Details</h2>
            <div className="details-content">
                <p><strong>Name:</strong> {restaurant.attributes.name}</p>
                <p><strong>Email:</strong> {restaurant.attributes.email}</p>
                <p><strong>Status:</strong> {restaurant.attributes.status ? 'Open' : 'Closed'}</p>
                <button onClick={() => onEdit(restaurant)}>Edit</button>
                <button onClick={() => onDelete(restaurant.id)}>Delete</button>
                <button onClick={onCloseDetails}>Close</button>
            </div>
        </div>
    );
}

export default RestaurantDetails;
