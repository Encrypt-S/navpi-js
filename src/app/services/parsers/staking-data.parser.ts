import {Staking30DayVO, StakingVo} from './vo/staking.vo';
import {DatePipe} from '@angular/common';

export function  parseStakingReport(rawReportJSON: any): StakingVo {

  const stakingData: StakingVo = {} as StakingVo;
  const stakingGraph: Staking30DayVO[] = [];

  const result = rawReportJSON.result;

  const  arrayOfKeys = Object.keys(result);
  arrayOfKeys.forEach((key) => {

    switch (key) {
      case 'Last 24H':
        stakingData.last24Hour = parseFloat(result[key]);
        break;

      case 'Last 7 Days':
        stakingData.last7Days = parseFloat(result[key]);
        break;

      case 'Last 30 Days':
        stakingData.last30Days = parseFloat(result[key]);
        break;

      case 'Last 365 Days':
        stakingData.last365Days = parseFloat(result[key]);
        break;

      case 'Latest Stake':
        stakingData.latestStake = parseFloat(result[key]);
        break;

      case 'Latest Time':
        stakingData.latestTime = new Date(result[key]);
        break;

      case 'Stake counted':
        stakingData.stakeCounted = parseFloat(result[key]);
        break;

      case 'time took (ms)':
        stakingData.timeTaken = parseFloat(result[key]);
        break;

      default:
        // not caught above so is day report
        const stakeGraphModel: Staking30DayVO = {} as Staking30DayVO;
        stakeGraphModel.value = parseFloat(result[key]);
        stakeGraphModel.name = new DatePipe('en-US').transform(new Date(key), 'd MMM');

        stakingGraph.push(stakeGraphModel);

    }


  });

  stakingData.graph = stakingGraph;
  return stakingData;

}


