---
title: Overview
page_title: Client-side Programming Overview | RadToolBar for ASP.NET AJAX Documentation
description: Overview
slug: toolbar/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



__RadToolBar__ provides a flexible client-side API. You can easily interact with the toolbar in the browser using the toolbar client-side object. In addition to a variety of [client-side events]({%slug toolbar/client-side-programming/events%}), the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadToolBar client-side object

RadToolBar creates a client-side object with the ClientID of the toolbar. You can obtain the reference using the following JavaScript code:

````JavaScript
	     
	    var toolBar = $find("<%= RadToolBar1.ClientID %>");
				
````



## Getting the instance of a particular RadToolBarItem

Once you have the client-side object of __RadToolBar__, you can use the __findItemByText()__ method to get the instance of a particular item:

````JavaScript
	
	    var toolBar = $find("<%= RadToolBar1.ClientID %>");
	    var item = toolBar.findItemByText(text);
				
````



The returned item can be a button, drop-down or a split button.

## Cancelling an action

Several client side events occur immediately before the toolbar performs some action. Most of these events all have names that end in "-ing". You can use these events to cancel the toolbar action by using the __set_cancel()__ method of the eventArgs passed to the handler:

````JavaScript
	
	    function OnClientButtonClicking(sender, args) {
	        args.set_cancel(true);    
		}
				
````



## Calling a client-side method

When you get the instance of the RadToolBar object, you can call client-side methods to perform certain tasks. Consider the following examples:

* __set_checked()__

````JavaScript
	
		var toolBar = $find("<%=RadToolBar1.ClientID %>");
		var button = toolBar.findItemByText("Button1");
		if (Telerik.Web.UI.RadToolBarButton.isInstanceOfType(button))        
		button.set_checked(!button.get_isChecked());
				
````



* __disable()__

````JavaScript
	
	    var toolBar = $find("<%=RadToolBar1.ClientID %>");
	    var button = toolBar.findItemByText("Button1");
	    button.disable();
				
````



* __enable()__

````JavaScript
	
	    var toolBar = $find("<%=RadToolBar1.ClientID %>");
	    var button = toolBar.findItemByText("Button1");
		button.enable();
				
````





## Preserving Changes

By default, changes made in client-side code do not persist over a post-back to the server. To preserve changes, you must use the __trackChanges__ and __commitChanges__ methods:



````JavaScript
	 
	    var toolBar = $find("RadToolBar1");
	    var dropDownButton = toolBar.get_items().getItem(0);
	    toolBar.trackChanges();
	    var dropDownChildButton = new Telerik.Web.UI.RadToolBarButton();
	    dropDownChildButton.set_text("Added on the client-side button");
	    dropDownButton.get_buttons().add(dropDownChildButton);
	    toolBar.commitChanges();
	    
````







# See Also

 * [RadToolBar Object]({%slug toolbar/client-side-programming/radtoolbar-object%})
