---
title: Overview
page_title: Client-side Overview | RadComboBox for ASP.NET AJAX Documentation
description: Overview
slug: combobox/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



**RadComboBox** provides a flexible client-side API. You can easily interact with **RadComboBox** in the browser using its client-side object. In addition to a variety of [client-side events]({%slug combobox/client-side-programming/events%}), the client-side object model lets you achieve complicated tasks while avoiding unnecessary postbacks.

## Getting the RadComboBox Client-side Object

**RadComboBox** creates a client-side object with its **ClientID**. You can obtain the reference using the following JavaScript code:

````JavaScript
	     
var combo = $find("<%= RadComboBox1.ClientID %>");
				
````



## Getting the Instance of a Particular RadComboBoxItem

Once you have a reference to the client-side object of **RadComboBox**, you can use the **findItemByText()** method to get the instance of a particular item:

````JavaScript
	
var combo = $find("<%= RadComboBox1.ClientID %>");
var item = combo.findItemByText(text);
				
````



## Cancelling an Event

Several client-side events occur immediately before **RadComboBox** performs some action. Most of these events all have names that end with "-ing". You can use these events to cancel the **RadComboBox's** action by using the **set_cancel** method of the **eventArgs** passed to the handler:

````JavaScript
	
function OnClientSelectedIndexChanging(sender, eventArgs) {
	eventArgs.set_cancel(true);
}
				
````



## Calling a Client-side Method

When you get the instance of a **RadComboBox** object, you can call client-side methods to perform certain tasks. Consider the following examples:

* **showDropDown()**

````JavaScript
	
function ShowDropDownFunction() {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	combo.showDropDown();
}
				
````



* **hideDropDown()**

````JavaScript
	
function HideDropDownFunction() {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	combo.hideDropDown();
}
				
````



* **disable()**

````JavaScript
	
function DisableComboBox() {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	combo.disable();
}
				
````



* **enable()**

````JavaScript
	
function EnableComboBox() {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	combo.enable();
}
				
````



* **RadComboBoxItem.select()**

````JavaScript
	
function SelectComboBoxItem(itemText) {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	var item = combo.findItemByText(itemText);
	if (item) {
		item.select();
	}
}
				
````



## Preserving Changes

By default, changes made in client-side code do not persist over a postback to the server. To preserve changes, you must use the **trackChanges** and **commitChanges** methods, as shown in **Example 1**:

**Example 1:** Adding an item on the client-side and persisting the change over a postback to the server.

````JavaScript
	
function AddNewItem() {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	var comboItem = new Telerik.Web.UI.RadComboBoxItem();
	comboItem.set_text("item");
	combo.trackChanges();
	combo.get_items().add(comboItem);
	comboItem.select();
	combo.commitChanges();
}
				
````



>note This approach does not affect Items loaded on demand - [by design they are lost after postback]({%slug combobox/troubleshooting/radcombobox-items-are-not-accessible-on-the-server-side-when-loading-them-on-demand%}).
>


## Getting All RadComboBox Instances on the Client-side

**RadComboBox** exposes an array on the client-side that contains all **RadComboBox** instances. You can access this array using syntax like this:

**Telerik.Web.UI.RadComboBox.ComboBoxes**

If **RadComboBox** controls are embedded in another control, you can simply get these controls from the array using code like **Example 2.**

**Example 2:** Finding all RadComboBox instances on the page.

````ASPNET
	     
<script>
	function pageLoad() {
		var combo1 = Telerik.Web.UI.RadComboBox.ComboBoxes[0];
		var combo2 = Telerik.Web.UI.RadComboBox.ComboBoxes[1];
		var combo3 = Telerik.Web.UI.RadComboBox.ComboBoxes[2];
	}
</script>
<telerik:RadGrid ID="RadGrid1" runat="server" ...>    
	...     
	<EditItemTemplate>        
	<telerik:RadComboBox ID="RadComboBox1" runat="server"></telerik:RadComboBox>        
	<telerik:RadComboBox ID="RadComboBox2" runat="server"></telerik:RadComboBox>        
	<telerik:RadComboBox ID="RadComboBox3" runat="server"></telerik:RadComboBox>    
	</EditItemTemplate>   
	 ...
</telerik:RadGrid>
				
````



# See Also

 * [RadComboBox Object]({%slug combobox/client-side-programming/objects/radcombobox-object%})

 * [RadComboBoxItemCollection Object]({%slug combobox/client-side-programming/objects/radcomboboxitemcollection-object%})

 * [RadComboBoxItem Object]({%slug combobox/client-side-programming/objects/radcomboboxitem-object%})

 * [Events]({%slug combobox/client-side-programming/events%})
