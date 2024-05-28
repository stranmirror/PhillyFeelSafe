import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import "./App.css";
import "./DataMap.css";
import L from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
//From ChatGPT, 4/21/24
//Modified by Weihao Li, 4/21/24
function DataMap ({ filteredData }) {

// added a function to check whether or not the longitude and latitude is valid 
    const validData = filteredData.filter(row => {
        const latitude = parseFloat(row[5]);
        const longitude = parseFloat(row[6]);

        return !isNaN(latitude) && !isNaN(longitude);
    });
// From Alejandro AO Youtube Tutorial at https://youtu.be/jD6813wGdBA?si=yLqG0yKv66FJ9qhb
// Modified by Weihao Li on 05/12/24
    const createCustomClusterIcon = (cluster) => {
// wl484: replaced divIcon to L.divIcon corresponding to the import from leaflet
        return new L.divIcon ({
// wl484: this html attribute sets the displaying information on the cluster icon
        html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
        className: "custom-marker-cluster",
        iconSize: L.point(33, 33, true)
        });
    } 

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
                        {/* aa4763 followed a similar format from map.jsx file which was implemented by Zarah*/}
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
{/* From Alejandro AO 02/06/23 Youtube Tutorial at https://youtu.be/jD6813wGdBA?si=yLqG0yKv66FJ9qhb*/}
{/* Modified by Weihao Li on 05/12/24 */}
{/* wl484: Marker Cluster should wrap all the markers*/}
            <MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createCustomClusterIcon}
            >
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
            </MarkerClusterGroup>
            </MapContainer>
        </div>
    
    
    );
}

export default DataMap;