import {TickerModel} from '../models/ticker.model';

export function parseTicker(rawJSON: any) {

  const d = rawJSON[0];

  let model = {} as TickerModel;

  model.id = d.id;
  model.name = d.name;
  model.symbol = d.symbol;
  model.rank = parseInt(d.rank, 10);
  model.priceUSD = parseFloat(d.price_usd);
  model.priceBTC = parseFloat(d.price_btc);
  model.priceBTC = parseFloat(d.price_btc);
  model.volume24Hour = parseFloat(d['24h_volume_usd']);
  model.marketCapUSD = parseFloat(d['market_cap_usd']);
  model.availableSupply = parseFloat(d['available_supply']);
  model.totalSupply = parseFloat(d['total_supply']);
  model.percentChange1h = parseFloat(d['percent_change_1h']);
  model.percentChange7d = parseFloat(d['percent_change_7d']);
  model.percentChange24h = parseFloat(d['percent_change_24h']);
  model.lastUpdated = parseInt(d['last_updated'], 10);

  return model;

}
