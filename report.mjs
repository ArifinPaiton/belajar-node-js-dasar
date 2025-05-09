import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
// hasil dari reportnya di simpan ke dalam file report.json
process.report.filename = "report.json";

function sampleError() {
    throw new Error("Ups");
}

sampleError();