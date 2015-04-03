---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: combobox/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



__RadComboBox__ provides a flexible client-side API. You can easily interact with __RadComboBox__ in the browser using its client-side object. In addition to a variety of [client-side events]({%slug combobox/client-side-programming/events%}), the client-side object model lets you achieve complicated tasks while avoiding unnecessary postbacks.

## Getting the RadComboBox Client-side Object

__RadComboBox__ creates a client-side object with its __ClientID__. You can obtain the reference using the following JavaScript code:

````JavaScript
	     
	    var combo = $find("<%= RadComboBox1.ClientID %>");
				
````



## Getting the Instance of a Particular RadComboBoxItem

Once you have a reference to the client-side object of __RadComboBox__, you can use the __findItemByText()__ method to get the instance of a particular item:

````JavaScript
	
	    var combo = $find("<%= RadComboBox1.ClientID %>");
	    var item = combo.findItemByText(text);
				
````



## Cancelling an Event

Several client-side events occur immediately before __RadComboBox__ performs some action. Most of these events all have names that end with "-ing". You can use these events to cancel the __RadComboBox's__ action by using the __set_cancel__ method of the __eventArgs__ passed to the handler:

````JavaScript
	
		function OnClientSelectedIndexChanging(sender, eventArgs) {
			eventArgs.set_cancel(true);
		}
				
````



## Calling a Client-side Method

When you get the instance of a __RadComboBox__ object, you can call client-side methods to perform certain tasks. Consider the following examples:

* __showDropDown()__

````JavaScript
	
		function ShowDropDownFunction() {
			var combo = $find("<%= RadComboBox1.ClientID %>");
			combo.showDropDown();
		}
				
````



* __hideDropDown()__

````JavaScript
	
		function HideDropDownFunction() {
			var combo = $find("<%= RadComboBox1.ClientID %>");
			combo.hideDropDown();
		}
				
````



* __disable()__

````JavaScript
	
		function DisableComboBox() {
			var combo = $find("<%= RadComboBox1.ClientID %>");
			combo.disable();
		}
				
````



* __enable()__

````JavaScript
	
		function EnableComboBox() {
			var combo = $find("<%= RadComboBox1.ClientID %>");
			combo.enable();
		}
				
````



* __RadComboBoxItem.select()__

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

By default, changes made in client-side code do not persist over a postback to the server. To preserve changes, you must use the __trackChanges__ and __commitChanges__ methods, as shown in __Example 1__:

__Example 1:__ Adding an item on the client-side and persisting the change over a postback to the server.

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



>note This approach does not affect Items loaded on demand -[by design they are lost after postback]({%slug combobox/troubleshooting/radcombobox-items-are-not-accessible-on-the-server-side-when-loading-them-on-demand%}).
>


## Getting All RadComboBox Instances on the Client-side

__RadComboBox__ exposes an array on the client-side that contains all __RadComboBox__ instances. You can access this array using syntax like this:

__Telerik.Web.UI.RadComboBox.ComboBoxes__

If __RadComboBox__ controls are embedded in another control, you can simply get these controls from the array using code like __Example 2.__

__Example 2:__ Finding all RadComboBox instances on the page.

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
