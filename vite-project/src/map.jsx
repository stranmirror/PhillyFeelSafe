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

West Philly:
West Philadelphia is safer than 7 percent of neighborhoods in the United States. Annually, there were 81 violent crimes, 231 property crimes and a total of 312 crimes in West Philadelphia. The annual crimes per 1,000 residents is 21.82 for violent crimes, 62.23 for property crimes and 84.05 for total crimes.
<br></br>
<br></br>
South Philly:
South Philadelphia's crime rates are higher than the national average, with violent crimes being 93% above and total crime rates 43% higher. Residents have a 1 in 30 chance of becoming a victim of crime. However, it's safer than 53% of cities in Pennsylvania.
<br></br>
Mantua: 
Crime and safety in Mantua have been points of concern, with efforts to combat these issues ongoing for decades. Community leaders and organizations have worked tirelessly to improve the area, focusing on projects like the establishment of recreation centers that require a library card for entry, signaling a commitment to education and community engagement. Despite these efforts, the neighborhood has faced challenges related to gang violence and drug-related crime, particularly during the rise of crack cocaine and heroin markets in the 1980s. This led to significant population shifts and changes in the local economy, with many residents moving away and local businesses being replaced by smaller convenience stores​​
<br></br>
Cedar Park:
The Cedar Park neighborhood in Philadelphia is known for its densely urban environment, historic homes, and a high degree of walkability. It features a mix of small to large townhomes and apartment complexes, with a significant portion of the population commuting by bicycle, on foot, or by train. The area is notable for its cultural diversity and a high proportion of residents with advanced degrees. 
<br></br>
Powelton Village:
Powelton Village is a completely safe place to live and many students live in the area. However, the neighborhood is known for its Victorian homes and historical significance. It's part of University City and has a mix of residential and commercial areas, with a vibrant community benefiting from both local residents and college students. 
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
