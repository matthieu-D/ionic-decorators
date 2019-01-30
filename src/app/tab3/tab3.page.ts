import { Component } from '@angular/core';
import { TimeTracker } from '../decorators/timeTracker.decorator';
import { MethodHijacker } from '../decorators/methodHijacker.decorator';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
// @TimeTracker("Tab3")
export class Tab3Page {
  constructor() {
    this.sayGoodBye();
  }

  @MethodHijacker() // MethodDecorator
  sayGoodBye() {
    console.log("Good bye");
  }
}
