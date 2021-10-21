---
title: Full Screen Mode
description: Full Screen Mode - RadSpreadSheet
type: how-to
page_title: Full Screen Mode
slug: full-screen-mode
res_type: kb
---


## DESCRIPTION

Put RadSpreadsheet in full screen mode so it occupies the entire monitor.

You need to activate the full screen mode that is provided by the browser for DOM elements: [https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen\_API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).

## SOLUTION

At the time of writing, you need to call the appropriate vendor-specific method of the DOM element and style it accordingly. Here is an example:

````CSS
/*A CSS rule to stretch the element to take the entire screen is needed in some browsers*/
.RadSpreadsheet:-webkit-full-screen {
    /*the !important modifier is to override the inline rules that elements
    in WebForms tend to get when their Width and/or Height properties are set*/
    width: 100% !important;
    height: 100% !important;
}
````

````XML
<asp:Button Text="Put the Spreadsheet in Full Screen" ID="btn1" OnClientClick="moveSpreadSheetToFullscreen(); return false;" runat="server" />

<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1" Width="400px" Height="300px"></telerik:RadSpreadsheet>
````

````JavaScript
function moveSpreadSheetToFullscreen() {
    //the reference is to the DOM element, not to a Telerik control
    var elem = document.getElementById("<%=RadSpreadsheet1.ClientID%>");
    //see more on the API, handling events and knowing when the full screen is  not allowed in the FullScreen API article https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
    //note: the support for full screen depends on the browsers and is not supported by Telerik
    //the Telerik API used in this example is only used for browser detection that is necessary
    //at the time of writing to call the correponding non-standards method, and this may change in the future
    //more on the Telerik browser detection API is available in the following article:
    //https://docs.telerik.com/devtools/aspnet-ajax/mobile-support/helper-tools/browser-detection-api
    var fName = null;
    if (Telerik.Web.Browser.chrome || Telerik.Web.Browser.edge || Telerik.Web.Browser.opera || Telerik.Web.Browser.safari) {
        fName = "webkitRequestFullscreen";
    }
    if (Telerik.Web.Browser.ff) {
        fName = "mozRequestFullScreen";
    }
    if (Telerik.Web.Browser.ie && Telerik.Web.Browser.documentMode >= 11) {
        fName = "msRequestFullscreen";
    }
    if (!fName) {
        console.log("your browser does not support full screen mode");
    } else {
        if (elem[fName] && typeof elem[fName] === "function") {
            console.log("going into full screen mode");
            elem[fName]();
        }
    }
}
````

#### NOTE

The support for full screen depends on the browsers and is not supported by Telerik. The Telerik API used in this example is only used for [browser detection](https://docs.telerik.com/devtools/aspnet-ajax/mobile-support/helper-tools/browser-detection-api), and the need for this may change in the future.
 
 