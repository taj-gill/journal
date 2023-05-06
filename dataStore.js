const fs = require("fs");

// Create backup - rewrites any pre-existing backup files named backupData.json
// function saveBackup() {
//   fs.writeFileSync('backupData.json', JSON.stringify(data));
//   return 'Data Saved. Backup Created.';
// }

let fetchData = () => {
  return JSON.parse(fs.readFileSync('backupData.json'));
}

let saveData = () => {
  fs.writeFileSync('backupData.json', JSON.stringify(data));
}

let addData = () => {
  
}