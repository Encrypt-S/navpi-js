export interface StakingModel {
  graph: Staking30DayModel[];
  last24Hour: number;
  last7Days: number;
  last30Days: number;
  last365Days: number;
  latestStake: number;
  latestTime: Date;
  stakeCounted: number;
  timeTaken: number;
}

export interface Staking30DayModel {
  name: string;
  value: number;
}
