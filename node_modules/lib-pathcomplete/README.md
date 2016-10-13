# Autocomplete file paths

## Install

```
npm install lib-pathcomplete
```

## Usage

- works with absolute paths
- works with relative paths to `process.cwd()`

```javascript
var pc = require('lib-pathcomplete');

function completionHandler(err, data) {
  // do something cool
}

pc('/'     , completionHandler);
// [ 'Applications',
//   'Library',
//   'Network',
//   'System',
//   'Users',
//   'Volumes',
//   'bin',
//   'cores',
//   'dev',
//   'etc',
//   'home',
//   'mach_kernel',
//   'net',
//   'private',
//   'sbin',
//   'tmp',
//   'usr',
//   'var' ]

pc('/us'   , completionHandler);
// [ 'usr' ]

pc('/usr/' , completionHandler);
// [ 'X11',
//   'X11R6',
//   'bin',
//   'include',
//   'lib',
//   'libexec',
//   'local',
//   'sbin',
//   'share',
//   'standalone' ]
```
