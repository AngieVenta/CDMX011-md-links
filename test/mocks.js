const mdFiles = [
  'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\carpetita\\minitest.mdown',
  'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
  'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',
];

const mdLinks = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
  },
  {
    href: 'https://www.google.com/teapot',
    text: 'Tea',
    file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',
  },
  {
    href: 'https://developer.mozilla.org/en-US/404',
    text: '404 error',
    file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',
  },
];

const linkValidT = {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
};

const linkValidResult = {
  file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
  href: 'https://es.wikipedia.org/wiki/Markdown',
  message: 'OK',
  status: 200,
  text: 'Markdown',
};

const linkBroken = {
  href: 'https://www.google.com/teapot',
  text: 'Tea',
  file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
};

const linkBrokenResult = {
  file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
  href: 'https://www.google.com/teapot',
  message: 'FAIL',
  status: 418,
  text: 'Tea',
};

const mdLinksValid = [
  {
    file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
    href: 'https://es.wikipedia.org/wiki/Markdown',
    message: 'OK',
    status: 200,
    text: 'Markdown',
  },
  {
    file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
    href: 'https://www.google.com/teapot',
    message: 'FAIL',
    status: 418,
    text: 'Tea',
  },
  {
    file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
    href: 'https://es.wikipedia.org/wiki/Markdown',
    message: 'OK',
    status: 200,
    text: 'Markdown',
  },
  {
    file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba.MARKDOWN',
    href: 'https://developer.mozilla.org/en-US/404',
    message: 'FAIL',
    status: 404,
    text: '404 error',
  },
];

const linksStatsResults = {
  Total: 4,
  Unique: 3,
};

const linksTotalStatsRes = {
  Total: 4,
  Unique: 3,
  Broken: 2,
};

module.exports = {
  mdFiles,
  mdLinks,
  linkValidT,
  linkBroken,
  mdLinksValid,
  linkValidResult,
  linkBrokenResult,
  linksStatsResults,
  linksTotalStatsRes,
};
