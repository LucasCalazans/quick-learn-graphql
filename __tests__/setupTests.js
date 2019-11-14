const originalError = console.error;

global.beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

global.afterAll(() => {
  console.error = originalError;
});

global.afterEach(() => {
  global.cleanup();
});
