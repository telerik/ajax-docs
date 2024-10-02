---
title: Printing the contents of a RadWindow
description: Printing the contents of a RadWindow. Check it now!
type: how-to
page_title: Printing the contents of a RadWindow
slug: window-printing-content
res_type: kb
---

## DESCRIPTION 
RadWindow does not offer built-in printing functionality as regular browser popups do. There is also a difference whether an external page is loaded via the `NavigateUrl` or the `ContentTemplate` is used, as browser popups only load entire pages.  
   

## SOLUTION 
You ultimately need to rely on the `print()` command that the document and window objects provide. 

>note We cannot control the way this works, after `print()` is called the behavior is entirely controlled by the browser and the user machine's settings.  
>

There is also a difference how an external page and the `ContentTemplate` are handled.  
   
The external page creates an iframe, which also has its own document and window objects and you can use them directly to print the entire page from within this page by using the following JavaScript function:  
 
````JavaScript
if (document.all)
{
    document.execCommand("Print");
}
else
{
    window.print();
}
````
   
When the `ContentTemplate` is used the RadWindow's contents are part of the main page and we should not use its `print()` method directly, as this would print the entire page. We first need to take the contents of the RadWindow and then we can place them in a new browser popup, or a hidden iframe which provide the needed document and window objects:  
 
````ASP.NET
<telerik:RadWindow runat="server" ID="RadWindow1">
    <ContentTemplate>
        <div id="contentHolder">
             . . . . . .
        </div>
        <asp:Button ID="btn" runat="server" OnClientClick="PrintContent();return false;"
            Text="Print" />
    </ContentTemplate>
</telerik:RadWindow>
````

This is easiest done by wrapping the contents in a simple div so you can obtain its `innerHTML` and place it in a popup:   

````JavaScript
var content = $get("contentHolder").innerHTML;
var pwin = window.open('', 'print_content', 'width=300,height=300');
pwin.document.open();
pwin.document.write('<html><body onload="window.print()">' + content + '</body></html>');
pwin.document.close();
setTimeout(function () { pwin.close(); }, 1000);
````
   
or use a predefined, hidden iframe on the page to avoid the popup:  
 
````HTML
<iframe id="ifmcontentstoprint" style="position: absolute; top: -1000px; left: -1000px;"></iframe>
```` 

then you combine both approaches from below to provide the content and call its `print()` method:  
 
````JavaScript
var content = $get("contentHolder").innerHTML;
 
var printIframe = $get("ifmcontentstoprint");
var printDocument = printIframe.contentWindow.document;
printDocument.designMode = "on";
printDocument.open();
printDocument.write("<html><head></head><body>" + content + "</body></html>");
printDocument.close();
try
{
    if (document.all)
    {
        printDocument.execCommand("Print", null, false);
    }
    else
    {
        printIframe.contentWindow.print();
    }
 
}
catch (ex)
{
    alert("error printing");
}
````
 
   
 You may find useful [this KB article]({%slug window-adding-a-custom-button-to-radwindow-titlebar %}) on adding a custom button to the titlebar where you can attach the printing functionality. When working with external pages you would also need to call a function from the external page if you use a toolbar button, as its event is fired in the parent page. How to do this is explained in [this help article]({%slug window/how-to/calling-functions-in-windows %}).  
   
 There is also a set of simple pages attached that shows this functionality in action:
* [custom-button-radwindow-after-q1-2016](files/custom-button-radwindow-after-q1-2016.zip)
  
* [custom-button-radwindow-after-q1-2016-xhtml-10-transitional](files/window-custom-button-radwindow-after-q1-2016-xhtml-10-transitional.zip)
  
* [custom-button-radwindow](files/custom-button-radwindow.zip)



   
   
   
   


