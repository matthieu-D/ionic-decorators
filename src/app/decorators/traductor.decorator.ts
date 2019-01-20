export function Traductor(selectedLanguage) {
  const traductions = {
    eng: {
      welcomeMessage: 'Welcome'
    },
    fr: {
      welcomeMessage: 'Bienvenue'
    }
  };
  return function (target, key) {
    Object.defineProperty(target, key, { 
      writable: false,
      value: traductions[selectedLanguage][key]
    });
  }
}