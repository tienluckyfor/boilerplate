'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var Button = function Button(_ref) {
  var text = _ref.text;

  var _useState = React.useState(0),
      count = _useState[0],
      setCount = _useState[1];

  React.useEffect(function () {
    console.log('Thing hook');
  }, []);
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("button", {
    onClick: function onClick() {
      return setCount(function (prevState) {
        return prevState + 1;
      });
    },
    type: "button",
    className: "inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, count + ' ', "Button text"), React__default.createElement("button", {
    type: "button",
    className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, text + ' ', "Button text"), React__default.createElement("button", {
    type: "button",
    className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Button text"), React__default.createElement("button", {
    type: "button",
    className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Button text"), React__default.createElement("button", {
    type: "button",
    className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Button text"));
};

// see: https://github.com/storybookjs/storybook/issues/9556

/**
 * A custom Thing component. Neat!
 */

var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React__default.createElement("div", {
    className: "bg-amber-400"
  }, children || "the snozzberries taste like snozzberries");
};

exports.Button = Button;
exports.Thing = Thing;
//# sourceMappingURL=mylib.cjs.development.js.map
