import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";

const markers = [
    {
        position: [39.986829339542545, -75.21110223998414],
        popUp: 'West Philadelphia',
     
        description: "According to many trustable sites, West Phildelphia is more safe than 7 percent of neighborhoods in the entire United States. West Philadelphia has around 200-637 residents  There are about 81 violent crime rates, 231 property crime rates, and around 312 crimes in the neighborhood. West Philadelphia does have a higher drug rate at 0.26 compared to other neighborhood in Philadelphia. We would give it 1 out of 5 ⭐️'s"
    },
    {
        position: [39.92524827111099, -75.17163903260402],
        popUp: 'South Philadelphia',

        description: "South Philly is known to be really dangerous. It is 43% above national average of total crime. South Philly is known to be really bad for violent crime. It is 93% worse than the national average of violent crime. Property crime would be at 34% above national average. 1 out of 30 residents have a chance of becoming a victim of crime. It is not a very safe neighborhood. We would give it 0 out of 5 ⭐️'s."
    },
    {
        position: [39.964951146087856, -75.19798834216576],
        popUp: 'Mantua',

        description: "Mantua has a population of 8,238 people. Mantua is lower than the national average when it comes to assault! When it comes to murder, Mantua is a bit higher than the national average. The national average being 6.1 per 100,000 residents. In Mantua it would be 9. Mantua is somewhat safe. Police are very visible in Mantua as well as very responsive. We would give it 3 out of 5 ⭐️'s. "
    },
    {
        position: [39.950431552151805, -75.2203727251815],
        popUp: 'Cedar Park',

        description: "Cedar Park is a very safe place. It has a population of 7,922 people. Cedar Park has very low rates compared to the national average when it comes to assault, murder, rape, robbery, burglary, theft, and motor-vehicle theft. Cedar Park  would be safe compared to many other neighborhoods surrounding University Park. We would give it 4 out of 5 ⭐️'s.  "
    },
    {
        position: [39.9609193940143, -75.19265863481958],
        popUp: 'Powelton Village',

        description: "Powelton Village is a completely safe place to live and many students live in the area. However, the neighborhood is known for its Victorian homes and historical significance. Many student live in Powelton Village. It has a population of 4,236. Powelton is one of the safest places to live in Pennsylvania.  It is a part of University City and has a mix of both local residents and college students. It is very safe. The national average of assault is 282.7 out of 100,000 residents. Powelton Village has 26.8. Burglary, theft, rape, and murder is not be a problem when living here. We would rate Powelton Village 5 out of 5 ⭐️'s. "

    },
    {        
        position: [39.9566, -75.1899],
        popUp: 'Drexel University'
    },

    ];

const Map = () => {
    return (
        <div>
            <img src= "/Images/ Logo.png" alt=""/>
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
        <MapContainer center={[39.952237, -75.163626]} zoom={13}>
           <TileLayer
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"
                minZoom={0}
                maxZoom={20}
                ext="png" // Set the extension for tile images
           />  
        {markers.map(marker => (
            <Marker  key={marker.popUp} position={marker.position}>
                <Popup className="Popup_size">
                <div className="Text_size">
                <h1>{marker.popUp}</h1>
                <p>{marker.description}</p>
                </div>

                
                
                
                </Popup>

            </Marker>
    ))} 
        </MapContainer>
    </div>
    ); 

    
}

export default Map;

