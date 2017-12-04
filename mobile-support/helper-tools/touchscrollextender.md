---
title: TouchScrollExtender
page_title: TouchScrollExtender | UI for ASP.NET AJAX Documentation
description: TouchScrollExtender
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/helper-tools/touchscrollextender
tags: touchscrollextender
published: True
position: 0
---

# TouchScrollExtender

The **TouchScrollExtender** is a small self-sustained client-only control that depends only on core.js and the built-in jQuery in Telerik® UI for ASP.NET AJAX. It should work in all browsers regardless if they are desktop or mobile (except the browsers that lack the needed desktop or touch events - Mobile Operas and IEs). In this release Mobile Firefox 4 is not supported as it is still in beta and supports only the Mozilla type of touch events.

In **Q3 2010** the TouchScrollExtender should be automatically enabled in mobile browsers for the following controls: **RadComboBox**, **RadListBox**, **RadGrid**, **RadToolTip**, **RadWindow**, **RadDock**, **RadSplitter** and **RadXmlHttpPanel**.

In **Q1 2011** TouchScrollExtender support has been added to **RadScheduler**.

When you see it in action, you will notice that the TouchScrollExtender misses the fancy dragging the contents outside of their bounds and the automatic adjustment after you lift your finger which you may see in the native iOS controls. This is a feature we skipped on purpose - it can't be done without adding additional element(s) between the container and the scrollable content - an approach which often introduces more problems than gains.

## Initialization

If you use the TouchScrollExtender separately, you will first need to reference its external libraries using a RadScriptManager, like this:

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.TouchScrollExtender.js" />
    </Scripts>
</telerik:RadScriptManager>
````



TouchScrollExtender can be initialized whenever needed and requires only a target parameter. There's a second optional parameter for additional settings. The simplest initialization looks something like this:

````JavaScript
var touchScroll = false;

if (Telerik.Web.UI.TouchScrollExtender._getNeedsScrollExtender() && !touchScroll)
{
    touchScroll = new Telerik.Web.UI.TouchScrollExtender(element);
    touchScroll.initialize();
}	
````



This example will initialize the element for touch scrolling in all desktop or mobile browsers. The element can be a simple **DOM element**, a **CSS selector(s)** or directly a **jQuery selection**. You can pass a second argument to **Telerik.Web.UI.TouchScrollExtender** - an object with several settings:

* **autoScan** - by default **false**, if you set this option to **true**, the **TouchScrollExtender** will **scan** all elements inside the selected ones and if they have **overflow: scroll** or **auto** - will **add** them to the list of elements to initialize

* **showScrollHints** - by default **true**, this option controls if scroll hints will be **shown while scrolling**

For instance you can add scrolling containers to the body element and all scrolling content automatically in all mobile browsers by using this initialization:

````JavaScript
var touchScroll = false;
function initializeMobile()
{
    if (Telerik.Web.UI.TouchScrollExtender._getNeedsScrollExtender() && !touchScroll)
    {
        touchScroll = new Telerik.Web.UI.TouchScrollExtender('body', { autoScan: true });
        touchScroll.initialize();
    }
}	
````


You can see above that we are checking for mobile browsers using an internal _getNeedsScrollExtender() method that currently only checks if the browser is iOS or Android Mobile Safari and returns true. Further as more mobile browsers appear we can extend this check or alternatively you can override it to your liking by placing something like this directly after your script manager:

````JavaScript
Telerik.Web.UI.TouchScrollExtender._getNeedsScrollExtender = function ()
{
    return $telerik.isMobileSafari || $telerik.isAndroid;
};
````


This is all that is to be said about the TouchScrollExtender. Check the [demo page here](http://demos.telerik.com/scrollextender/ScrollExtender.aspx).
