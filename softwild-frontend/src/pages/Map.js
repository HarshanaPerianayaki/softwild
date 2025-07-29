import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wildlife Movement Map</h1>
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[20.5937, 78.9629]}>
          <Popup>Sample Animal Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapPage;
