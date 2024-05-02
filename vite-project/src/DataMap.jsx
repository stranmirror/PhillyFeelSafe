import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import "./App.css";
//From ChatGPT, 4/21/24
//Modified by Weihao Li, 4/21/24
function DataMap ({ filteredData }) {

// added a function to check whether or not the longitude and latitude is valid 
    const validData = filteredData.filter(row => {
        const latitude = parseFloat(row[5]);
        const longitude = parseFloat(row[6]);

        return !isNaN(latitude) && !isNaN(longitude);
    });

    return (
        <div className="DataMap">
            <MapContainer center={[39.952237, -75.163626]} zoom={13}>
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Dark Mode">
                        <TileLayer 
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"
                            minZoom={0}
                            maxZoom={20}
                            ext="png" 
                        />
                        {/* aa4763 followed a similar format from map.jsx file which was implemented by Zahra*/}
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Light Mode">
                        <TileLayer 
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}"
                            minZoom={0}
                            maxZoom={20}
                            ext="png"
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
                {validData.map((data,index) => (
                    <Marker 
                    key={index} 
                // wl484: parsefloat convert string into decimal number 
                    position={[parseFloat(data[5]), parseFloat(data[6])]}>
                        <Popup className="Popup_size">
                            <div className="Text_size">
                {/* wl484: replaced column name to column number to fix error*/}
                                <h3>Location: {data[3]}</h3>
                                <p>Type of Crime: {data[4]}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default DataMap;