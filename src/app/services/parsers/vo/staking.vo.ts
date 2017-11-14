export interface StakingVO {


  graph: Staking30DayVO[];

  last24Hour: number;
  last7Days: number;
  last30Days: number;
  last365Days: number;
  latestStake: number;
  latestTime: Date;
  stakeCounted: number;
  timeTaken: number;

}


export interface Staking30DayVO {

  date: Date;
  amount: number;

}
