import { DaySolution } from '../types';

const parseInput = (input: string): string[] => {
  return input.split(',').filter(line => line.trim() !== '');
};

const isValidId = (id: string): boolean => {
  if(id.length == 1) return true;
  if(id[0] === '0') return false;
  if(id.length % 2 === 1) return true;
  const mid: number = id.length / 2;
  return id.substring(0,mid) != id.substring(mid);
}

const isValidId2 = (id: string): boolean => {
  if(id.length == 1) return true;
  if(id[0] === '0') return false;
  return findRepeatingPattern(id) == null; 
}

function findRepeatingPattern(s: string): string | null {
  const n = s.length;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i !== 0) {
      continue;
    }
    
    const pattern = s.substring(0, i);
    const repeatCount = n / i;
    const builtString = pattern.repeat(repeatCount);
    if (builtString === s) {
      return pattern;
    }
  }
  
  return null;
}

export default {
  part1: (input: string): number => {
    let invalid_sum = 0;
    const data = parseInput(input);
    for(let i: number = 0; i < data.length; i++) {
      const range: string[] = data[i].split('-');
      for(let j: number = Number(range[0]); j <= Number(range[1]); j++) {
        if(!isValidId(j.toString())) {
          // console.log(`${j} is invalid`);
          invalid_sum += j;
        }
      }
    }
    return invalid_sum;
  },
  
  part2: (input: string): number => {
    let invalid_sum = 0;
    const data = parseInput(input);
    for(let i: number = 0; i < data.length; i++) {
      const range: string[] = data[i].split('-');
      for(let j: number = Number(range[0]); j <= Number(range[1]); j++) {
        if(!isValidId2(j.toString())) {
          // console.log(`${j} is invalid`);
          invalid_sum += j;
        }
      }
    }
    return invalid_sum;
  }
} satisfies DaySolution;
