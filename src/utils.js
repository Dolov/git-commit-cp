
const child_process = require("child_process");

const { exec, spawn } = child_process


const getDesc = description => {
  const isObject = description && typeof description === 'object'
  const desc_us = isObject ? description['en-US']: description
  const desc_cn = isObject ? description['zh-CN']: ""
  return { desc_us, desc_cn }
}


const isValidCommit = (repoPath, done) => {
  exec('git diff --no-ext-diff --name-only && git diff --no-ext-diff --cached --name-only', {
    maxBuffer: Infinity,
    cwd: repoPath || process.cwd()
  }, (error, stdout) => {
    if (error) {
      const { code } = error
      if (code === 129) {
        done(false, 'Not a git repository !')
        return
      }
      done(false, 'There has some error !')
    } else if (stdout.length === 0) {
      done(false, 'No files added to staging! Did you forget to run git add ?');
    } else {
      done(true);
    }
  });
}


const commit = (message, otherProcessArgv) => {
  const child = spawn('git', ['commit', '-m', message, ...otherProcessArgv], {
    cwd: process.cwd(),
    stdio: 'inherit'
  });
  child.on('error', function (err) {
    // console.log('error')
  });
  child.on('exit', function (err) {
    // console.log('exit')
  });
}




module.exports = {
  commit,
  getDesc,
  isValidCommit,
}

