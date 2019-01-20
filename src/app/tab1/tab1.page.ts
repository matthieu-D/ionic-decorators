import { Component } from '@angular/core';
import { TimeTracker } from '../decorators/timeTracker.decorator';
import { PropsChangedTracker} from '../decorators/propsChangedTracker.decorator';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
@TimeTracker("Tab1")
export class Tab1Page {
  @PropsChangedTracker() // PropertyDecorator
  simpleProp;

  constructor() {
    this.simpleProp = 1;
  }
}
