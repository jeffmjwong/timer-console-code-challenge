# FTR Timer Coding Test
This console application is built with Node and Typescript. It can also be bundled to a single executable JS file using Webpack. The application should operate as follows:
1. On startup, the program will prompt user for the number of seconds (X) between outputting the frequeuncy of each number to the screen.
2. Every X seconds the program will display, in frequency descending order, the list of numbers and their frequency.
3. If the user enters 'halt' the timer should pause.
4. If the user enters 'resume' the timer should resume.
5. If the user enters a number that is one of the first 1000 Fibonacci numbers, the system shoud alert 'FIB'. Entering the 1001th Fibonacci numbers will not have the same alert.
6. If the user enters 'quit', the application should output the numbers and their frequency, a farewell message and finally terminate.

## Instructions
1. Navigate to desired directory, run `git clone https://github.com/jeffmjwong/timer-console-code-challenge.git` to clone the repo.
2. Run `cd timer-console-code-challenge` to navigate into the cloned repo.
3. Minimum requirement is to have Node version 12.16.0 or above. If `nvm` is used to manage Node versions, run `nvm use` and it will use the Node version specified in `.nvmrc` file. To install the specific node version, run `nvm install 12.16.0`.
4. Run `npm install` to install packages.
5. Run `npm start` to start the interactive console program. Follow the instructions or enter 'quit' at anytime to terminate the program.
6. Run `npm test` to run test suites.
7. Run `npm build` to bundle all source files to a single executable JS file. This file can be assessed at directory `/dist/bundle.js`. This will be useful when hosting the file through a CDN as all the source files will be compressed to a minimum size.
