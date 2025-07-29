// src/components/Navbar.js
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-green-700">🌿 SoftWild</div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-green-700 font-medium">Home</Link>
        <Link to="/map" className="text-gray-700 hover:text-green-700 font-medium">Map</Link>
        <Link to="/analytics" className="text-gray-700 hover:text-green-700 font-medium">Analytics</Link>
      </div>
    </nav>
  );
}
