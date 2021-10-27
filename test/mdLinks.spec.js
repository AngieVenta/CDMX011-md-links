/* eslint-env jest */
const { mdLinks } = require('../src/index');
const {
  mdLinksMock, mdLinksValid, linksStatsResults, linksTotalStatsRes,
} = require('./mocks');

describe('Md links function with options validate and stats.', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should return the links founded (validate: false, stats: false', () => {
    mdLinks('../CDMX011-md-links/src', { validate: false, stats: false }).then((res) => {
      expect(res).toStrictEqual(mdLinksMock);
    });
  });
  it('should return the links validated (validate: true, stats: false', () => {
    mdLinks('../CDMX011-md-links/src', { validate: true, stats: false }).then((res) => {
      expect(res).toStrictEqual(mdLinksValid);
    });
  });
  it('should return basic statistics about the links (validate: true, stats: false', () => {
    mdLinks('../CDMX011-md-links/src', { validate: false, stats: true }).then((res) => {
      expect(res).toStrictEqual(linksStatsResults);
    });
  });
  it('should return statistics about the links validated (validate: true, stats: true', () => {
    mdLinks('../CDMX011-md-links/src', { validate: true, stats: true }).then((res) => {
      expect(res).toStrictEqual(linksTotalStatsRes);
    });
  });
  it('should return error because the path does not exist ', () => {
    mdLinks('../CDMX011-md-links/prueba', { validate: true, stats: true }).catch((res) => {
      expect(res).toEqual(Error('The path does not exists, try again'));
    });
  });
});
