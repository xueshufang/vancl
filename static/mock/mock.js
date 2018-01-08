
var poslist = require('./mainlist.json')
var goodlisttop = require('./goodlisttop.json')
var goodlistmain = require('./goodlistmain.json')
module.exports = function(){
     return {
         list:poslist,
         goodlisttop:goodlisttop,
         goodlistmain:goodlistmain
     }
}