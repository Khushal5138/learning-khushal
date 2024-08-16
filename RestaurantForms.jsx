import React from 'react';
import './RestaurantForms.css';

function RestaurantForms({
    nameEntered,
    emailEntered,
    statusEntered,
    setNameEntered,
    setEmailEntered,
    setStatusEntered,
    onSubmit,
    reset
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(); 
    };

    return (
        <div className="form-container">
            <h2 className="form-header">Manage Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Restaurant Name"
                    value={nameEntered}
                    onChange={(e) => setNameEntered(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={emailEntered}
                    onChange={(e) => setEmailEntered(e.target.value)}
                />
                <select
                    value={statusEntered}
                    onChange={(e) => setStatusEntered(e.target.value === 'true')}
                >
                    <option value="true">Open</option>
                    <option value="false">Closed</option>
                </select>
                <button type="submit">Save</button>
                <button type="button" onClick={reset}>Reset</button>
            </form>
        </div>
    );
}

export default RestaurantForms;

