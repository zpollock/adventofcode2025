import { DaySolution } from '../types';

interface ParsedLists {
  left: number[];
  right: number[];
}

const parseInput = (input: string): ParsedLists => {
  const lines = input.split('\n').filter(line => line.trim() !== '');
  const left: number[] = [];
  const right: number[] = [];
  
  for (const line of lines) {
    const values = line.trim().split(/\s+/).map(Number);
    if (values.length >= 2) {
      left.push(values[0]);
      right.push(values[1]);
    }
  }
  
  return { left, right };
};

export default {
  part1: (input: string): number => {
    const { left, right } = parseInput(input);
    
    const sortedLeft = [...left].sort((a, b) => a - b);
    const sortedRight = [...right].sort((a, b) => a - b);
    
    let totalDifference = 0;
    for (let i = 0; i < sortedLeft.length; i++) {
      totalDifference += Math.abs(sortedLeft[i] - sortedRight[i]);
    }
    
    return totalDifference;
  },
  
  part2: (input: string): number => {
    const { left, right } = parseInput(input);
    
    // Count occurrences in right list
    const rightCounts = new Map<number, number>();
    for (const num of right) {
      rightCounts.set(num, (rightCounts.get(num) || 0) + 1);
    }
    
    // Calculate similarity score
    let similarityScore = 0;
    for (const num of left) {
      const count = rightCounts.get(num) || 0;
      similarityScore += num * count;
    }
    
    return similarityScore;
  }
} satisfies DaySolution;