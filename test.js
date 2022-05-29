const convert = require('./amrConver');

(async () => {
    await convert('./1.amr', './', '1_0');
    await convert('./2.amr', './', '2_0');
})();
