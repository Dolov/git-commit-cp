"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = require('react');

var _require = require('ink'),
    Color = _require.Color,
    Box = _require.Box;

var TextInput = require('ink-text-input')["default"];

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this));
    _this.state = {
      value: ""
    };
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Input, [{
    key: "onChange",
    value: function onChange(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(value) {
      var _this$props = this.props,
          name = _this$props.name,
          onChange = _this$props.onChange;
      onChange(name, value);
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props2 = this.props,
          inputValue = _this$props2.value,
          title = _this$props2.title;
      var en = title.en,
          ch = title.ch;
      return React.createElement(Box, {
        flexDirection: "column",
        paddingTop: 1
      }, !inputValue && React.createElement(Box, {
        flexDirection: "column"
      }, React.createElement(Color, {
        yellowBright: true
      }, "? ", en, React.createElement(Color, {
        whiteBright: true
      }, ch), ":"), React.createElement(Box, {
        height: 1
      }), React.createElement(TextInput, {
        showCursor: true,
        highlightPastedText: true,
        value: value,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
        placeholder: "Enter here ..."
      })), inputValue && React.createElement(Color, {
        yellowBright: true
      }, en, " ", React.createElement(Color, {
        greenBright: true
      }, inputValue)));
    }
  }]);

  return Input;
}(React.Component);

module.exports = Input;