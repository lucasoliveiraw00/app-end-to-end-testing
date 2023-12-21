const fs = require('fs');

const coverageReport = fs.readFileSync(
  'coverage/coverage-summary.json',
  'utf8',
);
const coverageData = JSON.parse(coverageReport);

const comment = `
## Coverage Report

| File | Statements | Branches | Functions | Lines |
|------|------------|----------|-----------|-------|
| Total | ${coverageData.total.statements.pct}% | ${coverageData.total.branches.pct}% | ${coverageData.total.functions.pct}% | ${coverageData.total.lines.pct}% |
`;

console.log(comment);
