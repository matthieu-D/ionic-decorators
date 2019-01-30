export function TimeTracker() {
  return function (constructor) {
    var startTime;

    const ionViewDidEnterHook = "ionViewDidEnter";
    const ionViewWillLeaveHook = "ionViewWillLeave";

    const original = constructor.prototype[ionViewDidEnterHook];

    constructor.prototype[ionViewDidEnterHook] = function ( ...args ) {
      startTime = new Date();
      original && original.apply(this, args);
    }

    const original2 = constructor.prototype[ionViewWillLeaveHook];

    constructor.prototype[ionViewWillLeaveHook] = function ( ...args ) {
      const endTime = new Date();
      constructor.timeSpent = endTime.getTime() - startTime.getTime();

      original2 && original2.apply(this, args);
    }
    return constructor;
  }
}