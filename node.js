const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // serve index.html

app.post('/submit', (req, res) => {
  const { Name, email, message } = req.body;
  const number = req.body["number"];

  const output = `
New Message:
Name: ${Name}
Mobile: ${number}
Email: ${email}
Message: ${message}
-----------------------------\n`;

  console.log(output); // log to console

  // Optional: save to a file
  fs.appendFile('messages.txt', output, err => {
    if (err) throw err;
  });

  res.send('<h2>Message sent successfully!</h2><a href="/">Back</a>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
