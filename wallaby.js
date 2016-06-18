
module.exports = function (wallaby) {

    var wallabify = require("wallabify");
    var wallabyPostprocessor = wallabify({
        entryPatterns: [
            "test/**/*.js"
        ]
    });

    return {
        files : [
            { pattern: 'src/**/*.ts', load: false },
            { pattern: 'src/**/*.tsx', load: false }
        ],
        tests: [
            { pattern: 'test/**/*.ts', load: false }
        ],

        env: {
            type: 'node'
        },
        testFramework: 'mocha',
        compilers: {

            '**/*.ts': w.compilers.typeScript({
                module: 1,
            })

            // 2 is for AMD, 1 for CommonJs
            // see the full list in `export const enum ModuleKind`
            // in https://github.com/Microsoft/TypeScript/blob/master/src/compiler/types.ts
        },
        postprocessor: wallabyPostprocessor,
        setup: function () {
            window.__moduleBundler.loadTests();
        }
    };
};