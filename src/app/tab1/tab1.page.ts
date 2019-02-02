import { Component } from '@angular/core';
// import { TimeTracker } from '../decorators/timeTracker.decorator';
// import { PropsChangedTracker} from '../decorators/propsChangedTracker.decorator';
import { ExitTimeTrackerModal } from '../decorators/exit-modal/exitTimeTrackerModal.decorator';
// import { ExitModal } from '../decorators/exit-modal/exitModal.decorator';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
// @TimeTracker("Tab1")
// @ExitModal()
@ExitTimeTrackerModal("Tab1")
export class Tab1Page {
  // @PropsChangedTracker() // PropertyDecorator
  // simpleProp;

  constructor() {
    // this.simpleProp = 1;
  }
}
