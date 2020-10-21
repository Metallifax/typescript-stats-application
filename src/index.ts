// import { ConsoleReport } from './reportTargets/ConsoleReport';
import { MatchReader } from './MatchReader';
import { CsvFileReader }  from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);