const loaderUtils = require('loader-utils');
const path = require('path');

function preparePath(alias, resourcePath, source) {
    for (const aliasName in alias) {
        if (alias.hasOwnProperty(aliasName)) {
            source = source.replace(new RegExp(aliasName, 'g'), path.relative(path.dirname(resourcePath), alias[aliasName]).replace(/\\/g, '\/'))
        }
    }

    return source;
}

module.exports = function(source) {
    const WEBPACK_OPTIONS = loaderUtils.getOptions(this);

    // Replace aliases in source
    const pugString = Object.keys(WEBPACK_OPTIONS.alias).length > 0
        ? preparePath(WEBPACK_OPTIONS.alias, this.resourcePath, source)
        : source;

    return pugString
}
