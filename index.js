
// Define varialbe, insert the http pakcage from node.js
let myhttp = require("http"); 

// access http methods
let myserver = myhttp.createServer(
  function(myrequest, myresponse) {
    console.log( myrequest.url );

    let mytext;
    if ( myrequest.url === "/hey" ) {
      mytext = "Hellllooooo there....";
    } else {
      mytext = "Whaaaa? who are you?"
    }

    mytext = mytext + " - Please help me... I'm trapped in a Node.js Server!"
    
// writeHead() creates an ahttp response header, including status code (200 = OK) and  the content type
    myresponse.writeHead( 200, { "Content-Type": "text/plain"});

    myresponse.end( mytext + "\n");

    // end() returns some data and closes the response (sends it)

    myresponse.end( "Hello Everyone!\n"); 
  }
);


// ask http to start listening on a tcp port for incoming http requests
// listen takes 2 arguments: 1: tcp por number, string of the ip address to listen (0.0.0.0.)
myserver.listen(8080, "0.0.0.0");


console.log("The server has started.");

