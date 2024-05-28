import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import './App.css';
import './map.css';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Mylocation from "./UserLocation";
import MarkerClusterGroup from 'react-leaflet-cluster';
import React, { useState } from 'react';
import userLocationIconUrl from "./Images/userLocation.png";
import drexelIconImg from "./Images/drexelmarker.png";
import upennIconImg from "./Images/upenn.png";
import templeIconImg from "./Images/temple.png";
import chinatownIconImg from "./Images/chinatown.png";
import villageIconImg from "./Images/village.png";
import rittenhouseIconImg from "./Images/rittenhouse.png";
import oldcityIconImg from "./Images/oldcity.png";
import hospitalIconImg from "./Images/hospital.png"
import shoppingIconImg from "./Images/mall.png"
import policeIconImg from "./Images/police.png"
import foodIconImg from "./Images/food.png"
import westIconImg from "./Images/west.png"

const defaultIcon = new L.Icon.Default();

//aa4763  = wrote the bottom  5 functions for custom icons on specific pinpoints on our map
const drexelIcon = new L.Icon({
    iconUrl: drexelIconImg,
    iconSize: [50, 55],
});


const upennIcon = new L.Icon({ 
    iconUrl: upennIconImg,
    iconSize: [70, 55], 
});


const templeIcon = new L.Icon({ 
    iconUrl: templeIconImg,
    iconSize: [35, 40], 
});

const chinatownIcon = new L.Icon({ 
    iconUrl: chinatownIconImg,
    iconSize: [100, 100], 
});

const villageIcon = new L.Icon({ 
    iconUrl: villageIconImg,
    iconSize: [30, 30], 
});

const rittenhouseIcon = new L.Icon({ 
    iconUrl: rittenhouseIconImg,
    iconSize: [40, 40], 
});

const oldcityIcon = new L.Icon({ 
    iconUrl: oldcityIconImg,
    iconSize: [40, 40], 
});

const hospitalIcon = new L.Icon({ 
    iconUrl: hospitalIconImg,
    iconSize: [50, 50], 
});

const shoppingIcon = new L.Icon({ 
    iconUrl: shoppingIconImg,
    iconSize: [150, 90], 
});

const policeIcon = new L.Icon({ 
    iconUrl: policeIconImg,
    iconSize: [50, 50], 
});

const foodIcon = new L.Icon({ 
    iconUrl: foodIconImg,
    iconSize: [55, 50], 
});

const westIcon = new L.Icon({ 
    iconUrl: westIconImg,
    iconSize: [125, 120], 
});



// zfm24 = wrote in pinpoints for map, taking longitude and latitude coordinates from Google Maps, and labeling it within the pop-up


const markers = [
    {
        
        position: [39.986829339542545, -75.21110223998414],
        popUp: 'West Philadlphia',
        description: <p>According to many trustable sites, West Philadelphia is safer than 7 percent of neighborhoods in the entire United States. West Philadelphia has around 200-637 residents. There are about 81 violent crime rates, 231 property crime rates, and around 312 crimes in the neighborhood. West Philadelphia does have a higher drug rate at 0.26 compared to other neighborhoods in Philadelphia. 
                     <br></br><b>Our Rating:</b><br></br>
                     <img src={'src/Images/1Rating.png'} alt="1 out of 5 stars" width="200" />
                     </p>
        

    },
    {
        position: [39.92524827111099, -75.17163903260402],
        popUp: 'South Philadelphia',

        description:<p>South Philly is known to be really dangerous. It is 43% above national average of total crime. South Philly is known to be really bad for violent crime. It is 93% worse than the national average of violent crime. Property crime would be at 34% above national average. 1 out of 30 residents have a chance of becoming a victim of crime. It is not a very safe neighborhood. 
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/0Rating.png'} alt="0 out of 5 stars" width="200"/>
                    </p>

    },
    {
        position: [39.964951146087856, -75.19798834216576],
        popUp: 'Mantua',

        description:<p>Mantua has a population of 8,238 people. Mantua is lower than the national average when it comes to assault! When it comes to murder, Mantua is a bit higher than the national average. The national average being 6.1 per 100,000 residents. In Mantua it would be 9. Mantua is somewhat safe. Police are very visible in Mantua as well as very responsive. 
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/3Rating.png'}  alt="3 out of 5 stars" width="200"/>
                    </p>

    },
    {
        position: [39.950431552151805, -75.2203727251815],
        popUp: 'Cedar Park',

        description:<p>Cedar Park is a very safe place. It has a population of 7,922 people. Cedar Park has very low rates compared to the national average when it comes to assault, murder, rape, robbery, burglary, theft, and motor-vehicle theft. Cedar Park  would be safe compared to many other neighborhoods surrounding University Park. 
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/4Rating.png'} alt="4 out of 5 stars" width="200" />
                    </p>

    },
    {
        position: [39.9609193940143, -75.19265863481958],
        popUp: 'Powelton Village',

        description:<p>Powelton Village is a completely safe place to live and many students live in the area. However, the neighborhood is known for its Victorian homes and historical significance. Many student live in Powelton Village. It has a population of 4,236. Powelton is one of the safest places to live in Pennsylvania.  It is a part of University City and has a mix of both local residents and college students. It is very safe. The national average of assault is 282.7 out of 100,000 residents. Powelton Village has 26.8. Burglary, theft, rape, and murder is not be a problem when living here.
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/5Rating.png'} alt="5 out of 5 stars" width="200"/>
                    </p>

    },
    // zfm24 = Added 8 new locations with longitude and latitude coordinates, and proper descriptions for each location
    {        
        position: [39.9566, -75.1899],
        popUp: 'Drexel University',
        description:<p>Drexel strives to create a safe community among campus housing, while providing students with DrexelALERTs around campus through the Drexel Guardian app. This app also provides walking escorts 24/7 for students. Students can stay engaged with campus activities to meet the diverse cultures in Philadelphia!
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/5Rating.png'} alt="5 out of 5 stars" width="200"/>
                    </p>
    },
    {
        position: [39.95238329006968, -75.19325125092564],
        popUp: 'University of Pennsylvania',
        description:<p>The University of Pennsylvania has had over 4,500 police escorts for its students and over 650 officers on campus. The university welcomes students and ensures their safety, by sending out UPenn Alerts through the PennGuardian App.
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/5Rating.png'} alt="5 out of 5 stars" width="200"/>
                    </p>
    },
    {
        position: [39.98231769588328, -75.15548913971243],
        popUp: 'Temple University',
        description:<p>Temple University provides a free annual security report that contains crime-related data by local law enforcement. Community members can also get the TUSafe app on their phone to share your location and share a virtual walk home, in which a campus officer will be closely monitoring your location as you walk home. Even among its recent security concerns, Temple has taken significant actions to overcome safety issues. 
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/3Rating.png'} alt="3 out of 5 stars" width="200"/>
                    </p>
    },
    {
        position: [39.950965755151906, -75.1909202213174],
        popUp: 'Rittenhouse Square',
        description: <p>Based on many web resources, Rittenhouse Square is one of the safest areas to live in Philadelphia. Out of the U.S. Census, this area is rated #3 out of 143 for 'Best Neightborhoods for Young Professionals in Philadelphia'.
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/5Rating.png'} alt="5 out of 5 stars" width="200"/>
                    </p>
    },
    {
        position: [39.96748278374168, -75.1682395727675],
        popUp: 'Fairmount',
        description: <p>Many college students live in the Fairmount area because of its convenient location near universities. The neighborhood has 1 violent crime and 28 property crimes a year, according to a web resource.
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/4Rating.png'} alt="4 out of 5 stars" width="200"/>
                    </p>
    },
    {
        position: [39.938749038761976, -75.14965743579471],
        popUp: 'Queen Village',
        description: <p>In 2021, there were 108 murders reported in Queen Village, but in comparison to other years holding crimes above a thousand, this is a significantly low number. It was rated #2 out of 143 areas for 'Best Neighborhoods to Live in Philadelphia' on a web resource (Niche).
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/4Rating.png'} alt="4 out of 5 stars" width="200"/>
                    </p>
    },
    {
        position: [39.95555971628967, -75.15424128158553],
        popUp: 'Chinatown',
        description: <p>Chinatown is one of the safest areas in near Center City, Philadelphia. This area has 1.02 crimes per 1,000 residents each year. This total is even lower than Pennsylvania's crime rates of 11 crime per 1,000 people. 
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/5Rating.png'} alt="5 out of 5 stars" width="200"/>
                    </p>
    }, 
    {
        position: [39.95016322756649, -75.14426228162593],
        popUp: 'Old City',
        description: <p>As it America's independence began here, this is a safe area to live in Philadelphia. Many web sources state that Old City is a very beautiful place with local transit, restuarants, stores, etc. One can feel safe living in the city that are nation was founded in!
                    <br></br><b>Our Rating:</b><br></br>
                    <img src={'src/Images/5Rating.png'} alt="5 out of 5 stars" width="200"/>
                    </p>
    },

    //zfm24 = Added hospitals, police stations, restaurants, and stores - need to change icons!
    {

        position: [39.950295716962906, -75.19392581968305],
        popUp: 'Hospital of the University of Pennsylvania'
    },
    {

        position: [39.94886617019046, -75.19390254666787], 
        popUp: 'Childrens Hospital of Philadelphia'


    }, 
    {

        position: [39.948296997935024, -75.19391863766259],
        popUp: 'Childrens Hospital of Philadelphia Emergency Room'

    },
    {

        position: [39.954755240621566, -75.19316254921597],
        popUp: 'Oberholtzer John Carl MD See See Hospital'
    },
    {

        position: [39.947877522417514, -75.19267409269861],
        popUp: 'Perelman Center for Advanced Medicine'
    },
    {
        position: [39.96200346168633, -75.20033728899523],
        popUp: 'Philadelphia Police 16th District' 

    },
    {
        position: [39.956121700607106, -75.18240620433913],
        popUp: 'Amtrak Police Department'
    }, 
    {
        position: [39.95593478058187, -75.2036057516323],
        popUp: 'University of Pennsylvania Police'
    }, 
    {

        position: [39.957792448458825, -75.1883336043391], 
        popUp: 'Drexel University Police'
    },
    {
        position: [39.95447947774627, -75.23297710619056],
        popUp: 'Philadelphia Police 18th District'
    },
    {
        position: [39.95628300400261, -75.19062863132376],
        popUp: 'Landmark Americana University'
    },
    {

        position: [39.95205212526518, -75.20333270124172],
        popUp: 'Copabanana University City Restaurant'
    },
    {
        position: [39.95442913228152, -75.19004010433929],
        popUp: 'CO-OP Restaurant & Bar'
    },
    {
        position: [39.95585915673524, -75.20177771783152],
        popUp: 'Dim Sum House Restaurant'
    },
    {
        position: [39.9541777731053, -75.18930287735466],
        popUp: 'Lascalas Fire Restaurant'
    },
    {
        position: [39.95399058192388, -75.18865611783167],
        popUp: 'Shake Shack Restaurant'
    },
    { 
        position: [39.952217584546325, -75.16774104666762],
        popUp: 'Liberty Place Shopping Mall'
    },
    {

        position: [39.9537423069022, -75.19647934666757],
        popUp: 'Hello World Modern Mercantile'
    },
    {
        position: [39.95033186545078, -75.16867718899596],
        popUp: 'Urban Outfitters'
    },
    {
        position: [39.95369978524196, -75.19631446201109],
        popUp: 'Philadelphia Runner Shopping Store'

    }
    ];


    
    
    const userLocationIcon = new L.Icon({
        iconUrl: userLocationIconUrl,
        iconSize: [60, 60],
    });
// From Alejandro AO Youtube Tutorial at https://youtu.be/jD6813wGdBA?si=yLqG0yKv66FJ9qhb
// Modified by Weihao Li on 05/12/24
    const createCustomClusterIcon = (cluster) => {
        return new L.divIcon ({
        html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
        className: "custom-marker-cluster",
        iconSize: L.point(33, 33, true)
        });
    } 
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
        <div className="background"> 
            
        <div>
            <img src= "/Images/Website Logo.png" alt=""/>
            <div id="Research">
            <h2>
            <div className="map-image">
        <img src="https://cdn-icons-png.flaticon.com/512/235/235861.png" alt="Image" className="rounded-image" />
            </div>
      
            </h2>
            
        </div>
{/* wl484: calling the function from UserLocation.jsx */}
        
            <MapContainer center={[39.952237, -75.163626]} zoom={13}>
{/* zfm24 = added button in corner of map that allows users to switch, LayersControl and BaseLayer tag placed by ChatGPT */}
                <LayersControl position="topright">
                    {/* zfm24 = Layer 1 Dark Theme, originally inserted by Aahil */}
                    <BaseLayer checked name="Dark Mode">
                        <TileLayer
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"
                            minZoom={0}
                            maxZoom={20}
                            ext="png"
                        />
                    </BaseLayer>
                    {/* zfm24 = added Layer 2  Light Theme*/}
                    <BaseLayer name="White Mode">
                        <TileLayer
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}"
                            minZoom={0}
                            maxZoom={20}
                            ext="png"
                        />
                    </BaseLayer>
                </LayersControl>
{/* From Alejandro AO 02/06/23 Youtube Tutorial at https://youtu.be/jD6813wGdBA?si=yLqG0yKv66FJ9qhb*/}
{/* Modified by Weihao Li on 05/12/24 */}
{/* wl484: Marker Cluster should wrap all the markers*/}
                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createCustomClusterIcon}
                >
                {/* zfm24 = changed markers format, taken by ChatGPT 3 */}
                {markers.map(marker => (
                    <Marker key={marker.popUp} position={marker.position} icon={
                        marker.popUp === 'Drexel University' ? drexelIcon :
                        marker.popUp === 'University of Pennsylvania' ? upennIcon :
                        marker.popUp === 'Temple University' ? templeIcon :
                        marker.popUp === "Chinatown" ? chinatownIcon :
                        marker.popUp.toLowerCase().includes('village') ? villageIcon :
                        marker.popUp === "Rittenhouse Square" ? rittenhouseIcon :
                        marker.popUp === "Cedar Park" ? rittenhouseIcon :
                        marker.popUp === "Fairmount" ? villageIcon :
                        marker.popUp === "Mantua" ? villageIcon :
                        marker.popUp === "Old City" ? oldcityIcon :
                        marker.popUp === "West Philadlphia" ? westIcon :
                        marker.popUp === "South Philadelphia" ? westIcon :
                        //zfm24 = Added hospitals, police stations, restaurants, and stores - CHANGE ICONS HERE!
                        marker.popUp === "Hospital of the University of Pennsylvania" ? hospitalIcon :
                        marker.popUp === "Childrens Hospital of Philadelpha" ? hospitalIcon : 
                        marker.popUp === "Childrens Hospital of Philadelphia Emergency Room" ? hospitalIcon :
                        marker.popUp === "Oberholtzer John Carl MD See See Hospital" ? hospitalIcon : 
                        marker.popUp === "Perelman Center for Advanced Medicine" ? hospitalIcon : 
                        marker.popUp === "Philadelphia Police 16th District" ? policeIcon :  
                        marker.popUp === "Amtrak Police Department" ? policeIcon : 
                        marker.popUp === "University of Pennsylvania Police" ? policeIcon :
                        marker.popUp === "Drexel University Police" ? policeIcon : 
                        marker.popUp === "Philadelphia Police 18th District" ? policeIcon : 
                        marker.popUp === "Landmark Americana University" ? foodIcon : 
                        marker.popUp === "Copabanana University City Restaurant" ? foodIcon : 
                        marker.popUp === "CO-OP Restaurant & Bar" ? foodIcon : 
                        marker.popUp === "Dim Sum House Restaurant" ? foodIcon : 
                        marker.popUp === "Lascalas Fire Restaurant" ? foodIcon :
                        marker.popUp === "Shake Shack Restaurant" ? foodIcon : 
                        marker.popUp === "Liberty Place Shopping Mall" ? shoppingIcon : 
                        marker.popUp === "Hello World Modern Mercantile" ? shoppingIcon : 
                        marker.popUp === "Urban Outfitters" ? shoppingIcon : 
                        marker.popUp === "Philadelphia Runner Shopping Store" ? shoppingIcon :
                        marker.popUp === "Childrens Hospital of Philadelphia" ? hospitalIcon :  
                                              
                        defaultIcon
                    }>
                        {/* aa4763: wrote the code above to replace the defualt icons with custom icons if those places were specifially any of the locations above*/}
                        <Popup className="Popup_size">
                            <div className = "popup_color">
                            <h1>{marker.popUp}</h1>
                            <p>{marker.description}</p>
                            </div>            
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
            </MarkerClusterGroup>
            </MapContainer>

            <div>
                <Mylocation onLocationUpdate={handleUserLocation} />
            </div>
        </div>
        </div>              
    ); 
};  
export default Map;    








