const { calculateNextMaintenance } = require('./utils');

test('calculates next maintenance km correctly', () => {
  expect(calculateNextMaintenance(100000, 10000)).toBe(110000);
});
