"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var child_process = require("child_process");

var config = require("./config");

var rootPath = process.cwd();
var exec = child_process.exec,
    spawn = child_process.spawn;

var getDesc = function getDesc(description) {
  var isObject = description && _typeof(description) === 'object';
  var desc_us = isObject ? description['en-US'] : description;
  var desc_cn = isObject ? description['zh-CN'] : "";
  return {
    desc_us: desc_us,
    desc_cn: desc_cn
  };
};

var isValidCommit = function isValidCommit(repoPath, done) {
  exec('git diff --no-ext-diff --name-only && git diff --no-ext-diff --cached --name-only', {
    maxBuffer: Infinity,
    cwd: repoPath || rootPath
  }, function (error, stdout) {
    if (error) {
      var code = error.code;

      if (code === 129) {
        done(false, 'Not a git repository !');
        return;
      }

      done(false, 'There has some error !');
    } else if (stdout.length === 0) {
      done(false, 'No files added to staging! Did you forget to run git add ?');
    } else {
      done(true);
    }
  });
};

var commit = function commit(message, otherProcessArgv) {
  var child = spawn('git', ['commit', '-m', message].concat(_toConsumableArray(otherProcessArgv)), {
    cwd: rootPath,
    stdio: 'inherit'
  });
  child.on('error', function (err) {// console.log('error')
  });
  child.on('exit', function (err) {// console.log('exit')
  });
};

var getConfig = function getConfig() {
  var conf = null;

  try {
    conf = require("".concat(rootPath, "/commit.config.js"));
    console.log("customize config");
  } catch (error) {
    console.log("default config");
    conf = config;
  }

  return conf;
};

module.exports = {
  commit: commit,
  getDesc: getDesc,
  getConfig: getConfig,
  isValidCommit: isValidCommit
};