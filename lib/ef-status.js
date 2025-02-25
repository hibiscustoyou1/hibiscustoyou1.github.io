module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./desktop.status.js": 62,
	"./test.status.js": 63
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 61;

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  running: {
    0: { label: 'info' },
    1: { label: 'success', icon: 'success' },
    2: { label: 'warning', icon: 'warning' },
    3: { label: 'error', icon: 'error' },
    4: { label: 'loading', icon: 'loading' },
    5: { label: 'custom', icon: 'el-icon-setting', className: 'status-level_success' }
  }
});

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  running: {
    0: {}
  },
  manage: {
    0: { label: 'info' },
    1: { label: 'success', icon: 'success' },
    2: { label: 'warning', icon: 'warning' },
    3: { label: 'error', icon: 'error' },
    4: { label: 'loading', icon: 'loading' },
    5: { label: 'custom', icon: 'ef-icon-no-wifi' }
  }
});

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-status/src/ef-status.vue?vue&type=template&id=f4404a1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    {
      key: _vm.status,
      staticClass: "ef-status",
      staticStyle: { width: "fit-content" },
    },
    [
      _vm.iconSelect.isEleIcon
        ? _c("i", {
            class: {
              [_vm.curStatus.icon]: true,
              [_vm.curStatus.className]: true,
            },
          })
        : _c(
            "svg",
            {
              class: {
                "ef-svg-icon": true,
                [_vm.curStatus.className]: true,
              },
            },
            [_c("use", { attrs: { "xlink:href": "#" + _vm.curStatus.icon } })]
          ),
      _c(
        "span",
        {
          class: { [_vm.curStatus.className]: !_vm.needSetLabelColor },
          style: _vm.needSetLabelColor
            ? { color: _vm.labelColor, display: "contents" }
            : { display: "contents" },
        },
        [
          _vm._t(
            "label",
            function () {
              return [_vm._v(_vm._s(_vm.curStatus.label))]
            },
            { status: _vm.curStatus }
          ),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ef-status/src/ef-status.vue?vue&type=template&id=f4404a1c

// CONCATENATED MODULE: ./packages/ef-status/require-status.js
var statusCtx = __webpack_require__(61);
var require_status_status = {};
statusCtx.keys().forEach(function (key) {
  var fileRE = /([^./]+)\.status\.js/g;
  var match = fileRE.exec(key);
  if (!match) return true;
  var moduleName = match[1].trim();
  var moduleValue = statusCtx(key).default || statusCtx(key);
  require_status_status[moduleName] = moduleValue;
});
var ALL_STATUS = require_status_status;
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-status/src/ef-status.vue?vue&type=script&lang=js



/* harmony default export */ var ef_statusvue_type_script_lang_js = ({
  name: 'EfStatus',
  props: {
    status: [Number, String],
    type: String,
    labelColor: String
  },
  data: function data() {
    return {
      ALL_STATUS: ALL_STATUS
    };
  },

  computed: {
    curStatus: function curStatus() {
      var statusTemp = {
        icon: '',
        label: '',
        theme: '',
        className: ''
      };

      var _type$split = this.type.split('.'),
          type = _type$split[0],
          subType = _type$split[1];

      var status = subType ? this.ALL_STATUS[type][subType][this.status] : this.ALL_STATUS[type][this.status];
      status.theme = this.getTheme(status);
      statusTemp = Object.assign({}, statusTemp, status);
      statusTemp.className = statusTemp.className || 'status-level_' + statusTemp.theme;
      return statusTemp;
    },
    iconSelect: function iconSelect() {
      return {
        isEleIcon: this.curStatus.icon.indexOf('el-icon-') === 0,
        isEfIcon: this.curStatus.icon.indexOf('ef-icon-') === 0
      };
    },
    needSetLabelColor: function needSetLabelColor() {
      return !!this.labelColor;
    }
  },
  methods: {
    getTheme: function getTheme(curStatus) {
      var allThemes = ['info', 'success', 'warning', 'error', 'loading'];
      // 兼容写入完整图标字符串
      var iconName = (curStatus.icon || 'info').replace('el-icon-', '');
      if (allThemes.includes(iconName)) {
        curStatus.icon = 'el-icon-' + iconName;
        return iconName;
      }
      if (['status-level_info', 'status-level_success', 'status-level_warning', 'status-level_error', 'status-level_loading', 'info', 'success', 'warning', 'error', 'loading'].includes(curStatus.className)) {
        return curStatus.className.replace('status-level_', '');
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/ef-status/src/ef-status.vue?vue&type=script&lang=js
 /* harmony default export */ var src_ef_statusvue_type_script_lang_js = (ef_statusvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/ef-status/src/ef-status.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_ef_statusvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ef_status = (component.exports);
// CONCATENATED MODULE: ./packages/ef-status/index.js



ef_status.install = function (Vue) {
  Vue.component(ef_status.name, ef_status);
};
/* harmony default export */ var packages_ef_status = __webpack_exports__["default"] = (ef_status);

/***/ })

/******/ });