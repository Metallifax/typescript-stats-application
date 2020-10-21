// import { ConsoleReport } from './reportTargets/ConsoleReport';
import { MatchReader } from './MatchReader';
import { CsvFileReader }  from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';


// Create an object that satisifies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);