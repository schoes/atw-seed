var karmaBaseConf = require('./config/karma.base.conf');
karmaBaseConf.singleRun = true;
module.exports = function (config) {
    config.set(karmaBaseConf);
};