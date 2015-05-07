---
title: Working With Items at the Client
page_title: Working With Items at the Client | RadToolBar for ASP.NET AJAX Documentation
description: Working With Items at the Client
slug: toolbar/radtoolbar-items/working-with-items-at-the-client
tags: working,with,items,at,the,client
published: True
position: 3
---

# Working With Items at the Client



**RadToolBar** provides a client-side API for adding, deleting and updating items.

>note Don't forget to wrap the changes in the **toolBar.trackChanges()** ; and **toolBar.commitChanges();** if you want to preserve these changes at the server-side.
>


## Adding Items

You can add items to the **RadTooBarItemCollection** of the toolbar or you can add buttons to the Buttons collections of the drop-down and the split button.

````JavaScript	
var toolBar = $find("<%=RadToolBar1.ClientID %>");
toolBar.trackChanges();

//add button
var button = new Telerik.Web.UI.RadToolBarButton();
button.set_text("Button1");
toolBar.get_items().add(button);

//add dropdown
var dropDown = new Telerik.Web.UI.RadToolBarDropDown();
dropDown.set_text("Drop Down 1");
var childButton = new Telerik.Web.UI.RadToolBarButton();
childButton.set_text("Child Button1");
dropDown.get_buttons().add(childButton);
toolBar.get_items().add(dropDown);

//add splitButton
var splitButton = new Telerik.Web.UI.RadToolBarSplitButton();
splitButton.set_text("Split Button 1");
var childButton = new Telerik.Web.UI.RadToolBarButton();
childButton.set_text("Child Button1");
splitButton.get_buttons().add(childButton);toolBar.get_items().add(splitButton);
toolBar.commitChganges();	
````


## Removing Items

Use the **remove** method of the **RadComboBoxItemCollection** object to remove items or the **remove** method of the Buttons collections of the split button or the drop-down objects to remove buttons.

````JavaScript	
toolBar.trackChanges();

//remove item from the RadToolBarItemCollection
var itemToRemove = toolBar._findItemByText("Button1");
toolBar.get_items().remove(itemToRemove);

//remove the first child button from the splitbutton's Buttons collection
var splitButton = toolBar.findItemByText("Split Button 1");
splitButton.get_buttons().remove(splitButton.get_buttons().getButton(0));

//remove the first child button from the dropdown's Buttons collection
var dropDown = toolBar.findItemByText("Drop Down 1");
dropDown.get_buttons().remove(dropDown.get_buttons().getButton(0));
toolBar.commitChganges();	
````


## Enabling/Disabling Items

Use the **disable** method to disable items in the RadToolBarItemCollection or buttons in the Buttons collections of the split button and drop-down objects:

````JavaScript	
var itemToDisable = toolBar.findItemByText("Button1"); 
itemToDisable.disable();
splitButton.get_buttons().getButton(0).disable(); 
dropDown.get_buttons().getButton(0).disable();	
````


# See Also

 * [Working With Items at the Server]({%slug toolbar/radtoolbar-items/working-with-items-at-the-server%})

 * [Overview]({%slug toolbar/radtoolbar-items/overview%})

 * [Overview]({%slug toolbar/client-side-programming/overview%})
