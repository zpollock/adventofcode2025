export interface DaySolution {
  part1: (input: string) => number | string;
  part2?: (input: string) => number | string;
}

export type DayModule = {
  default: DaySolution;
};
