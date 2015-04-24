---
title: Overview
page_title: Client-side Programming Overview | RadMenu for ASP.NET AJAX Documentation
description: Overview
slug: menu/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



__RadMenu__ provides a flexible client-side API. You can easily interact with the menu in the browser using the menu client-side object. In addition to a variety of [client-side events]({%slug menu/client-side-programming/events/overview%}), the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadMenu client-side object

__RadMenu__ creates a client-side object with the __ClientID__ of the menu. You can obtain the reference using the following JavaScript code:

````JavaScript
	var menu = $find("<%= RadMenu1.ClientID %>");		
````



## Getting the instance of a particular RadMenuItem

Once you have the client-side object of __RadMenu__, you can use the __findItemByText()__ method to get the instance of a particular item:

````JavaScript
	var menu= $find("<%= RadMenu1.ClientID %>");var item = menu.findItemByText(text);			
````



## Cancelling an action

Several client side events occur immediately before the menu performs some action. Most of these events all have names that end in "-ing". You can use these events to cancel the menu action by using the cancel property of the eventArgs passed to the handler:

````JavaScript
	function OnClientItemOpening(sender, eventArgs) {
	    eventArgs.set_cancel(true); 
	}
````



## Calling a client-side method

When you get the instance of the __RadMenu__ object, you can call client-side methods to perform certain tasks. Consider the following examples:

* __open()__

````JavaScript
	function openItem(text) {
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var item = menu.findItemByText(text);
	    if (item) {
	        item.open();
	    }
	    else {
	        alert("Item with text '" + text + "' not found.");
	    }
	}		
````



* __close()__

````JavaScript
	function CloseItem(text) {
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var item = menu.findItemByText(text);
	    if (item) {
	        item.close();
	    }
	    else {
	        alert("Item with text '" + text + "' not found.");
	    }
	}		
````



* __disable()__

````JavaScript
	function DisableItem(text) {
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var item = menu.findItemByText(text);
	    if (item) {
	        item.disable();
	    }
	    else {
	        alert("Item with text '" + text + "' not found.");
	    }
	}
````



* __enable()__

````JavaScript
	function EnableAll() {
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    for (var i = 0; i < menu.get_allItems().length; i++) {
	        menu.get_allItems()[i].enable();
	    }
	}		
````



## Preserving Changes

By default, changes made in client-side code do not persist over a post-back to the server. To preserve changes, you must use the __trackChanges__ and __commitChanges__ methods:

````JavaScript
	function AddNewItem() {     
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var menuItem = new Telerik.Web.UI.RadMenuItem();
	    menuItem.set_text("New Item");
	    menu.trackChanges();
	    menu.get_items().add(menuItem);
	    menu.commitChanges();        
	}		
````



# See Also

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})

 * [RadMenuItemCollection Object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})

 * [Working With Items at Client-side]({%slug menu/radmenu-items/working-with-items-at-client-side%})
