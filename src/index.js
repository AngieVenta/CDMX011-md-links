const { getsMdFiles, validPath } = require('./get-md');
const { getLinks } = require('./get-links');
const { validateLinks } = require('./validate-links');
const { linksStats, linksTotalStats } = require('./stats');

// mdLiks function with 2 parameters (path, options)
const mdLinks = (pathFiles, options = { validate: false, stats: false }) => new Promise((resolve, reject) => {
  const pathExists = validPath(pathFiles);
  if (pathExists) {
    const mdFiles = getsMdFiles(pathFiles);
    if (mdFiles.length === 0) reject(new Error('There are no Markdown Files in the path'));
    const mdLinksFound = getLinks(mdFiles);
    if (mdLinksFound.length === 0) reject(new Error('There are no links'));
    if (options.validate === true && options.stats === false) {
      const linksToValidate = mdLinksFound.map((link) => validateLinks(link));
      resolve(Promise.all(linksToValidate));
    } else if (options.validate === false && options.stats === true) {
      const statsData = linksStats(mdLinksFound);
      resolve(statsData);
    } else if (options.validate === true && options.stats === true) {
      const linksToValidate = mdLinksFound.map((link) => validateLinks(link));
      resolve(Promise.all(linksToValidate)
        .then((res) => linksTotalStats(res))
        .catch((error) => { console.error(error); }));
    } else {
      resolve(mdLinksFound);
    }
  } else {
    reject(new Error('The path does not exists, try again'));
  }
});

/* mdLinks('../CDMX011-md-links/src', {validate: true, stats: false})
.then(res => {
    console.log(res)
})
.catch(reject => {
    console.error(reject)
}) */

module.exports.mdLinks = mdLinks;
