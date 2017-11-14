export interface StakingVO {


  graph: Staking30DayVO[];

  hr24: number;
  day7: number;
  day30: number;
  day365: number;
  latestStake: number;
  latestTime: Date;
  stakeCounted: number;
  timeTaken: number;

}


export interface Staking30DayVO {

  date: Date;
  amount: number;

}
