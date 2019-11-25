const loaderUtils = require('loader-utils');
const path = require('path');

function preparePath(alias, resourcePath, source) {
    for (const aliasName in alias) {
        if (alias.hasOwnProperty(aliasName)) {
            targetPath = path
                .relative(path.dirname(resourcePath), alias[aliasName])
                .replace(/\\/g, '\/')
            source = source.replace(new RegExp(aliasName, 'g'), targetPath)
        }
    }

    return source;
}

module.exports = function(source) {
    const WEBPACK_OPTIONS = loaderUtils.getOptions(this);

    // Replace aliases in source
    if (Object.keys(WEBPACK_OPTIONS.alias).length > 0) {
        source = preparePath(WEBPACK_OPTIONS.alias, this.resourcePath, source)
    }

    return source;
}
