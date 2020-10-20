import { CsvFileReader }  from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

// Parse football.csv to 2d array
const reader = new MatchReader('football.csv');
reader.read();

// Instantiate variable for Man United win analysis
let manUnitedWins = 0;

// For loop to analyze the parsed file for wins
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// Log the results
console.log(`Man United won ${manUnitedWins} games`);
