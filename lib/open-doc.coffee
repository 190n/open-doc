exec = require('child_process').exec

module.exports =
    activate: (state) ->
        filename = atom.workspace.getActivePaneItem?.buffer.file.path
        exec "open -a #{atom.config.get('open-doc.appName')}' '#{filename}'"

    configDefaults:
        appName: 'Safari.app'