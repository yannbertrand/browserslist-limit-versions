import { describe, expect, it } from 'vitest';
import { parseBrowserAndVersion } from './index.js';

describe('#parseBrowserAndVersion', () => {
  it('should return empty values if empty line', () => {
    expect(parseBrowserAndVersion('')).toEqual({ name: undefined, version: undefined });
  });

  it('should parse browser and version', () => {
    expect(parseBrowserAndVersion('firefox 121')).toEqual({ name: 'firefox', version: '121' });
    expect(parseBrowserAndVersion('chrome 120')).toEqual({ name: 'chrome', version: '120' });
    expect(parseBrowserAndVersion('and_chr 120')).toEqual({ name: 'and_chr', version: '120' });
    expect(parseBrowserAndVersion('ios_saf 17.2')).toEqual({ name: 'ios_saf', version: '17.2' });
    expect(parseBrowserAndVersion('kaios 3.0-3.1')).toEqual({ name: 'kaios', version: '3.0-3.1' });
    expect(parseBrowserAndVersion('op_mini all')).toEqual({ name: 'op_mini', version: 'all' });
  });
});
