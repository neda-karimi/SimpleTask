module.exports = function graphqlLoader(source) {
  const minifiedSource = source.replace(/\s+/gim, " ").trim();

  const json = JSON.stringify(minifiedSource)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  return `module.exports = ${json}`;
};
