export function PropsChangedTracker() {
  return function (target, key) {
    let value;

    const onPropsSet = (newValue) => {
      console.log("The property:", key, "changed, its new value is:", newValue);
      value = newValue;
    }

    Object.defineProperty(target, key, { 
      set: onPropsSet,
      get: () => value
    });
    
  }
}