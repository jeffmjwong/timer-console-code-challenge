import Main from "../src/main";
import NumberCollections from "../src/number-collections";
import { 
  the999thFibonacciNumber,
  the999thFibonacciNumberString,
  the1000thFibonacciNumber,
  the1000thFibonacciNumberString,
  the1001thFibonacciNumber,
  the1001thFibonacciNumberString
} from "./fibonacciNumbers";

describe("Main class", () => {
  const mainProgram = new Main(new NumberCollections());

  beforeAll(() => {
    expect(mainProgram).toBeDefined();
  });

  it("generates the first 1000 Fibonacci numbers on instantiation", () => {
    const fibonacciSeries = mainProgram.getFibonacciSeries();

    expect(fibonacciSeries.length).toEqual(1000);

    expect(fibonacciSeries[0]).toEqual(1n);
    expect(fibonacciSeries[1]).toEqual(1n);
    expect(fibonacciSeries[2]).toEqual(2n);
    expect(fibonacciSeries[3]).toEqual(3n);
    expect(fibonacciSeries[4]).toEqual(5n);
    expect(fibonacciSeries[5]).toEqual(8n);
    expect(fibonacciSeries[6]).toEqual(13n);
    expect(fibonacciSeries[7]).toEqual(21n);
    expect(fibonacciSeries[8]).toEqual(34n);
    expect(fibonacciSeries[9]).toEqual(55n);
    expect(fibonacciSeries[10]).toEqual(89n);
    expect(fibonacciSeries[998]).toEqual(the999thFibonacciNumber);
    expect(fibonacciSeries[999]).toEqual(the1000thFibonacciNumber);

    expect(fibonacciSeries).not.toContain(the1001thFibonacciNumber);
  });

  describe("isInvalidNumber method", () => {
    it("checks whether a number is NaN", () => {
      expect(mainProgram.isInvalidNumber(NaN)).toBe(true);
      expect(mainProgram.isInvalidNumber(0)).toBe(false);
      expect(mainProgram.isInvalidNumber(-1.5)).toBe(false);
      expect(mainProgram.isInvalidNumber(2)).toBe(false);
      expect(mainProgram.isInvalidNumber(2.5)).toBe(false);
    });
  });

  describe("isFibonacciNumber method", () => {
    it("checks whether a user input is one of the first 1000 fibonacci numbers", () => {
      expect(mainProgram.isFibonacciNumber("-2")).toBe(false);
      expect(mainProgram.isFibonacciNumber("2.5")).toBe(false);
      expect(mainProgram.isFibonacciNumber("1")).toBe(true);
      expect(mainProgram.isFibonacciNumber("2")).toBe(true);
      expect(mainProgram.isFibonacciNumber("3")).toBe(true);
      expect(mainProgram.isFibonacciNumber("5")).toBe(true);
      expect(mainProgram.isFibonacciNumber("8")).toBe(true);

      expect(mainProgram.isFibonacciNumber(the999thFibonacciNumberString)).toBe(true);
      expect(mainProgram.isFibonacciNumber(the1000thFibonacciNumberString)).toBe(true);
      expect(mainProgram.isFibonacciNumber(the1001thFibonacciNumberString)).toBe(false);
    });
  });
});
