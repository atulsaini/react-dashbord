webpackHotUpdate(0,{

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _reactstrap = __webpack_require__(48);

var _header = __webpack_require__(305);

var _header2 = _interopRequireDefault(_header);

var _sidebar = __webpack_require__(306);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _breadcrumb = __webpack_require__(311);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _aside = __webpack_require__(313);

var _aside2 = _interopRequireDefault(_aside);

var _footer = __webpack_require__(314);

var _footer2 = _interopRequireDefault(_footer);

var _dashboard = __webpack_require__(315);

var _dashboard2 = _interopRequireDefault(_dashboard);

var _buttons = __webpack_require__(469);

var _buttons2 = _interopRequireDefault(_buttons);

var _card = __webpack_require__(470);

var _card2 = _interopRequireDefault(_card);

var _tables = __webpack_require__(471);

var _tables2 = _interopRequireDefault(_tables);

var _charts = __webpack_require__(476);

var _charts2 = _interopRequireDefault(_charts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


var Full = function (_React$Component) {
  _inherits(Full, _React$Component);

  function Full() {
    _classCallCheck(this, Full);

    return _possibleConstructorReturn(this, (Full.__proto__ || Object.getPrototypeOf(Full)).apply(this, arguments));
  }

  _createClass(Full, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'app-body' },
          _react2.default.createElement(_sidebar2.default, this.props),
          _react2.default.createElement(
            'main',
            { className: 'main' },
            _react2.default.createElement(_breadcrumb2.default, null),
            _react2.default.createElement(
              _reactstrap.Container,
              { fluid: true },
              _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', name: 'Dashboard', component: _dashboard2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/buttons', name: 'Buttons', component: _buttons2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/cards', name: 'Cards', component: _card2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/tables', name: 'tables', component: _tables2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/charts/charts', name: 'charts', component: _charts2.default }),
                _react2.default.createElement(_reactRouterDom.Redirect, { from: '/', to: '/dashboard' })
              )
            )
          ),
          _react2.default.createElement(_aside2.default, null)
        ),
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return Full;
}(_react2.default.Component);

exports.default = Full;


;(function register() {
  /* react-hot-loader/webpack */if (process.env.NODE_ENV !== 'production') {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
    } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
      __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/atul/reactlearn/react-reduxApp/client/containers/full/full_page.js");return;
    } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }var namedExport = void 0;try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }__REACT_HOT_LOADER__.register(namedExport, key, "/home/atul/reactlearn/react-reduxApp/client/containers/full/full_page.js");
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = __webpack_require__(316);

var _reactstrap = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

var bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

var doughnut = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  }]
};

var radar = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(179,181,198,0.2)',
    borderColor: 'rgba(179,181,198,1)',
    pointBackgroundColor: 'rgba(179,181,198,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(179,181,198,1)',
    data: [65, 59, 90, 81, 56, 55, 40]
  }, {
    label: 'My Second dataset',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    pointBackgroundColor: 'rgba(255,99,132,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255,99,132,1)',
    data: [28, 48, 40, 19, 96, 27, 100]
  }]
};

var pie = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  }]
};

var polar = {
  datasets: [{
    data: [11, 16, 7, 3, 14],
    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
    label: 'My dataset' // for legend
  }],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
};

var Charts = function (_Component) {
  _inherits(Charts, _Component);

  function Charts() {
    _classCallCheck(this, Charts);

    return _possibleConstructorReturn(this, (Charts.__proto__ || Object.getPrototypeOf(Charts)).apply(this, arguments));
  }

  _createClass(Charts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'animated fadeIn' },
        _react2.default.createElement(
          _reactstrap.CardColumns,
          { className: 'cols-2' },
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Line Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Line, { data: line,
                  options: {
                    maintainAspectRatio: false
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Bar Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Bar, { data: bar,
                  options: {
                    maintainAspectRatio: false
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Doughnut Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Doughnut, { data: doughnut })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Radar Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Radar, { data: radar })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Pie Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Pie, { data: pie })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Polar Area Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Polar, { data: polar })
              )
            )
          )
        )
      );
    }
  }]);

  return Charts;
}(_react.Component);

exports.default = Charts;


;(function register() {
  /* react-hot-loader/webpack */if (process.env.NODE_ENV !== 'production') {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
    } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
      __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/atul/reactlearn/react-reduxApp/client/views/Charts/charts.js");return;
    } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }var namedExport = void 0;try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }__REACT_HOT_LOADER__.register(namedExport, key, "/home/atul/reactlearn/react-reduxApp/client/views/Charts/charts.js");
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

})