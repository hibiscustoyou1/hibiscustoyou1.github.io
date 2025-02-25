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
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
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

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/select");

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-search/src/ef-search.vue?vue&type=template&id=1e0a4b66
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _vm.conditions.length
    ? _c(
        "div",
        {
          ref: "EfSearch",
          staticClass: "ef-search",
          style: _vm.styles.style1(),
        },
        [
          _c(
            "div",
            { staticClass: "select-wrapper", style: _vm.styles.style2() },
            [
              _c(
                "el-select",
                {
                  style: { width: `${_vm.width}px` },
                  attrs: {
                    slot: "prepend",
                    placeholder: _vm.placeholder,
                    disabled: _vm.disabled,
                    filterable: _vm.filterable,
                    id: "ef-search-left-input-id",
                  },
                  on: { change: _vm.onConditionChange },
                  slot: "prepend",
                  model: {
                    value: _vm.field,
                    callback: function ($$v) {
                      _vm.field = $$v
                    },
                    expression: "field",
                  },
                },
                _vm._l(_vm.conditions, function (item, index) {
                  return _c(
                    "el-option",
                    {
                      key: index,
                      attrs: {
                        label: item.label,
                        value: item.field,
                        disabled: item.disabled,
                      },
                    },
                    [_vm._t("option", null, { option: item })],
                    2
                  )
                }),
                1
              ),
            ],
            1
          ),
          _c(
            "div",
            {
              staticClass: "input-wrapper",
              style: _vm.styles.style3(),
              on: {
                mouseenter: function ($event) {
                  _vm.hovering = true
                },
                mouseleave: function ($event) {
                  _vm.hovering = false
                },
              },
            },
            [
              _c(
                "ef-select-extends",
                _vm._b(
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.inputAttrs.type === "select",
                        expression: "inputAttrs.type === 'select'",
                      },
                    ],
                    style: _vm.styles.style4(),
                    attrs: {
                      placeholder: _vm.inputHolder,
                      id: "ef-search-select-id",
                      clearable: _vm.clearable || _vm.inputAttrs.clearable,
                      "icon-custom-style": {
                        lineHeight: `${this.inputHeight}px`,
                      },
                    },
                    on: { change: _vm.onFieldInput },
                    model: {
                      value: _vm.data[_vm.field],
                      callback: function ($$v) {
                        _vm.$set(_vm.data, _vm.field, $$v)
                      },
                      expression: "data[field]",
                    },
                  },
                  "ef-select-extends",
                  _vm.inputAttrs,
                  false
                ),
                _vm._l(_vm.inputAttrs.options, function (item) {
                  return _c("el-option", {
                    key: item.value,
                    attrs: { label: item.label, value: item.value },
                  })
                }),
                1
              ),
              _c(
                "el-input",
                _vm._b(
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.inputAttrs.type !== "select",
                        expression: "inputAttrs.type !== 'select'",
                      },
                    ],
                    style: _vm.styles.style4(),
                    attrs: {
                      placeholder: _vm.inputHolder,
                      disabled: _vm.disabled || !_vm.field,
                      clearable: false,
                      id: "ef-search-input-id",
                    },
                    on: {
                      focus: function ($event) {
                        _vm.focusColor = "#409eff"
                        _vm.focused = true
                      },
                      blur: function ($event) {
                        _vm.focusColor = "#d9d9d9"
                        _vm.focused = false
                      },
                      input: _vm.onFieldInput,
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "append",
                          fn: function () {
                            return [_vm._t("append")]
                          },
                          proxy: true,
                        },
                      ],
                      null,
                      true
                    ),
                    model: {
                      value: _vm.data[_vm.field],
                      callback: function ($$v) {
                        _vm.$set(_vm.data, _vm.field, $$v)
                      },
                      expression: "data[field]",
                    },
                  },
                  "el-input",
                  _vm.inputAttrs,
                  false
                ),
                [
                  _vm.showClear
                    ? _c("i", {
                        staticClass:
                          "el-input__icon el-icon-circle-close el-input__clear",
                        attrs: { slot: "suffix" },
                        on: { click: _vm.clear },
                        slot: "suffix",
                      })
                    : _vm._e(),
                ]
              ),
            ],
            1
          ),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ef-search/src/ef-search.vue?vue&type=template&id=1e0a4b66

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-search/src/ef-select-extends.vue?vue&type=template&id=8a31f12e
var ef_select_extendsvue_type_template_id_8a31f12e_render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      directives: [
        {
          name: "clickoutside",
          rawName: "v-clickoutside",
          value: _vm.handleClose,
          expression: "handleClose",
        },
      ],
      staticClass: "el-select",
      class: [_vm.selectSize ? "el-select--" + _vm.selectSize : ""],
      on: {
        click: function ($event) {
          $event.stopPropagation()
          return _vm.toggleMenu.apply(null, arguments)
        },
      },
    },
    [
      _vm.multiple
        ? _c(
            "div",
            {
              ref: "tags",
              staticClass: "el-select__tags",
              style: { "max-width": _vm.inputWidth - 32 + "px", width: "100%" },
            },
            [
              _vm.collapseTags && _vm.selected.length
                ? _c(
                    "span",
                    [
                      _c(
                        "el-tag",
                        {
                          attrs: {
                            closable: !_vm.selectDisabled,
                            size: _vm.collapseTagSize,
                            hit: _vm.selected[0].hitState,
                            type: "info",
                            "disable-transitions": "",
                          },
                          on: {
                            close: function ($event) {
                              return _vm.deleteTag($event, _vm.selected[0])
                            },
                          },
                        },
                        [
                          _c("span", { staticClass: "el-select__tags-text" }, [
                            _vm._v(_vm._s(_vm.selected[0].currentLabel)),
                          ]),
                        ]
                      ),
                      _vm.selected.length > 1
                        ? _c(
                            "el-tag",
                            {
                              attrs: {
                                closable: false,
                                size: _vm.collapseTagSize,
                                type: "info",
                                "disable-transitions": "",
                              },
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "el-select__tags-text" },
                                [_vm._v("+ " + _vm._s(_vm.selected.length - 1))]
                              ),
                            ]
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                : _vm._e(),
              !_vm.collapseTags
                ? _c(
                    "transition-group",
                    { on: { "after-leave": _vm.resetInputHeight } },
                    _vm._l(_vm.selected, function (item) {
                      return _c(
                        "el-tag",
                        {
                          key: _vm.getValueKey(item),
                          attrs: {
                            closable: !_vm.selectDisabled,
                            size: _vm.collapseTagSize,
                            hit: item.hitState,
                            type: "info",
                            "disable-transitions": "",
                          },
                          on: {
                            close: function ($event) {
                              return _vm.deleteTag($event, item)
                            },
                          },
                        },
                        [
                          _c("span", { staticClass: "el-select__tags-text" }, [
                            _vm._v(_vm._s(item.currentLabel)),
                          ]),
                        ]
                      )
                    }),
                    1
                  )
                : _vm._e(),
              _vm.filterable
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.query,
                        expression: "query",
                      },
                    ],
                    ref: "input",
                    staticClass: "el-select__input",
                    class: [_vm.selectSize ? `is-${_vm.selectSize}` : ""],
                    style: {
                      "flex-grow": "1",
                      width: _vm.inputLength / (_vm.inputWidth - 32) + "%",
                      "max-width": _vm.inputWidth - 42 + "px",
                    },
                    attrs: {
                      type: "text",
                      disabled: _vm.selectDisabled,
                      autocomplete: _vm.autoComplete || _vm.autocomplete,
                    },
                    domProps: { value: _vm.query },
                    on: {
                      focus: _vm.handleFocus,
                      blur: function ($event) {
                        _vm.softFocus = false
                      },
                      keyup: _vm.managePlaceholder,
                      keydown: [
                        _vm.resetInputState,
                        function ($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "down", 40, $event.key, [
                              "Down",
                              "ArrowDown",
                            ])
                          )
                            return null
                          $event.preventDefault()
                          return _vm.handleNavigate("next")
                        },
                        function ($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "up", 38, $event.key, [
                              "Up",
                              "ArrowUp",
                            ])
                          )
                            return null
                          $event.preventDefault()
                          return _vm.handleNavigate("prev")
                        },
                        function ($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          )
                            return null
                          $event.preventDefault()
                          return _vm.selectOption.apply(null, arguments)
                        },
                        function ($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "esc", 27, $event.key, [
                              "Esc",
                              "Escape",
                            ])
                          )
                            return null
                          $event.stopPropagation()
                          $event.preventDefault()
                          _vm.visible = false
                        },
                        function ($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "delete",
                              [8, 46],
                              $event.key,
                              ["Backspace", "Delete", "Del"]
                            )
                          )
                            return null
                          return _vm.deletePrevTag.apply(null, arguments)
                        },
                        function ($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
                          )
                            return null
                          _vm.visible = false
                        },
                      ],
                      compositionstart: _vm.handleComposition,
                      compositionupdate: _vm.handleComposition,
                      compositionend: _vm.handleComposition,
                      input: [
                        function ($event) {
                          if ($event.target.composing) return
                          _vm.query = $event.target.value
                        },
                        _vm.debouncedQueryChange,
                      ],
                    },
                  })
                : _vm._e(),
            ],
            1
          )
        : _vm._e(),
      _c(
        "el-input",
        {
          ref: "reference",
          class: { "is-focus": _vm.visible },
          attrs: {
            type: "text",
            placeholder: _vm.currentPlaceholder,
            name: _vm.name,
            id: _vm.id,
            autocomplete: _vm.autoComplete || _vm.autocomplete,
            size: _vm.selectSize,
            disabled: _vm.selectDisabled,
            readonly: _vm.readonly,
            "validate-event": false,
            tabindex: _vm.multiple && _vm.filterable ? "-1" : null,
          },
          on: {
            focus: _vm.handleFocus,
            blur: _vm.handleBlur,
            input: _vm.debouncedOnInputChange,
            compositionstart: _vm.handleComposition,
            compositionupdate: _vm.handleComposition,
            compositionend: _vm.handleComposition,
          },
          nativeOn: {
            keydown: [
              function ($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown",
                  ])
                )
                  return null
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.handleNavigate("next")
              },
              function ($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp",
                  ])
                )
                  return null
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.handleNavigate("prev")
              },
              function ($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                )
                  return null
                $event.preventDefault()
                return _vm.selectOption.apply(null, arguments)
              },
              function ($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, [
                    "Esc",
                    "Escape",
                  ])
                )
                  return null
                $event.stopPropagation()
                $event.preventDefault()
                _vm.visible = false
              },
              function ($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
                )
                  return null
                _vm.visible = false
              },
            ],
            mouseenter: function ($event) {
              _vm.inputHovering = true
            },
            mouseleave: function ($event) {
              _vm.inputHovering = false
            },
          },
          model: {
            value: _vm.selectedLabel,
            callback: function ($$v) {
              _vm.selectedLabel = $$v
            },
            expression: "selectedLabel",
          },
        },
        [
          _vm.$slots.prefix
            ? _c("template", { slot: "prefix" }, [_vm._t("prefix")], 2)
            : _vm._e(),
          _c("template", { slot: "suffix" }, [
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.showClose,
                  expression: "!showClose",
                },
              ],
              class: [
                "el-select__caret",
                "el-input__icon",
                "el-icon-" + _vm.iconClass,
              ],
              style: _vm.iconCustomStyle,
            }),
            _vm.showClose
              ? _c("i", {
                  staticClass:
                    "el-select__caret el-input__icon el-icon-circle-close",
                  style: _vm.iconCustomStyle,
                  on: { click: _vm.handleClearClick },
                })
              : _vm._e(),
          ]),
        ],
        2
      ),
      _c(
        "transition",
        {
          attrs: { name: "el-zoom-in-top" },
          on: {
            "before-enter": _vm.handleMenuEnter,
            "after-leave": _vm.doDestroy,
          },
        },
        [
          _c(
            "el-select-menu",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.visible && _vm.emptyText !== false,
                  expression: "visible && emptyText !== false",
                },
              ],
              ref: "popper",
              attrs: { "append-to-body": _vm.popperAppendToBody },
            },
            [
              _c(
                "el-scrollbar",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.options.length > 0 && !_vm.loading,
                      expression: "options.length > 0 && !loading",
                    },
                  ],
                  ref: "scrollbar",
                  class: {
                    "is-empty":
                      !_vm.allowCreate &&
                      _vm.query &&
                      _vm.filteredOptionsCount === 0,
                  },
                  attrs: {
                    tag: "ul",
                    "wrap-class": "el-select-dropdown__wrap",
                    "view-class": "el-select-dropdown__list",
                  },
                },
                [
                  _vm.showNewOption
                    ? _c("el-option", {
                        attrs: { value: _vm.query, created: "" },
                      })
                    : _vm._e(),
                  _vm._t("default"),
                ],
                2
              ),
              _vm.emptyText &&
              (!_vm.allowCreate ||
                _vm.loading ||
                (_vm.allowCreate && _vm.options.length === 0))
                ? [
                    _vm.$slots.empty
                      ? _vm._t("empty")
                      : _c("p", { staticClass: "el-select-dropdown__empty" }, [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.emptyText) +
                              "\n        "
                          ),
                        ]),
                  ]
                : _vm._e(),
            ],
            2
          ),
        ],
        1
      ),
    ],
    1
  )
}
var ef_select_extendsvue_type_template_id_8a31f12e_staticRenderFns = []
ef_select_extendsvue_type_template_id_8a31f12e_render._withStripped = true


// CONCATENATED MODULE: ./packages/ef-search/src/ef-select-extends.vue?vue&type=template&id=8a31f12e

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(40);
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-search/src/ef-select-extends.vue?vue&type=script&lang=js



/**
 * 定义此组件继承 ElSelect，使得其能支持对下拉框右侧图标进行样式重载
 */
/* harmony default export */ var ef_select_extendsvue_type_script_lang_js = ({
  name: 'ef-select-extends',
  extends: select_default.a,
  props: {
    iconCustomStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/ef-search/src/ef-select-extends.vue?vue&type=script&lang=js
 /* harmony default export */ var src_ef_select_extendsvue_type_script_lang_js = (ef_select_extendsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/ef-search/src/ef-select-extends.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_ef_select_extendsvue_type_script_lang_js,
  ef_select_extendsvue_type_template_id_8a31f12e_render,
  ef_select_extendsvue_type_template_id_8a31f12e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ef_select_extends = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-search/src/ef-search.vue?vue&type=script&lang=js


var kebabCase = function kebabCase(str) {
  var hyphenateRE = /([^-])([A-Z])/g;
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};

/* harmony default export */ var ef_searchvue_type_script_lang_js = ({
  name: 'EfSearch',
  components: { EfSelectExtends: ef_select_extends },
  props: {
    data: {
      required: false,
      default: function _default() {
        return {};
      }
    },
    conditions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    attach: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    initField: {
      type: String,
      default: null
    },
    width: {
      type: [Number, String],
      default: 120
    },
    height: {
      type: [Number, String],
      default: 32
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: '#f5f7fa'
    }
  },
  model: {
    prop: 'data'
  },
  data: function data() {
    return {
      field: null,
      fieldValue: null,
      inputWidth: 200,
      selected: {},
      isInit: true,
      focusColor: '#d9d9d9',
      hovering: false,
      focused: false,
      inputHeight: 32,
      needSetHeightNodes: []
    };
  },

  computed: {
    styles: function styles() {
      var _this = this;

      return {
        style1: function style1() {
          return _this.inputAttrs.type === 'textarea' ? {} : {
            borderColor: _this.focusColor
          };
        },
        style2: function style2() {
          return _this.inputAttrs.type === 'textarea' ? {} : {
            lineHeight: _this.inputHeight - 2 + 'px',
            height: _this.inputHeight + 'px'
          };
        },
        style3: function style3() {
          return _this.inputAttrs.type === 'textarea' ? {} : {
            lineHeight: _this.inputHeight - 3 + 'px',
            height: _this.inputHeight + 'px'
          };
        },
        style4: function style4() {
          return _this.inputAttrs.type === 'textarea' ? {} : {
            width: _this.inputWidth + 15 + 'px', // 15px 用来对齐 el-select 和 el-input
            lineHeight: _this.inputHeight - 1 + 'px',
            height: _this.inputHeight + 'px'
          };
        }
      };
    },
    inputItem: function inputItem() {
      var _this2 = this;

      return this.conditions.find(function (item) {
        return item.field === _this2.field;
      }) || {};
    },
    inputHolder: function inputHolder() {
      if (this.selected) {
        return this.selected.placeholder ? this.selected.placeholder : '\u8BF7\u8F93\u5165' + this.selected.label;
      }
      return '请先选择下拉选项';
    },
    inputAttrs: function inputAttrs() {
      var attrs = {};
      for (var key in this.inputItem) {
        if (!['label', 'field', 'width'].includes(key)) {
          attrs[key] = this.inputItem[key];
        }
      }
      return attrs;
    },
    showClear: function showClear() {
      return (this.clearable || this.inputAttrs.clearable) && !this.inputAttrs.disabled && !!this.data[this.field] && (this.hovering || this.focused);
    }
  },
  created: function created() {
    var _this3 = this;

    if (Number(this.height) < 20) {
      this.inputHeight = 20;
    } else if (Number(this.height) > 40) {
      this.inputHeight = 40;
    } else {
      this.inputHeight = Number(this.height);
    }
    this.inputWidth = Object.prototype.hasOwnProperty.call(this.inputItem, 'width') ? this.inputItem.width : 200;
    var field = this.conditions.length > 0 ? this.conditions[0].field : null;
    var condition = this.conditions.find(function (t) {
      return _this3.initField ? t.field === _this3.initField : false;
    });
    if (condition) {
      field = condition.field;
    }

    this.field = field;
    this.fieldValue = this.attach[field];
    this.isInit = false;

    this.onConditionChange(this.field);
    this.onFieldInput(this.fieldValue);

    this.needSetHeightNodes = [{
      // 作用：设置左侧下拉框下边缘偏移
      selector: '.select-wrapper .el-input--suffix',
      style: { lineHeight: this.inputHeight + 'px' },
      node: null
    }, {
      // 作用：设置左侧下拉框右箭头的偏移
      selector: '.select-wrapper .el-select__caret',
      style: { lineHeight: this.inputHeight + 'px' },
      node: null
    }, {
      // 作用：设置右侧下拉框下边缘偏移
      selector: '.input-wrapper .el-input--suffix',
      style: { lineHeight: this.inputHeight - 1 + 'px' },
      node: null
    }, {
      // 作用：设置右侧下拉输入框下边缘偏移
      selector: '#ef-search-input-id',
      style: { lineHeight: this.inputHeight + 'px', height: this.inputHeight + 'px' },
      node: null
    }, {
      // 作用：设置右侧输入框 suffix 偏移
      selector: '.input-wrapper .el-input__icon',
      style: {
        lineHeight: this.inputHeight + 'px'
      },
      node: null
    }, {
      // 作用：设置右侧下拉输入框下边缘偏移
      selector: '#ef-search-select-id',
      style: { lineHeight: this.inputHeight + 'px', height: this.inputHeight + 'px' },
      node: null
    }];
  },
  mounted: function mounted() {
    var leftInput = this.$refs.EfSearch.querySelector('#ef-search-left-input-id');
    if (leftInput) {
      leftInput.style = this.objToStyleString({ backgroundColor: this.backgroundColor });
    }
    this._setAllHeightOffset();
  },
  updated: function updated() {
    this._setAllHeightOffset();
  },

  methods: {
    objToStyleString: function objToStyleString(obj) {
      return Object.keys(obj).map(function (i) {
        return kebabCase(i) + ': ' + obj[i];
      }).join('; ');
    },
    _setAllHeightOffset: function _setAllHeightOffset() {
      var _this4 = this;

      this.needSetHeightNodes.forEach(function (item) {
        var selector = item.selector,
            style = item.style;

        if (item.selector === '.input-wrapper .el-input__icon') {
          // 为所有图标进行样式计算
          var suffixCloseIcon = _this4.$refs.EfSearch.querySelectorAll(item.selector);
          suffixCloseIcon.forEach(function (node) {
            _this4.$nextTick(function () {
              node.style = _this4.objToStyleString(item.style);
            });
          });
        } else {
          item.node = _this4.$refs.EfSearch.querySelector(selector);
          item.node && _this4.$nextTick(function () {
            // 使用 nextTick 方法将 style 配置挂载到真实页面里
            item.node.style = _this4.objToStyleString(style);
          });
        }
      });
    },
    clear: function clear() {
      this.fieldValue = '';
      this.data[this.field] = '';
    },
    onConditionChange: function onConditionChange(val) {
      var _this5 = this;

      this.selected = this.conditions.find(function (t) {
        return t.field === val;
      });

      this.conditions.forEach(function (item) {
        if (val !== item.field) {
          _this5.attach[item.field] = null;
        }
      });

      if (!this.isInit) {
        this.fieldValue = null;
      }
      this.onFieldInput(this.fieldValue);
      this.$emit('select-change', this.field);
    },
    onFieldInput: function onFieldInput(value) {
      this.attach[this.field] = value;
    }
  }
});
// CONCATENATED MODULE: ./packages/ef-search/src/ef-search.vue?vue&type=script&lang=js
 /* harmony default export */ var src_ef_searchvue_type_script_lang_js = (ef_searchvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/ef-search/src/ef-search.vue





/* normalize component */

var ef_search_component = Object(componentNormalizer["a" /* default */])(
  src_ef_searchvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ef_search = (ef_search_component.exports);
// CONCATENATED MODULE: ./packages/ef-search/index.js


/* istanbul ignore next */
ef_search.install = function (Vue) {
  Vue.component(ef_search.name, ef_search);
};
/* harmony default export */ var packages_ef_search = __webpack_exports__["default"] = (ef_search);

/***/ })

/******/ });