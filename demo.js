import { getBrowserslistLimitVersions } from './index.js';

const browserslistSample = `and_chr 119
and_ff 119
and_qq 13.1
and_uc 15.5
android 119
chrome 119
chrome 118
chrome 117
chrome 116
chrome 114
chrome 109
edge 119
edge 118
edge 117
firefox 120
firefox 119
firefox 118
firefox 115
ios_saf 17.1
ios_saf 17.0
ios_saf 16.6-16.7
ios_saf 16.3
ios_saf 16.1
ios_saf 15.6-15.7
kaios 3.0-3.1
kaios 2.5
op_mini all
op_mob 73
opera 104
opera 103
opera 102
safari 17.1
safari 17.0
safari 16.6
safari 15.6
samsung 23
samsung 22
`;

console.log(getBrowserslistLimitVersions(browserslistSample));
