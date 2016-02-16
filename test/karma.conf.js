var packageName = require('../package.json').name;

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        // frameworks to use
        frameworks: ['jasmine', 'fixture'],
        
        basePath: '..',

        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-resource/angular-resource.js',
            'test/mocks/**/*',
            'app/*.module.js',
            'app/**/*.module.js',
            'app/**/*.js',
            'app/**/*.html'
        ],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['spec'],

        jsonFixturesPreprocessor: {
            variableName: '__json__'
        },

        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'app/',
            moduleName: packageName + '.test.templates'
        },

        preprocessors: {
            '**/*.html': ['ng-html2js'],
            '**/*.json': ['json_fixtures']
        },

        specReporter : {
            // Windows does not like the unicode characters, so revert to plain ascii
            prefixes: {
                success: '[v] ',
                failure: '[X] ',
                skipped: '[-] '
            }
        },

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
