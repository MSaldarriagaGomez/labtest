const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiplicar 20 * 2 da 40', () => {
  expect(calculator.multiply(20, 2)).toBe(40);
});

test('multiplicar 20 * 2 da 40', () => {
  expect(calculator.multiply(8, 2)).toBe(16);
});

test('al dividir 18 entre 2', () => {
  expect(calculator.divide(18, 2)).toBe(9);
});

test('al dividir 15 entre 0', () => {
  expect(calculator.divide(15, 3)).toBe(5);
});

test('al dividir 15 entre 0', () => {
  expect(() => calculator.divide(15, 0)).toThrow("No se puede dividir entre cero");
});
//in envolverla, la excepción se lanza inmediatamente y Jest no puede verificarla.

