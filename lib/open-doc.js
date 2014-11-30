var exec = require('child_process').exec;
var fs = require('fs');

var defaultBrowser;

try {
    var config = JSON.stringify(fs.readFileSync('./config.json'));
    defaultBrowser = config.defaultBrowser;
}
catch(e) {
    defaultBrowser = 'Safari.app';
}

module.exports = {
    activate: function(state) {
        var filename = atom.workspace.getActivePaneItem().buffer.file.path;
        exec('open -a \'' + atom.config.get('open-doc.appName') + '\' \'' + filename + '\'');
    },

    configDefaults: {
        appName: defaultBrowser
    }
};