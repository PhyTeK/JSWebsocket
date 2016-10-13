var pc = require('./index.js');

function print(err, data) {
  console.log(data);
}

pc('/', print);
pc('/us', print);
pc('/usr/', print);
