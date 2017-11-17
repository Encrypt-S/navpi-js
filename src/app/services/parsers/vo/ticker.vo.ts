


export interface TickerVO {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  priceUSD: number;
  priceBTC: number;
  volume24Hour: number;
  marketCapUSD: number;
  availableSupply: number;
  totalSupply: number;

  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  lastUpdated: number;

}
