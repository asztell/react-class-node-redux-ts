const deps = {};

/**
 * Inspect whether a dependency changed its reference
 * @param {string} key
 * @param {function} dep
 * @returns {function[]}
 **/
export function inspect(key, dep) {
  if (!deps[key]) {
    deps[key] = [];
  }
  const len = deps[key].length;
  if (len === 0 || deps[key][len - 1] !== dep) {
    deps[key].push(dep);
  }
  return deps[key];
}
