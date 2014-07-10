var OpenDoc = require('../lib/open-doc');
var exec = require('child_process').exec;

describe('when open-doc is invoked', function() {
    it('opens a browser', function() {
        // invoke
        OpenDoc.activate();
        // which browser should be running?
        var browser = atom.config.get('open-doc.appName');
        // is it running?
        expect(exec('ps -U ' + exec('whoami'))).toContain(browser);
    });
});