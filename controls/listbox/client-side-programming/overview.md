---
title: Overview
page_title: Client-side Programming Overview | RadListBox for ASP.NET AJAX Documentation
description: Overview
slug: listbox/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadListBox** provides a flexible client-side API. You can easily interact with the listbox in the browser using its client-side object. In addition to a variety of [client-side events]({%slug listbox/client-side-programming/events/overview%}), the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadListBox Client-side object

RadListBox creates a client-side object with the ClientID of the RadListBox. You can obtain the reference using the following JavaScript code:

````JavaScript
var list = $find("<%= RadListBox1.ClientID %>");	
````

Now you can use all the Client-side methods of the [RadListBox client object]({%slug listbox/client-side-programming/objects/radlistbox-object%}).

## Getting an instance of a particular RadListBoxItem

Once you have the client-side object of RadListBox, you can use the **findItemByText()/findItemByValue** method to get the instance of a particular item:

````JavaScript	
var list = $find("<%= RadListBox1.ClientID %>");
var item = list.findItemByText("item 1"); 
alert(item.get_text());	
````

## Cancelling an action

Several client side events occur immediately before the listbox performs some action. These events all have names that end in "-ing". You can use these events to cancel the listbox action by using the **set_cancel** method of the second argument passed to the handler:

````JavaScript	
function onClientDeletingHandler(sender, e) {
	if (!confirm("Are you sure?")) {
		e.set_cancel(true);
	} 
}	
````

## Calling a Client-side method

When you get the instance of the RadListBox or RadListBoxItem client objects, you can call client-side methods to perform certain tasks:

````JavaScript	
function onButtonClick() {
	var listbox = $find("<%= RadListBox1.ClientID %>");
	var firstItem = listbox.getItem(0); alert(firstItem.get_text()); 
}	
````

## Preserving changes

By default, changes made in client-side code (add, remove, enable, disable of items) do not persist over a post-back to the server. To preserve changes, you must use the **trackChanges** and **commitChanges** methods:

````JavaScript
function onButtonClick() {
	var listbox = $find("<%= RadListBox1.ClientID %>");
	var item = listbox.get_selectedItem(); listbox.trackChanges(); listbox.get_items().remove(item);
	listbox.commitChanges(); 
}	
````

# See Also

 * [RadListBox Object]({%slug listbox/client-side-programming/objects/radlistbox-object%})

 * [RadListBoxItem Object]({%slug listbox/client-side-programming/objects/radlistboxitem-object%})
