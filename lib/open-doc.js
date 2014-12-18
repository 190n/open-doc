var exec = require('child_process').exec;
var fs = require('fs');

var defaultBrowser, browser;

try {
    var config = JSON.stringify(fs.readFileSync('~/.atom/packages/open-doc/config.json'));
    defaultBrowser = config.defaultBrowser;
}
catch(e) {
    defaultBrowser = 'Safari.app';
}

if(atom.config.get('open-doc.appName') != defaultBrowser) browser = atom.config.get('open-doc.appName');
else browser = defaultBrowser;

module.exports = {
    activate: function(state) {
        var filename = atom.workspace.getActivePaneItem().buffer.file.path;
        exec('open -a \'' + browser + '\' \'' + filename + '\'');
    },

    configDefaults: {
        appName: defaultBrowser
    }
};