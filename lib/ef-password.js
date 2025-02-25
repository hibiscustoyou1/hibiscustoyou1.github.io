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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("async-validator");

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-password/src/ef-password.vue?vue&type=template&id=5fdc0eda
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "el-tooltip",
    {
      attrs: { manual: "", placement: "bottom", effect: "light" },
      model: {
        value: _vm.visible,
        callback: function ($$v) {
          _vm.visible = $$v
        },
        expression: "visible",
      },
    },
    [
      _c(
        "el-input",
        _vm._b(
          {
            attrs: {
              value: _vm.value,
              placeholder: _vm.placeholder,
              "show-password": _vm.showPassword,
              "show-password": "",
            },
            on: {
              blur: function ($event) {
                _vm.visible = false
              },
              focus: function ($event) {
                _vm.visible = _vm.useRules.length > 0
              },
              input: _vm.onInput,
            },
          },
          "el-input",
          _vm.$attrs,
          false
        )
      ),
      _c(
        "div",
        { attrs: { slot: "content" }, slot: "content" },
        _vm._l(_vm.useRules, function (rule, idx) {
          return _c("ef-password-item", {
            key: "rule-" + idx,
            attrs: { value: _vm.value, rule: rule },
          })
        }),
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ef-password/src/ef-password.vue?vue&type=template&id=5fdc0eda

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-password/src/ef-password-item.vue?vue&type=template&id=4d4707fa
var ef_password_itemvue_type_template_id_4d4707fa_render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    { staticStyle: { "font-size": "12px", "line-height": "18px" } },
    [
      _c("i", {
        class: {
          "el-icon-success": _vm.validRes,
          "el-icon-error": !_vm.validRes,
        },
        style: { color: _vm.validRes ? "#27D68F" : "#FF4545" },
      }),
      _c("span", { staticStyle: { "margin-left": "8px" } }, [
        _vm._v(_vm._s(_vm.rule.message)),
      ]),
    ]
  )
}
var ef_password_itemvue_type_template_id_4d4707fa_staticRenderFns = []
ef_password_itemvue_type_template_id_4d4707fa_render._withStripped = true


// CONCATENATED MODULE: ./packages/ef-password/src/ef-password-item.vue?vue&type=template&id=4d4707fa

// EXTERNAL MODULE: external "async-validator"
var external_async_validator_ = __webpack_require__(35);
var external_async_validator_default = /*#__PURE__*/__webpack_require__.n(external_async_validator_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-password/src/ef-password-item.vue?vue&type=script&lang=js



/* harmony default export */ var ef_password_itemvue_type_script_lang_js = ({
  name: 'ef-password-item',
  props: {
    value: String,
    rule: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      validRes: false
    };
  },

  watch: {
    value: function value(_value) {
      if (!_value) {
        this.validRes = false;
        return;
      }
      this.validate(_value);
    }
  },
  methods: {
    validate: function validate(value) {
      var _this = this;

      var descriptor = { value: this.rule };
      var model = { value: value };
      var validator = new external_async_validator_default.a(descriptor);
      validator.validate(model, function (errors) {
        _this.validRes = !errors;
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/ef-password/src/ef-password-item.vue?vue&type=script&lang=js
 /* harmony default export */ var src_ef_password_itemvue_type_script_lang_js = (ef_password_itemvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/ef-password/src/ef-password-item.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_ef_password_itemvue_type_script_lang_js,
  ef_password_itemvue_type_template_id_4d4707fa_render,
  ef_password_itemvue_type_template_id_4d4707fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ef_password_item = (component.exports);
// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// EXTERNAL MODULE: external "element-ui/lib/utils/merge"
var merge_ = __webpack_require__(9);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-password/src/ef-password.vue?vue&type=script&lang=js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };






var defaultRules = [{ min: 8, max: 26, message: '长度在 8 到 26 个字符', trigger: 'blur' }, {
  validator: function validator(rule, value, callback) {
    var chains = ['1234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm', '!@#$%^&*()', '0987654321', 'poiuytrewq', 'lkjhgfdsa', 'mnbvcxz', ')(*&^%$#@!'];

    var chainInclude = function chainInclude(pwd) {
      if (!pwd) return false;

      var nPice = 3;
      if (pwd.length < nPice) return false;

      pwd = pwd.toLowerCase();

      var _loop = function _loop(i, n) {
        var pice = pwd.substring(i, i + 3);
        var chain = chains.find(function (t) {
          return t.includes(pice);
        });
        if (chain) return {
            v: true
          };
      };

      for (var i = 0, n = pwd.length; i <= n - 3; i++) {
        var _ret = _loop(i, n);

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
      return false;
    };
    if (chainInclude(value)) {
      callback(new Error('密码不能使用连续3个及以上键位排序字符，如123，Qwe等'));
    } else {
      callback();
    }
  },
  message: '密码不能使用连续3个及以上键位排序字符，如123，Qwe等',
  trigger: 'blur'
}, {
  pattern: /^(?=.*[~!@#$%^&*()_+{}[\]|\\;:,.'"?/<>])(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d~!@#$%^&*()_+{}[\]|;:,.'"?/<>]{3,}$/,
  message: '须同时包含英文字母、数字和特殊字符',
  trigger: 'blur'
}];

var uniqueFunc = function uniqueFunc(arr) {
  // eslint-disable-next-line no-undef
  var res = new Map();
  return arr.filter(function (item) {
    return !res.has(item.message) && res.set(item.message, 1);
  });
};

/* harmony default export */ var ef_passwordvue_type_script_lang_js = ({
  name: 'ef-password',
  components: { EfPasswordItem: ef_password_item },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: String,
    rules: Array,
    showPassword: Boolean,
    placeholder: {
      type: String,
      default: function _default() {
        return '请输入密码';
      }
    },
    // 规则覆盖
    ruleOverlay: Boolean
  },
  data: function data() {
    return {
      pwd: null,
      visible: false
    };
  },

  computed: {
    formNode: function formNode() {
      var parent = this.$parent;
      var parentName = parent.$options.componentName;
      while (parentName !== 'ElForm') {
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },
    formItemNode: function formItemNode() {
      var parent = this.$parent;
      var parentName = parent.$options.componentName;
      while (parentName !== 'ElFormItem') {
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },
    prop: function prop() {
      return this.formItemNode.$props.prop;
    },
    formRules: function formRules() {
      var formRules = this.formNode.$props.rules;
      if (formRules.hasOwnProperty(this.prop)) {
        return formRules[this.prop];
      } else {
        return [];
      }
    },
    useRules: function useRules() {
      // 表单定义的规则，优先级最低
      var formRules = this.formRules;
      // 组件定义的规则，优先级最高
      var compRules = this.rules;

      var rules = [];

      if (this.ruleOverlay) {
        rules = compRules || defaultRules;
      } else {
        rules = formRules.concat(compRules || defaultRules).filter(function (rule) {
          return rule.message;
        });
      }
      return uniqueFunc(rules);
    }
  },
  created: function created() {
    this.pwd = this.value;
    this.formItemNode.validate = this.validate;
  },

  methods: {
    onInput: function onInput(val) {
      this.$emit('input', val);
    },


    // 重载element-ui的validate方法，目的是将密码组件所使用的默认校验规则引入到实际的表单校验中
    validate: function validate(trigger) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : util_["noop"];

      // 重载部分
      var self = this.formItemNode;
      self.validateDisabled = false;
      var useRules = this.useRules.filter(function (rule) {
        if (!rule.trigger || trigger === '') return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger) > -1;
        } else {
          return rule.trigger === trigger;
        }
      }).map(function (rule) {
        return merge_default()({}, rule);
      });
      var rules = self.getFilteredRule(trigger).concat(useRules);
      rules = uniqueFunc(rules);

      // element-ui的源码部分，如无必要，请勿调整修改
      if ((!rules || rules.length === 0) && self.required === undefined) {
        callback();
        return true;
      }
      self.validateState = 'validating';
      var descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach(function (rule) {
          delete rule.trigger;
        });
      }
      descriptor[self.prop] = rules;
      var validator = new external_async_validator_default.a(descriptor);
      var model = {};
      model[self.prop] = self.fieldValue;
      validator.validate(model, { firstFields: true }, function (errors, invalidFields) {
        self.validateState = !errors ? 'success' : 'error';
        self.validateMessage = errors ? errors[0].message : '';

        callback(self.validateMessage, invalidFields);
        self.elForm && self.elForm.$emit('validate', self.prop, !errors, self.validateMessage || null);
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/ef-password/src/ef-password.vue?vue&type=script&lang=js
 /* harmony default export */ var src_ef_passwordvue_type_script_lang_js = (ef_passwordvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/ef-password/src/ef-password.vue





/* normalize component */

var ef_password_component = Object(componentNormalizer["a" /* default */])(
  src_ef_passwordvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ef_password = (ef_password_component.exports);
// CONCATENATED MODULE: ./packages/ef-password/index.js


ef_password.install = function (Vue) {
  Vue.component(ef_password.name, ef_password);
};
/* harmony default export */ var packages_ef_password = __webpack_exports__["default"] = (ef_password);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/merge");

/***/ })

/******/ });