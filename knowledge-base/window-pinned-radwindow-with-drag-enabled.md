---
title: Pinned RadWindow with Drag Enabled
description: Pinned RadWindow with Drag Enabled. Check it now!
type: how-to
page_title: Pinned RadWindow with Drag Enabled
slug: window-pinned-radwindow-with-drag-enabled
res_type: kb
---


## PROBLEM

How to have a RadWindow that is pinned but also allows the end user to drag it.

## DESCRIPTION

RadWindow can be pinned so it stays in the same place in the viewport regardless of the scolling of the page.

The end user can do this with a button on the titlebar, or you can do this in the OnClientShow event (see Example 2): [http://docs.telerik.com/devtools/aspnet-ajax/controls/window/client-side-programming/events/onclientshow](http://docs.telerik.com/devtools/aspnet-ajax/controls/window/client-side-programming/events/onclientshow).

The caveat is that a pinned RadWindow cannot be dragged by the end user because its position on the viewport is not allowed to change.

## SOLUTION

One solution is to create a container in the page that will scroll instead of the &lt;form&gt; element. The RadWindow popup is a direct child of the &lt;form&gt; element and so it inherits its positioning.

Here is an example:


````ASP.NET
<!DOCTYPE html>
  
<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title></title>
    </head>
    <body>
        <form id="form1" runat="server">
            <asp:ScriptManager ID="Scriptmanager1" runat="server" />
            <style>
                html, body, form
                {
                    overflow-y: hidden;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                }
            </style>
            <telerik:RadWindow runat="server" ID="rw1" RenderMode="Lightweight" OpenerElementID="Button1"></telerik:RadWindow>
            <div style="overflow-y: auto; height: 100%;" class="scrollContentContainer">
                <div style="height: 2000px;">content here</div>
                <asp:Button ID="Button1" Text="open WND" runat="server" />
                <div style="height: 2000px;">content here</div>
            </div>
        </form>
    </body>
</html>
````


You can toggle the scrolling of the containers to determine whether the RadWindow will be pinned. You can further extend this to use CSS classes and add or remove them from the content dynamically.


