import React, { useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
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
    },
    {
        position: [39.964951146087856, -75.19798834216576],
        popUp: 'Mantua',
    },
    {
        position: [39.950431552151805, -75.2203727251815],
        popUp: 'Cedar Park'
    },
    {
        position: [39.9609193940143, -75.19265863481958],
        popUp: 'Powelton Village'

    },
    {        
        position: [39.9566, -75.1899],
        popUp: 'Drexel University'
    },

    ];



if(!navigator.geolocation) {
    console.log("Your Browser Does Not Support Live Location Tracking")
} else {
    navigator.geolocation.getCurrentPosition(getPosition)
}

function getPosition(position){
    // console.log(position)
    var lat = position.coords.latitude
    var long = position.coords.longitude
    var accuracy = position.coords.accuracy
    console.log("Your coordinate is: Lat: "+ lat + "Long: "+ long + "Accuracy: " + accuracy)

    var marker = L.marker([lat, long]).addTo(Map)
    var circle = L.circle([lat, long], {radius: accuracy}).addTo(Map)

}


// const useGeoLocation = () => {
//     const [location, setLocation] = useState({
//         loaded: false, 
//         coordinates: {lat: "", lng: ""}, 
//     });

//     const onSuccess = location => {
//         setLocation({
//             loaded: true,
//             coordinates: {
//                 lat: location.coords.latitude,
//                 lng: location.coords.longitude,
//             },
//         });
//     };

//     const OnError = error => {
//         setLocation({
//             loaded: true,
//             error,
//         });
//     }

//     useEffect(() => {
//         if(!("geolocation" in navigator)){
//             onError({
//                 code: 0,
//                 message: "Geolocation Not Supported",
//             });
//         }
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     }, []);
//     return location; 
// };


// const Map = () => {
//     return (
//         <div>
//             <img src= "/Images/Website Logo.png" alt=""/>
//             <div id="Research">
//             <h2>Research</h2>
//             <p>
// 5 Neighborhoods near University City: <br></br>
// <br></br>
// West Philly:
// <br></br>
// According to many trustable sites, West Philadelphia is more safe than 7 percent of neighborhood in the entire United States. 
// West Philadelphia has around 200, 637 residents. There are about 81 violent crime rates, 231 property crime rates, and around 312 crimes in the neighborhood. 
// West Philadelphia does have a higher drug rate at 0.26 compared to other neighborhood in Philadelphia. We would give it 1 out of 5 ⭐️'s.
// <br></br>
// <img src="https://img.freepik.com/premium-vector/vector-image-one-star-out-five-low-level_541404-80.jpg" alt="1 out of 5 stars" />
// <br></br>
// South Philly:
// <br></br>
// South Philly is known to be really dangerous. It is 43% above national average of total crime.
// South Philly is known to be really bad for violent crime. It is 93% worse than the national average of violent crime. 
// Property crime would be at 34% above national average. 1 out of 30 residents have a chance of becoming a victim of crime. 
// It isn’t a very safe neighborhood. We would give it 0 out of 5 ⭐️'s.
// <br></br>
// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlbG0ylfCNpSDGa2PDiaG7NKNr-rXmlvPHjHfhz7vNDfxb4rH_zyh7BQsj7mSWT6a0Q&usqp=CAU" alt="0 out of 5 stars" />
// <br></br>
// Mantua: 
// <br></br>
// Mantua has a population of 8,238 people. Mantua is lower than the national average when it comes to assault! 
// When it comes to murder, Mantua is a bit higher than the national average. The national average being 6.1 per 100,000 residents. 
// In Mantua it would be 9. Mantua is somewhat safe. Police are very visible in Mantua as well as very responsive. We would give it 3 out of 5 ⭐️'s. 
// <br></br>
// <img src="data:image/jpeg;base64,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" alt="3 out of 5 stars" />
// <br></br>
// Cedar Park:
// <br></br>
// Cedar Park is a very safe place. It has a population of 7,922 people. Cedar Park has very low rates compared to the national average when it comes to assault, murder, rape, robbery, burglary, theft, and motor-vehicle theft. Cedar Park  would be safe compared to many other neighborhoods surrounding University Park. We would give it 4 out of 5 ⭐️'s.  
// <br></br>
// <img src="https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg" alt="4 out of 5 stars" />
// <br></br>
// Powelton Village:
// <br></br>
// Powelton Village is a completely safe place to live and many students live in the area. However, the neighborhood is known for its Victorian homes and historical significance. 
// Many student live in Powelton Village. It has a population of 4,236. Powelton is one of the safest places to live in Pennsylvania.  It is a part of University City and has a mix of both local residents and college students. It is very safe. The national average of assault is 282.7 out of 100,000 residents. Powelton Village has 26.8. Burglary, theft, rape, and murder is not be a problem when living here. We would rate Powelton Village 5 out of 5 ⭐️'s. 
// <img src="data:image/png;base64,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" alt="5 out of 5 stars" />
//             </p>





//         </div>


const { BaseLayer } = LayersControl;
const Map = () => {
    return (
        <div>
            <MapContainer center={[39.952237, -75.163626]} zoom={13}>
                <LayersControl position="topright">
                    {/* Layer 1 */}
                    <BaseLayer checked name="Dark Smooth Tiles">
                        <TileLayer
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"
                            minZoom={0}
                            maxZoom={20}
                            ext="png"
                        />
                    </BaseLayer>
                    {/* Layer 2 */}
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
                {/* Mapping Markers */}
                {markers.map(marker => (
                    <Marker key={marker.popUp} position={marker.position}>
                        <Popup>
                            <h1>{marker.popUp}</h1>
                            <p>{marker.description}</p>   
                            {location.loaded && !location.error && (
                                <Marker position={[location.coordinates.lat, location.coordinates.lng]}></Marker>
                            )}             
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    ); 
}

export default Map;    


