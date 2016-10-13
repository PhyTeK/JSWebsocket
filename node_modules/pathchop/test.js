var fmt = require('util').format;
var dirsplit = require('./index.js');

var assert = require('assert');
[
  [''     , [''     , '']]  , 
  ['a'    , [''     , 'a']] , 
  ['/'    , ['/'    , '']]  , 
  ['/a'   , ['/'    , 'a']] , 
  ['/a/'  , ['/a/'  , '']]  , 
  ['//'   , ['/'    , '']]  , 
  ['/a/b' , ['/a/'  , 'b']] , 
  ['a/b/' , ['a/b/' , '']]  , 
  ['a//b' , ['a/'   , 'b']]
].forEach(function (item) {
  process.stdout.write(fmt('Test: %s ', item[0]))
  var test   = dirsplit(item[0]);
  var answer = item[1];
  assert.equal(answer[0], test.dir);
  assert.equal(answer[1], test.file);
  console.log('√');
});
