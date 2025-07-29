// src/pages/MapPage.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

// Custom icons for species
const icons = {
  Elephant: new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  }),
  Tiger: new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/616/616554.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  }),
  Default: new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149059.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  }),
};

const MapPage = () => {
  const [data, setData] = useState([]);
  const [speciesFilter, setSpeciesFilter] = useState('All');

  const fetchData = async () => {
    try {
      const res = await axios.get('https://wildlife-backend.onrender.com/data');
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch:', err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // auto-refresh every 30 sec
    return () => clearInterval(interval);
  }, []);

  const filteredData =
    speciesFilter === 'All'
      ? data
      : data.filter(entry => entry.species === speciesFilter);

  const uniqueSpecies = [...new Set(data.map(entry => entry.species))];

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">🦁 SoftWild Wildlife Tracker</h1>

      <div className="flex justify-center mb-4">
        <select
          className="border p-2 rounded"
          value={speciesFilter}
          onChange={e => setSpeciesFilter(e.target.value)}
        >
          <option value="All">All Species</option>
          {uniqueSpecies.map(species => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </div>

      <MapContainer center={[11.0, 77.0]} zoom={7} style={{ height: '80vh' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {filteredData.map((entry, index) => (
          <Marker
            key={index}
            position={[entry.latitude, entry.longitude]}
            icon={icons[entry.species] || icons.Default}
          >
            <Popup>
              <div>
                <strong>Species:</strong> {entry.species} <br />
                <strong>Location:</strong> [{entry.latitude}, {entry.longitude}] <br />
                <strong>Last Seen:</strong> {new Date(entry.timestamp).toLocaleString()}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
