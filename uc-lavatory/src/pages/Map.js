import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import buildingData from "./data/buildings.json"
import { useMapEvents } from 'react-leaflet/hooks'
import L from 'leaflet';
import { useState } from 'react'
import geolib from 'geolib';
import "./Map.css"
import "leaflet/dist/leaflet.css";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
const center = [34.0689, -118.4452]
const buildings = buildingData.features

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMarker = () => {

  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        <h1>You are here!</h1>
        <p>coordinates: {position.lat}, {position.lng}</p>
      </Popup>
    </Marker>
  )
}

function Map() {
    return (
      <MapContainer center={center} zoom={20} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
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
      </MapContainer>
    );
  }
export default Map;