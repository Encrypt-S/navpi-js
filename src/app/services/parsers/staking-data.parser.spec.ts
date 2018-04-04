import {parseStakingReport} from './staking-data.parser';

describe('Staking Data Parser', () => {

  const strData = '{"result":{"2017-11-13 11:00:00":"380.90588838","2017-11-12 11:00:00":"557.79027099","2017-11-11 11:00:00":"527.95355885","2017-11-10 11:00:00":"547.77876459","2017-11-09 11:00:00":"652.24999804","2017-11-08 11:00:00":"376.1910957","2017-11-07 11:00:00":"0.00","2017-11-06 11:00:00":"0.00","2017-11-05 11:00:00":"0.00","2017-11-04 11:00:00":"0.00","2017-11-03 11:00:00":"0.00","2017-11-02 11:00:00":"0.00","2017-11-01 11:00:00":"0.00","2017-10-31 11:00:00":"0.00","2017-10-30 11:00:00":"0.00","2017-10-29 11:00:00":"0.00","2017-10-28 11:00:00":"0.00","2017-10-27 11:00:00":"0.00","2017-10-26 11:00:00":"0.00","2017-10-25 11:00:00":"0.00","2017-10-24 11:00:00":"0.00","2017-10-23 11:00:00":"0.00","2017-10-22 11:00:00":"0.00","2017-10-21 11:00:00":"0.00","2017-10-20 11:00:00":"0.00","2017-10-19 11:00:00":"0.00","2017-10-18 11:00:00":"0.00","2017-10-17 11:00:00":"0.00","2017-10-16 11:00:00":"0.00","2017-10-15 11:00:00":"0.00","Last 24H":"515.09753142","Last 7 Days":"3049.86957655","Last 30 Days":"5042.86957655","Last 365 Days":"6042.86957655","Latest Stake":"1.28438356","Latest Time":"2017-11-14 04:36:32","Stake counted":2519,"time took (ms)":2},"error":null,"id":null}';
  let data;

  const latestTime = new Date('2017-11-14 04:36:32');


  beforeEach(() => {

    data = JSON.parse(strData);

  });


  it('should return the data', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData).toBeDefined();
  });


  it('should have the last 24 hr', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.last24Hour).toBeDefined();
  });

  it('should have the correct last 24 hr', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.last24Hour).toEqual(515.09753142);
  });


  it('should have the last 7 days', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.last7Days).toBeDefined();
  });

  it('should have the correct last 7 days', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.last7Days).toEqual(3049.86957655);
  });


  it('should have the last 30 days', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.last30Days).toBeDefined();
  });

  it('should have the correct last 30 days', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.last30Days).toEqual(5042.86957655);
  });


  it('should have the last 365 days', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.last365Days).toBeDefined();
  });

  it('should have the correct last 365 days', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.last365Days).toEqual(6042.86957655);
  });


  it('should have the latest stake', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.latestStake).toBeDefined();
  });

  it('should have the correct last 365 days', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.latestStake).toEqual(1.28438356);
  });


  it('should have the last  time', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.latestTime).toBeDefined();
  });

  it('should have the correct last  time', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.latestTime).toEqual(latestTime);
  });

  it('should have the stake counted', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.stakeCounted).toBeDefined();
  });

  it('should have the correct stake counted', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.stakeCounted).toEqual(2519);
  });


  it('should have the time taken', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.timeTaken).toBeDefined();
  });

  it('should have the correct timeTake', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.timeTaken).toEqual(2);
  });


  it('should have the 30 day grapth', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.graph).toBeDefined();
  });

  it('graph should 30 days of data', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.graph.length).toEqual(30);
  });


  it('graph day 1 should be correct', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.graph[0].value).toEqual(380.90588838);
  });

  it('graph day 2 should be correct', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.graph[1].value).toEqual(557.79027099);
  });

  it('graph day 6 should be correct', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.graph[5].value).toEqual(376.1910957);
    expect(stakeData.graph[5].name).toEqual('8 Nov');
  });

  it('graph day 30 should be correct', () => {
    const stakeData = parseStakingReport(data);
    expect(stakeData.graph[29].value).toEqual(0);
    expect(stakeData.graph[29].name).toEqual('15 Oct');
  });


});


