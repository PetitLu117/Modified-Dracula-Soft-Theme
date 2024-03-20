// generateAndLint.js
const generate = require('./generate');
const build = require('./build');
const lint = require('./lint');

(async () => {
    try {
        // Generate theme's data
        const { base, soft } = await generate();

        // Write data in the json files
        await build();

        // Execute verification to detect deprecated or missing keys
        await lint();

        console.log('Generation succeded.');
    } catch (error) {
        console.error('Error :', error);
    }
})();
