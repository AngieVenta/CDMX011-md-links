const fs = require('fs');
const marked = require('marked');

// reads the file
const fileContent = (route) => fs.readFileSync(route, 'utf-8');

// gets the links in Md files
const getLinks = (paths) => paths.reduce((acc, path) => {
  const readMd = fileContent(path);
  const renderer = new marked.Renderer(); // understanding Renderer https://dustinpfister.github.io/2017/11/19/nodejs-marked/
  renderer.link = (href, title, text) => {
    if (!href.startsWith('#')) {
      acc.push(
        {
          href: href,
          text: text.substr(0, 50),
          file: path,
        },
      );
    }
  };
  marked(readMd, { renderer });

  return acc;
}, []);

module.exports.getLinks = getLinks;
