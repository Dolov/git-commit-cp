

process.on('uncaughtException',  err => {
  console.error(err.message || err);
  process.exit(1);
})

require('import-jsx')('../dist/index.js');




