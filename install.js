if (require('os').platform() !== 'win32') {
    var exec = require("child_process").exec;
    var gyp = exec("node-gyp rebuild", { cwd: __dirname });
    gyp.stdout.on('data', function(data) {
        process.stdout.write(data);
    });
    gyp.stderr.on('data', function(data) {
        process.stdout.write(data);
    });
}
