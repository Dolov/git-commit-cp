"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var config = require("./config");

var React = require('react');

var _require = require('ink'),
    render = _require.render,
    Color = _require.Color,
    Text = _require.Text,
    Box = _require.Box;

var Header = require('import-jsx')("./Components/Header");

var CommitType = require('import-jsx')("./Components/CommitType");

var Input = require('import-jsx')("./Components/Input.js"); // const Spinner = require('ink-spinner').default;


var utils = require("./utils");

var isClean = utils.isClean,
    commit = utils.commit;

var _process$argv = _toArray(process.argv),
    otherProps = _process$argv.slice(2);

var title_changeScope = {
  en: 'What is the scope of this change',
  ch: '（请填写改动了那些组件或者文件名称）'
};
var title_description = {
  en: 'Write a short, imperative tense description of the change',
  ch: '（请简单描述一下作出的更改）'
};
var clearTip = 'No files added to staging! Did you forget to run git add ?';

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      commitType: null,
      changeScope: "",
      description: "",
      isStageClean: null
    };
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onCommitTypeSelect = _this.onCommitTypeSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      isClean(process.cwd(), function (error, isStageClean) {
        if (error) return;

        _this2.setState({
          isStageClean: isStageClean
        });
      });
    }
  }, {
    key: "onCommitTypeSelect",
    value: function onCommitTypeSelect(item) {
      this.setState({
        commitType: item.value
      });
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(name, value) {
      var _this3 = this;

      this.setState(_defineProperty({}, name, value), function () {
        if (name === 'description') {
          var _this3$state = _this3.state,
              commitType = _this3$state.commitType,
              changeScope = _this3$state.changeScope,
              description = _this3$state.description;
          var message = "".concat(commitType, "(").concat(changeScope, "):").concat(description);
          commit(message, otherProps);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          changeScope = _this$state.changeScope,
          commitType = _this$state.commitType,
          description = _this$state.description,
          isStageClean = _this$state.isStageClean;
      return React.createElement(Box, {
        flexDirection: "column"
      }, React.createElement(Header, null), isStageClean === true && React.createElement(Box, {
        flexDirection: "column",
        padding: 1
      }, React.createElement(Color, {
        yellowBright: true
      }, clearTip)), !isStageClean && React.createElement(Box, {
        flexDirection: "column"
      }, React.createElement(CommitType, {
        value: commitType,
        onSelect: this.onCommitTypeSelect
      }), commitType && React.createElement(Input, {
        name: "changeScope",
        value: changeScope,
        onChange: this.onInputChange,
        title: title_changeScope
      }), changeScope && React.createElement(Input, {
        name: "description",
        value: description,
        onChange: this.onInputChange,
        title: title_description
      })));
    }
  }]);

  return App;
}(React.Component);

render(React.createElement(App, null));