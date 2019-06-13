
const child_process = require("child_process");

const { exec, spawn } = child_process


const title_changeScope = {
  en: 'What is the scope of this change',
  ch: '（请填写改动了那些组件或者文件名称）'
}

const title_description = {
  en: 'Write a short, imperative tense description of the change',
  ch: '（请简单描述一下作出的更改）'
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


const commit = (message, otherProps) => {
  const child = spawn('git', ['commit', '-m', message, ...otherProps], {
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
  isValidCommit,
  title_changeScope,
  title_description,
}

