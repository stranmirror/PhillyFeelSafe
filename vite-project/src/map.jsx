import React, { useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl, useMap} from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./geolet.js";
import { map } from "leaflet";


// zfm24 = wrote in pinpoints for map, taking longitude and latitude coordinates from Google Maps, and labeling it within the pop-up
const markers = [
    {
        position: [39.986829339542545, -75.21110223998414],
        popUp: 'West Philadelphia',
     
        description: "According to many trustable sites, West Phildelphia is more safe than 7 percent of neighborhoods in the entire United States. West Philadelphia has around 200-637 residents  There are about 81 violent crime rates, 231 property crime rates, and around 312 crimes in the neighborhood. West Philadelphia does have a higher drug rate at 0.26 compared to other neighborhood in Philadelphia. We would give it 1 out of 5 ⭐️'s"
    },
    {
        position: [39.92524827111099, -75.17163903260402],
        popUp: 'South Philadelphia',
    },
    {
        position: [39.964951146087856, -75.19798834216576],
        popUp: 'Mantua',
    },
    {
        position: [39.950431552151805, -75.2203727251815],
        popUp: 'Cedar Park',
    },
    {
        position: [39.9609193940143, -75.19265863481958],
        popUp: 'Powelton Village',

    },
    {        
        position: [39.9566, -75.1899],
        popUp: 'Drexel University',
    },

    ];

    






// added variable that sets BaseLayer to Layers Control, allowing user to interact with button on map (referenced from ChatGPT)


const { BaseLayer } = LayersControl;
const Map = () => {
    return (
        <div>
            <img src= "/Images/Website Logo.png" alt=""/>
            <div id="Research">
            <h2>Research</h2>
            <p>
5 Neighborhoods near University City: <br></br>
<br></br>
West Philly:
<br></br>
<br></br>
<img src="https://t4.ftcdn.net/jpg/02/98/16/63/240_F_298166336_4Z8JfBEFGDAWZf625kzvYZz8Cvrm80s3.jpg" alt="1 out of 5 stars" />
<br></br>
South Philly:
<br></br>
<br></br>
<img src="https://t4.ftcdn.net/jpg/02/98/16/63/240_F_298166326_gITi0WtGFpaoX5mAv8oQscXIoilpVtm2.jpg" alt="0 out of 5 stars" />
<br></br>
Mantua: 
<br></br>
<br></br>
<img src="https://t4.ftcdn.net/jpg/02/98/16/63/240_F_298166352_tlyPez9gIIkUIPe8gX1qQaur42YC5Zjo.jpg" alt="3 out of 5 stars" />
<br></br>
Cedar Park:
<br></br>
<br></br>
<img src="https://as2.ftcdn.net/v2/jpg/02/98/16/63/1000_F_298166355_BvfU0450lPRi51CNc2DKaPiEuujvn5Op.jpg" alt="4 out of 5 stars" />
<br></br>
Powelton Village:
<br></br>
<img src="https://as2.ftcdn.net/v2/jpg/02/98/16/63/1000_F_298166362_yFh1SAtWKKltPWdyIHuXwbHw9vrWC1C1.jpg" alt="5 out of 5 stars" />
            </p>
        </div>
        <div id="map">
        

        
        
            <MapContainer center={[39.952237, -75.163626]} zoom={13}>
{/* zfm24 = added button in corner of map that allows users to switch, LayersControl and BaseLayer tag placed by ChatGPT */}
                <LayersControl position="topright">
                    {/* zfm24 = Layer 1 Dark Theme, originally inserted by Aahil */}
                    <BaseLayer checked name="Dark Smooth Tiles">
                        <TileLayer
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"
                            minZoom={0}
                            maxZoom={20}
                            ext="png"
                        />
                    </BaseLayer>
                    {/* zfm24 = added Layer 2  Light Theme*/}
                    <BaseLayer name="Smooth Tiles">
                        <TileLayer
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}"
                            minZoom={0}
                            maxZoom={20}
                            ext="png"
                        />
                    </BaseLayer>
                </LayersControl>
                {/* zfm24 = changed markers format, taken by ChatGPT 3 */}
                {markers.map(marker => (
                    <Marker key={marker.popUp} position={marker.position}>
                        <Popup>
                            <h1>{marker.popUp}</h1>
                            <p>{marker.description}</p>   
                            {location.loaded && !location.error && (
                                <Marker x></Marker>
                            )}             
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
</div>
    ); 
};  
export default Map;    


