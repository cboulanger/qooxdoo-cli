exports.command = "contrib <command> [options]";
exports.desc = "manages qooxdoo contrib libraries";
exports.builder = function (yargs) {
  return yargs
    .commandDir('contrib_commands')
    .option('a', {
        alias: 'all',
        describe: 'disable filters (for example, also show incompatible versions)'
    })
   .option('r', {
        alias: 'release',
        describe: 'use a specific release tag instead of the tag of the latest compatible release'
    })
    .option('t', {
        alias: 'token',
        describe: 'adds a GitHub personal access token to calls to GitHub'
    })
    .option('f', {
        alias: 'file',
        describe: 'output result to a file'
    })       
    .option('v', {
        alias: 'verbose',
        describe: 'verbose logging'
    })
    .option('q', {
        alias: 'quiet',
        describe: 'no output'
    })       
    .demandCommand()
    .showHelpOnFail()
}
exports.handler = function (argv) {}