import { CsvFileReader }  from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

// Create an object that satisifies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Instantiate variable for Man United win analysis
let manUnitedWins = 0;

// For loop to analyze the parsed file for wins
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// Log the results
console.log(`Man United won ${manUnitedWins} games`);
