---
title: Working With Items at Client-side
page_title: Working With Items at Client-side | RadMenu for ASP.NET AJAX Documentation
description: Working With Items at Client-side
slug: menu/radmenu-items/working-with-items-at-client-side
tags: working,with,items,at,client-side
published: True
position: 4
---

# Working With Items at Client-side



**RadMenu for ASP.NET AJAX** provides a client-side API for adding, deleting and disabling items.By using the **trackChanges** and **commitChanges** methods of the client-side **RadMenu** object, these changes can persist after a postback.

## Adding Items

To add an item, use the **add** or **insert** method of the itemcollection:

````JavaScript
function AddNewItems()
{    
    var menu = $find("<%= RadMenu1.ClientID %>"); 
    var rootItem = new Telerik.Web.UI.RadMenuItem();  
    rootItem.set_text("New Root Item");  
    var childItem = new Telerik.Web.UI.RadMenuItem();  
    childItem.set_text("New Child Item");  
    var firstChild = new Telerik.Web.UI.RadMenuItem();  
    firstChild.set_text("New First Child");   
    menu.trackChanges();  
    menu.get_items().add(rootItem);  
    rootItem.get_items().add(childItem);  
    menu.get_items().getItem(0).get_items().insert(0, firstChild);  
    menu.commitChanges();       
}			
````

## Removing items

Use the **remove** or **removeAt** method of the item collection to removeitems:

````JavaScript
function RemoveItem()
{  
    var menu = $find("<%= RadMenu1.ClientID %>");  
    var menuItem = menu.findItemByText("delete me");
    if (menuItem)  
    {    
        var parentItem = menuItem.get_parent();    
        menu.trackChanges();    
        parentItem.get_items().remove(menuItem);
        // or parentItem.get_items().removeAt(menuItem.get_index());
        menu.commitChanges();
    }
}		
````

## Enabling and Disabling items

Use the **disable** and **enable** methods of the item collection to disable or enable items:

````JavaScript
function DisableItem() {
    var menu = $find("<%= RadMenu1.ClientID %>");
    var menuItem = menu.findItemByText("disable me");
    if (menuItem) {
        menu.trackChanges();
        menuItem.disable();
        menu.commitChanges();
    }
}
function EnableItem()
{
    var menu = $find("<%= RadMenu1.ClientID %>");
    var menuItem = menu.findItemByText("enable me");
    if (menuItem && !menuItem.get_isEnabled()) {
        menu.trackChanges();
        menuItem.enable();
        menu.commitChanges();
    }
}
````


For a live example of adding, removing, and disabling items in client-side code,see [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/menu/examples/programming/addremovedisableitemsclientside/defaultcs.aspx).

# See Also

 * [Working With Items at Server-side]({%slug menu/radmenu-items/working-with-items-at-server-side%})

 * [Overview]({%slug menu/radmenu-items/overview%})

 * [Overview]({%slug menu/client-side-programming/overview%})
