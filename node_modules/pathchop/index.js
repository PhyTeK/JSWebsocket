function pathchop(str) {
  var start = '';
  var str   = str.replace(/\/+/, '/');
  var out = {
    file : '',
    dir  : ''
  }

  // directory only
  if (str[str.length - 1] === '/') {
    out.dir = str;
  } 
  else { 
    var last;

    // file only
    if ((last = str.lastIndexOf('/')) < 0) {
      out.file = str;
    } 

    // file and directory
    else {
      if (str === '/a') debugger;
      out.file = str.substr(last + 1);
      out.dir  = str.substr(0, last + 1);
    }
  }

  return out;
}

module.exports = pathchop;
