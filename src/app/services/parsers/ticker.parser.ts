


import {TickerVO} from './vo/ticker.vo';

export function parseTicker(rawJSON: any) {



  const d = rawJSON[0];


  let vo = {} as TickerVO;

  vo.id = d.id;
  vo.name = d.name;
  vo.symbol = d.symbol;
  vo.rank = parseInt(d.rank, 10);
  vo.priceUSD = parseFloat(d.price_usd);
  vo.priceBTC = parseFloat(d.price_btc);
  vo.priceBTC = parseFloat(d.price_btc);
  vo.volume24Hour = parseFloat(d['24h_volume_usd']);
  vo.marketCapUSD = parseFloat(d['market_cap_usd']);
  vo.availableSupply = parseFloat(d['available_supply']);
  vo.totalSupply = parseFloat(d['total_supply']);
  vo.percentChange1h = parseFloat(d['percent_change_1h']);
  vo.percentChange7d = parseFloat(d['percent_change_7d']);
  vo.percentChange24h = parseFloat(d['percent_change_24h']);
  vo.lastUpdated = parseInt(d['last_updated'], 10);

  return vo;


}
