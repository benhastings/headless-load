/*--------------------------------------------------------

  Usage:
    phantomjs get.js <URL>


---------------------------------------------------------*/

var page = require('webpage').create(),
    system = require('system'),
    address,t;
var dtm = Date.now();
address = system.args[1];

//adjust viewport size for correct loading/rendering
page.viewportSize = {width: 1280, height:1024};

//  Capture start time
t=Date.now();

page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {

//  Capture time and report
        t=Date.now()-t;
        console.log('load time is:'+t+' msec');

//      Render the page with epochtimestamp
//      page.render('test'+dtm+'.png');

    }
    phantom.exit();
});
