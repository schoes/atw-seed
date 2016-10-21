var karmaBaseConf = require('./config/karma.base.conf');
karmaBaseConf.singleRun = true;
karmaBaseConf.browsers = ['PhantomJS'];
module.exports = function (config) {
    config.set(karmaBaseConf);
};