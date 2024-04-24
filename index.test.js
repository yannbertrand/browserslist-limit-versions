import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';
import { getBrowserslistLimitVersions } from './index.js';

describe('#getBrowserslistLimitVersions', () => {
  it('should parse browsers and versions', () => {
    deepStrictEqual(getBrowserslistLimitVersions('chrome 120\nfirefox 120\n'), { chrome: '120', firefox: '120' });
    deepStrictEqual(getBrowserslistLimitVersions('firefox 121\nfirefox 120\nfirefox 119'), { firefox: '119' });
    deepStrictEqual(getBrowserslistLimitVersions('ios_saf 17.2\nios_saf 17.1'), { ios_saf: '17.1' });
    deepStrictEqual(getBrowserslistLimitVersions('kaios 3.3-3.4\nkaios 3.2\nkaios 3.0-3.1'), { kaios: '3.0-3.1' });
    deepStrictEqual(getBrowserslistLimitVersions('op_mini all'), { op_mini: 'all' });
  });
});
