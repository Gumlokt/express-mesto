const fsPromises = require('fs').promises;

const getDataFromFile = (filepath) => {
  const promise = fsPromises.readFile(filepath, { encoding: 'utf-8' })
    .then((fileData) => JSON.parse(fileData))
    .catch((err) => console.log(err));

  return promise;
};

module.exports = getDataFromFile;
