const express = require("express");
const os = require("os");
const fs = require("fs");

const app = express();
const cpu = JSON.stringify(os.cpus());

app.get("/", (req, res) => {
  res.send(
    `<div><p>Platform: ${os.platform()}</p><p>Architecture: ${os.arch()}</p><p>CPU: ${cpu}</p><p>Load: ${os.loadavg()}</p><p>Ram: ${os.freemem()}</p></div>`
  );
  next();
});

// app.get("/fs", (req, res) => {
//   res.send(`<div>${fs.writeFile("sample.txt", "sample text")}</div>`);
// });

fs.writeFileSync("sample.txt", "sample text");

//Error happened. Cannot access to fs.access

// fs.access("sample.txt", "utf8", function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });

app.listen(3000);
