var glob = require('glob');
var chop = require('pathchop');

function complete(token, callback) {
  var info = chop(token);

  var wild = info.file + "*";
  glob(wild, {cwd: info.dir}, function (err, arr) {
    callback(err, arr, info);
  });
}

module.exports = complete;
