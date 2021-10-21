---
title: RadEditor in Full Screen Mode is Hidden Behind other Elements
description: See how to fix problems when the RadEditor is put in Full Screen mode.
type: how-to
page_title: RadEditor in Full Screen Mode is Hidden Behind other Elements
slug: editor-in-full-screen-mode-is-hidden-behind-other-elements
res_type: kb
---

## Description

Sometimes, when you put the RadEditor for ASP.NET AJAX control in Full Screen Mode, you will experience issues similar to the following:

* you do not see the toolbar or parts of it
* you do not see the entire content area
* you do not see the modules or any other part of the control

Such issues stem from HTML elements in the page that have some special positioning (e.g., position: absolute) and a z-index set. For example, the following mockup of a header menu will partially hide the editor's toolbar:

````HTML
<div style="position: absolute; z-index: 12345; background-color: yellow;">A header menu</div>
<div style="position: absolute; left: 100px; top: 100px;">
    <telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
</div>
````

## Solution

To fix that, you need to provide similar special positioning and a proper z-index to the RadEditor control.

For Telerik UI for ASP.NET AJAX Q2 2015 and later, add the following CSS rule:

````CSS
/* Q2 2015 and later */
.reFullScreen
{
    position: absolute;
    z-index: 987654; /* set the value required by your concrete layout and case */
}
````

For Telerik UI for ASP.NET AJAX prior to Q2 2015, you need to add a CSS class that distinguishes the full screen mode with a few lines of JavaScript. For example:

````CSS
/* Prior to Q2 2015 */
.fullScreenEditorZIndex
{
    position: absolute;
    z-index: 987654; /* set the value required by your concrete layout and case */
}
````

where this class is added with some scripts:

````ASP.NET
<div style="position: absolute; z-index: 12345; background-color: yellow;">A header menu</div>
<div style="position: absolute; left: 100px; top: 100px;">
    <telerik:RadEditor ID="RadEditor1" runat="server" OnClientCommandExecuted="OnClientCommandExecuted"></telerik:RadEditor>
</div>
<script>
    function OnClientCommandExecuted(sender, args) {
        if (args.get_commandName() == "ToggleScreenMode") {
            //Only needed for versions prior to Q2 2015
            $telerik.$(sender.get_element()).toggleClass("fullScreenEditorZIndex");
        }
    }
</script>
````

 