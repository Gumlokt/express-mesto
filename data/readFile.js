const fs = require('fs');

module.exports = {
  readFile: (filepath) => {
    const fileData = fs.readFileSync(filepath);

    return JSON.parse(fileData);
  },
};
