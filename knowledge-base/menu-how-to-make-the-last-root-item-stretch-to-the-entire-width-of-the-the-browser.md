---
title: How to make the last root item of RadMenu stretch to the entire width of the the browser
description: How to make the last root item of RadMenu stretch to the entire width of the the browser. Check it now!
type: how-to
page_title: How to make the last root item of RadMenu stretch to the entire width of the the browser
slug: menu-how-to-make-the-last-root-item-stretch-to-the-entire-width-of-the-the-browser
res_type: kb
---

## How to
   
Make the last menu item stretch to the entire width of the browser.   
   
## Description
   

Using RadMenu's Client API, I set the width of the last menu item in the OnClientLoad event handler of the menu. Also, I handle the window's onresize event to adjust the width as necessary. Here is a sample of what the result looks like:  

   
 ![last item width set on client](images/menu-how-to-make-the-last-root-item-stretch-to-the-entire-width-of-the-the-browser.png)  
   
## Solution
   
````ASPX
<telerik:RadMenu ID="RadMenu1" Width="100%"
OnClientLoad="OnClientLoadHandler" runat="server">
<Items>
    <telerik:RadMenuItem runat="server" Text="Root RadMenuItem1">
    </telerik:RadMenuItem>
    <telerik:RadMenuItem runat="server" Text="Root RadMenuItem2">
    </telerik:RadMenuItem>
    <telerik:RadMenuItem runat="server" Text="Root RadMenuItem3">
    </telerik:RadMenuItem>
</Items>
</telerik:RadMenu>
````

````JavaScript 
var lastItem = null;     
var menu = null;     
var widthOfMenu = 0;     
var widthOfRootItemsButLastOne = 0;     
var desiredWidthOfLastItem = 0;     
function OnClientLoadHandler(sender)     
{                       
   menu = sender;     
   var lastItemIndex = sender.get_items().get_count() - 1; //0 based indexing     
   lastItem = sender.get_items().getItem(lastItemIndex);     
         
   for (var i = 0; i < lastItemIndex; i++)     
   {     
      widthOfRootItemsButLastOne += sender.get_items().getItem(i).get_linkElement().offsetWidth;     
   }     
      
   widthOfMenu = sender.get_element().offsetWidth;     
   desiredWidthOfLastItem = widthOfMenu - widthOfRootItemsButLastOne -4;//-4 to compensate for padding     
         
         
   lastItem.get_element().style.width = desiredWidthOfLastItem+"px";     
            
}     
   
function AdjustLastItemWidthOnResize ()     
{         
   widthOfMenu = menu.get_element().offsetWidth;     
   desiredWidthOfLastItem = widthOfMenu - widthOfRootItemsButLastOne -4;//-4 to compensate for padding     
   lastItem.get_element().style.width = desiredWidthOfLastItem+"px";     
      
}     
window.onresize = AdjustLastItemWidthOnResize;
````

 