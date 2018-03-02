webpackHotUpdate(0,{

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'sidebarToggle',
    value: function sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-hidden');
    }
  }, {
    key: 'sidebarMinimize',
    value: function sidebarMinimize(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-minimized');
    }
  }, {
    key: 'mobileSidebarToggle',
    value: function mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-mobile-show');
    }
  }, {
    key: 'asideToggle',
    value: function asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('aside-menu-hidden');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'app-header navbar' },
        _react2.default.createElement(
          'button',
          { className: 'btn d-lg-none navbar-toggler', onClick: this.mobileSidebarToggle },
          _react2.default.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
        ),
        _react2.default.createElement(
          'a',
          { href: '#', className: 'navbar-brand navbar-toggler' },
          'Developer'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn d-md-none d-lg-block mr-auto navbar-toggler', onClick: this.sidebarToggle },
          _react2.default.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn d-md-down-none navbar-toggler', onClick: this.asideToggle },
          _react2.default.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;


;(function register() {
  /* react-hot-loader/webpack */if (process.env.NODE_ENV !== 'production') {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
    } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
      __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/atul/reactlearn/react-reduxApp/client/components/Header/header.js");return;
    } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }var namedExport = void 0;try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }__REACT_HOT_LOADER__.register(namedExport, key, "/home/atul/reactlearn/react-reduxApp/client/components/Header/header.js");
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

})