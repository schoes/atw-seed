var karmaBaseConf = require('./config/karma.base.config');
karmaBaseConf.singleRun = true;
karmaBaseConf.browsers = ['PhantomJS'];
module.exports = function (config) {
    config.set(karmaBaseConf);
};