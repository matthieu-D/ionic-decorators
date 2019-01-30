import { ModalController } from '@ionic/angular';

import { AppModule } from '../../app.module';
import { ExitModalPage } from './exitModal.component';

export function ExitModal(viewName) {
  return function (constructor) {
    let modalController = AppModule.injector.get(ModalController)

    const ionViewWillLeaveHook = "ionViewWillLeave";
    const original = constructor.prototype[ionViewWillLeaveHook];

    constructor.prototype[ionViewWillLeaveHook] = function ( ...args ) {
      original && original.apply(this, args);
      
      showModal(viewName, constructor.timeSpent);
    }

    async function showModal(viewName, timeSpent) {
      let modal = await modalController.create({
        component: ExitModalPage,
        componentProps: {
          timeSpent: timeSpent,
          viewName: viewName 
        }
      });
      
      return await modal.present();
    }
  }
}