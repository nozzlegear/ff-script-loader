#ff-script-loader

This is a small Firefox extension that will load a script into the DOM of your current web page after clicking the extension button. 

Currently this extension is hardcoded to load the [Deliveron Client](https://github.com/nozzlegear/deliver-on-client) into the DOM for development testing. The extension may be expanded in the future to support dynamic script URLs.

To use this extension, download Firefox Developer Edition and do the following:

- Type about:config into the URL bar in Firefox
- In the Search box type xpinstall.signatures.required
- Double-click the preference, or right-click and selected "Toggle", to set it to false.

Then install the extension by doing the following:

- Navigate to about:addons
- Drag-and-drop the `.xpi` file in `dist` onto the page, or open the gear menu and choose "Install Add-On From File..."
- Click "Install" in the dialog that appears

When testing Deliveron Client, this extension will try to load the script from `https://localhost:3001`. Make sure the Deliveron Client server is running with `gulp watch`, and make sure Firefox has accepted the fake security certificate for `https://localhost:3001`.