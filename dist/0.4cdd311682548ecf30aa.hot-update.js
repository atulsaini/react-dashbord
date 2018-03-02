webpackHotUpdate(0,{

/***/ 315:
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

var _dashboard = __webpack_require__(468);

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var brandPrimary = '#20a8d8';
var brandSuccess = '#4dbd74';
var brandInfo = '#63c2de';
var brandWarning = '#f8cb00';
var brandDanger = '#f86c6b';

// Social Box Chart
var socialBoxData = [{
  data: [65, 59, 84, 84, 51, 55, 40],
  label: 'facebook'
}, {
  data: [1, 13, 9, 17, 34, 41, 38],
  label: 'twitter'
}, {
  data: [78, 81, 80, 45, 34, 12, 40],
  label: 'linkedin'
}, {
  data: [35, 23, 56, 22, 97, 23, 64],
  label: 'google'
}];

var makeSocialBoxData = function makeSocialBoxData(dataSetNo) {
  // console.log(dataSetNo);
  var dataset = socialBoxData[dataSetNo];
  var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: dataset.data,
      label: dataset.label
    }]
  };
  return function () {
    return data;
  };
};

var socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

var mainChart = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: convertHex(brandInfo, 10),
    borderColor: brandInfo,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 2,
    data: data1
  }, {
    label: 'My Second dataset',
    backgroundColor: 'transparent',
    borderColor: brandSuccess,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 2,
    data: data2
  }, {
    label: 'My Third dataset',
    backgroundColor: 'transparent',
    borderColor: brandDanger,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 1,
    borderDash: [8, 5],
    data: data3
  }]
};

var mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

var progress40 = {
  width: '40%'
};

var progress20 = {
  width: '20%'
};

var progress60 = {
  width: '60%'
};

var progress80 = {
  width: '80%'

  // const allItem = dashboardItem.map(items => {
  //   console.log(items);
  //   return(
  //     <div className="progress-container">
  //       <div className="text-muted">{items.name}</div>
  //       <strong>{items.strong}</strong>
  //       <div className="progress">
  //         <div className="progress-bar {items.bgSuccess}" role="progressbar" style={items.progress40} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
  //       </div>
  //     </div>
  //   )
  // })

};var bulletChart = function bulletChart(data) {
  var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return _react2.default.createElement(
    'div',
    { key: 'bullet-' + k, className: 'progress-container' },
    _react2.default.createElement(
      'div',
      { className: 'text-muted' },
      data.name
    ),
    _react2.default.createElement(
      'strong',
      null,
      data.label,
      ' ',
      data.value
    ),
    ' (',
    data.progress,
    data.suffix,
    ')',
    _react2.default.createElement(
      'div',
      { className: 'progress' },
      _react2.default.createElement('div', { className: 'progress-bar {data.color}', role: 'progressbar', style: { width: data.progress + '%' }, 'aria-valuenow': '{data.progress}', 'aria-valuemin': '0', 'aria-valuemax': '100' })
    )
  );
};

var trafficFooter = function trafficFooter(list) {
  return list.map(function (item, i) {
    return bulletChart(item, i);
  });
};

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'chart-container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-lg-3' },
            _react2.default.createElement(
              'div',
              { className: 'social-box facebook' },
              _react2.default.createElement('i', { className: 'fa fa-facebook' }),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Line, { data: makeSocialBoxData(0), options: socialChartOpts, height: 90 })
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '89k'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'friends'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '459'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'feeds'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-lg-3' },
            _react2.default.createElement(
              'div',
              { className: 'social-box twitter' },
              _react2.default.createElement('i', { className: 'fa fa-twitter' }),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Line, { data: makeSocialBoxData(1), options: socialChartOpts, height: 90 })
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '973k'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'followers'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '1.792'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'tweets'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-lg-3' },
            _react2.default.createElement(
              'div',
              { className: 'social-box linkedin' },
              _react2.default.createElement('i', { className: 'fa fa-linkedin' }),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Line, { data: makeSocialBoxData(2), options: socialChartOpts, height: 90 })
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '500+'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'contacts'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '292'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'feeds'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-lg-3' },
            _react2.default.createElement(
              'div',
              { className: 'social-box google-plus' },
              _react2.default.createElement('i', { className: 'fa fa-google-plus' }),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Line, { data: makeSocialBoxData(3), options: socialChartOpts, height: 90 })
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '894'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'followers'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '92'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'circles'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-body' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-5' },
                    _react2.default.createElement(
                      'h5',
                      { className: 'card-title' },
                      'Traffic'
                    ),
                    _react2.default.createElement(
                      'h6',
                      { className: 'card-subtitle mb-2 text-muted' },
                      'November 2018'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'chart-wrapper', style: { height: 300 + 'px', marginTop: 40 + 'px' } },
                  _react2.default.createElement(_reactChartjs.Line, { data: mainChart, options: mainChartOpts, height: 300 })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'card-footer' },
                trafficFooter(_dashboard2.default.dashboardItem)
              )
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;


;(function register() {
  /* react-hot-loader/webpack */if (process.env.NODE_ENV !== 'production') {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
    } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
      __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/atul/reactlearn/react-reduxApp/client/views/Dashboard/dashboard.js");return;
    } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }var namedExport = void 0;try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }__REACT_HOT_LOADER__.register(namedExport, key, "/home/atul/reactlearn/react-reduxApp/client/views/Dashboard/dashboard.js");
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

})