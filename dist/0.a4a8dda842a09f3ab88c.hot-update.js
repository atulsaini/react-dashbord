webpackHotUpdate(0,{

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  items: [{
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fa fa-tachometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }, {
    title: true,
    name: 'UI elements',
    wrapper: { // optional wrapper object
      element: '', // required valid HTML5 element tag
      attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    },
    class: '' // optional class names space delimited list for title item ex: "text-center"
  }, {
    name: 'Components',
    url: '/components',
    icon: 'icon-puzzle',
    children: [{
      name: 'Buttons',
      url: '/components/buttons',
      icon: 'icon-puzzle'
    },
    // {
    //   name: 'Social Buttons',
    //   url: '/components/social-buttons',
    //   icon: 'icon-puzzle'
    // },
    {
      name: 'Cards',
      url: '/components/cards',
      icon: 'icon-puzzle'
    },
    // {
    //   name: 'Forms',
    //   url: '/components/forms',
    //   icon: 'icon-puzzle'
    // },
    // {
    //   name: 'Modals',
    //   url: '/components/modals',
    //   icon: 'icon-puzzle'
    // },
    // {
    //   name: 'Switches',
    //   url: '/components/switches',
    //   icon: 'icon-puzzle'
    // },
    {
      name: 'Tables',
      url: '/components/tables',
      icon: 'icon-puzzle'
    }, {
      name: 'Tabs',
      url: '/components/tabs',
      icon: 'icon-puzzle'
    }]
  },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  }, {
    divider: true
  }]
};


;(function register() {
  /* react-hot-loader/webpack */if (process.env.NODE_ENV !== 'production') {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
    } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
      __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/atul/reactlearn/react-reduxApp/client/components/Sidebar/_nav.js");return;
    } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }var namedExport = void 0;try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }__REACT_HOT_LOADER__.register(namedExport, key, "/home/atul/reactlearn/react-reduxApp/client/components/Sidebar/_nav.js");
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

})