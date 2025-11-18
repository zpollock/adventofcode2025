import { DaySolution } from '../types';

const parseInput = (input: string): string[] => {
  // Customize parsing per day
  return input.split('\n').filter(line => line.trim() !== '');
};

export default {
  part1: (input: string): number => {
    const data = parseInput(input);
    // Your solution here
    return 0;
  },
  
  part2: (input: string): number => {
    const data = parseInput(input);
    // Your solution here
    return 0;
  }
} satisfies DaySolution;
