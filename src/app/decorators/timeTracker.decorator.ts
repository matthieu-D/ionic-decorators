export function TimeTracker(viewName) {
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
      const timeSpent = endTime.getTime() - startTime.getTime(); 

      console.log("The user spent", timeSpent, " ms on:", viewName);
      original2 && original2.apply(this, args);
    }
  }
}