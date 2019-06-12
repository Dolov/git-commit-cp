
const sh = require("shelljs");
const child_process = require("child_process");

const { exec, spawn } = child_process

const isClean = (repoPath, done) => {
  exec('git diff --no-ext-diff --name-only && git diff --no-ext-diff --cached --name-only', {
    maxBuffer: Infinity,
    cwd: repoPath || process.cwd()
  }, (error, stdout) => {
    if (error) return done(error)
    const output = stdout || '';
    done(null, output.trim().length === 0);
  });
}


const commit = (message) => {
  const child = spawn('git', ['commit', '-m', message], {
    cwd: process.cwd(),
    stdio: 'inherit'
  });
  child.on('error', function (err) {
    console.log('error')
  });
  child.on('exit', function (err) {
    console.log('exit')
  });
}



module.exports = {
  isClean,
  commit,
}

