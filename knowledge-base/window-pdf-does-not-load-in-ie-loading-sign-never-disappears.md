---
title: PDF in RadWindow Does not Load in IE, Loading Sign Never Disappears
description: PDF in RadWindow Does not Load in IE, Loading Sign Never Disappears. Check it now!
type: how-to
page_title: PDF in RadWindow Does not Load in IE, Loading Sign Never Disappears
slug: window-pdf-does-not-load-in-ie-loading-sign-never-disappears
res_type: kb
---


## Problem

The spinning loading sign of a RadWindow stays forever when loading a PDF in IE. The PDF is never loaded or shown.

## Description

IE does not raise the onload event of iframes that load PDFs. This is the event RadWindow uses to hide the loading sign and to raise the OnClientPageLoad event.

````
<iframe src="test.pdf" onload="alert(1);"></iframe>
````

Expected: an alert is shown when the PDF loads.

Actual: no alert is shown under IE.

## Solution

You can remove the loading signs for IE, so the users will see the content, even though they will not have a loading animation.

- **for declarative instance**  

 ````ASPX
<telerik:RadWindow runat="server" ID="RadWindow1" RenderMode="Lightweight" NavigateUrl="test.pdf" ShowContentDuringLoad="false" OnClientBeforeShow="showContentForIE" VisibleOnPageLoad="true"></telerik:RadWindow>
<script>
    function showContentForIE(sender, args) {
        var url = sender.get_navigateUrl();//if set declaratively, otherwise, use your business logic to get the URL
        var isPDf = url.indexOf(".pdf") > -1;//will the RadWindow load a PDF or not
        if (Telerik.Web.Browser.ie && isPDf) {
            sender.set_visibleStatusbar(false);//hide the statusbar, it has a loading sign as well
            sender.set_showContentDuringLoad(true);//prevent the large loading sign from appearing at all
            sender.set_title(url);//you can use this to set a custom title as well
        }
    }
</script>
 ````

- **for dynamically opened instance**  

 ````ASPX
<script>
    function showRwWithPdf() {
        var url = "test.pdf";//use your business logic to get the URL, e.g., pass it as an argument
        var isPDf = url.indexOf(".pdf") > -1;//will the RadWindow load a PDF or not
        if (Telerik.Web.Browser.ie && isPDf) {
            var wnd = radopen();
            wnd.set_visibleStatusbar(false);//hide the statusbar, it has a loading sign as well
            wnd.set_showContentDuringLoad(true);//prevent the large loading sign from appearing at all
            wnd.set_title(url);//you can use this to set a custom title as well
            wnd.setUrl(url);
        }
    }
</script>
<telerik:RadWindowManager runat="server" ID="RadWindowManager1" ShowContentDuringLoad="false" RenderMode="Lightweight"></telerik:RadWindowManager>
<asp:Button ID="Button1" Text="show RW" OnClientClick="showRwWithPdf(); return false;" runat="server" />
 ````

