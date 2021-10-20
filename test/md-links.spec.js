/* eslint-env jest */

const { getsMdFiles, validPath } = require('../src/get-md');
const { getLinks } = require('../src/get-links');
const { validateLinks } = require('../src/validate-links');
const { linksStats, linksTotalStats } = require('../src/stats');

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

const linkBroken = {
  href: 'https://www.google.com/teapot',
  text: 'Tea',
  file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
};

describe('Returns true if the path exists, false otherwise.', () => {
  it('should be a function', () => {
    expect(typeof validPath).toBe('function');
  });
  it('should return true if the path exist', () => {
    expect(validPath('../CDMX011-md-links/README.md')).toBe(true);
  });
  it('should return false if the path does not exist', () => {
    expect(validPath('../CDMX011-md-links/index.md')).toBe(false);
  });
});

describe('Returns the md/markdown files in the directory', () => {
  it('should be a function', () => {
    expect(typeof getsMdFiles).toBe('function');
  });
  it('should return the path of the md/markdown files in the directory', () => {
    expect(getsMdFiles('../CDMX011-md-links/src')).toStrictEqual(mdFiles);
  });
});

describe('Returns the links in md/markdown files', () => {
  it('should be a function', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('should return the links of the md/mardown files in the directory', () => {
    expect(getLinks(mdFiles)).toStrictEqual(mdLinks);
  });
});

describe('Validates the links in md/markdown files', () => {
  it('should be a function', () => {
    expect(typeof validateLinks).toBe('function');
  });
  it('should return the HTTP status code of the link (then of promise)', () => {
    const linkResult = {
      file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
      href: 'https://es.wikipedia.org/wiki/Markdown',
      message: 'OK',
      status: 200,
      text: 'Markdown',
    };
    return validateLinks(linkValidT).then((res) => {
      expect(res).toStrictEqual(linkResult);
    });
  });
  it('should return the HTTP status code of the broken link (catch error of promise)', () => {
    const linkResult = {
      file: 'C:\\Users\\Part\\cmder\\CDMX011-md-links\\src\\prueba\\testing.markdown',
      href: 'https://www.google.com/teapot',
      message: 'FAIL',
      status: 418,
      text: 'Tea',
    };
    return validateLinks(linkBroken).catch((err) => {
      expect(err).toStrictEqual(linkResult);
    });
  });
});

describe('Gets basic statistics about the links', () => {
  it('should be a function', () => {
    expect(typeof linksStats).toBe('function');
  });
});

describe('Function that gets the statistics about the links validated (Broken added)', () => {
  it('should be a function', () => {
    expect(typeof linksTotalStats).toBe('function');
  });
});
