const args = process.argv.slice(2); 
const request = require('request'); //http request
const fs = require('fs') //write to a file in local filesystem

request(args[0], (error, response, body) => {
fs.writeFile(args[1], body, (error) => {
  if (error) {
   console.log("failed to write to localPaths", args[1])
 } else {
   console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
 }
})
})




