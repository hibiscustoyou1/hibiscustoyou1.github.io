const fs = require('fs');
const path = require('path');

const recursion = (route, name) => {
  const src = route + name;
  fs.stat(src, (err, stats) => {
    if (err) {
      return
    }
    if (stats.isDirectory()) {
      fs.readdir(src, (err, files) => {
        if (err) {
          return
        }
        files.forEach(item => {
          recursion(src + '/', item);
        })
      })
    } else {
      console.log({
        url: src.replace('./demo', 'https://hibiscustoyou1.github.io/my-element/demo'),
        name: path.basename(src, '.html')
      }, ',');
    }
  })
}

recursion('./demo', '');
