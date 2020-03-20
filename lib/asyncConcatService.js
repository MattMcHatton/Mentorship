function concat(a, b, c) {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve(`${a} ${b}`));
  });
}

module.exports = {
  concat
};