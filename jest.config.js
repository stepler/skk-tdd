module.exports = {
    preset: 'ts-jest',
    testURL: 'http://localhost/',
    globals: {
        'ts-jest': {
            tsconfig: {
                esModuleInterop: true,
            },
        },
    },
};
