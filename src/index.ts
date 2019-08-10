interface NumberConstructor {
  GOLDENRATIO: number;
}

interface Number {
  round(): number;
  floor(): number;
  ceil(): number;
  degToRad(): number;
  radToDeg(): number;
  toDollars(): string;
  tax(rate: number): number;
  interest(rate: number, years: number, decimalPlaces?: number): string;
  mortage(interestRate: number, years: number): number;
  decimalToHex(): string;
}

export const GOLDENRATIO = (1 + Math.sqrt(5)) / 2;

export function round(num: number): number {
  return Math.round(num);
}

export function floor(num: number): number {
  return Math.floor(num);
}

export function ceil(num: number): number {
  return Math.ceil(num);
}

export function degToRad(num: number): number {
  return num * (Math.PI / 180);
}

export function radToDeg(num: number): number {
  return num / (Math.PI / 180);
}

export function toDollars(num: number): string {
  return `$${num.toFixed(2)}`
}

export function tax(num: number, rate: number): number {
  if (rate === 0) {
    return 0;
  }
  if (rate >= 0 && rate <= 100) {
    return num * (rate / 100);
  }

  throw new Error("The tax rate needs to be within 0 and 1! or 0 and 100!");
}

export function withTax(amount: number, rate: number): number {
  return Math.round((amount + amount * rate) * 100) / 100
}

export function interest(
  num: number,
  rate: number,
  years: number,
  decimalPlaces: number = 2,
): string {
  if (rate < 0) {
    throw new Error("You cannot enter a interest rate lower than 0%!");
  }

  if (years < 0) {
    throw new Error("You cannot go back in time! Enter a year greater than 0!");
  }

  const interestRate = rate / 100;
  return (num * (1 + interestRate * years)).toFixed(decimalPlaces);
}

export function mortage(
  num: number,
  interestRate: number,
  numberOfYears: number,
): number {
  if (numberOfYears < 0) {
    throw new Error(
      "You cannot have a negative amount of years to make payments!",
    );
  }

  if (interestRate <= 0) {
    throw new Error("You cannot have a negative or 0 interest rate!");
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayments = numberOfYears * 12;
  const numerator = Math.pow(1 + monthlyInterest, totalPayments);
  const denominator = Math.pow(1 + monthlyInterest, totalPayments) - 1;
  return (num * monthlyInterest * numerator) / denominator;
}

export function decimalToHex(num: number): string {
  // If the number is less than 0
  let internalNum = num;
  if (num < 0) {
    internalNum += 0xffffffff + 1;
  }

  return `0x${internalNum.toString(16).toUpperCase()}`;
}

module.exports.random = (maxNum: number): number => Math.floor(Math.random() * maxNum);

export default {
  round,
  floor,
  ceil,
  degToRad,
  radToDeg,
  toDollars,
  tax,
  withTax,
  interest,
  mortage,
  decimalToHex,
};
