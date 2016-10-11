module.exports.tasks = {

    options: {
        mergeJsonDestFileName: 'translations.json',
        mergeJsonDestPath: 'assets/translations',
        mergeJsonDest:  '<%= config.dir.temp %>/<%= options.mergeJsonDestPath %>/<%= options.mergeJsonDestFileName %>'
    },

    watch: {
        translations: {
            // files: [ './src/assets/translations/**/*.json' ],
            files: [ '<%= config.application.translations %>' ],
            tasks: [ 'translations' ]
        }
    },

    'merge-json': {
        translations: {
            src: [
                // './src/assets/translations/**/*.json',
                '<%= config.application.translations %>'
            ],
            dest: '<%= options.mergeJsonDest %>'
        }
    }
};