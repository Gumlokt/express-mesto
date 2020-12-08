const fs = require('fs');

module.exports = {
  readFile: (filepath) => {
    try {
      const fileData = fs.readFileSync(filepath);

      return JSON.parse(fileData);
    } catch (err) {
      console.log(err);
    }

    return { message: 'Some error occurred. Possible, cannot find file to read. Check the console messages..' };
  },
};
