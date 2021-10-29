const {
  extname, isAbsolute, resolve, join,
} = require('path');
const fs = require('fs');
// the path is valid?
const validPath = (route) => fs.existsSync(route);

// gets markdown Files in an array
const getsMdFiles = (route) => {
  const supportedExtensions = ['.md', '.markdown', '.mdown'];
  let arrayMdFiles = [];
  // the path is Absolute, if false, then converts the Relative path to Absolute
  const convertPath = (isAbsolute(route) ? route : resolve(route));
  const extension = extname(convertPath.toLowerCase());
  // the path is a File?
  if (fs.lstatSync(convertPath).isFile()) {
    if (supportedExtensions.includes(extension)) {
      arrayMdFiles.push(convertPath);
    }
  } else {
    // reads the Directory
    const filesInDir = fs.readdirSync(convertPath);
    filesInDir.forEach((file) => {
      const pathFileJoin = join(convertPath, file);
      const recursivity = getsMdFiles(pathFileJoin);
      arrayMdFiles = arrayMdFiles.concat(recursivity);
    });
  }
  return arrayMdFiles;
};

module.exports = {
  validPath,
  getsMdFiles,
};
