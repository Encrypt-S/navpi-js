import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {StakingVO} from '../../services/parsers/vo/staking.vo';

@Component({
  selector: 'app-network-status',
  templateUrl: './network-status.component.html',
  styleUrls: ['./network-status.component.scss']
})
export class NetworkStatusComponent implements OnInit {


  single: any[];
  multi: any[];

  //view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Date';
  showYAxisLabel = false;
  yAxisLabel = 'NAV';

  graph = [];

  colorScheme = {
    domain: ['#7d5ab5', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;


  constructor(

    private _dataService: DataService

  ) { }

  ngOnInit() {

    console.log(this.stakingData);

    this.graph = [{name: 'Staking Rewards', series: this.stakingData.graph.reverse()}];

  }



  get stakingData(): StakingVO {
    return this._dataService.stakingData;
  }

}
//
//
// export var single = [
//   {
//     "value": "Germany",
//     "value": 8940000
//   },
//   {
//     "value": "USA",
//     "value": 5000000
//   },
//   {
//     "value": "France",
//     "value": 7200000
//   }
// ];
//
// export var multi = [
//   {
//     "value": "Germany",
//     "series": [
//       {
//         "value": "2010",
//         "value": 7300000
//       },
//       {
//         "value": "2011",
//         "value": 8940000
//       }
//     ]
//   },
//
//   {
//     "value": "USA",
//     "series": [
//       {
//         "value": "2010",
//         "value": 7870000
//       },
//       {
//         "value": "2011",
//         "value": 8270000
//       }
//     ]
//   },
//
//   {
//     "value": "France",
//     "series": [
//       {
//         "value": "2010",
//         "value": 5000002
//       },
//       {
//         "value": "2011",
//         "value": 5800000
//       }
//     ]
//   }
// ];
//
