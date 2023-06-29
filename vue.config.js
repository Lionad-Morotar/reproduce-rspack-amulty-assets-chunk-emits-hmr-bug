const build = require('./.template/build/index')
const buildOpts = build(process.env.NODE_ENV)

module.exports = {
  ...buildOpts,
};
