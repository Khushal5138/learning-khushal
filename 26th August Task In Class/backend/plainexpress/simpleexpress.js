const express = require("express");

const app  = express();


console.log("server starting");


let http  = require("http");


app.get("/" , function (request, response) {

    response.writeHead(200 , { "Content-Type" : "text/html" });

    response.end ( `<!Doctype html>
        
        <html>
            <head>
            </head>
            <body>
                <h1>Hello World</h1>
                <p> Its a small world</p>
                <script>
                    function greet() {

                    alert("Good Afternoon");
                    }
                    greet();
                </script>
            </body>
        </html>`);
}).listen(3003);


app.get("/contact" , function (request , response) {

    response.send("Welcome to the contacts page!");
})
console.log("server is listening to port 3003");