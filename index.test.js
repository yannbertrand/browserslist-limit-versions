import { describe, expect, it } from 'vitest';
import { getBrowserslistLimitVersions } from './index.js';

describe('#getBrowserslistLimitVersions', () => {
  it('should parse browsers and versions', () => {
    expect(getBrowserslistLimitVersions('chrome 120\nfirefox 120\n')).toEqual({ chrome: '120', firefox: '120' });
    expect(getBrowserslistLimitVersions('firefox 121\nfirefox 120\nfirefox 119')).toEqual({ firefox: '119' });
    expect(getBrowserslistLimitVersions('ios_saf 17.2\nios_saf 17.1')).toEqual({ ios_saf: '17.1' });
    expect(getBrowserslistLimitVersions('kaios 3.3-3.4\nkaios 3.2\nkaios 3.0-3.1')).toEqual({ kaios: '3.0-3.1' });
    expect(getBrowserslistLimitVersions('op_mini all')).toEqual({ op_mini: 'all' });
  });
});
