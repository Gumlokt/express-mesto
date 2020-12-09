const fs = require('fs');

module.exports = {
  readFile: (filepath) => {
    try {
      const fileData = fs.readFileSync(filepath);

      return JSON.parse(fileData);
    } catch (err) {
      console.log(err);
    }

    return [{ message: 'Some error occurred. Check the console messages..' }];
  },
};

// module.exports = {
//   readFile: (filepath) => {
//     let fileData = [];

//     fs.readFile(filepath, { encoding: 'utf-8' }, (err, data) => {
//       fileData = data;
//     });

//     return JSON.parse(fileData);
//   },
// };
