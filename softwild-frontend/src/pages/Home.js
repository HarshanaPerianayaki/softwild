// src/pages/Home.js
export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to SoftWild 🐾</h1>
      <p className="text-gray-700 text-lg">
        A real-time wildlife monitoring system powered by IoT and Cloud technology.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-800">🌍 Live Map</h2>
          <p>Track animal movement on a real-time map interface.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-800">📊 Analytics</h2>
          <p>Coming soon: Statistics and charts about animal behavior.</p>
        </div>
      </div>
    </div>
  );
}
