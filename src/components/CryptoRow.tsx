// src/components/CryptoRow.tsx

import React from 'react';
import type { CryptoAsset } from '../types/crypto';
import SevenDayChart from './SevenDayChart';

interface CryptoRowProps {
  index: number;
  asset: CryptoAsset;
}

const CryptoRow: React.FC<CryptoRowProps> = ({ index, asset }) => {
  const priceChangeColor = (value: number) => (value >= 0 ? 'green' : 'red');

  return (
    <tr>
      <td>{index}</td>
      <td><img src={asset.logo} alt={asset.name} width="30" /></td>
      <td>{asset.name}</td>
      <td>{asset.symbol}</td>
      <td>${asset.price.toFixed(2)}</td>
      <td style={{ color: priceChangeColor(asset.percentChange1h) }}>{asset.percentChange1h}%</td>
      <td style={{ color: priceChangeColor(asset.percentChange24h) }}>{asset.percentChange24h}%</td>
      <td style={{ color: priceChangeColor(asset.percentChange7d) }}>{asset.percentChange7d}%</td>
      <td>${asset.marketCap.toLocaleString()}</td>
      <td>${asset.volume24h.toLocaleString()}</td>
      <td>{asset.circulatingSupply.toLocaleString()}</td>
      <td>{asset.maxSupply.toLocaleString()}</td>
      <td><SevenDayChart data={asset.sevenDayData} /></td>
    </tr>
  );
};

export default CryptoRow;
