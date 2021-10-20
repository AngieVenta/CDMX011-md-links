/* eslint-env jest */

const { getsMdFiles, validPath } = require('../src/get-md');
const { getLinks } = require('../src/get-links');
const { validateLinks } = require('../src/validate-links');
const { linksStats, linksTotalStats } = require('../src/stats');
const {
  mdFiles, mdLinks, linkValidT, linkBroken, mdLinksValid, linkValidResult,
  linkBrokenResult, linksStatsResults, linksTotalStatsRes,
} = require('./mocks');

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
  it('should return the HTTP status code of the link (then of promise)', () => validateLinks(linkValidT).then((res) => {
    expect(res).toStrictEqual(linkValidResult);
  }));
  it('should return the HTTP status code of the broken link (catch error of promise)', () => validateLinks(linkBroken).catch((err) => {
    expect(err).toStrictEqual(linkBrokenResult);
  }));
});

describe('Gets basic statistics about the links', () => {
  it('should be a function', () => {
    expect(typeof linksStats).toBe('function');
  });
  it('should return the Total and Unique Links', () => {
    expect(linksStats(mdLinks)).toStrictEqual(linksStatsResults);
  });
});

describe('Function that gets the statistics about the links validated (Broken added)', () => {
  it('should be a function', () => {
    expect(typeof linksTotalStats).toBe('function');
  });
  it('should return the Total, Unique and Broken Links', () => {
    expect(linksTotalStats(mdLinksValid)).toStrictEqual(linksTotalStatsRes);
  });
});
