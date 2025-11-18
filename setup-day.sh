#!/bin/bash
DAY=$1

if [ -z "$DAY" ]; then
  echo "Usage: ./setup-day.sh <day>"
  echo "Example: ./setup-day.sh 3"
  exit 1
fi

# Copy template
cp src/solutions/template.ts "src/solutions/day${DAY}.ts"

# Create empty input files
touch "inputs/day${DAY}.txt"
touch "inputs/day${DAY}_part1.txt"
touch "inputs/day${DAY}_part2.txt"

echo "Day ${DAY} ready!"
echo "Solution: src/solutions/day${DAY}.ts"
echo "Inputs: inputs/day${DAY}.txt"
