import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantForms from './RestaurantForms';
import RestaurantList from './RestaurantList';
import RestaurantDetails from './RestaurantDetails';
import './Restaurants.css';

function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [nameEntered, setNameEntered] = useState('');
    const [emailEntered, setEmailEntered] = useState('');
    const [statusEntered, setStatusEntered] = useState(true);
    const [editingRestaurant, setEditingRestaurant] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/restaurants');
            if (response.data && Array.isArray(response.data.data)) {
                setRestaurants(response.data.data);
            } else {
                console.error('Unexpected data format:', response.data);
                setRestaurants([]);
            }
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    const addRestaurant = async () => {
        const restaurant = {
            data: {
                name: nameEntered,
                email: emailEntered,
                status: statusEntered
            }
        };

        try {
            const response = await axios.post('http://localhost:1337/api/restaurants', restaurant);
            if (response.data && response.data.data) {
                setRestaurants([...restaurants, response.data.data]);
                reset();
            }
        } catch (error) {
            console.error('Error adding restaurant:', error);
        }
    };

    const updateRestaurant = async () => {
        const updatedRestaurant = {
            data: {
                name: nameEntered,
                email: emailEntered,
                status: statusEntered
            }
        };

        try {
            const response = await axios.put(`http://localhost:1337/api/restaurants/${editingRestaurant.id}`, updatedRestaurant);
            if (response.data && response.data.data) {
                setRestaurants(restaurants.map(r => (r.id === editingRestaurant.id ? response.data.data : r)));
                reset();
            }
        } catch (error) {
            console.error('Error updating restaurant:', error);
        }
    };

    const handleFormSubmit = () => {
        if (editingRestaurant) {
            updateRestaurant();
        } else {
            addRestaurant();
        }
    };

    const deleteRestaurant = async (id) => {
        try {
            await axios.delete(`http://localhost:1337/api/restaurants/${id}`);
            setRestaurants(restaurants.filter(r => r.id !== id));
            setSelectedRestaurant(null);
        } catch (error) {
            console.error('Error deleting restaurant:', error);
        }
    };

    const reset = () => {
        setNameEntered('');
        setEmailEntered('');
        setStatusEntered(true);
        setEditingRestaurant(null);
    };

    return (
        <div className="container">
            <RestaurantForms
                nameEntered={nameEntered}
                emailEntered={emailEntered}
                statusEntered={statusEntered}
                setNameEntered={setNameEntered}
                setEmailEntered={setEmailEntered}
                setStatusEntered={setStatusEntered}
                onSubmit={handleFormSubmit}
                reset={reset}
            />
            <RestaurantList
                restaurants={restaurants}
                deleteRestaurant={(id) => deleteRestaurant(id)}
                editRestaurant={(restaurant) => {
                    setNameEntered(restaurant.attributes.name);
                    setEmailEntered(restaurant.attributes.email);
                    setStatusEntered(restaurant.attributes.status);
                    setEditingRestaurant(restaurant);
                }}
                viewDetails={(restaurant) => setSelectedRestaurant(restaurant)}
            />
            <RestaurantDetails
                restaurant={selectedRestaurant}
                onEdit={(restaurant) => {
                    setEditingRestaurant(restaurant);
                    setNameEntered(restaurant.attributes.name);
                    setEmailEntered(restaurant.attributes.email);
                    setStatusEntered(restaurant.attributes.status);
                }}
                onDelete={(id) => deleteRestaurant(id)}
                onCloseDetails={() => setSelectedRestaurant(null)}
            />
        </div>
    );
}

export default Restaurants;
