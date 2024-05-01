import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Mylocation from "./UserLocation";
import React, { useState } from 'react';
import userLocationIconUrl from "./Images/userLocation.png";
import drexelIconImg from "./Images/drexelmarker.png";

// zfm24 = wrote in pinpoints for map, taking longitude and latitude coordinates from Google Maps, and labeling it within the pop-up


const markers = [
    {
        position: [39.986829339542545, -75.21110223998414],
        popUp: 'West Philadelphia',
        description: 'According to many trustable sites, West Philadelphia is safer than 7 percent of neighborhoods in the entire United States. West Philadelphia has around 200-637 residents. There are about 81 violent crime rates, 231 property crime rates, and around 312 crimes in the neighborhood. West Philadelphia does have a higher drug rate at 0.26 compared to other neighborhoods in Philadelphia. We would give it 1 out of 5 ⭐️\'s. <br> <img src="https://t4.ftcdn.net/jpg/02/98/16/63/240_F_298166336_4Z8JfBEFGDAWZf625kzvYZz8Cvrm80s3.jpg" alt="1 out of 5 stars" />'
        
    }
    
    
    
    ,
    {
        position: [39.92524827111099, -75.17163903260402],
        popUp: 'South Philadelphia',

        description: "South Philly is known to be really dangerous. It is 43% above national average of total crime. South Philly is known to be really bad for violent crime. It is 93% worse than the national average of violent crime. Property crime would be at 34% above national average. 1 out of 30 residents have a chance of becoming a victim of crime. It is not a very safe neighborhood. We would give it 0 out of 5 ⭐️'s."
    },
    {
        position: [39.964951146087856, -75.19798834216576],
        popUp: 'Mantua',

        description: "Mantua has a population of 8,238 people. Mantua is lower than the national average when it comes to assault! When it comes to murder, Mantua is a bit higher than the national average. The national average being 6.1 per 100,000 residents. In Mantua it would be 9. Mantua is somewhat safe. Police are very visible in Mantua as well as very responsive. We would give it 3 out of 5 ⭐️'s."
    },
    {
        position: [39.950431552151805, -75.2203727251815],
        popUp: 'Cedar Park',

        description: "Cedar Park is a very safe place. It has a population of 7,922 people. Cedar Park has very low rates compared to the national average when it comes to assault, murder, rape, robbery, burglary, theft, and motor-vehicle theft. Cedar Park  would be safe compared to many other neighborhoods surrounding University Park. We would give it 4 out of 5 ⭐️'s."
    },
    {
        position: [39.9609193940143, -75.19265863481958],
        popUp: 'Powelton Village',

        description: "Powelton Village is a completely safe place to live and many students live in the area. However, the neighborhood is known for its Victorian homes and historical significance. Many student live in Powelton Village. It has a population of 4,236. Powelton is one of the safest places to live in Pennsylvania.  It is a part of University City and has a mix of both local residents and college students. It is very safe. The national average of assault is 282.7 out of 100,000 residents. Powelton Village has 26.8. Burglary, theft, rape, and murder is not be a problem when living here. We would rate Powelton Village 5 out of 5 ⭐️'s."

    },
    // zfm24 = Added 8 new locations with longitude and latitude coordinates, and proper descriptions for each location
    {        
        position: [39.9566, -75.1899],
        popUp: 'Drexel University',
        description: "Drexel strives to create a safe community among campus housing, while providing students with DrexelALERTs around campus through the Drexel Guardian app. This app also provides walking escorts 24/7 for students. Students can stay engaged with campus activities to meet the diverse cultures in Philadelphia! We would give this location 5 out of 5 ⭐️'s."
    },
    {
        position: [39.95238329006968, -75.19325125092564],
        popUp: 'University of Pennsylvania',

        description: "The University of Pennsylvania has had over 4,500 police escorts for its students and over 650 officers on campus. The university welcomes students and ensures their safety, by sending out UPenn Alerts through the PennGuardian App. We would give this location 5 out of 5 ⭐️'s."
    },
    {
        position: [39.98231769588328, -75.15548913971243],
        popUp: 'Temple University',

        description: "Temple University provides a free annual security report that contains crime-related data by local law enforcement. Community members can also get the TUSafe app on their phone to share your location and share a virtual walk home, in which a campus officer will be closely monitoring your location as you walk home. Even among its recent security concerns, Temple has taken significant actions to overcome safety issues. We would give this location 3 out of 5 ⭐️'s."
    },
    {
        position: [39.950965755151906, -75.1909202213174],
        popUp: 'Rittenhouse Square',

        description: "Based on many web resources, Rittenhouse Square is one of the safest areas to live in Philadelphia. Out of the U.S. Census, this area is rated #3 out of 143 for 'Best Neightborhoods for Young Professionals in Philadelphia'. We would give this location 5 out of 5 ⭐️'s."
    
    },
    {
        position: [39.96748278374168, -75.1682395727675],
        popUp: 'Fairmount',

        description: "Many college students live in the Fairmount area because of its convenient location near universities. The neighborhood has 1 violent crime and 28 property crimes a year, according to a web resource. We would give this location 4 out of 5 ⭐️'s. "

    },
    {
        position: [39.938749038761976, -75.14965743579471],
        popUp: 'Queen Village',

        description: "In 2021, there were 108 murders reported in Queen Village, but in comparison to other years holding crimes above a thousand, this is a significantly low number. It was rated #2 out of 143 areas for 'Best Neighborhoods to Live in Philadelphia' on a web resource (Niche). We would give this location 4 out of 5 ⭐️'s."
    },
    {
        position: [39.95555971628967, -75.15424128158553],
        popUp: 'Chinatown',

        description: "Chinatown is one of the safest areas in near Center City, Philadelphia. This area has 1.02 crimes per 1,000 residents each year. This total is even lower than Pennsylvania's crime rates of 11 crime per 1,000 people. We would give this location 5 out of 5 ⭐️'s."

    }, 
    {
        position: [39.95016322756649, -75.14426228162593],
        popUp: 'Old City',

        description: "As it America's independence began here, this is a safe area to live in Philadelphia. Old City is a very beautiful place with local transit, restuarants, stores, etc. We would give this location 5 out of 5 ⭐️'s."
    }
    ];


    const drexelIcon = new L.Icon({
        iconUrl: drexelIconImg,
        iconSize: [60, 65],
    });
    
    
    const userLocationIcon = new L.Icon({
        iconUrl: userLocationIconUrl,
        iconSize: [38,38],
    });

// added variable that sets BaseLayer to Layers Control, allowing user to interact with button on map (referenced from ChatGPT)

const { BaseLayer } = LayersControl;
const Map = () => {
{/* From ChatGPT */}
{/* Modified by Weihao Li */}
{/* wl484: state variable to store the fetched user's lat and lng */}
    const [userLocation, setUserLocation] = useState(null);
{/* wl484: update and re-render user location*/}
    const handleUserLocation = (location) => {
        setUserLocation(location);
    };
    
    return (
        <div>
            <img src= "/Images/Website Logo.png" alt=""/>
            <div id="Research">
            <h2>
            <div class="map-image">
        <img src="https://cdn-icons-png.flaticon.com/512/235/235861.png" alt="Image" class="rounded-image" />
            </div>
      
            </h2>
            <p>
<br></br>
Five Neighborhoods near University City: <br></br>
<br></br>
West Philadelphia:
<br></br>
<br></br>
<img src="https://t4.ftcdn.net/jpg/02/98/16/63/240_F_298166336_4Z8JfBEFGDAWZf625kzvYZz8Cvrm80s3.jpg" alt="1 out of 5 stars" />
<br></br>
South Philadelphia:
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
{/* wl484: calling the function from UserLocation.jsx */}
<div>
    <Mylocation onLocationUpdate={handleUserLocation} />
</div>
        
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
                    <Marker key={marker.popUp} position={marker.position} icon={marker.popUp === 'Drexel University' ? drexelIcon : undefined}>
                        <Popup className="Popup_size">
                            <h1>{marker.popUp}</h1>
                            <p>{marker.description}</p>            
                        </Popup>
                    </Marker>
                ))}

                {/* From ChatGPT 4/28/24 */}
                {/* Modified by Weihao Li */}
                {/* wl484: using fetched user location to display a new marker on the map */}
                {userLocation && (
                    <Marker 
                    position={[userLocation.latitude, userLocation.longitude]}
                    icon={userLocationIcon}
                    >
                        <Popup> Your Current Location </Popup> 
                    </Marker> 
            )}
            </MapContainer>
        </div>
                        
    ); 
};  
export default Map;    







