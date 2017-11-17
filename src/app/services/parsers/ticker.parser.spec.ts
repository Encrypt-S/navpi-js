


import {parseTicker} from './ticker.parser';

describe('Ticker Data Parser', () => {

  let data = [
    {
      'id': 'nav-coin',
      'name': 'NAV Coin',
      'symbol': 'NAV',
      'rank': '93',
      'price_usd': '0.839057',
      'price_btc': '0.00010644',
      '24h_volume_usd': '1176400.0',
      'market_cap_usd': '52056813.0',
      'available_supply': '62042046.0',
      'total_supply': '62042046.0',
      'max_supply': null,
      'percent_change_1h': '-0.7',
      'percent_change_24h': '-3.76',
      'percent_change_7d': '-8.56',
      'last_updated': '1510901644'
    }
  ];

  let tickerData;

  beforeEach(() => {
    tickerData = parseTicker(data);
  })


  it('should have an id', () => {
    expect(tickerData).toBeDefined();
  });

  it('should have the correct id', () => {
    expect(tickerData.id).toEqual('nav-coin');
  });


  it('should have a name', () => {
    expect(tickerData.name).toBeDefined();
  });

  it('should have the correct name', () => {
    expect(tickerData.name).toEqual('NAV Coin');
  });


  it('should have a symbol', () => {
    expect(tickerData.symbol).toBeDefined();
  });

  it('should have the correct symbol', () => {
    expect(tickerData.symbol).toEqual('NAV Coin');
  });


  it('should have a rank', () => {
    expect(tickerData.rank).toBeDefined();
  });

  it('should have the correct rank', () => {
    expect(tickerData.rank).toEqual(93);
  });


  it('should have a usd price', () => {
    expect(tickerData.priceUSD).toBeDefined();
  });

  it('should have the correct USD price', () => {
    expect(tickerData.priceUSD).toEqual(0.00010644);
  });

  it('should have a BTC price', () => {
    expect(tickerData.priceBTC).toBeDefined();
  });

  it('should have the correct BTC price', () => {
    expect(tickerData.priceBTC).toEqual(0.00010644);
  });


  it('should have a 24 hour volume', () => {
    expect(tickerData.volume24Hour).toBeDefined();
  });

  it('should have the correct 24 hour volume', () => {
    expect(tickerData.volume24Hour).toEqual(0.00010644);
  });


  it('should have a USD Market Cap', () => {
    expect(tickerData.marketCapUSD).toBeDefined();
  });

  it('should have the correct USD Market Cap', () => {
    expect(tickerData.marketCapUSD).toEqual(52056813.0);
  });


  it('should have available supply', () => {
    expect(tickerData.availableSupply).toBeDefined();
  });

  it('should have the correct available supply', () => {
    expect(tickerData.availableSupply).toEqual(62042046.0);
  });


  it('should have total supply', () => {
    expect(tickerData.totalSupply).toBeDefined();
  });

  it('should have the correct total supply', () => {
    expect(tickerData.totalSupply).toEqual(62042046.0);
  });


  it('should have percent change 1h', () => {
    expect(tickerData.percentChange1h).toBeDefined();
  });

  it('should have the correct percent change 1h', () => {
    expect(tickerData.percentChange1h).toEqual('-0.7');
  });



  it('should have percent change 24h', () => {
    expect(tickerData.percentChange24h).toBeDefined();
  });

  it('should have the correct percent change 24h', () => {
    expect(tickerData.percentChange24h).toEqual('-3.76');
  });


  it('should have percent change 7d', () => {
    expect(tickerData.percentChange7d).toBeDefined();
  });

  it('should have the correct percent change 7d', () => {
    expect(tickerData.percent).toEqual('-8.56');
  });


  it('should have last updated', () => {
    expect(tickerData.lastUpdated).toBeDefined();
  });

  it('should have correct last updated', () => {
    expect(tickerData.lastUpdated).toEqual(1510901644);
  });



});


