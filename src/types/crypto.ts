interface CryptoAsset {
    id: string;
    logo: string;
    name: string;
    symbol: string;
    price: number;
    percentChange1h: number;
    percentChange24h: number;
    percentChange7d: number;
    marketCap: number;
    volume24h: number;
    circulatingSupply: number;
    maxSupply: number;
    sevenDayData: number[];
}

export type { CryptoAsset }; 