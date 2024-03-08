import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";

const markers = [
    {
        position: [39.986829339542545, -75.21110223998414],
        popUp: 'West Philadelphia'
    },
    {
        position: [39.92524827111099, -75.17163903260402],
        popUp: 'South Philadelphia'
    },
    {
        position: [39.964951146087856, -75.19798834216576],
        popUp: 'Mantua'
    },
    {
        position: [39.950431552151805, -75.2203727251815],
        popUp: 'Cedar Park'
    },
    {
        position: [39.9609193940143, -75.19265863481958],
        popUp: 'Powelton Village'
    }
    
    ];

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
According to many trustable sites, West Philadelphia is more safe than 7 percent of neighborhood in the entire United States. 
West Philadelphia has around 200, 637 residents. There are about 81 violent crime rates, 231 property crime rates, and around 312 crimes in the neighborhood. 
West Philadelphia does have a higher drug rate at 0.26 compared to other neighborhood in Philadelphia. We would rate it a D.
<br></br>
<br></br>
South Philly:
<br></br>
South Philly is known to be really dangerous. It is 43% above national average of total crime.
South Philly is known to be really bad for violent crime. It is 93% worse than the national average of violent crime. 
Property crime would be at 34% above national average. 1 out of 30 residents have a chance of becoming a victim of crime. 
It isn’t a very safe neighborhood. We would rate it as an F.
<br></br>
<br></br>
Mantua: 
<br></br>
Mantua has a population of 8,238 people. Mantua is lower than the national average when it comes to assault! 
When it comes to murder, Mantua is a bit higher than the national average. The national average being 6.1 per 100,000 residents. 
In Mantua it would be 9. Mantua is somewhat safe. Police are very visible in Mantua as well as very responsive. We would rate it a C-. 
<br></br>
<br></br>
Cedar Park:
<br></br>
Cedar Park is a very safe place. It has a population of 7,922 people. Cedar Park has very low rates compared to the national average when it comes to assault, murder, rape, robbery, burglary, theft, and motor-vehicle theft. Cedar Park  would be safe compared to many other neighborhoods surrounding University Park. We would rate it a B-.  
<br></br>
<br></br>
Powelton Village:
<br></br>
Powelton Village is a completely safe place to live and many students live in the area. However, the neighborhood is known for its Victorian homes and historical significance. 
Many student live in Powelton Village. It has a population of 4,236. Powelton is one of the safest places to live in Pennsylvania.  It is a part of University City and has a mix of both local residents and college students. It is very safe. The national average of assault is 282.7 out of 100,000 residents. Powelton Village has 26.8. Burglary, theft, rape, and murder is not be a problem when living here. We would rate Powelton Village a B. 
            </p>

        </div>
        <MapContainer center={[39.952237, -75.163626]} zoom={13}>
           <TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />  
        {markers.map(marker => (
            <Marker position={marker.position}>
                <Popup>{marker.popUp}</Popup>
            </Marker>
    ))} 
        </MapContainer>
    </div>
    ); 
}

export default Map;
