import { DaySolution } from '../types';

const parseInput = (input: string): string[] => {
  return input.split('\n').filter(line => line.trim() !== '');
};

const rotate = (current_pos: number, direction: string, clicks: number): number => {
  let change = direction === 'L' ? -clicks : clicks;

  const base = 100;
  let new_pos = (current_pos + change) % base;
  
  if (new_pos < 0) {
    new_pos += base;
  }
  
  return new_pos;
};

const rotateWithZeroPasses = (current_pos: number, direction: string, clicks: number): {new_pos: number, passed_zero: number} => {
  let change = direction === 'L' ? -clicks : clicks;
  const base = 100;
  
  const new_pos = rotate(current_pos, direction, clicks);  
  let passed_zero = 0;

  if (change > 0) {
    const start = current_pos;
    const end = current_pos + change;
    passed_zero = Math.floor(end / base) - Math.floor(start / base);
    
  } else if (change < 0) {
    const start = current_pos;
    const end = current_pos + change;
    passed_zero = Math.floor((start - 1) / base) - Math.floor((end - 1) / base);
  }
  
  return {new_pos, passed_zero};
};

export default {
  part1: (input: string): number => {
    let zeros = 0;
    let safe_pos: number = 50;
    const data = parseInput(input);

    for (let i = 0; i < data.length; i++) {
      const direction: string = data[i][0];
      const clicks: number = Number(data[i].substring(1));
      safe_pos = rotate(safe_pos, direction, clicks);
      if (safe_pos === 0) zeros++;
    }
    return zeros;
  },

  part2: (input: string): number => {
    let zero_passes = 0;
    let safe_pos: number = 50;
    const data = parseInput(input);

    for (let i = 0; i < data.length; i++) {
      const direction: string = data[i][0];
      const clicks: number = Number(data[i].substring(1));
      const result = rotateWithZeroPasses(safe_pos, direction, clicks);
      safe_pos = result.new_pos;
      zero_passes += result.passed_zero;
    }
    return zero_passes;
  }
} satisfies DaySolution;
