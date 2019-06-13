"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var React = require('react');

var _require = require('ink'),
    render = _require.render,
    Color = _require.Color,
    Box = _require.Box;

var Welcome = require('import-jsx')("./Components/Welcome");

var Rules = require('import-jsx')("./Components/Rules");

var utils = require("./utils");

var commit = utils.commit,
    getConfig = utils.getConfig,
    isValidCommit = utils.isValidCommit;

var _getConfig = getConfig(),
    title = _getConfig.title,
    rules = _getConfig.rules;

var _process$argv = _toArray(process.argv),
    otherProcessArgv = _process$argv.slice(2);

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      isValidCommit: false,
      isValidCommitMessage: "",
      messageParams: {}
    };
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onCommit = _this.onCommit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      isValidCommit(process.cwd(), function (valid, message) {
        _this2.setState({
          isValidCommit: valid,
          isValidCommitMessage: message || ""
        });
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(name, value) {
      var _this3 = this;

      var messageParams = this.state.messageParams;
      this.setState({
        messageParams: _objectSpread({}, messageParams, _defineProperty({}, name, value))
      }, function () {
        _this3.onCommit(name);
      });
    }
  }, {
    key: "onCommit",
    value: function onCommit(currentName) {
      var endName = rules[rules.length - 1].name;

      if (endName === currentName) {
        var messageParams = this.state.messageParams;
        var message = [];
        Object.keys(messageParams).forEach(function (name) {
          var _ref = rules.find(function (rule) {
            return rule.name === name;
          }) || {},
              commitFix = _ref.commitFix;

          var value = messageParams[name] || '';

          if (typeof commitFix === 'string' && commitFix.includes('${message}')) {
            var mess = commitFix.replace(/\${message}/, value);
            message.push(mess);
          } else {
            message.push(value);
          }
        });
        commit(message.join(""), otherProcessArgv);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isValidCommit = _this$state.isValidCommit,
          isValidCommitMessage = _this$state.isValidCommitMessage,
          messageParams = _this$state.messageParams;
      return React.createElement(Box, {
        flexDirection: "column"
      }, React.createElement(Welcome, {
        title: title
      }), React.createElement(Box, {
        flexDirection: "column"
      }, React.createElement(Color, {
        yellowBright: true
      }, isValidCommitMessage)), isValidCommit && React.createElement(Rules, {
        data: rules,
        onSubmit: this.onSubmit,
        messageParams: messageParams
      }));
    }
  }]);

  return App;
}(React.Component);

render(React.createElement(App, null));