/* eslint-env jest */
const axios = require('axios');
const { getsMdFiles, validPath } = require('../src/get-md');
const { getLinks } = require('../src/get-links');
const { validateLinks } = require('../src/validate-links');
const { linksStats, linksTotalStats } = require('../src/stats');
const {
  mdFiles, mdLinksMock, linkValidT, linkValidResult, mdLinksValid,
  linksStatsResults, linksTotalStatsRes, linkBroken, linkBrokenResult,
  /* linkErrorRequest, linkError, */
} = require('./mocks');

jest.mock('axios');

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
    expect(getLinks(mdFiles)).toStrictEqual(mdLinksMock);
  });
});

describe('Validates the links in md/markdown files', () => {
  it('should be a function', () => {
    expect(typeof validateLinks).toBe('function');
  });
  test('should return the HTTP status code of the link (then of promise)', async () => {
    const resp = { status: 200, statusText: 'OK' };
    axios.get.mockImplementation(() => Promise.resolve(resp));
    await expect(validateLinks(linkValidT)).resolves.toEqual(linkValidResult);
    expect(axios.get).toHaveBeenCalledWith('https://es.wikipedia.org/wiki/Markdown');
  });
  test('should return the HTTP status code of the broken link (catch error.response of promise)', async () => {
    const resp = { status: 418, statusText: 'FAIL' };
    axios.get.mockImplementation(() => Promise.resolve(resp));
    await validateLinks(linkBroken).catch((data) => expect(data).toEqual(linkBrokenResult));
    expect(axios.get).toHaveBeenCalled();
  });
  /* test('should catch error.request of promise', () => {
    const resp = { status: 'FAIL RESPONSE', statusText: 'FAIL' };
    axios.get.mockImplementation(() => Promise.reject(resp));
    return validateLinks(linkError).catch((data) => expect(data).toEqual(linkErrorRequest));
  }); */
  /* it('should return the HTTP status code of the link (then of promise)', () => validateLinks(linkValidT).then((res) => {
    expect(res).toStrictEqual(linkValidResult);
  }));
  it('should return the HTTP status code of the broken link (catch error of promise)', () => validateLinks(linkBroken).catch((err) => {
    expect(err).toStrictEqual(linkBrokenResult);
  })); */
});

describe('Gets basic statistics about the links', () => {
  it('should be a function', () => {
    expect(typeof linksStats).toBe('function');
  });
  it('should return the Total and Unique Links', () => {
    expect(linksStats(mdLinksMock)).toStrictEqual(linksStatsResults);
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
