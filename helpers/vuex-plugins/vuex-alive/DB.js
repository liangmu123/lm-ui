'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DB = function () {
  function DB(_ref) {
    var name = _ref.name,
        db = _ref.db,
        serialize = _ref.serialize,
        deserialize = _ref.deserialize;

    _classCallCheck(this, DB);

    this.name = name;
    this.db = db;
    this.serialize = serialize || function (value) {
      return value;
    };
    this.deserialize = deserialize || function (value) {
      return value;
    };
  }

  DB.prototype.read = function read(key) {
    throw new Error('The method read is necessary');
  };

  DB.prototype.write = function write(key, value) {
    throw new Error('The method write is necessary');
  };

  DB.prototype.delete = function _delete(key) {
    throw new Error('The method delete is necessary');
  };

  return DB;
}();

exports.default = DB;