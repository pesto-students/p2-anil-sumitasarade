const mathOperations = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(mathOperations.sum(1, 2)).toBe(3);
});

test('difference 5 - 3 to equal 2', () => {
    expect(mathOperations.diff(5, 3)).toBe(2);
  });

test('multiply 7 * 2 to equal 14', () => {
  expect(mathOperations.product(7, 2)).toBe(14);
});

