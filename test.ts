/* global test expect  */
import numberLib from "./src/index";

test("Rounding a number", (): void => {
  expect(numberLib.round(20.01)).not.toBe(21);
});

test("Rounding a number down", (): void => {
  expect(numberLib.floor(5.5)).toBe(5);
});

test("Rounding a number up", (): void => {
  expect(numberLib.ceil(7)).toBe(7);
});

test("Converting a number from degress to radians", (): void => {
  expect(numberLib.degToRad(200)).toBeCloseTo(3.49066, 5);
});

test("Converting a number from radians to degrees", (): void => {
  expect(numberLib.radToDeg(200)).toBeCloseTo(11459.2, 1);
});

test("Converting a number to dollar", (): void => {
  expect(numberLib.toDollars(0.534)).toBe("$0.53");
});

test("Calcuting the tax", (): void => {
  expect((): number => numberLib.tax(1, -100)).toThrow();
  expect(numberLib.tax(100, 100)).toBe(100);
});

test("Calculating with tax applied", (): void => {
  expect((): number => numberLib.withTax(100, 100)).toBe(200);
})

test("Calculating the interest", (): void => {
  expect((): string => numberLib.interest(2, 100, -2)).toThrow();
  expect(numberLib.interest(15, 1, 1000)).toBe("165.00");
});

test("Calculating the monthly mortage", (): void => {
  expect((): number => numberLib.mortage(100000, 0, -1)).toThrow();
  expect(numberLib.mortage(100000, 3.92, 30)).toBeCloseTo(473, 0);
});

test("Converting a number to hexadecimal", (): void => {
  expect(numberLib.decimalToHex(0)).toBe("0x0");
});
