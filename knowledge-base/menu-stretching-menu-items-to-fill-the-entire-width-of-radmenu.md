---
title: Stretching menu items to fill the entire width of RadMenu
description: Stretching menu items to fill the entire width of RadMenu. Check it now!
type: how-to
page_title: Stretching menu items to fill the entire width of RadMenu
slug: menu-stretching-menu-items-to-fill-the-entire-width-of-radmenu
res_type: kb
---

## How to  

Stretch all menu items to fill the entire width of RadMenu  

## Solution

The following approach accommodates any number of root levelÂ menu items:  


````JavaScript
function pageLoad() {
    var menu = $find("<%= RadMenu1.ClientID %>");
    var width = menu.get_element().offsetWidth;
    var singleItemLength = Math.floor(width / menu.get_items().get_count()) - 1 + "px";
    // due to incorrect rounding;    
    // You may need to subtract a larger number depending on    
    // the skin that you are using.     

    for (var i = 0; i < menu.get_items().get_count(); i++) {
        var li = menu.get_items().getItem(i).get_element();
        li.style.width = singleItemLength;
    }
}
window.onresize = pageLoad;
````

````ASPX
<telerik:RadMenu ID="RadMenu1" runat="server" Flow="Horizontal" Width="100%">   
````

 