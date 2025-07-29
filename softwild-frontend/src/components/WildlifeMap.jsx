import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";

// Custom marker icon
const animalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  iconSize: [30, 30],
});

const WildlifeMap = () => {
  const [wildlifeData, setWildlifeData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://wildlife-backend.onrender.com/data"); // Replace with your backend URL
      setWildlifeData(res.data.slice(-10)); // Get last 10 entries
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // Auto-refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={[11.0168, 76.9558]} zoom={7} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {wildlifeData.map((entry, idx) => (
        <Marker key={idx} position={[entry.latitude, entry.longitude]} icon={animalIcon}>
          <Popup>
            <strong>Species:</strong> {entry.species} <br />
            <strong>Last Seen:</strong> {new Date(entry.timestamp).toLocaleString()}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WildlifeMap;
