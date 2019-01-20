export function MethodHijacker() {
  return function (target, propertyKey, descriptor) {
    descriptor.value = function() {
      console.log("All your base are belong to us")
    }
    return descriptor;
  }
}