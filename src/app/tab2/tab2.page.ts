import { Component } from '@angular/core';
import { TimeTracker } from '../decorators/timeTracker.decorator';
import { Traductor } from '../decorators/traductor.decorator';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
@TimeTracker("Tab2")
export class Tab2Page {
  @Traductor("eng") // PropertyDecorator
  welcomeMessage: String;
}
