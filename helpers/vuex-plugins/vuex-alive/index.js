'use strict';

exports.__esModule = true;

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _defaultsDeep = require('lodash/defaultsDeep');

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

var _Storage = require('./Storage');

var _Storage2 = _interopRequireDefault(_Storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var serialize = function serialize(value) {
  return JSON.stringify(value, null, 2);
};

var deserialize = function deserialize(value) {
  return JSON.parse(value);
};

var VuexAlive = function () {
  function VuexAlive(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === undefined ? 'vuex-alive' : _ref$name,
        local = _ref.local,
        session = _ref.session;

    _classCallCheck(this, VuexAlive);

    this.name = name;
    this.local = local;
    this.session = session;
    this.localDBService = new _Storage2.default({ name: name, db: window.localStorage, serialize: serialize, deserialize: deserialize });
    this.sessionDBService = new _Storage2.default({ name: name, db: window.sessionStorage, serialize: serialize, deserialize: deserialize });
  }

  VuexAlive.prototype.saveData = function saveData(state) {
    if (this.local) {
      var _local = this.local,
          list = _local.list,
          isFilter = _local.isFilter;

      var localState = (0, _cloneDeep2.default)(state);
      localState = isFilter ? (0, _omit2.default)(localState, list) : (0, _pick2.default)(localState, list);
      this.localDBService.write(this.name, localState);
    }
    if (this.session) {
      var _session = this.session,
          _list = _session.list,
          _isFilter = _session.isFilter;

      var sessionState = (0, _cloneDeep2.default)(state);
      sessionState = _isFilter ? (0, _omit2.default)(sessionState, _list) : (0, _pick2.default)(sessionState, _list);
      this.sessionDBService.write(this.name, sessionState);
    }
  };

  VuexAlive.prototype.restoreData = function restoreData(store) {
    var name = this.name;
    store.replaceState((0, _defaultsDeep2.default)(this.sessionDBService.read(name), this.localDBService.read(name), store.state));
  };

  VuexAlive.prototype.clear = function clear() {
    var local = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var session = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var name = this.name;
    if (local) {
      this.localDBService.delete(name);
    }
    if (session) {
      this.sessionDBService.delete(name);
    }
  };

  return VuexAlive;
}();

exports.default = function (options) {
  var vuexAlive = new VuexAlive(options);
  var fn = function fn(store) {
    vuexAlive.restoreData(store);
    store.subscribe(function (_mutation, state) {
      return vuexAlive.saveData(state);
    });
  };
  fn.clear = vuexAlive.clear.bind(vuexAlive);
  return fn;
};