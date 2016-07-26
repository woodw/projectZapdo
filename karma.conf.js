module.exports = function(config){
    config.set({
        basePath: './app',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            '**/*.module.js',
            '*!(.module|-test).js',
            '!(bower_components)/**/*!(.module|-test).js',
            '**/*-test.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugin:[
            'karma-chrome-launcher',
            'karma-jasmine'
        ]

    });
}