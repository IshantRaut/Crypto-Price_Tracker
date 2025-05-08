// src/components/CryptoTable.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import CryptoRow from './CryptoRow';

const CryptoTable: React.FC = () => {
  const assets = useSelector((state: RootState) => state.crypto.assets);

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>1h %</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
          <th>24h Volume</th>
          <th>Circulating Supply</th>
          <th>Max Supply</th>
          <th>7D Chart</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset, index) => (
          <CryptoRow key={asset.id} index={index + 1} asset={asset} />
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
