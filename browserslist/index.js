export function parseBrowserAndVersion(browserslistTarget) {
  if (browserslistTarget.length === 0) {
    return { name: undefined, version: undefined };
  }

  const [name, version] = browserslistTarget.split(' ');
  return { name, version };
}
