const request = require('request');
const fs = require('fs');
const {BigQuery} = require('@google-cloud/bigquery');
const jsoncsv = require('csvjson-json2csv');
const token = 'e9edd83c409c7961fda26337c19b077f6aa43318'

const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: "e9edd83c409c7961fda26337c19b077f6aa43318" });
octokit.request('GET /rate_limit').then(response => console.log(response.data))

fs.writeFile('C:/Users/yaqin/Documents/GitHub/COMP5117Project/src/test/opt244.json', 'ndJson', function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
      });



// const octokit = new Octokit({ auth: "e9edd83c409c7961fda26337c19b077f6aa43318" });
// octokit.request('GET /repos/{owner}/{repo}/commits/{commit_sha}', {
//     owner:'b3log',
//     repo: 'solo',
//     commit_sha: '8e94cd6e2655a4e1c4efc5a41b700e24bd1f96cf'
//   }).then(response => console.log(response.data)).catch(error=>{console.log(error)});


    // const url = `https://api.github.com/rate_limit`
    // const b = new Buffer.from('yaqingzhu:' + token);
    // const encode = b.toString('base64');

    // const options = {
    //     url: url,
    //     headers: {
    //       'User-Agent': 'request',
    //       'Authorization': 'token ' + token
    //     }
    //   };

    // request(options, function(error, response, body){
    //     const info = JSON.parse(body);
    //     console.log(response.headers);
    //     console.log(body);
    //     //console.log(response);
    //     const files = info.files;
        
        
    // });