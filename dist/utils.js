"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var child_process = require("child_process");

var exec = child_process.exec,
    spawn = child_process.spawn;

var isClean = function isClean(repoPath, done) {
  exec('git diff --no-ext-diff --name-only && git diff --no-ext-diff --cached --name-only', {
    maxBuffer: Infinity,
    cwd: repoPath || process.cwd()
  }, function (error, stdout) {
    if (error) return done(error);
    var output = stdout || '';
    done(null, output.trim().length === 0);
  });
};

var commit = function commit(message, otherProps) {
  var child = spawn('git', ['commit', '-m', message].concat(_toConsumableArray(otherProps)), {
    cwd: process.cwd(),
    stdio: 'inherit'
  });
  child.on('error', function (err) {// console.log('error')
  });
  child.on('exit', function (err) {// console.log('exit')
  });
};

module.exports = {
  isClean: isClean,
  commit: commit
};