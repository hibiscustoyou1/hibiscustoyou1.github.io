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
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
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

/***/ 58:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-tag/src/ef-tag.vue?vue&type=template&id=508ff6f2
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    _vm._l(_vm.tags, function (tag) {
      return _c(
        "el-tag",
        {
          key: tag.prop,
          staticStyle: { margin: "0 5px 5px 0" },
          attrs: {
            type: tag.type || _vm.type,
            closable: _vm.isClosable(tag),
            "disable-transitions":
              tag.disableTransitions || _vm.disableTransitions,
            hit: tag.hit || _vm.hit,
            color: tag.color || _vm.color,
            size: tag.size || _vm.size,
            effect: tag.effect || _vm.effect,
          },
          on: {
            close: function ($event) {
              return _vm.handleClose(tag)
            },
          },
        },
        [
          _vm._t(
            tag.prop,
            function () {
              return [
                _vm._v("\n      " + _vm._s(_vm._f("showTag")(tag)) + "\n    "),
              ]
            },
            { tag: tag }
          ),
        ],
        2
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ef-tag/src/ef-tag.vue?vue&type=template&id=508ff6f2

// CONCATENATED MODULE: ./packages/ef-tag/utils/tools.js
var isArrayLike = function isArrayLike(value) {
  return value !== null && isLength(value.length) && !isFunction(value);
};

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

var isLength = function isLength(value) {
  return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= Number.MAX_SAFE_INTEGER;
};

var isFunction = function isFunction(value) {
  return Object.prototype.toString.call(value) === '[object Function]';
};

var isEmpty = function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value)) {
    return !value.length;
  } else if (isPlainObject(value)) {
    for (var key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }
  return false;
};

var setEmpty = function setEmpty(value) {
  var ret = void 0;
  switch (Object.prototype.toString.call(value)) {
    case '[object Object]':
      ret = {};
      break;
    case '[object Array]':
      ret = [];
      break;
    case '[object Boolean]':
      ret = false;
      break;
    default:
      ret = null;
  }
  return ret;
};
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-tag/src/ef-tag.vue?vue&type=script&lang=js




/* harmony default export */ var ef_tagvue_type_script_lang_js = ({
  name: 'EfTag',
  props: {
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    props: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    type: String,
    closable: {
      type: Boolean,
      default: false
    },
    disableTransitions: {
      type: Boolean,
      default: false
    },
    hit: {
      type: Boolean,
      default: false
    },
    color: String,
    size: String,
    effect: {
      type: String,
      default: 'light'
    }
  },
  data: function data() {
    return {
      rawData: Object(external_lodash_["cloneDeep"])(this.data) // 深拷贝初始数据，提供重置数据处理
    };
  },


  computed: {
    tags: function tags() {
      var _this = this;

      var fields = [];
      var formNode = this.bst(this.$parent, '_efFormRefs', '$refs');

      var _loop = function _loop(key) {
        var keyNode = _this.bst(formNode, key);
        var prop = key;
        var label = void 0;
        if (keyNode) {
          prop = keyNode.prop;
          label = keyNode.label || _this.nearHasLabelParent(keyNode);
        }
        // 数据非空且 bool = true
        if (!isEmpty(_this.data[prop]) && _this.data[prop]) {
          var tagProp = _this.props.find(function (item) {
            return item.prop === prop;
          }) || {};
          fields.push(Object.assign(tagProp, { prop: prop, label: label, value: _this.data[prop] }));
        }
      };

      for (var key in this.data) {
        _loop(key);
      }
      return fields;
    }
  },

  methods: {
    bst: function bst(vnode, target) {
      var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'prop';

      if (vnode[prop]) {
        if (prop === '$refs' && vnode[prop][target]) {
          return vnode[prop][target];
        }
        if (vnode[prop] === target) {
          return vnode;
        }
      }
      var ret = null;
      for (var _iterator = vnode.$children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var node = _ref;

        ret = this.bst(node, target, prop);
        if (ret) {
          return ret;
        }
      }
      return null;
    },


    // 当 el-form-item 存在嵌套时，需要找到离该节点最近的 label
    nearHasLabelParent: function nearHasLabelParent(vnode) {
      if (typeof vnode.label !== 'undefined') {
        return vnode.label;
      }
      return vnode.$parent ? this.nearHasLabelParent(vnode.$parent) : null;
    },
    isClosable: function isClosable(tag) {
      if (tag.hasOwnProperty('closable')) {
        // 当用户自定义了 closable 字段时，将关闭按钮交由用户处理
        return !!tag.closable;
      }
      return this.closable;
    },
    handleClose: function handleClose(tag) {
      if (typeof tag.closable === 'function') {
        tag.closable(tag);
      } else {
        // console.log('handle close', tag, this.rawData);
        // 如果初始数据非空则需进行置空操作，否则使用原本的数据类型
        this.data[tag.prop] = this.rawData[tag.prop] ? setEmpty(this.rawData[tag.prop]) : this.rawData[tag.prop];
      }
    }
  },

  filters: {
    showTag: function showTag(tag) {
      var tagLabel = tag.label,
          tagValue = tag.value;

      var label = '';
      var value = '';
      var empty = isEmpty(tagLabel);
      label = empty ? label : tagLabel;
      if (typeof tagValue !== 'boolean') {
        value = empty ? tagValue : ': ' + tagValue;
      }
      return label + value;
    }
  },
  mounted: function mounted() {
    // console.log('ef-tag mounted attrs', this.$attrs);
  }
});
// CONCATENATED MODULE: ./packages/ef-tag/src/ef-tag.vue?vue&type=script&lang=js
 /* harmony default export */ var src_ef_tagvue_type_script_lang_js = (ef_tagvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/ef-tag/src/ef-tag.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_ef_tagvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ef_tag = (component.exports);
// CONCATENATED MODULE: ./packages/ef-tag/index.js


/* istanbul ignore next */
ef_tag.install = function (Vue) {
  Vue.component(ef_tag.name, ef_tag);
};
/* harmony default export */ var packages_ef_tag = __webpack_exports__["default"] = (ef_tag);

/***/ })

/******/ });