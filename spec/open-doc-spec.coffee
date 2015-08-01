OpenDoc = require '../lib/open-doc'
exec = require('child_process').exec

describe 'when open-doc is invoked', ->
    it 'opens a browser', ->
        # invoke
        OpenDoc.activate
        # which browser should be running?
        browser = atom.config.get 'open-doc.appName'
        # is it running?
        expect(exec("ps -U #{exec('whoami')}")).toContain browser