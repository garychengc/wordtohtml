const mammoth = require("mammoth");
const fs = require('fs');
// const fileName = "privacy-policy";
const fileName = "Hello";

mammoth
  .convertToHtml({ path: `${fileName}.docx`})
  .then(function (result) {
    // console.log("result--->", result);
    let html = result.value; // The generated HTML
    let messages = result.messages; // Any messages, such as warnings during conversion
    // console.log("html--->", html);
    // console.log("html", html);
    fs.writeFile(`${fileName}.html`, html, err => {
      if (err) throw err;
    })
  })
  .done();


