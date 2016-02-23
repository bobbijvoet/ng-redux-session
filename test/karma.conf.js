var packageName = require('../package.json').name;

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        // frameworks to use
        frameworks: ['jasmine', 'systemjs'],

        basePath: '..',

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'app/**/*.ts'
        ],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'

        jsonFixturesPreprocessor: {
            variableName: '__json__'
        },

        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'app/',
            moduleName: packageName + '.test.templates'
        },
        preprocessors: {
            '**/*.ts': ['typescript']
        },

        //plugins: ['karma-systemjs'],

        typescriptPreprocessor: {
            // options passed to the typescript compiler
            options: {
                sourceMap: false, // (optional) Generates corresponding .map file.
                target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
                module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd'
                noImplicitAny: false, // (optional) Warn on expressions and declarations with an implied 'any' type.
                noResolve: true, // (optional) Skip resolution and preprocessing.
                removeComments: true, // (optional) Do not emit comments to output.
                concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
            },
            // extra typing definitions to pass to the compiler (globs allowed)
            typings: [
                'typings/tsd.d.ts'
            ],
            // transforming the filenames
            transformPath: function(path) {
                return path.replace(/\.ts$/, '.js');
            }
        },
        systemjs: {
            // Path to your SystemJS configuration file
            configFile: 'system.conf.js',

            // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
            serveFiles: [
                'app/**/*.js'
            ],

            // SystemJS configuration specifically for tests, added after your config file.
            // Good for adding test libraries and mock modules
            config: {
                paths: {
                    'angular-mocks': 'bower_components/angular-mocks/angular-mocks.js'
                }
            }
        },
        specReporter: {
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
