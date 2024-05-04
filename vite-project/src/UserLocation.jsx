//From Article: https://copperchips.com/get-my-current-location-in-react-js/, 4/28/24
//Modified by ChatGPT, 4/28/24
//Modified by Weihao Li, 4/28/24
import React, {useState, useEffect } from 'react';

// wl484: stated initial status of variables as null to store fetched data
function Mylocation( { onLocationUpdate }) {
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);
{/* wl484: using geolocation api to get user location and set the lat and lng*/}
    useEffect(() => {
        const fetchUserLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
{/* wl484: detect chaning of user location and update lat and lng */}
                if (onLocationUpdate) {
                    onLocationUpdate({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                }
            });
{/* wl484: display error message if browser no supporting */}
        } else {
            setError("Geolocation is current unavailable.");
        }}

        fetchUserLocation();
    }, [onLocationUpdate]);

{/* wl484: display message on screen to inform the user */}
    return (
        <div>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <p>
            {position.latitude && position.longitude ? (
                <>
                    <span>My Current Location is at</span> &nbsp;
                    Latitude: {position.latitude}, Longitude: {position.longitude}
                </>
            ) : (
               "Loading ... (this should took no more than 5 sec)"  
            )}
                </p>
            )}
            <p>If Loading taking over than 5 sec please check your broswer location access permission </p>
        </div>
    );
}

export default Mylocation;