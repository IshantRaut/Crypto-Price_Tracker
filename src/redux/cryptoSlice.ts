// src/redux/cryptoSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CryptoAsset } from '../types/crypto';

interface CryptoState {
  assets: CryptoAsset[];
}

const initialState: CryptoState = {
  assets: [
    {
      id: "1",
      logo: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      name: "Bitcoin",
      symbol: "BTC",
      price: 30000,
      percentChange1h: 0.5,
      percentChange24h: -2.3,
      percentChange7d: 4.2,
      marketCap: 580000000000,
      volume24h: 25000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      sevenDayData: [28000, 28500, 29000, 29500, 30000, 31000, 30000],
    },
    {
      id: "2",
      logo: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      name: "Ethereum",
      symbol: "ETH",
      price: 2000,
      percentChange1h: 1.0,
      percentChange24h: -1.8,
      percentChange7d: 2.1,
      marketCap: 240000000000,
      volume24h: 15000000000,
      circulatingSupply: 120000000,
      maxSupply: 120000000,
      sevenDayData: [1900, 1950, 2000, 2050, 2100, 2000, 2000],
    },
    {
      id: "3",
      logo: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
      name: "Binance Coin",
      symbol: "BNB",
      price: 320,
      percentChange1h: 0.8,
      percentChange24h: -1.2,
      percentChange7d: 3.5,
      marketCap: 49000000000,
      volume24h: 1200000000,
      circulatingSupply: 153000000,
      maxSupply: 170000000,
      sevenDayData: [310, 315, 320, 325, 330, 325, 320],
    },
    {
      id: "4",
      logo: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
      name: "Solana",
      symbol: "SOL",
      price: 95,
      percentChange1h: 1.2,
      percentChange24h: 2.5,
      percentChange7d: 8.3,
      marketCap: 41000000000,
      volume24h: 2800000000,
      circulatingSupply: 432000000,
      maxSupply: 0,
      sevenDayData: [88, 90, 92, 94, 96, 95, 95],
    },
    {
      id: "5",
      logo: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
      name: "XRP",
      symbol: "XRP",
      price: 0.52,
      percentChange1h: -0.3,
      percentChange24h: -1.5,
      percentChange7d: 1.2,
      marketCap: 28000000000,
      volume24h: 1500000000,
      circulatingSupply: 54000000000,
      maxSupply: 100000000000,
      sevenDayData: [0.51, 0.52, 0.53, 0.52, 0.51, 0.52, 0.52],
    },
    {
      id: "6",
      logo: "https://assets.coingecko.com/coins/images/12171/large/polkadot.png",
      name: "Polkadot",
      symbol: "DOT",
      price: 6.8,
      percentChange1h: 0.7,
      percentChange24h: -0.9,
      percentChange7d: 2.4,
      marketCap: 8500000000,
      volume24h: 350000000,
      circulatingSupply: 1250000000,
      maxSupply: 0,
      sevenDayData: [6.6, 6.7, 6.8, 6.9, 7.0, 6.9, 6.8],
    },
    {
      id: "7",
      logo: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      name: "Cardano",
      symbol: "ADA",
      price: 0.45,
      percentChange1h: 0.4,
      percentChange24h: -1.1,
      percentChange7d: 1.8,
      marketCap: 16000000000,
      volume24h: 450000000,
      circulatingSupply: 35500000000,
      maxSupply: 45000000000,
      sevenDayData: [0.44, 0.45, 0.46, 0.45, 0.44, 0.45, 0.45],
    },
    {
      id: "8",
      logo: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      name: "Dogecoin",
      symbol: "DOGE",
      price: 0.08,
      percentChange1h: 1.5,
      percentChange24h: 3.2,
      percentChange7d: 5.7,
      marketCap: 11000000000,
      volume24h: 600000000,
      circulatingSupply: 140000000000,
      maxSupply: 0,
      sevenDayData: [0.076, 0.078, 0.079, 0.081, 0.082, 0.079, 0.08],
    }
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setAssets: (state, action: PayloadAction<CryptoAsset[]>) => {
      state.assets = action.payload;
    },
    updateAsset: (state, action: PayloadAction<CryptoAsset>) => {
      const index = state.assets.findIndex(asset => asset.id === action.payload.id);
      if (index !== -1) {
        state.assets[index] = action.payload;
      }
    },
  },
});

export const { setAssets, updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;
