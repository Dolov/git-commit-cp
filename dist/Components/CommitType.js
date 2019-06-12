"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = require('react');

var _require = require('ink'),
    Color = _require.Color,
    Box = _require.Box;

var SelectInput = require('ink-select-input')["default"];

var items = [{
  label: 'A new feature（添加新功能）',
  value: 'feat'
}, {
  label: 'A bug fix（修复bug）',
  value: 'fix'
}, {
  label: 'Documentation only changes（修改文档）',
  value: 'docs'
}, {
  label: 'Change that do not affect the meaning of the code（优化代码风格）',
  value: 'style'
}, {
  label: 'A code change that neither fixes a bug or adds a feature（重构）',
  value: 'refactor'
}, {
  label: 'A code change that improves performance（性能优化）',
  value: 'pref'
}, {
  label: 'Changes to the build process or auxiliary tools and libraries such as documentation generation（对构建过程或辅助工具和库（如文档生成）的更改）',
  value: 'chore'
}];
var titleEn = "Select the type of change that you're committing";
var titleCh = "\uFF08\u8BF7\u9009\u62E9\u63D0\u4EA4\u5185\u5BB9\u7684\u7C7B\u578B\uFF09";

var CommitType =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommitType, _React$Component);

  function CommitType() {
    var _this;

    _classCallCheck(this, CommitType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommitType).call(this));
    _this.state = {};
    return _this;
  }

  _createClass(CommitType, [{
    key: "itemComponent",
    value: function itemComponent(_ref) {
      var label = _ref.label,
          value = _ref.value,
          isSelected = _ref.isSelected;

      if (isSelected) {
        return React.createElement(Color, {
          yellowBright: true,
          value: value
        }, React.createElement(Box, {
          width: 15
        }, React.createElement(Color, null, value, ":")), React.createElement(Color, null, label));
      }

      return React.createElement(Color, {
        greenBright: true,
        value: value
      }, React.createElement(Box, {
        width: 15
      }, React.createElement(Color, null, value, ":")), React.createElement(Color, {
        whiteBright: true
      }, label));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSelect = _this$props.onSelect,
          value = _this$props.value;
      return React.createElement(Box, {
        flexDirection: "column",
        paddingTop: 1
      }, value && React.createElement(Color, {
        yellowBright: true
      }, titleEn, " ", React.createElement(Color, {
        greenBright: true
      }, value)), !value && React.createElement(Box, {
        flexDirection: "column"
      }, React.createElement(Color, {
        yellowBright: true
      }, "? ", titleEn, React.createElement(Color, {
        whiteBright: true
      }, titleCh), ":"), React.createElement(Box, {
        height: 1
      }), React.createElement(SelectInput, {
        items: items,
        onSelect: onSelect,
        itemComponent: this.itemComponent
      })));
    }
  }]);

  return CommitType;
}(React.Component);

module.exports = CommitType;