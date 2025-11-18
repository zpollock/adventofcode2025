import { readInput } from './utils/inputReader';
import { DaySolution } from './types';

const args = process.argv.slice(2);
const day = parseInt(args[0]);
const part = args[1] ? parseInt(args[1]) : undefined;

if (isNaN(day) || day < 0 || day > 25) {
  console.error('Usage: npm start <day> [part]');
  console.error('Example: npm start 1    # Runs both parts');
  console.error('Example: npm start 1 2 # Runs only part 2');
  process.exit(1);
}

async function runDay(day: number, part?: 1 | 2) {
  try {
    console.log(`\n🎄 Advent of Code 2025 - Day ${day}\n`);
    
    // Dynamic import based on day
    const dayModule = await import(`./solutions/day${day}.js`);
    const solution: DaySolution = dayModule.default;
  
    
    // Run Part 1
    if (!part || part === 1) {
      console.time('Part 1');
      const input1 = readInput(day, 1);
      const result1 = solution.part1(input1);
      console.timeEnd('Part 1');
      console.log(`Part 1: ${result1}`);
    }
    
    // Run Part 2
    if (solution.part2 && (!part || part === 2)) {
      console.time('Part 2');
      const input2 = readInput(day, 2);
      const result2 = solution.part2(input2);
      console.timeEnd('Part 2');
      console.log(`Part 2: ${result2}`);
    } else if (!solution.part2 && part === 2) {
      console.log(' Part 2 not implemented yet');
    }
    
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running Day ${day}:`, error.message);
      if (error.stack) {
        console.error('\nStack trace:\n', error.stack);
      }
    } else {
      console.error(`Error running Day ${day}:`, String(error));
    }
    
    process.exit(1);
  }
}


runDay(day, part as 1 | 2 | undefined);