import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EntranceHall from './components/EntranceHall';
import MeetingRoom from './components/MeetingRoom';
import CouncilRoom from './components/CouncilRoom';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<EntranceHall />} />
          <Route path="/meeting-room" element={<MeetingRoom />} />
          <Route path="/council-room" element={<CouncilRoom />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;