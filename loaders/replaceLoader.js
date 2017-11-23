const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this)
    let result = source;
    console.log("\x1b[36m%s\x1b[0m", `replaceLoader excuted!, source = ${source}, options: ${JSON.stringify(options)}`)
    Object.entries(options).forEach(item => {
        result = result.replace(item[0], item[1]);
    })
    return result
}