const fs = require('fs');
const marked = require('marked');
const cheerio = require('cheerio');

// reads the file
const fileContent = (route) => fs.readFileSync(route,'utf-8');

// gets the links in Md files with cheerio 
const getLinks = (filePath) => {
    let arrayLinks = [];

    filePath.forEach((files) => {
        //reads files
        const readMd = fileContent(files);
        //markdown to HTML
        const mdToHTML = marked(readMd);
        //we load the HTML document
        const readHTML = cheerio.load(mdToHTML);
        //With each(), we can loop over elements.
        readHTML('a').each((i, elem) =>
            arrayLinks.push({ 
                href: readHTML(elem).attr('href'), 
                text: readHTML(elem).text(),
                file: files
            }))
        
    });
    return arrayLinks
}


module.exports = {
    getLinks
  };
