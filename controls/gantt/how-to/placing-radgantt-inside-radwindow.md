---
title: Placing RadGantt inside RadWindow
page_title: Placing RadGantt inside RadWindow | UI for ASP.NET AJAX Documentation
description: Placing RadGantt inside RadWindow
slug: gantt/how-to/placing-radgantt-inside-radwindow
tags: placing,radgantt,inside,radwindow
published: True
position: 0
---

# Placing RadGantt inside RadWindow

This help article demonstrates how to place **RadGantt** inside a **RadWindow**, setting its height and width to 100%, without displaying vertical and horizontal scrollbars. 
## 

If you place **RadGantt** inside a **RadWindow** and set its width and height to 100% scrollbars will appear. This is due to the borders adding 2% resulting in a content size that is 102% of its parent element's size. Showing the scrollbars can be avoided by placing the RadGantt in a container div and applying the following CSS styles to the div:


````CSS
.gantt-container {
    padding: 0 2px 2px 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
````
````ASPNET
<telerik:RadWindow RenderMode="Lightweight" ID="RadWindow1" runat="server" VisibleOnPageLoad="true"
     Height="700" Width="1000" OnClientShow="OnClientShow">
    <ContentTemplate>
        <div class="gantt-container">
            <telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" Width="100%" 
                Height="100%" Skin="Default" ShowFullTime="true">
            </telerik:RadGantt>
        </div>
    </ContentTemplate>
</telerik:RadWindow>
````  

