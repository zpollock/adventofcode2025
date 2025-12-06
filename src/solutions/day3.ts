import { DaySolution } from '../types';

const parseInput = (input: string): string[] => {
  // Customize parsing per day
  return input.split('\n').filter(line => line.trim() !== '');
};

const findLargest = (data: string, skipIndex: number, endIndex: number): { val: number, index: number } => {
  let start = skipIndex + 1;
  if (start >= endIndex) start = 0;
  let max = Number(data[start]);
  let index = start;
  for (let i = start + 1; i < endIndex; i++) {
    if (i == skipIndex) {
      continue;
    }
    const val = Number(data[i]);
    if (val > max) {
      max = val;
      index = i;
    }
  }
  return { val: max, index: index };
}

export default {
  part1: (input: string): number => {
    const strings = parseInput(input);
    let total = 0;

    for (let str of strings) {
      str = str.trim();
      const first = findLargest(str, str.length - 1, str.length);
      const second = findLargest(str, first.index, str.length);
      const secondVal = second.val === -1 ? 0 : second.val;
      total += first.val * 10 + secondVal;
    }

    return total;
  },

  part2: (input: string): number => {
    const strings = parseInput(input);
    let total = 0;

    for (let str of strings) {
      str = str.trim();
      const n = str.length;
      const k = 12;

      if (n < k) continue;

      let resultDigits: number[] = [];
      let startIndex = 0;

      for (let i = 0; i < k; i++) {
        const maxEndIndex = n - (k - i);

        let maxDigit = -1;
        let bestIndex = startIndex;

        for (let j = startIndex; j <= maxEndIndex; j++) {
          const digit = Number(str[j]);
          if (digit > maxDigit) {
            maxDigit = digit;
            bestIndex = j;
          }
        }

        resultDigits.push(maxDigit);
        startIndex = bestIndex + 1;
      }

      const localTotal = parseInt(resultDigits.join(''), 10);
      total += localTotal;
    }

    return total;
  }
} satisfies DaySolution;
