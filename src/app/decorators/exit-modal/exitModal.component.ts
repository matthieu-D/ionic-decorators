import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-page',
  template: '<h1 text-center> You spent {{timeSpent}} ms on {{viewName}}</h1>'
})
export class ExitModalPage {
  @Input() timeSpent;
  @Input() viewName;

  constructor() {}
}