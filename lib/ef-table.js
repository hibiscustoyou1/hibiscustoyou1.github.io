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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
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

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("throttle-debounce");

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/table/src/config.js


var cellStarts = {
  default: {
    order: ''
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
    className: 'el-table-column--selection'
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  }
};

// 这些选项不应该被覆盖
var cellForced = {
  selection: {
    renderHeader: function renderHeader(h, _ref) {
      var store = _ref.store;

      return h('el-checkbox', {
        attrs: {
          disabled: store.states.data && store.states.data.length === 0,
          indeterminate: store.states.selection.length > 0 && !this.isAllSelected,

          value: this.isAllSelected },
        on: {
          'input': this.toggleAllSelection
        }
      });
    },
    renderCell: function renderCell(h, _ref2) {
      var row = _ref2.row,
          column = _ref2.column,
          isSelected = _ref2.isSelected,
          store = _ref2.store,
          $index = _ref2.$index;

      return h('el-checkbox', {
        nativeOn: {
          'click': function click(event) {
            return event.stopPropagation();
          }
        },
        attrs: {
          value: isSelected,
          disabled: column.selectable ? !column.selectable.call(null, row, $index) : false
        },
        on: {
          'input': function input() {
            store.commit('rowSelectedChanged', row);
          }
        }
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: function renderHeader(h, _ref3) {
      var column = _ref3.column;

      return column.label || '#';
    },
    renderCell: function renderCell(h, _ref4) {
      var $index = _ref4.$index,
          column = _ref4.column;

      var i = $index + 1;
      var index = column.index;

      if (typeof index === 'number') {
        i = $index + index;
      } else if (typeof index === 'function') {
        i = index($index);
      }

      return h('div', [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader: function renderHeader(h, _ref5) {
      var column = _ref5.column;

      return column.label || '';
    },
    renderCell: function renderCell(h, _ref6) {
      var row = _ref6.row,
          store = _ref6.store,
          isExpanded = _ref6.isExpanded;

      var classes = ['el-table__expand-icon'];
      if (isExpanded) {
        classes.push('el-table__expand-icon--expanded');
      }
      var callback = function callback(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h(
        'div',
        { 'class': classes,
          on: {
            'click': callback
          }
        },
        [h('i', { 'class': 'el-icon el-icon-arrow-right' })]
      );
    },
    sortable: false,
    resizable: false,
    className: 'el-table__expand-column'
  }
};

function defaultRenderCell(h, _ref7) {
  var row = _ref7.row,
      column = _ref7.column,
      $index = _ref7.$index;

  var property = column.property;
  var value = property && Object(util_["getPropByPath"])(row, property).v;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return value;
}

function treeCellPrefix(h, _ref8) {
  var row = _ref8.row,
      treeNode = _ref8.treeNode,
      store = _ref8.store;

  if (!treeNode) return null;
  var ele = [];
  var callback = function callback(e) {
    e.stopPropagation();
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(h('span', { 'class': 'el-table__indent', style: { 'padding-left': treeNode.indent + 'px' } }));
  }
  if (typeof treeNode.expanded === 'boolean' && !treeNode.noLazyChildren) {
    var expandClasses = ['el-table__expand-icon', treeNode.expanded ? 'el-table__expand-icon--expanded' : ''];
    var iconClasses = ['el-icon-arrow-right'];
    if (treeNode.loading) {
      iconClasses = ['el-icon-loading'];
    }
    ele.push(h(
      'div',
      { 'class': expandClasses,
        on: {
          'click': callback
        }
      },
      [h('i', { 'class': iconClasses })]
    ));
  } else {
    ele.push(h('span', { 'class': 'el-table__placeholder' }));
  }
  return ele;
}
// EXTERNAL MODULE: ./packages/table/src/util.js
var util = __webpack_require__(6);

// EXTERNAL MODULE: external "element-ui/lib/checkbox"
var checkbox_ = __webpack_require__(14);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// CONCATENATED MODULE: ./packages/table/src/table-column.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var columnIdSeed = 1;

/* harmony default export */ var table_column = ({
  name: 'ElTableColumn',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: {},
    minWidth: {},
    renderHeader: Function,
    sortable: {
      type: [Boolean, String],
      default: false
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: {
      type: Boolean,
      default: true
    },
    columnKey: String,
    align: String,
    headerAlign: String,
    showTooltipWhenOverflow: Boolean,
    showOverflowTooltip: Boolean,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
      type: Boolean,
      default: true
    },
    index: [Number, Function],
    sortOrders: {
      type: Array,
      default: function _default() {
        return ['ascending', 'descending', null];
      },
      validator: function validator(val) {
        return val.every(function (order) {
          return ['ascending', 'descending', null].indexOf(order) > -1;
        });
      }
    }
  },

  data: function data() {
    return {
      isSubColumn: false,
      columns: []
    };
  },


  computed: {
    owner: function owner() {
      var parent = this.$parent;
      while (parent && !parent.tableId) {
        parent = parent.$parent;
      }
      return parent;
    },
    columnOrTableParent: function columnOrTableParent() {
      var parent = this.$parent;
      while (parent && !parent.tableId && !parent.columnId) {
        parent = parent.$parent;
      }
      return parent;
    },
    realWidth: function realWidth() {
      return Object(util["m" /* parseWidth */])(this.width);
    },
    realMinWidth: function realMinWidth() {
      return Object(util["l" /* parseMinWidth */])(this.minWidth);
    },
    realAlign: function realAlign() {
      return this.align ? 'is-' + this.align : null;
    },
    realHeaderAlign: function realHeaderAlign() {
      return this.headerAlign ? 'is-' + this.headerAlign : this.realAlign;
    }
  },

  methods: {
    getPropsData: function getPropsData() {
      var _this = this;

      for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      return props.reduce(function (prev, cur) {
        if (Array.isArray(cur)) {
          cur.forEach(function (key) {
            prev[key] = _this[key];
          });
        }
        return prev;
      }, {});
    },
    getColumnElIndex: function getColumnElIndex(children, child) {
      return [].indexOf.call(children, child);
    },
    setColumnWidth: function setColumnWidth(column) {
      if (this.realWidth) {
        column.width = this.realWidth;
      }
      if (this.realMinWidth) {
        column.minWidth = this.realMinWidth;
      }
      if (!column.minWidth) {
        column.minWidth = 80;
      }
      column.realWidth = column.width === undefined ? column.minWidth : column.width;
      return column;
    },
    setColumnForcedProps: function setColumnForcedProps(column) {
      // 对于特定类型的 column，某些属性不允许设置
      var type = column.type;
      var source = cellForced[type] || {};
      Object.keys(source).forEach(function (prop) {
        var value = source[prop];
        if (value !== undefined) {
          column[prop] = prop === 'className' ? column[prop] + ' ' + value : value;
        }
      });
      return column;
    },
    setColumnRenders: function setColumnRenders(column) {
      var _this2 = this;

      var h = this.$createElement;

      // renderHeader 属性不推荐使用。
      if (this.renderHeader) {
        console.warn('[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.');
      } else if (column.type !== 'selection') {
        column.renderHeader = function (h, scope) {
          var renderHeader = _this2.$scopedSlots.header;
          return renderHeader ? renderHeader(scope) : column.label;
        };
      }

      var originRenderCell = column.renderCell;
      // TODO: 这里的实现调整
      if (column.type === 'expand') {
        // 对于展开行，renderCell 不允许配置的。在上一步中已经设置过，这里需要简单封装一下。
        column.renderCell = function (h, data) {
          return h(
            'div',
            { 'class': 'cell' },
            [originRenderCell(h, data)]
          );
        };
        this.owner.renderExpanded = function (h, data) {
          return _this2.$scopedSlots.default ? _this2.$scopedSlots.default(data) : _this2.$slots.default;
        };
      } else {
        originRenderCell = originRenderCell || defaultRenderCell;
        // 对 renderCell 进行包装
        column.renderCell = function (h, data) {
          var children = null;
          if (_this2.$scopedSlots.default) {
            children = _this2.$scopedSlots.default(data);
          } else {
            children = originRenderCell(h, data);
          }
          var prefix = treeCellPrefix(h, data);
          var props = {
            class: 'cell',
            style: {}
          };
          if (column.showOverflowTooltip) {
            props.class += ' el-tooltip';
            props.style = { width: (data.column.realWidth || data.column.width) - 1 + 'px' };
          }
          return h(
            'div',
            props,
            [prefix, children]
          );
        };
      }
      return column;
    },
    registerNormalWatchers: function registerNormalWatchers() {
      var _this3 = this;

      var props = ['label', 'property', 'filters', 'filterMultiple', 'sortable', 'index', 'formatter', 'className', 'labelClassName', 'showOverflowTooltip'];
      // 一些属性具有别名
      var aliases = {
        prop: 'property',
        realAlign: 'align',
        realHeaderAlign: 'headerAlign',
        realWidth: 'width'
      };
      var allAliases = props.reduce(function (prev, cur) {
        prev[cur] = cur;
        return prev;
      }, aliases);

      Object.keys(allAliases).forEach(function (key) {
        var columnKey = aliases[key];

        _this3.$watch(key, function (newVal) {
          _this3.columnConfig[columnKey] = newVal;
        });
      });
    },
    registerComplexWatchers: function registerComplexWatchers() {
      var _this4 = this;

      var props = ['fixed'];
      var aliases = {
        realWidth: 'width',
        realMinWidth: 'minWidth'
      };
      var allAliases = props.reduce(function (prev, cur) {
        prev[cur] = cur;
        return prev;
      }, aliases);

      Object.keys(allAliases).forEach(function (key) {
        var columnKey = aliases[key];

        _this4.$watch(key, function (newVal) {
          _this4.columnConfig[columnKey] = newVal;
          var updateColumns = columnKey === 'fixed';
          _this4.owner.store.scheduleLayout(updateColumns);
        });
      });
    }
  },

  components: {
    ElCheckbox: checkbox_default.a
  },

  beforeCreate: function beforeCreate() {
    this.row = {};
    this.column = {};
    this.$index = 0;
    this.columnId = '';
  },
  created: function created() {
    var parent = this.columnOrTableParent;
    this.isSubColumn = this.owner !== parent;
    this.columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++;

    var type = this.type || 'default';
    var sortable = this.sortable === '' ? true : this.sortable;
    var defaults = _extends({}, cellStarts[type], {
      id: this.columnId,
      type: type,
      property: this.prop || this.property,
      align: this.realAlign,
      headerAlign: this.realHeaderAlign,
      showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
      // filter 相关属性
      filterable: this.filters || this.filterMethod,
      filteredValue: [],
      filterPlacement: '',
      isColumnGroup: false,
      filterOpened: false,
      // sort 相关属性
      sortable: sortable,
      // index 列
      index: this.index
    });

    var basicProps = ['columnKey', 'label', 'className', 'labelClassName', 'type', 'renderHeader', 'formatter', 'fixed', 'resizable'];
    var sortProps = ['sortMethod', 'sortBy', 'sortOrders'];
    var selectProps = ['selectable', 'reserveSelection'];
    var filterProps = ['filterMethod', 'filters', 'filterMultiple', 'filterOpened', 'filteredValue', 'filterPlacement'];

    var column = this.getPropsData(basicProps, sortProps, selectProps, filterProps);
    column = Object(util["h" /* mergeOptions */])(defaults, column);

    // 注意 compose 中函数执行的顺序是从右到左
    var chains = Object(util["a" /* compose */])(this.setColumnRenders, this.setColumnWidth, this.setColumnForcedProps);
    column = chains(column);

    this.columnConfig = column;

    // 注册 watcher
    this.registerNormalWatchers();
    this.registerComplexWatchers();
  },
  mounted: function mounted() {
    var owner = this.owner;
    var parent = this.columnOrTableParent;
    var children = this.isSubColumn ? parent.$el.children : parent.$refs.hiddenColumns.children;
    var columnIndex = this.getColumnElIndex(children, this.$el);

    owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
  },
  destroyed: function destroyed() {
    if (!this.$parent) return;
    var parent = this.$parent;
    this.owner.store.commit('removeColumn', this.columnConfig, this.isSubColumn ? parent.columnConfig : null);
  },
  render: function render(h) {
    // slots 也要渲染，需要计算合并表头
    return h('div', this.$slots.default);
  }
});
// CONCATENATED MODULE: ./packages/table-column/index.js


/* istanbul ignore next */
table_column.install = function (Vue) {
  Vue.component(table_column.name, table_column);
};

/* harmony default export */ var packages_table_column = __webpack_exports__["default"] = (table_column);

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getColumnById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getColumnByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getColumnByCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRowIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getKeysMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return parseWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return parseMinWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return parseHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return toggleRowStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return walkTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return objectEquals; });
/* harmony import */ var element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var getCell = function getCell(event) {
  var cell = event.target;

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode;
  }

  return null;
};

var isObject = function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

var orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  var getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return Object(element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__["getValueByPath"])(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== '$key') {
      if (isObject(value) && '$value' in value) value = value.$value;
    }
    return [isObject(value) ? Object(element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__["getValueByPath"])(value, sortKey) : value];
  };
  var compare = function compare(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (var i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort(function (a, b) {
    var order = compare(a, b);
    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index;
    }
    return order * reverse;
  }).map(function (item) {
    return item.value;
  });
};

var getColumnById = function getColumnById(table, columnId) {
  var column = null;
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

var getColumnByKey = function getColumnByKey(table, columnKey) {
  var column = null;
  for (var i = 0; i < table.columns.length; i++) {
    var item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};

var getColumnByCell = function getColumnByCell(table, cell) {
  var matches = (cell.className || '').match(/el-table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};

var getRowIdentity = function getRowIdentity(row, rowKey) {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }
    var key = rowKey.split('.');
    var current = row;
    for (var i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};

var getKeysMap = function getKeysMap(array, rowKey) {
  var arrayMap = {};
  (array || []).forEach(function (row, index) {
    arrayMap[getRowIdentity(row, rowKey)] = { row: row, index: index };
  });
  return arrayMap;
};

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function mergeOptions(defaults, config) {
  var options = {};
  var key = void 0;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (hasOwn(config, key)) {
      var value = config[key];
      if (typeof value !== 'undefined') {
        options[key] = value;
      }
    }
  }
  return options;
}

function parseWidth(width) {
  if (width !== undefined) {
    width = parseInt(width, 10);
    if (isNaN(width)) {
      width = null;
    }
  }
  return width;
}

function parseMinWidth(minWidth) {
  if (typeof minWidth !== 'undefined') {
    minWidth = parseWidth(minWidth);
    if (isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
};

function parseHeight(height) {
  if (typeof height === 'number') {
    return height;
  }
  if (typeof height === 'string') {
    if (/^\d+(?:px)?$/.test(height)) {
      return parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}

// https://github.com/reduxjs/redux/blob/master/src/compose.js
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

function toggleRowStatus(statusArr, row, newVal) {
  var changed = false;
  var index = statusArr.indexOf(row);
  var included = index !== -1;

  var addRow = function addRow() {
    statusArr.push(row);
    changed = true;
  };
  var removeRow = function removeRow() {
    statusArr.splice(index, 1);
    changed = true;
  };

  if (typeof newVal === 'boolean') {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}

function walkTreeNode(root, cb) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var lazyKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'hasChildren';

  var isNil = function isNil(array) {
    return !(Array.isArray(array) && array.length);
  };

  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach(function (item) {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      var children = item[childrenKey];
      if (!isNil(children)) {
        _walker(item, children, level + 1);
      }
    });
  }

  root.forEach(function (item) {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    var children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}

var objectEquals = function objectEquals(objectA, objectB) {
  // 取对象a和b的属性名
  var aProps = Object.getOwnPropertyNames(objectA);
  var bProps = Object.getOwnPropertyNames(objectB);
  // 判断属性名的length是否一致
  if (aProps.length !== bProps.length) {
    return false;
  }
  // 循环取出属性名，再判断属性值是否一致
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (objectA[propName] !== objectB[propName]) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-table/src/ef-table.vue?vue&type=template&id=49a1b29f
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "el-table",
    _vm._g(
      _vm._b(
        {
          ref: "table",
          class: { "ef-table--radio": _vm.hasRadio },
          style: { width: "100%" },
          attrs: {
            data: _vm.tableData,
            "default-expand-all": _vm.defaultExpandAll,
            "expand-row-keys": _vm.expandRowKeys,
            "row-key": _vm.rowKey,
            "span-method": _vm.spanMethod,
            "cell-class-name": _vm.cellClassName || _vm.onCellClassName,
          },
          scopedSlots: _vm._u(
            [
              {
                key: "empty",
                fn: function () {
                  return [
                    _vm._t("empty", function () {
                      return [
                        _c("div", { staticClass: "ef-table--empty" }, [
                          _vm._v("暂无数据..."),
                        ]),
                      ]
                    }),
                  ]
                },
                proxy: true,
              },
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
        },
        "el-table",
        Object.assign({}, _vm.tableOptions, _vm.$attrs),
        false
      ),
      _vm.tableListeners
    ),
    [
      _vm._l(_vm.cols, function (column) {
        return [
          column._show !== false
            ? _c("ef-column-select", {
                key: column.prop || column.type,
                ref: "efColumnSelect",
                refInFor: true,
                attrs: {
                  column: column,
                  fields: _vm.validFields,
                  selectable: _vm.selectable,
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "expand",
                      fn: function ({ row, column }) {
                        return [
                          _vm._t("expand", null, { row: row, column: column }),
                        ]
                      },
                    },
                    _vm._l(_vm.validFields, function (field) {
                      return {
                        key: field.prop,
                        fn: function ({ row }) {
                          return [
                            _vm._t(
                              field.prop,
                              function () {
                                return [
                                  _vm._v(
                                    "\n          " +
                                      _vm._s(
                                        field.format
                                          ? field.format(row, _vm.tableData)
                                          : row[field.prop]
                                      ) +
                                      "\n        "
                                  ),
                                ]
                              },
                              { row: row }
                            ),
                          ]
                        },
                      }
                    }),
                    _vm._l(_vm.validFields, function (field) {
                      return {
                        key: _vm.addHeader(field.prop),
                        fn: function ({ column }) {
                          return [
                            _vm._t(
                              _vm.addHeader(field.prop),
                              function () {
                                return [_vm._v(_vm._s(column.label))]
                              },
                              { column: column }
                            ),
                          ]
                        },
                      }
                    }),
                  ],
                  null,
                  true
                ),
              })
            : _vm._e(),
        ]
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ef-table/src/ef-table.vue?vue&type=template&id=49a1b29f

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-table/src/ef-table-column.vue?vue&type=template&id=19317f9e
var ef_table_columnvue_type_template_id_19317f9e_render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "el-table-column",
    _vm._b(
      {
        attrs: { selectable: _vm.selectable },
        scopedSlots: _vm._u(
          [
            {
              key: "default",
              fn: function ({ row, column }) {
                return [
                  _vm._t(
                    column.property,
                    function () {
                      return [_vm._v(_vm._s(row[column.property]))]
                    },
                    { row: row }
                  ),
                ]
              },
            },
            {
              key: "header",
              fn: function ({ column }) {
                return [
                  _vm._t(
                    _vm.addHeader(column.property),
                    function () {
                      return [_vm._v(_vm._s(column.label))]
                    },
                    { column: column }
                  ),
                ]
              },
            },
          ],
          null,
          true
        ),
      },
      "el-table-column",
      _vm.column,
      false
    ),
    _vm._l(_vm.column.children, function (child) {
      return _c("ef-table-column", {
        key: child.prop,
        attrs: {
          data: _vm.data,
          column: child,
          fields: _vm.fields,
          selectable: _vm.selectable,
        },
        scopedSlots: _vm._u(
          [
            _vm._l(_vm.fields, function (field) {
              return {
                key: field.prop,
                fn: function ({ row }) {
                  return [
                    _vm._t(
                      field.prop,
                      function () {
                        return [
                          _vm._v(
                            "\n        " +
                              _vm._s(
                                field.format
                                  ? field.format(row, _vm.data)
                                  : row[field.prop]
                              ) +
                              "\n      "
                          ),
                        ]
                      },
                      { row: row }
                    ),
                  ]
                },
              }
            }),
            _vm._l(_vm.fields, function (field) {
              return {
                key: _vm.addHeader(field.prop),
                fn: function ({ column }) {
                  return [
                    _vm._t(
                      _vm.addHeader(field.prop),
                      function () {
                        return [_vm._v(_vm._s(column.label))]
                      },
                      { column: column }
                    ),
                  ]
                },
              }
            }),
          ],
          null,
          true
        ),
      })
    }),
    1
  )
}
var ef_table_columnvue_type_template_id_19317f9e_staticRenderFns = []
ef_table_columnvue_type_template_id_19317f9e_render._withStripped = true


// CONCATENATED MODULE: ./packages/ef-table/src/ef-table-column.vue?vue&type=template&id=19317f9e

// EXTERNAL MODULE: ./packages/table-column/index.js + 2 modules
var table_column = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-table/src/ef-table-column.vue?vue&type=script&lang=js



/* harmony default export */ var ef_table_columnvue_type_script_lang_js = ({
  name: 'EfTableColumn',
  components: { ElTableColumn: table_column["default"] },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    column: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    fields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selectable: {
      // 选择框情况下，禁止选中判断方法（row）
      type: Function,
      default: function _default() {
        return true;
      }
    }
  },
  methods: {
    addHeader: function addHeader(prop) {
      return prop + '-header';
    }
  }
});
// CONCATENATED MODULE: ./packages/ef-table/src/ef-table-column.vue?vue&type=script&lang=js
 /* harmony default export */ var src_ef_table_columnvue_type_script_lang_js = (ef_table_columnvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/ef-table/src/ef-table-column.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_ef_table_columnvue_type_script_lang_js,
  ef_table_columnvue_type_template_id_19317f9e_render,
  ef_table_columnvue_type_template_id_19317f9e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ef_table_column = (component.exports);
// CONCATENATED MODULE: ./packages/ef-table/src/ef-column-select.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * 用来判断父组件是否使用作用域插槽，设置默认节点
 * @param {VueComponent} _this Vue 实例
 * @param {String} key 插槽名
 * @param {Object} props 作用域
 * @param {vNode} vNode 默认虚拟节点
 * @returns {vNode} 虚拟节点
 */
var defaultSlot = function defaultSlot(_this, key, props) {
  var vNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var ret = vNode;
  if (_this.$scopedSlots.hasOwnProperty(key)) {
    ret = _this.$scopedSlots[key](props);
  }
  return ret;
};

/**
 * 用来处理以下类型的插槽传递
 * eg:
 *  <template v-for="field in validFields" #[field.prop]="{ row }">
 *    <slot :name="field.prop" :row="row">
 *      {{ field.format ? field.format(row, tableData) : row[field.prop] }}
 *    </slot>
 *  </template>
 *
 * @param {VueComponent} _this Vue 实例
 * @param {Array} allKeys 所有具名插槽名
 * @param {vNode} vNode 默认虚拟节点
 * @returns {Object} 作用域插槽集合
 */
var setScopedSlotsFunc = function setScopedSlotsFunc(_this, allKeys) {
  var vNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  allKeys = allKeys || [];
  var ret = {};
  allKeys.forEach(function (key) {
    ret[key] = function (props) {
      return defaultSlot(_this, key, props, vNode);
    };
  });
  return ret;
};

// const CustomColumn = {
//   name: 'custom-column',
//   props: {
//     column: { type: Object, require: true }
//   },
//   render(h) {
//     return h(
//       'el-table-column',
//       {
//         scopedSlots: {
//           default: props => defaultSlot(this, this.column.prop, props)
//         },
//         props: { ...this.column }
//       },
//       []
//     );
//   }
// };

var RadioColumn = {
  name: 'radio-column',
  props: {
    column: { type: Object, require: true }
  },
  render: function render(h) {
    return h('el-table-column', {
      props: _extends({}, this.column, {
        type: 'selection',
        width: this.column.width || 45
      })
    }, []);
  }
};

var IndexOrSelectionColumn = {
  name: 'index-or-selection-column',
  props: {
    column: { type: Object, require: true }
  },
  render: function render(h) {
    var width = this.column.type === 'index' ? 35 : 45;
    return h('el-table-column', {
      props: _extends({}, this.column, {
        width: this.column.width || width
      })
    }, []);
  }
};

var ExpandColumn = {
  name: 'expand-column',
  props: {
    column: { type: Object, require: true }
  },
  data: function data() {
    return {};
  },
  render: function render(h) {
    var _this2 = this;

    return h('el-table-column', {
      props: _extends({}, this.column, {
        width: this.column.width || 35
      }),
      scopedSlots: {
        default: function _default(props) {
          return defaultSlot(_this2, 'expand', props);
        }
      }
    }, []);
  }
};

var DefaultColumn = {
  name: 'default-column',
  components: { EfTableColumn: ef_table_column },
  props: {
    column: { type: Object, require: true },
    fields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selectable: {
      type: Function,
      default: function _default() {
        return true;
      }
    }
  },
  render: function render(h) {
    var allKeys = [];
    var allHeaderKeys = [];
    this.fields.forEach(function (item) {
      if (item.prop) {
        allKeys.push(item.prop);
        allHeaderKeys.push(item.prop + '-header');
      }
    });
    return h('ef-table-column', {
      props: {
        column: this.column,
        fields: this.fields,
        selectable: this.selectable
      },
      scopedSlots: _extends({}, setScopedSlotsFunc(this, allKeys), setScopedSlotsFunc(this, allHeaderKeys))
    });
  }
};

/* harmony default export */ var ef_column_select = ({
  name: 'ef-column-select',
  props: {
    column: { type: Object, require: true },
    fields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selectable: {
      type: Function,
      default: function _default() {
        return true;
      }
    }
  },
  data: function data() {
    return {};
  },

  methods: {},
  render: function render(h) {
    var _this = this;
    function getComponent(type) {
      switch (type) {
        // case 'custom':
        //   return DefaultColumn;
        case 'radio':
          return RadioColumn;
        case 'index':
        case 'selection':
          return IndexOrSelectionColumn;
        case 'expand':
          return ExpandColumn;
        default:
          return DefaultColumn;
      }
    }
    var allKeys = Object.keys(_this.$scopedSlots).filter(function (key) {
      return key !== 'undefined';
    });
    return h(getComponent(_this.column.type), {
      ref: _this.column.type,
      props: {
        value: _this.curRadio,
        column: _this.column,
        fields: _this.fields,
        selectable: _this.selectable
      },
      scopedSlots: _extends({}, setScopedSlotsFunc(_this, allKeys)),
      on: {
        change: function change(val) {
          _this.curRadio = val;
        }
      }
    }, []);
  }
});
// EXTERNAL MODULE: external "throttle-debounce"
var external_throttle_debounce_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-table/src/ef-table.vue?vue&type=script&lang=js




/* harmony default export */ var ef_tablevue_type_script_lang_js = ({
  name: 'EfTable',
  components: { EfColumnSelect: ef_column_select },
  props: {
    rows: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    cols: {
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },
    tableOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    childrenProp: {
      type: String,
      default: 'children'
    },
    needMerge: Boolean,
    mergeSpanList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selectable: {
      // 选择框情况下，禁止选中判断方法（row）
      type: Function,
      default: function _default() {
        return true;
      }
    },
    selected: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    radioByRowClick: Boolean,
    defaultExpandAll: Boolean,
    expandRowKeys: Array,
    rowKey: [String, Function],
    cellClassName: [String, Function]
  },
  data: function data() {
    var _this = this;

    return {
      childrenKeys: [],
      selections: [],
      debounceSelection: Object(external_throttle_debounce_["debounce"])(0, false, function (selection) {
        _this.$emit('on-selection', selection);
        _this.$emit('selection-change', selection);
      })
    };
  },

  watch: {
    rows: {
      immediate: true,
      handler: function handler() {
        if (this.hasCheckbox) {
          this.setDefaultSelectedRow();
        }
      }
    }
  },
  computed: {
    tableData: function tableData() {
      var _this2 = this;

      var tables = [];
      this.rows.forEach(function (row, idx) {
        row._index = idx;
        if (
        // 需要合并并且存在子项的预处理
        _this2.needMerge && row.hasOwnProperty(_this2.childrenProp) && row[_this2.childrenProp] instanceof Array && row[_this2.childrenProp].length > 0) {
          var spanFlag = true;
          row[_this2.childrenProp].forEach(function (child) {
            if (row[_this2.childrenProp].length === 1) {
              tables.push(Object.assign({}, row, child));
            } else if (spanFlag) {
              _this2.childrenKeys = _this2.childrenKeys.length > 0 ? _this2.childrenKeys : Object.keys(child);
              tables.push(Object.assign({}, row, child, {
                _needMerge: true,
                _mergeLength: row[_this2.childrenProp].length
              }));
              spanFlag = false;
            } else {
              tables.push(Object.assign({}, row, child, {
                _needMerge: true,
                _mergeLength: 0
              }));
            }
          });
        } else {
          // 不需要合并的情况
          tables.push(row);
        }
      });
      return this.needMerge ? tables : this.rows;
    },
    validFields: function validFields() {
      var _this3 = this;

      var ret = [];
      var keys = [];
      this.recursion(this.cols).forEach(function (item) {
        item.denyMerge && _this3.childrenKeys.push(item.prop); // 使用 denyMerge 避免被合并
        // 剔除重复属性
        if (!keys.includes(item.prop)) {
          ret.push(item);
          keys.push(item.prop);
        }
      });
      return ret;
    },
    hasRadio: function hasRadio() {
      return !!this.cols.find(function (t) {
        return t.type === 'radio';
      });
    },
    hasCheckbox: function hasCheckbox() {
      return !!this.cols.find(function (t) {
        return ['selection', 'radio'].includes(t.type);
      });
    },
    tableListeners: function tableListeners() {
      var evts = {};
      if (this.hasRadio) {
        evts['row-click'] = this.onRowClick.bind(this);
        evts['select'] = this.onSelect.bind(this);
      }
      if (this.hasCheckbox) {
        evts['selection-change'] = this.onSelectionChange.bind(this);
      }
      return Object.assign({}, this.$listeners, evts);
    }
  },
  mounted: function mounted() {
    this.setDefaultSelectedRow();
  },

  methods: {
    setDefaultSelectedRow: function setDefaultSelectedRow() {
      var _this4 = this;

      if (typeof this.selected === 'function') {
        var initSelectedRows = this.tableData.filter(function (row) {
          return _this4.selected(row);
        });
        // // 单选则取第一个
        // if (this.hasRadio) {
        //   initSelectedRows = initSelectedRows.slice(0, 1);
        // }
        this.$nextTick(function () {
          initSelectedRows.forEach(function (row) {
            _this4.$refs.table.toggleRowSelection(row, true);
          });
        });
      }
    },
    addHeader: function addHeader(prop) {
      return prop + '-header';
    },
    getEveryOffset: function getEveryOffset(offset) {
      var left = 0;
      var right = 0;
      if (typeof offset === 'number') {
        left = 0;
        right = offset;
      } else if (offset instanceof Array) {
        switch (offset.length) {
          case 1:
            left = 0;
            right = offset[0];
            break;
          case 2:
            left = offset[0];
            right = offset[1];
            break;
          default:
            console.error('偏移量 offset 为数组类型时长度只允许为 1 和 2。');
            break;
        }
      } else if (offset && offset instanceof Object) {
        left = offset.left || left;
        right = offset.right || right;
      }
      if (left + right < Math.abs(left) + Math.abs(right)) {
        left = 0;
        right = 0;
        console.error('偏移量 offset 每个方向上的数值必须为非负数。');
      }
      return { left: left, right: right };
    },
    recursion: function recursion(columns) {
      var res = [];
      for (var _iterator = columns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var column = _ref;

        res.push(column);
        if (Array.isArray(column.children)) {
          res.push.apply(res, this.recursion(column.children));
        } else {
          res.push(column);
        }
      }
      return res;
    },
    onCellClassName: function onCellClassName(props) {
      var columnIndex = props.columnIndex;

      var col = this.cols[columnIndex] || {};
      if (col.type === 'expand') {
        return this._showExpand(props);
      }
    },
    _showExpand: function _showExpand(props) {
      var row = props.row,
          rowIndex = props.rowIndex,
          columnIndex = props.columnIndex;

      var rowKey = this.rowKey;
      if (typeof this.rowKey === 'function') {
        rowKey = this.rowKey(row);
      }
      var hasRowKey = rowKey && Object.keys(row).includes(rowKey);
      // 存在默认展开时此功能失效，因为这里只是隐藏了展开按钮，实际中展开节点还是存在
      if (this.defaultExpandAll || hasRowKey && (this.expandRowKeys || []).length > 0) {
        return;
      }
      var col = this.cols[columnIndex] || {};
      if (typeof col.cellClassName === 'function') {
        var isExpand = col.cellClassName(row);
        if (typeof isExpand === 'boolean') {
          return isExpand ? '' : 'ef-table-expand_none';
        }
        if (typeof isExpand === 'number') {
          return rowIndex === isExpand ? '' : 'ef-table-expand_none';
        }
        return isExpand;
      }
    },
    spanMethod: function spanMethod(_ref2) {
      var row = _ref2.row,
          column = _ref2.column,
          rowIndex = _ref2.rowIndex,
          columnIndex = _ref2.columnIndex;

      if (this.needMerge && !this.childrenKeys.includes(column.property)) {
        if (row.hasOwnProperty('_mergeLength')) {
          return row._needMerge && row._mergeLength ? [row._mergeLength, 1] : [0, 0];
        }
      }
      if (this.needMerge && this.mergeSpanList.length > 0) {
        var spanInfo = this.mergeSpanList.find(function (info) {
          var spanPosition = info.spanPosition;

          return rowIndex === spanPosition[0];
        });
        if (spanInfo) {
          var spanPosition = spanInfo.spanPosition,
              offset = spanInfo.offset;

          var _getEveryOffset = this.getEveryOffset(offset),
              left = _getEveryOffset.left,
              right = _getEveryOffset.right;

          if (columnIndex === spanPosition[1]) {
            if (spanPosition[1] - left < 0 || row._needMerge && !this.childrenKeys.includes(this.cols[spanPosition[1] - left].prop)) {
              left = 0;
            }
            return {
              rowspan: 1,
              colspan: 1 + left + right
            };
          } else if (spanPosition[1] - left <= columnIndex && columnIndex <= spanPosition[1] + right) {
            return [0, 0];
          }
        }
      }
    },
    getSelection: function getSelection() {
      return this.selections;
    },
    onRowClick: function onRowClick(row) {
      this.$emit('on-row-click', row);
    },
    onSelectionChange: function onSelectionChange(rows) {
      this.selections = rows;
      this.debounceSelection(this.selections);
    },
    onSelect: function onSelect(selection, row) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.clearSelection();
        _this5.$refs.table.toggleRowSelection(row, selection.includes(row));
        _this5.$emit('select', [row], row);
      });
    },
    refresh: function refresh() {
      this.$refs.table.doLayout();
    },


    // 对外暴露 ElTable 的方法
    clearSelection: function clearSelection() {
      this.$refs.table.clearSelection();
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      var currentRow = null;
      if (row || row === 0) {
        if (typeof row === 'number') {
          currentRow = this.tableData.find(function (item) {
            return item._index === row;
          });
        } else if (row.constructor === Object) {
          currentRow = row;
        } else {
          console.error('[EfTable Error]toggleRowSelection 参数必须为行对象或行索引');
          return;
        }
      }
      currentRow && this.$refs.table.toggleRowSelection(currentRow, selected);
    },
    toggleAllSelection: function toggleAllSelection() {
      this.$refs.table.toggleAllSelection();
    },
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      this.$refs.table.toggleRowExpansion(row, expanded);
    },
    setCurrentRow: function setCurrentRow(row) {
      var currentRow = null;
      if (row || row === 0) {
        if (typeof row === 'number') {
          currentRow = this.tableData.find(function (item) {
            return item._index === row;
          });
        } else if (row.constructor === Object) {
          currentRow = row;
        } else {
          console.error('[EfTable Error]setCurrentRow 参数必须为行对象或行索引');
          return;
        }
      }
      this.$refs.table.setCurrentRow(currentRow);
    },
    clearSort: function clearSort() {
      this.$refs.table.clearSort();
    },
    clearFilter: function clearFilter(columnKey) {
      this.$refs.table.clearFilter(columnKey);
    },
    doLayout: function doLayout() {
      this.$refs.table.doLayout();
    },
    sort: function sort(prop, order) {
      this.$refs.table.sort(prop, order);
    }
  }
});
// CONCATENATED MODULE: ./packages/ef-table/src/ef-table.vue?vue&type=script&lang=js
 /* harmony default export */ var src_ef_tablevue_type_script_lang_js = (ef_tablevue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/ef-table/src/ef-table.vue





/* normalize component */

var ef_table_component = Object(componentNormalizer["a" /* default */])(
  src_ef_tablevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ef_table = (ef_table_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-table/src/column.vue?vue&type=template&id=68b6fcc4
var columnvue_type_template_id_68b6fcc4_render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "el-dropdown",
    _vm._b(
      { attrs: { trigger: "click", "hide-on-click": false, size: "small" } },
      "el-dropdown",
      _vm.$attrs,
      false
    ),
    [
      _c("el-button", [_c("i", { staticClass: "el-icon-setting" })]),
      _c("el-dropdown-menu", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (dropdown) {
              return [
                _c(
                  "el-dropdown-item",
                  [
                    _c(
                      "el-checkbox",
                      {
                        attrs: { indeterminate: _vm.isIndeterminate },
                        on: { change: _vm.onCheckAll },
                        model: {
                          value: _vm.checkAll,
                          callback: function ($$v) {
                            _vm.checkAll = $$v
                          },
                          expression: "checkAll",
                        },
                      },
                      [_vm._v("\n        全选\n      ")]
                    ),
                  ],
                  1
                ),
                _c(
                  "el-checkbox-group",
                  {
                    on: { change: _vm.onChange },
                    model: {
                      value: _vm.selection,
                      callback: function ($$v) {
                        _vm.selection = $$v
                      },
                      expression: "selection",
                    },
                  },
                  _vm._l(_vm.columns, function (col) {
                    return _c(
                      "el-dropdown-item",
                      { key: col.prop },
                      [
                        _c(
                          "el-checkbox",
                          {
                            attrs: {
                              label: col.prop,
                              checked: col._show,
                              disabled: col.disabled,
                            },
                          },
                          [
                            _vm._v(
                              "\n          " + _vm._s(col.label) + "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  1
                ),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var columnvue_type_template_id_68b6fcc4_staticRenderFns = []
columnvue_type_template_id_68b6fcc4_render._withStripped = true


// CONCATENATED MODULE: ./packages/ef-table/src/column.vue?vue&type=template&id=68b6fcc4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ef-table/src/column.vue?vue&type=script&lang=js

/* harmony default export */ var columnvue_type_script_lang_js = ({
  name: 'EfColumn',
  props: {
    cols: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    table: Object,
    index: String
  },
  data: function data() {
    var _this = this;

    var columns = this.cols.filter(function (t) {
      return t.label && t.prop;
    });
    columns.forEach(function (t) {
      return _this.$set(t, '_show', t._show != null ? t._show : true);
    });

    return {
      columns: columns,
      checkAll: false,
      isIndeterminate: true,
      selection: []
    };
  },

  computed: {
    storeKey: function storeKey() {
      var canStore = window.localStorage;
      return canStore && (this.index || this.$route && this.$route.name + '-table');
    }
  },
  created: function created() {
    var _this2 = this;

    var store = this.getStore();
    if (store && store.length) this.columns.forEach(function (t) {
      return _this2.$set(t, '_show', store.includes(t.prop));
    });
  },
  mounted: function mounted() {
    this.selection = this.columns.filter(function (t) {
      return t._show;
    }).map(function (t) {
      return t.prop;
    });
    this.onChange(false);
  },

  methods: {
    getStore: function getStore() {
      var storeKey = this.storeKey;
      if (!storeKey) return null;
      var val = localStorage.getItem(storeKey);
      if (!val) return null;
      return JSON.parse(val);
    },
    setStore: function setStore() {
      var storeKey = this.storeKey;
      if (!storeKey) return;
      var vals = this.columns.filter(function (t) {
        return t._show === true;
      }).map(function (t) {
        return t.prop;
      });
      localStorage.setItem(storeKey, JSON.stringify(vals));
    },
    onChange: function onChange(store) {
      var checkedCount = this.selection.length;
      this.checkAll = checkedCount === this.columns.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.columns.length;
      this.handleEvent(store);
    },
    onCheckAll: function onCheckAll(val) {
      var _this3 = this;

      var disabled_items = function disabled_items() {
        return _this3.columns.filter(function (t) {
          return t.disabled;
        }).map(function (t) {
          return t.prop;
        });
      };
      this.selection = val ? this.columns.map(function (item) {
        return item.prop;
      }) : disabled_items();
      this.isIndeterminate = this.selection.length > 0 && this.selection.length < this.columns.length;
      this.handleEvent();
    },
    handleEvent: function handleEvent(store) {
      var _this4 = this;

      this.columns.forEach(function (col) {
        col._show = _this4.selection.includes(col.prop);
      });

      if (store !== false) this.setStore();
      if (this.table) this.$nextTick(function () {
        return _this4.table.refresh();
      });

      this.$emit('on-change');
    }
  }
});
// CONCATENATED MODULE: ./packages/ef-table/src/column.vue?vue&type=script&lang=js
 /* harmony default export */ var src_columnvue_type_script_lang_js = (columnvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/ef-table/src/column.vue





/* normalize component */

var column_component = Object(componentNormalizer["a" /* default */])(
  src_columnvue_type_script_lang_js,
  columnvue_type_template_id_68b6fcc4_render,
  columnvue_type_template_id_68b6fcc4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var column = (column_component.exports);
// CONCATENATED MODULE: ./packages/ef-table/index.js



/* istanbul ignore next */
ef_table.install = function (Vue) {
  Vue.component(ef_table.name, ef_table);
  Vue.component(column.name, column);
};
/* harmony default export */ var packages_ef_table = __webpack_exports__["default"] = (ef_table);

/***/ })

/******/ });