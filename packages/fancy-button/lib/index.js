"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = FancyButton = (_ref) => {
  let {
    label,
    onClick
  } = _ref;
  return _react.default.createElement("button", {
    onClick: onClick
  }, label);
};

exports.default = _default;