System.config({
    baseURL: '/app',

    transpiler: 'typescript',

    map: {
        'ts': '/../node_modules/plugin-typescript/lib/plugin.js',
        'typescript': '/../node_modules/typescript/lib/typescript.js',
        'text': '/../node_modules/system-text/text.js',
        'angular': '/../node_modules/angular/angular.js',
        'angular-resource': '/../node_modules/angular-resource/angular-resource.js',
        'ng-redux': '/../node_modules/ng-redux/dist/ng-redux.js',
        'sinon': '/../node_modules/sinon/pkg/sinon-1.17.3.js',
        'redux': '/../node_modules/redux/dist/redux.js'
    }
});
