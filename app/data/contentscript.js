'use strict';

const script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://localhost:3001/dist/index.js";
script.onload = () =>
{
    console.log("Deliveron Client script loaded into DOM from localhost:3001.");
    
    const config = {
        label: "Pick your delivery date:",
        format: "mm/dd/yyyy",
        addPickerToCheckout: false,
        allowChangeFromCheckout: false,
    }

    const client = new DeliverOn.Client(config);

}

document.body.appendChild(script);