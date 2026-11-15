const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { createRequire } = require('node:module');
const installed = path.dirname(require.resolve('selenium-side-runner/package.json'));
const engine = path.join(__dirname, '.side-runner');
// shortcut: Jest excludes the engine inside node_modules; remove this copy when the upstream runner works directly.
fs.cpSync(installed, engine, { recursive: true });
const project = path.join(__dirname, 'Selenium-IDE-Tests.side');
const source = JSON.parse(fs.readFileSync(project, 'utf8'));
assert(source.tests.length === 56 && source.tests.every(test => test.commands.length > 0), 'Expected 56 nonempty recordings');
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const output = path.join(__dirname, 'Results', 'Edge-' + stamp);
fs.mkdirSync(path.join(output, 'Failure-Screenshots'), { recursive: true });
process.env.SE_CACHE_PATH = path.join(__dirname, '.selenium-cache');
process.env.SE_AVOID_STATS = 'true';
process.env.SE_CONFIGURATION = JSON.stringify({
  baseUrl: '', projects: [project], filter: process.argv[2] || '.*',
  capabilities: { browserName: 'MicrosoftEdge', 'ms:edgeOptions': { args: ['--headless=new', '--disable-gpu'] } },
  maxWorkers: 1, retries: 0, timeout: 15000, jestTimeout: 60000,
  screenshotFailureDirectory: path.join(output, 'Failure-Screenshots'),
  runId: stamp, path: path.dirname(installed), server: '', steps: true,
});
const runnerRequire = createRequire(path.join(installed, 'package.json'));
runnerRequire('jest').runCLI({
  config: path.join(engine, 'runner.jest.config.js'), runInBand: true,
  runTestsByPath: true, _: [path.join(engine, 'dist', 'main.test.js')], $0: 'jest',
  json: true, outputFile: path.join(output, 'results.json'),
}, [engine]).then(({ results }) => {
  console.log('Results:', output);
  process.exitCode = results.success ? 0 : 1;
}).catch(error => {
  console.error(error);
  process.exitCode = 1;
});
