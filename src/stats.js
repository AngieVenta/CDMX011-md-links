// important https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
/* const links = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',
      status: 200,
      message: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/en-US/404',
      text: 'SoftwareIntegration',
      file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',
      status: 404,
      message: 'FAIL'
    },
    {
        href: 'https://developer.mozilla.org/en-US/404',
        text: 'SoftwareIntegration',
        file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',
        status: 404,
        message: 'FAIL'
    },
    {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',
        status: 200,
        message: 'OK'
    }
  ];
 */

const unique = (linksArray) => {
  const hrefs = linksArray.map((urls) => urls.href);
  // { href } is destructuring the object into only its href-key.
  const filtered = linksArray.filter(({ href }, index) => !hrefs.includes(href, index + 1));
  return filtered.length;
};

const broken = (linksValidated) => {
  const brokenLink = linksValidated.filter((link) => link.message === 'FAIL');
  return brokenLink.length;
};

const total = (linksArray) => {
  const hrefs = linksArray.map((urls) => urls.href);
  return hrefs.length;
};

const linksStats = (linksArray) => { // if validate is false
  const totalLinks = total(linksArray);
  const uniqueLinks = unique(linksArray);
  const linksResults = {
    Total: totalLinks,
    Unique: uniqueLinks,
  };
  return linksResults;
};

const linksTotalStats = (linksValidated) => { // if validate is true
  const totalLinks = total(linksValidated);
  const uniqueLinks = unique(linksValidated);
  const brokenLinks = broken(linksValidated);
  const linksResults = {
    Total: totalLinks,
    Unique: uniqueLinks,
    Broken: brokenLinks,
  };
  return linksResults;
};

module.exports = {
  linksStats,
  linksTotalStats,
};
