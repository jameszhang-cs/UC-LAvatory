import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import buildingData from "./data/buildings.json"
import { Icon } from "leaflet"
import "./Map.css"
import "leaflet/dist/leaflet.css";

const toiletIcon = new Icon({
    
});

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
                Select
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }

export default Map;