import os from "os";

console.info(os.platform()); // 'darwin', 'linux', 'win32', etc.
console.info(os.arch()); // 'x64', 'arm64', etc.
console.info(os.freemem()); // Free memory in bytes
console.info(os.totalmem()); // Total memory in bytes
console.info(os.homedir()); // Home directory path
console.info(os.hostname()); // Hostname of the operating system

console.table(os.cpus()); // CPU information
console.table(os.networkInterfaces()); // Network interfaces information
console.table(os.userInfo()); // User information