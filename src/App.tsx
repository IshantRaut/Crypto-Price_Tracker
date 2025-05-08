// src/App.tsx

import React, { useEffect } from 'react';
import CryptoTable from './components/CryptoTable';
import { cryptoWebSocket } from './services/cryptoWebSocket';

const App: React.FC = () => {
  useEffect(() => {
    cryptoWebSocket.startUpdates();
    return () => {
      cryptoWebSocket.stopUpdates();
    };
  }, []);

  return (
    <div className="container">
      <h1>Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;
