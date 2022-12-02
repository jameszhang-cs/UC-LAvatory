import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import buildingData from "./data/buildings.json"
import { useMapEvents } from 'react-leaflet/hooks'
import L from 'leaflet';
import { useState, useEffect } from 'react'
import { getPreciseDistance } from 'geolib';
import "./Map.css"
import "leaflet/dist/leaflet.css";

import icon from 'leaflet/dist/images/marker-icon.png';
import redIcon from './red_marker.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
const center = [34.0691, -118.442]
const buildings = buildingData.features

var DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

var RedIcon = L.icon({
  iconUrl: redIcon,
  shadowUrl: iconShadow,
  iconSize:     [25, 37], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  shadowAnchor: [12, 21],  // the same for the shadow
  popupAnchor:  [0, 0]
})
L.Marker.prototype.options.icon = DefaultIcon;

 function LocationMarker(){
  const [position, setPosition] = useState(null)
  const [closestBuilding, setClosestBuilding] = useState({})

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng)
      setClosestBuilding(findClosestBuilding(e.latlng.lat, e.latlng.lng))
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  return (position === null) ? null : (
    <Marker position={position} icon={RedIcon}>
      <Popup>
        <h1>You are here!</h1>
        <p>Closest Building: {closestBuilding.name} Distance: {closestBuilding.dist} m</p>
      </Popup>
    </Marker>
  )
}

function findClosestBuilding(lat, lng){
  var arr,
  minDist = Infinity,
  minBuilding = "",
  itemDistance = 0

  for(let i = 0; i < buildings.length; i++){
    console.log("ITEM: " + buildings[i].properties.NAME);
    itemDistance = getPreciseDistance(
      {latitude: lat, longitude: lng},
      {latitude: buildings[i].geometry.coordinates[0], longitude: buildings[i].geometry.coordinates[1]}
    );
    console.log("Distance: " + itemDistance);
    if(itemDistance < minDist){
      minDist = itemDistance;
      minBuilding = buildings[i].properties.NAME;
    };
  }
  console.log("Closest Building: " + minBuilding + " Distance: " + minDist);
  arr = {name: minBuilding, dist: minDist};
  return arr;
}

function Map() {
    return (
      <MapContainer center={center} zoom={20} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildingData.features.map(building => (
          <Marker key={building.properties.BUILDING_ID} position={[
            building.geometry.coordinates[0],
            building.geometry.coordinates[1]
          ]}
          > 
            <Popup>
              <h2>{building.properties.NAME}</h2>
              <button>
                <a href = {"http://localhost:3000/" + building.properties.id}>See data for {building.properties.NAME}</a>
              </button>
            </Popup>
          </Marker>
        ))}
        <LocationMarker />
      </MapContainer>
    );
  }
export default Map;