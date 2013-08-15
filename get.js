/*--------------------------------------------------------

  Usage:
    phantomjs get.js <URL>


---------------------------------------------------------*/

var page = require('webpage').create(),
    system = require('system'),
 // read in list of piis
    fs = require('fs'),
    filedata = fs.read('piis3k.csv'),
    piis = filedata.split('\n'),
 // variable for address & timestamp
    baseAddress,pii,t;
var dtm = Date.now();

// read URL from commandline
baseAddress = system.args[1];
pii = system.args[2];

address='http://'+baseAddress+'/science/article/pii/'+pii;
//console.log(address);
//adjust viewport size for correct loading/rendering
page.viewportSize = {width: 1280, height:1024};

  t=Date.now();

  page.open(address, function (status) {
      if (status !== 'success') {
          console.log('Unable to access network');
      } else {
          t=Date.now()-t;
          console.log(t+' pii:'+pii);

  //  Render the page with epochtimestamp
  //    page.render('test'+dtm+'.png');

      }
      phantom.exit();
  });//end page.open
