import readline, { Interface } from "readline";
import NumberCollections from "./number-collections";
import { Keywords, ConsoleMessages } from "./enums";

export default class Main {
  private reader: Interface;
  private intervalId: NodeJS.Timeout;
  private emitTimeInMilliseconds: number;
  private numberCollections: NumberCollections;
  private startTime: number;
  private remainingTime: number;
  private fibonacciSeries: bigint[];

  constructor(numberCollections: NumberCollections) {
    this.numberCollections = numberCollections;

    this.reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    this.reader.on("close", function() {
      process.exit(0);
    });

    this.generateFibonacciSeries();
  }

  generateFibonacciSeries(): void {
    this.fibonacciSeries = [1n, 1n];

    for (let i = 2; i < 1000; i++) {
      this.fibonacciSeries = [...this.fibonacciSeries, this.fibonacciSeries[i - 2] + this.fibonacciSeries[i - 1]];
    }
  }

  getFibonacciSeries(): bigint[] {
    return this.fibonacciSeries;
  }

  quit(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    console.log(this.numberCollections.toString());
    console.log(ConsoleMessages.EXIT_MESSAGE);
    this.reader.close();
  }

  checkQuit(input: string): void {
    if (input === Keywords.QUIT) {
      this.quit();
    }
  }

  isInvalidNumber(input: number): boolean {
    return isNaN(input);
  }

  isFibonacciNumber(input: string): boolean {
    if (input.includes(".") || Number(input) < 0) { // Do not consider negative numbers and numbers with decimal points
      return false;
    }

    return this.fibonacciSeries.includes(BigInt(input));
  }

  checkFibonacci(input: string): void {
    if (this.isFibonacciNumber(input)) {
      console.log(ConsoleMessages.FIBONACCI_MESSAGE);
    }
  }

  setConsoleEmitInterval(): void {
    this.intervalId = setInterval(() => {
      this.startTime = new Date().getTime();
      console.log(this.numberCollections.toString());
      console.log(ConsoleMessages.ENTER_NEXT_NUMBER_NO_NEWLINE);
    }, this.emitTimeInMilliseconds);
  }

  handleTimerResumed(): void {
    console.log(ConsoleMessages.TIMER_RESUMED);

    setTimeout(() => {
      console.log(this.numberCollections.toString());
      this.setConsoleEmitInterval();
      this.getNextNumber();
    }, this.remainingTime);
  }

  handleTimerHalted(): void {
    this.reader.question(ConsoleMessages.TIMER_HALTED, (input: string) => {
      this.checkQuit(input);

      if (input !== Keywords.RESUME) {
        console.log(ConsoleMessages.ENTER_RESUME_OR_QUIT);
        return this.handleTimerHalted();
      }

      this.handleTimerResumed();
    });
  }

  getNextNumber(): void {
    this.reader.question(ConsoleMessages.ENTER_NEXT_NUMBER, (input: string) => {
      this.checkQuit(input);

      if (input === Keywords.HALT) {
        clearInterval(this.intervalId);
        this.remainingTime = this.emitTimeInMilliseconds - (new Date().getTime() - this.startTime);
        return this.handleTimerHalted();
      }

      const inputNumber: number = parseFloat(input);

      if (this.isInvalidNumber(inputNumber)) {
        console.log(ConsoleMessages.INVALID_NEXT_NUMBER_INPUT);
        return this.getNextNumber();
      }

      this.numberCollections.set(inputNumber);
      this.checkFibonacci(input);
      this.getNextNumber();
    });
  }

  getFirstNumber(): void {
    this.reader.question(ConsoleMessages.ENTER_FIRST_NUMBER, (input: string) => {
      this.checkQuit(input);

      const inputNumber: number = parseFloat(input);

      if (this.isInvalidNumber(inputNumber)) {
        console.log(ConsoleMessages.INVALID_FIRST_NUMBER_INPUT);
        return this.getFirstNumber();
      }

      this.numberCollections.set(inputNumber);
      this.checkFibonacci(input);
      this.setConsoleEmitInterval();
      this.getNextNumber();
    });
  }

  run(): void {
    this.reader.question(ConsoleMessages.ENTER_EMIT_SECONDS, (input: string) => {
      this.checkQuit(input);

      const inputNumber: number = parseFloat(input);

      if (inputNumber <= 0 || this.isInvalidNumber(inputNumber)) {
        console.log(ConsoleMessages.INVALID_EMIT_SECONDS_INPUT);
        return this.run();
      }

      this.emitTimeInMilliseconds = inputNumber * 1000;
      this.checkFibonacci(input);
      this.getFirstNumber();
    });
  }
}
