import { store } from '../redux/store';
import { updateAsset } from '../redux/cryptoSlice';
import type { CryptoAsset } from '../types/crypto';

class CryptoWebSocket {
  private interval: number | null = null;

  private generateRandomChange(min: number, max: number): number {
    return Number((Math.random() * (max - min) + min).toFixed(2));
  }

  private updateCryptoPrice(asset: CryptoAsset): CryptoAsset {
    const priceChange = this.generateRandomChange(-2, 2);
    const newPrice = Number((asset.price * (1 + priceChange / 100)).toFixed(2));
    
    return {
      ...asset,
      price: newPrice,
      percentChange1h: this.generateRandomChange(-3, 3),
      percentChange24h: this.generateRandomChange(-5, 5),
      percentChange7d: this.generateRandomChange(-10, 10),
      volume24h: Number((asset.volume24h * (1 + this.generateRandomChange(-5, 5) / 100)).toFixed(0)),
      sevenDayData: [
        ...asset.sevenDayData.slice(1),
        newPrice
      ]
    };
  }

  public startUpdates() {
    if (this.interval) return;

    this.interval = window.setInterval(() => {
      const state = store.getState();
      const assets = state.crypto.assets;

      assets.forEach(asset => {
        const updatedAsset = this.updateCryptoPrice(asset);
        store.dispatch(updateAsset(updatedAsset));
      });
    }, 2000); // Update every 2 seconds
  }

  public stopUpdates() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

export const cryptoWebSocket = new CryptoWebSocket(); 