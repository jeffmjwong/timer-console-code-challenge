export enum Keywords {
  QUIT = "quit",
  HALT = "halt",
  RESUME = "resume",
  INVALID = "invalid"
}

export enum InputType {
  INVALID = "invalid"
}

export enum ConsoleMessages {
  ENTER_EMIT_SECONDS = "Please input the number of time in seconds between emitting numbers and their frequency\n",
  INVALID_EMIT_SECONDS_INPUT = "This is not a valid input! Please enter a positive number or the command 'quit'.\n",
  INVALID_FIRST_NUMBER_INPUT = "This is not a valid input! Please enter a number or the command 'quit'.\n",
  INVALID_NEXT_NUMBER_INPUT = "This is not a valid input! Please enter a number, command 'quit' or 'halt'.\n",
  ENTER_FIRST_NUMBER = "Please enter the first number\n",
  ENTER_NEXT_NUMBER = "Please enter the next number\n",
  ENTER_NEXT_NUMBER_NO_NEWLINE = "Please enter the next number",
  ENTER_RESUME_OR_QUIT = "Please type 'resume' for timer to resume or 'quit' to terminate the program.\n",
  TIMER_HALTED = "Timer halted\n",
  TIMER_RESUMED = "Timer resumed\n",
  FIBONACCI_MESSAGE = "FIB",
  EXIT_MESSAGE = "Thanks for playing, good bye!"
}
