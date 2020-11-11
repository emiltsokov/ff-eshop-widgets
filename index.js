"use strict";

var _widgets = require("./widgets");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _widgets = require("./widgets");

Object.keys(_widgets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _widgets[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _widgets[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SelectionAside = function SelectionAside() {
  var context = (0, _react.useContext)(_index.InterfaceContext);
  return /*#__PURE__*/_react.default.createElement("div", null, "Selected products ", context.products, " ");
};

var _default = SelectionAside;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductSelection = exports.InterfaceContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _SelectionAside = _interopRequireDefault(require("./SelectionAside"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InterfaceContext = /*#__PURE__*/_react.default.createContext({
  data: {
    products: [],
    totalPrice: 0
  },
  products: 0,
  onSelectionUpdate: function onSelectionUpdate(products) {}
});

exports.InterfaceContext = InterfaceContext;

var ProductSelection = function ProductSelection(params) {
  return /*#__PURE__*/_react.default.createElement(InterfaceContext.Provider, {
    value: params
  }, /*#__PURE__*/_react.default.createElement(_SelectionAside.default, null));
};

exports.ProductSelection = ProductSelection;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProductSelection = require("./ProductSelection");

Object.keys(_ProductSelection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ProductSelection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ProductSelection[key];
    }
  });
});
