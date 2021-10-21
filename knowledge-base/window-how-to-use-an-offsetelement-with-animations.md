---
title: How to use RadWindow OffsetElement with animations
description: How to use RadWindow  OffsetElement with animations. Check it now!
type: how-to
page_title: How to use RadWindow  OffsetElement with animations
slug: window-how-to-use-an-offsetelement-with-animations
res_type: kb
---

## How to

Use an animation when opening a **RadWindow** that must have a certain position according to an HTML element on the page (**OffsetElement**).  
   
   
   
## Description

Currently the **RadWIndow's** animation takes place before it is repositioned according to the **Top** and **Left** properties when an **OffsetElementID** is set. This means that in this scenario the animation will take place in the center of the screen and when it is finished the **RadWindow** will be positioned properly. This would rarely be the desired effect, yet for the time being this will not be changed internally to avoid a breaking change.  

## Solution

You can use the [OnClientBeforeShow](https://docs.telerik.com/devtools/aspnet-ajax/controls/window/client-side-programming/events/overview) event to set the position of the **RadWindow** according to the desired element via jQuery and the **RadWIndow's** [client-side API](https://docs.telerik.com/devtools/aspnet-ajax/controls/window/client-side-programming/radwindow-object). Thus instead of setting the **Top**, **Left**, **OffsetElementID** properties you need to have them in JavaScript variables:  
 
````ASPX
<telerik:RadWindow ID="RadWindow1" runat="server" OpenerElementID="Button1" Animation="Slide" 
    OnClientBeforeShow="windowBeforeShow">
    <ContentTemplate>
        sample content in the RadWindow
    </ContentTemplate>
</telerik:RadWindow>
<div id="offsetDiv" style="position: absolute; top: 50px; left: 50px; width: 100px; height: 100px;
    border: 1px solid red;">
</div>
<asp:Button ID="Button1" runat="server" Text="Open the RadWindow" UseSubmitBehavior="false"
    OnClientClick="return false;" />
````

````JavaScript
function windowBeforeShow(oWnd, args) {
    var offsetEl = $telerik.$("#offsetDiv"); //position the window according to the div with ID myDiv
    //var offsetEl = $telerik.$("#" + oWnd.get_openerElementID()); //position the window according to the OpenerElement
    var coords = offsetEl.offset();
    var topOffset = 120; //this is the vertical offset
    var leftOffset = 120; //this is the horizontal offset
    oWnd.moveTo(coords.left + leftOffset, coords.top + topOffset);
}
````

 