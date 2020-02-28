---
title: Working with Items in Client-Side
page_title: Working with Items in Client-Side | RadComboBox for ASP.NET AJAX Documentation
description: Working with Items in Client-Side
slug: combobox/radcombobox-items/working-with-items-in-client-side
tags: working,with,items,in,client-side
published: True
position: 4
---

# Working with Items in Client-Side



**RadComboBox for ASP.NET AJAX** provides a client-side API for adding, deleting, and updating items.

## Add Item

To add an item, use the **RadComboBoxItemCollection.add** method. If you want the change made to RadComboBox items, to persist after a postback, you must wrap the call to the **add** method, between a call to the **RadComboBox.trackChanges** method and a call to the **RadComboBox.commitChanges** method:

````JavaScript
	
function addNewItem() {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	var comboItem = new Telerik.Web.UI.RadComboBoxItem();
	comboItem.set_text("New Item");
	combo.trackChanges();
	combo.get_items().add(comboItem);
	comboItem.select();
	combo.commitChanges();        
}
				
````



## Remove Item

Use the **Remove** method of the **RadComboBoxItemCollection** object to remove items:

````JavaScript
	
function removeItem() {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	var comboItem = combo.get_selectedItem();
	if (comboItem) {
		combo.trackChanges();
		combo.get_items().remove(comboItem);
		combo.commitChanges();
	}
}
				
````



## Enable and Disable Item

Use the **enable** and **disable** methods of the **RadComboBoxItem** object to enable or disable items:

````JavaScript
	
function enableItem(){
	var combo = $find("<%= RadComboBox1.ClientID %>");
	var comboItem = combo.get_selectedItem();
	if (comboItem && !comboItem.get_enabled()) {
		combo.commitChanges();
		comboItem.enable();
		combo.trackChanges();
	}
} 
	
function disableItem() {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	var comboItem = combo.get_selectedItem();
	if (comboItem) {
		combo.commitChanges();
		comboItem.disable();
		combo.trackChanges();
	}
}   
			
````



For further details, check the following example: [Add/Remove/Disable Items](https://demos.telerik.com/aspnet-ajax/combobox/examples/programming/addremovedisableitemsclientside/defaultcs.aspx)

# See Also

 * [Working with Items at Server-Side]({%slug combobox/radcombobox-items/working-with-items-at-server-side%})
