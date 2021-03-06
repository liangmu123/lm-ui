'use strict';

exports.__esModule = true;

var _DB2 = require('./DB');

var _DB3 = _interopRequireDefault(_DB2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Storage = function (_DB) {
  _inherits(Storage, _DB);

  function Storage(_ref) {
    var name = _ref.name,
        db = _ref.db,
        serialize = _ref.serialize,
        deserialize = _ref.deserialize;

    _classCallCheck(this, Storage);

    return _possibleConstructorReturn(this, _DB.call(this, { name: name, db: db, serialize: serialize, deserialize: deserialize }));
  }

  Storage.prototype.read = function read(key) {
    return this.deserialize(this.db.getItem(key));
  };

  Storage.prototype.write = function write(key, value) {
    this.db.setItem(key, this.serialize(value));
  };

  Storage.prototype.delete = function _delete(key) {
    this.db.removeItem(key);
  };

  return Storage;
}(_DB3.default);

exports.default = Storage;