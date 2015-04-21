---
title: Working at Client-side
page_title: Working at Client-side | UI for ASP.NET AJAX Documentation
description: Working at Client-side
slug: listbox/radlistbox-items/working-at-client-side
tags: working,at,client-side
published: True
position: 4
---

# Working at Client-side

RadListBox provides a client-side API for adding, deleting and updating items.

## Adding Items

To add an item, use the __RadListBoxItemCollection.add__ method. If you want the change to the listbox items to persist after a postback, you must wrap the call to the __add__ method between a call to the __radListBox.trackChanges()__ method and a call to the __radListBox.commitChanges()__ method:

````JavaScript	     
<input type="button" value="Add" onclick="AddNewItem()" />
<script type="text/javascript">
	function AddNewItem() {
	   var lb = $find("<%= RadListBox1.ClientID %>");        
	   var item = new Telerik.Web.UI.RadListBoxItem();
	   item.set_text("New Item");
	   lb.trackChanges();
	   lb.get_items().add(item);
	   item.select();
	   lb.commitChanges();
	}
</script>   		
````

## Removing items

Use the __remove__ method of the __RadListBoxItemCollection__ object to remove items:

````JavaScript	
<input type="button" value="Remove" onclick="RemoveItem()" />
<script type="text/javascript">
   function RemoveItem() {
	   var lb = $find("<%= RadListBox1.ClientID %>");
	   var item = lb.get_selectedItem();
	   lb.trackChanges();
	   lb.get_items().remove(item);
	   lb.commitChanges();
   }
</script> 		
````

## Enabling and Disabling items

Use the __disable()__ and __enable()__ methods of the __RadListBoxItem__ object to disable or enable items:

````JavaScript	    
<input type="button" value="Disable on the client" onclick="DisableItem()" />
<script type="text/javascript">
   function DisableItem() {
	   var lb = $find("<%= RadListBox1.ClientID %>");
	   var item = lb.get_selectedItem();
	   lb.trackChanges();
	   item.disable();
	   lb.commitChanges();
   }
</script> 	    	
````

## Checking and Unchecking items

Use the __check()__ and __uncheck()__ methods of the __RadListBoxItem__ object:

````JavaScript
<input type="button" value="Check on the client" onclick="CheckItem()" />
<script type="text/javascript">
   function CheckItem() {
	   var lb = $find("<%= RadListBox1.ClientID %>");
	   var item = lb.get_selectedItem();
	   item.check();
   }
</script> 
````

# See Also

 * [Overview]({%slug listbox/radlistbox-items/overview%})

 * [Declaring the Items Inline]({%slug listbox/radlistbox-items/declaring-the-items-inline%})

 * [Loading Items from XML]({%slug listbox/radlistbox-items/loading-items-from-xml%})

 * [Working at Server-side]({%slug listbox/radlistbox-items/working-at-server-side%})
