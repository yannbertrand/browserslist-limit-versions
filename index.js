import { parseBrowserAndVersion } from './browserslist/index.js';

export function getBrowserslistLimitVersions(browserslistTargets) {
  const browserslistLimitVersions = {};
  for (const line of browserslistTargets.split('\n')) {
    const { name, version } = parseBrowserAndVersion(line);
    if (name === undefined && version === undefined) {
      continue;
    }

    if (browserslistLimitVersions[name] === undefined) {
      browserslistLimitVersions[name] = version;
      continue;
    }

    const currentBrowerVersion = browserslistLimitVersions[name];
    if (parseFloat(version) < parseFloat(currentBrowerVersion)) {
      browserslistLimitVersions[name] = version;
    }
  }
  return browserslistLimitVersions;
}
