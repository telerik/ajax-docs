---
title: Force JAWS to pronounce arbitrary text with JavaScript
description: Force JAWS to pronounce arbitrary text with JavaScript. Check it now!
type: how-to
page_title: Force JAWS to pronounce arbitrary text with JavaScript
slug: common-force-jaws-to-pronounce-artbitrary-text-with-javascript
res_type: kb
---


### HOW TO

Call a JavaScript function and make JAWS read the custom text.

### DESCRIPTION

Sometimes we need to force JAWS to read more text, either for further instructions or workaround a bug in a complex scenario.

### SOLUTION

The Aria-Live region allows the assistive reader technologies, such as JAWS, to read an updated content in a live area region.

- [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA\_Live\_Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions);


For optimal solutions, a visually hidden element with `aria-live` attribute can be added. We will update this element's content and force JAWS to pronounce it. To visually hide the div, we add the `"position: absolute"` and `"left: -9999px"`, because readers ignore elements with `"display: none"` or `"visibility: none"`.

It is advisable to have the panel element in the initial markup with the `aria-live` set from the server, as creating it dynamically might not work with readers in all cases.

The following script checks for the element and adds it programmatically to the `<body>`. You can also check an example how to use the script:

**jaws-reader-script.js**

````JavaScript
;(function (global, undefined) {
    var panelId = "my-jaws-reader-panel-id";
    global.jawsReader = global.jawsReader || {};
     
    function createPanel() {
        var panel = document.createElement("div");
        document.body.append(panel);
 
        panel.setAttribute("aria-live", "assertive");
        //panel.style.position = "absolute";
        //panel.style.left = "-9999px";
        return panel;
    }
 
    function getPanel() {
        var panel = document.getElementById(panelId);
        /* If the <div> element is not visible on page load,
            then the assistive reader technology, such as JAWS,
            might have issues with the aria-live region
            https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
         */
        if (!panel) {
            panel = createPanel();
        }
 
        return panel;
    }
 
    global.jawsReader.read = function read(message, force) {
        var panel = getPanel();
 
        if (force) {
            panel.innerText = "";
        }
 
        setTimeout(function () {
            panel.innerText = message;
        }, 50);
    }
})(window);
````

**Index.html**

````HTML
<div id="my-jaws-reader-panel-id" aria-live="assertive" style="position: absolute; left: -9999px">
</div>
<script src="jaws-reader-script.js"></script>
         
<script>
    function focusHandler() {
        jawsReader.read('It works on input focus.');
    }
 
    function clickHandler() {
        // the second argument will force JAWS to read the message
        // even if the previously read message was the same
        jawsReader.read("It works also on button click.", true)
    }
</script>
 
<input type="text" onfocus="focusHandler();" value="" />
<input type="button" onclick="clickHandler();" onsubmit="clickHandler();" value="click and JAWS will read" />
````

### See Also:

- [https://docs.telerik.com/devtools/aspnet-ajax/controls/wai-aria-support-and-screen-readers]({%slug controls/wai-aria-support-and-screen-readers%})




