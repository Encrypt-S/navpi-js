import {inject, TestBed} from '@angular/core/testing';

import {WalletService} from './wallet.service';
import {HttpModule} from '@angular/http';
import {CoreServiceStub} from '../core/core.service.stub';
import {CoreService} from '../core/core.service';
import {StakingVO} from './vo/staking.vo';

describe('WalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        WalletService,
        {provide: CoreService, useClass: CoreServiceStub}
      ]
    });
  });

  it('should be created', inject([WalletService], (service: WalletService) => {
    expect(service).toBeTruthy();
  }));


  describe('_parseStakingReport()', () => {

    const strData = '{"result":{"2017-11-13 11:00:00":"380.90588838","2017-11-12 11:00:00":"557.79027099","2017-11-11 11:00:00":"527.95355885","2017-11-10 11:00:00":"547.77876459","2017-11-09 11:00:00":"652.24999804","2017-11-08 11:00:00":"376.1910957","2017-11-07 11:00:00":"0.00","2017-11-06 11:00:00":"0.00","2017-11-05 11:00:00":"0.00","2017-11-04 11:00:00":"0.00","2017-11-03 11:00:00":"0.00","2017-11-02 11:00:00":"0.00","2017-11-01 11:00:00":"0.00","2017-10-31 11:00:00":"0.00","2017-10-30 11:00:00":"0.00","2017-10-29 11:00:00":"0.00","2017-10-28 11:00:00":"0.00","2017-10-27 11:00:00":"0.00","2017-10-26 11:00:00":"0.00","2017-10-25 11:00:00":"0.00","2017-10-24 11:00:00":"0.00","2017-10-23 11:00:00":"0.00","2017-10-22 11:00:00":"0.00","2017-10-21 11:00:00":"0.00","2017-10-20 11:00:00":"0.00","2017-10-19 11:00:00":"0.00","2017-10-18 11:00:00":"0.00","2017-10-17 11:00:00":"0.00","2017-10-16 11:00:00":"0.00","2017-10-15 11:00:00":"0.00","Last 24H":"515.09753142","Last 7 Days":"3049.86957655","Last 30 Days":"5042.86957655","Last 365 Days":"6042.86957655","Latest Stake":"1.28438356","Latest Time":"2017-11-14 04:36:32","Stake counted":2519,"time took (ms)":2},"error":null,"id":null}';
    let data;

    const latestTime = new Date('2017-11-14 04:36:32');


    beforeEach(() => {

      data = JSON.parse(strData);

    });


    it('should return the data', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData).toBeDefined();
    }));


    it('should have the last 24 hr', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.last24Hour).toBeDefined();
    }));

    it('should have the correct last 24 hr', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.last24Hour).toEqual(515.09753142);
    }));


    it('should have the last 7 days', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.last7Days).toBeDefined();
    }));

    it('should have the correct last 7 days', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.last7Days).toEqual(3049.86957655);
    }));


    it('should have the last 30 days', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.last30Days).toBeDefined();
    }));

    it('should have the correct last 30 days', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.last30Days).toEqual(5042.86957655);
    }));


    it('should have the last 365 days', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.last365Days).toBeDefined();
    }));

    it('should have the correct last 365 days', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.last365Days).toEqual(6042.86957655);
    }));


    it('should have the last  time', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.latestTime).toBeDefined();
    }));

    it('should have the correct last  time', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.latestTime).toEqual(latestTime);
    }));

    it('should have the stake counted', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.stakeCounted).toBeDefined();
    }));

    it('should have the correct stake counted', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.stakeCounted).toEqual(2519);
    }));


    it('should have the time taken', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.timeTaken).toBeDefined();
    }));

    it('should have the correct timeTake', inject([WalletService], (service: WalletService) => {
      const stakeData = service._parseStakingReport(data);
      expect(stakeData.timeTaken).toEqual(2);
    }));


  });

});
