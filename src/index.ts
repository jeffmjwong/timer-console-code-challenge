#!/usr/bin/env node

import readline from "readline";
import { Keywords } from "./enums";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome!");

let secondsToEmitNumbers: number;
// let numberCollections: string[] = [];
let numberCollections: { [key: string]: number } = {};

console.log(Number.MAX_SAFE_INTEGER);

reader.on("close", function() {
  // console.log(numberCollections.join(", "));
  process.exit(0);
});

const checkQuit = (inputString: string, intervalId: NodeJS.Timeout): void => {
  if (inputString !== Keywords.QUIT) {
    return;
  }

  clearInterval(intervalId);
  reader.close();
};

const getNextNumber = (input: string, intervalId: NodeJS.Timeout) => {
  checkQuit(input, intervalId);

  const valueToSet = numberCollections[input];
  numberCollections[input] = valueToSet ? valueToSet + 1 : 1;

  // numberCollections.forEach((value, key) => {
  //   numberCollections = [...numberCollections, `${key}:${value}`];
  // });

  reader.question("Please enter the next number\n", (input: string) => {
    getNextNumber(input, intervalId);
  });
};

reader.question("Please input the number of time in seconds between emitting numbers and their frequency\n", (seconds: string) => {
  secondsToEmitNumbers = parseInt(seconds, 10);

  const intervalId = setInterval(() => {
    if (!Object.keys(numberCollections).length) {
      return;
    }

    const arr1 = Object.keys(numberCollections).map(key => {
      return `${key}:${numberCollections[key]}`;
    });

    // let arr1: string[] = [];

    // numberCollections.forEach((value, key) => {
    //   arr1 = [...arr1, `${key}:${value}`];
    // });

    console.log(arr1.join(", "));
  }, secondsToEmitNumbers * 1000);

  reader.question("Please enter the first number\n", (firstInput: string) => {
    getNextNumber(firstInput, intervalId);
  });
});
