'use strict';

const script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://localhost:3001/dist/index.js";
script.onload = () =>
{
    console.log("Deliveron Client script loaded into DOM from localhost:3001 via ff-script-loader v0.1.2.");
}

document.body.appendChild(script);