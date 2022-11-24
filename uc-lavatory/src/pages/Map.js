import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import buildingData from "./data/buildings.json"
import L from 'leaflet';
import "./Map.css"
import "leaflet/dist/leaflet.css";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
    return (
      <MapContainer center={[34.0689, -118.4452]} zoom={20} scrollWheelZoom={false}>
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
      </MapContainer>
    );
  }

export default Map;