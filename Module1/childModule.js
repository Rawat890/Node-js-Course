//child process is a node module to create sub processes within the script
//We can perform different tasks with script

const { execSync } = require('child_process'); //synchronous but non-blocking

execSync('open -a Calculator &');
execSync('open -a Safari &');
execSync('open -a "System Preferences" &');
execSync('open -a Terminal &');
execSync('open -a "TextEdit" &');
execSync('open -a "Google Chrome" &');

execSync('say "Hello, world"');                    // macOS text-to-speech
execSync('screencapture ~/Desktop/screenshot.jpg'); // Take a screenshot
execSync('pmset -g batt');                         // Battery status

console.log(execSync('ifconfig').toString());       // Network interfaces
console.log(execSync('ping -c 3 google.com').toString()); // Ping test
console.log(execSync('curl https://example.com').toString()); // Fetch webpage


console.log(execSync('whoami').toString());         // Current user
console.log(execSync('uname -a').toString());       // System info
console.log(execSync('uptime').toString());         // System uptime
console.log(execSync('df -h').toString());          // Disk usage
console.log(execSync('top -l 1 | head -n 10').toString()); // CPU & memory usage

execSync('open ~/Documents');            // Opens the Documents folder
execSync('open .');                      // Opens the current directory in Finder
execSync('open /Applications');          // Opens Applications folder
execSync('open /path/to/your/file.txt'); // Opens specific file in default app



const { exec } = require('child_process'); //asynchronous

exec('open -a Calculator');
exec('open -a Safari');
exec('open -a "System Preferences"');
exec('open -a Terminal');
exec('open -a "TextEdit"');
exec('open -a "Google Chrome"');