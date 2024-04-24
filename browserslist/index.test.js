import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';
import { parseBrowserAndVersion } from './index.js';

describe('#parseBrowserAndVersion', () => {
  it('should return empty values if empty line', () => {
    deepStrictEqual(parseBrowserAndVersion(''), { name: undefined, version: undefined });
  });

  it('should parse browser and version', () => {
    deepStrictEqual(parseBrowserAndVersion('firefox 121'), { name: 'firefox', version: '121' });
    deepStrictEqual(parseBrowserAndVersion('chrome 120'), { name: 'chrome', version: '120' });
    deepStrictEqual(parseBrowserAndVersion('and_chr 120'), { name: 'and_chr', version: '120' });
    deepStrictEqual(parseBrowserAndVersion('ios_saf 17.2'), { name: 'ios_saf', version: '17.2' });
    deepStrictEqual(parseBrowserAndVersion('kaios 3.0-3.1'), { name: 'kaios', version: '3.0-3.1' });
    deepStrictEqual(parseBrowserAndVersion('op_mini all'), { name: 'op_mini', version: 'all' });
  });
});
