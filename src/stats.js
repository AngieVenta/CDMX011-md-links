// important https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects

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
