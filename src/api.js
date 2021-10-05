const path = require('path');
const fs = require('fs');
let mdFiles = [] 

var recur = function(dir) {    
    fs.readdir(dir,function(err,list){
        if (err) return console.error(err)
        list.forEach(function(file){
            const file2 = path.resolve(dir, file);
            fs.stat(file2,function(err,stats){
                if (err) return console.error(err)
                if(stats.isDirectory()) {
                    recur(file2);
                }
                else {
                    if(path.extname(file2) ==='.md' || path.extname(file2.toLowerCase()) ==='.markdown'){
                        mdFiles.push(file2);
                        console.log(mdFiles)
                    }                    
                }
            })
        })
    });       
};




  module.exports = {
    recur
  }
