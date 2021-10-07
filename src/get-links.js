const fs = require('fs');
const marked = require('marked');
const cheerio = require('cheerio');

// reads the file
const fileContent = (route) => fs.readFileSync(route,'utf-8');

// gets the links in Md files with cheerio 
const getLinks = (filePath) => {
    let arrayLinks = [];

    filePath.forEach((files) => {
        const readMd = fileContent(files);
        const mdToHTML = marked(readMd);
        const readHTML = cheerio.load(mdToHTML);
        readHTML('a').map((elem, i) =>
            arrayLinks.push({ 
                href: readHTML(i).attr('href'), 
                text: readHTML(i).text(),
                file: files
            }))
        
    });
    return arrayLinks
}


module.exports = {
    getLinks
  };
