import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;
  @Input() description: string;
  @Input() suggestionAfter: string;
  @Input() suggestionBefore: string;
  @Input() changeType: string;


  constructor() { }



  ngOnInit() {

  }

}
