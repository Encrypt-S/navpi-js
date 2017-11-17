
/**

 */

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-scorecard',
  template: ''
})
export class ScoreCardMockComponent {


  @Input() label: string;
  @Input() value: string;
  @Input() description: string;
  @Input() suggestionAfter: string;
  @Input() suggestionBefore: string;
  @Input() changeType: string;


}
