---
title: RadListBox Object
page_title: RadListBox Object | UI for ASP.NET AJAX Documentation
description: RadListBox Object
slug: listbox/client-side-programming/objects/radlistbox-object
tags: radlistbox,object
published: True
position: 0
---

# RadListBox Object



## 

The following table lists the most important methods of the client-side __RadListBox__ object:




>caption   

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __trackChanges__ |none|none|Starts tracking changes made to the listbox that will be preserved over post-backs.|
| __commitChanges__ |none|none|Writes the changes to the listbox that were made since a previous call to trackChanges, so that they are preserved over post-backs.|

````JavaScript
	
	        function AddNewItem() {
	            var listbox = $find("<%= RadListBox1.ClientID %>");
	            var item = new Telerik.Web.UI.RadListBoxItem();
	            item.set_text("item");
	            listbox.trackChanges();
	            listbox.get_items().add(item);
	            item.select(); 
	            listbox.commitChanges();
	        }
	
````




>caption  

|  __findItemByText__  | string | RadListBoxItem | Returns the first __RadListBoxItem__ object whose __Text__ property equals to the passed parameter. |
| ------ | ------ | ------ | ------ |
| __findItemByValue__ |string|RadListBoxItem|Returns the first __RadListBoxItem__ object whose __Value__ property equals to the passed parameter.|
| __findItemByAttribute__ |string (attribute name), string (attribute value)|RadListBoxItem|Gets the first instance of a __RadListBoxItem__ with the specified attribute / value pair.|
| __clearSelection__ |none|none|Clears the selection. There will be no selected items.|
| __clearSelectionExcept__ |int or RadListBoxItem|none|Clears the current selection except the specified Index or Item.|
| __getItem__ |int|RadListBoxItem|Gets the item from the Items collection residing at the index specified by the parameter.|
| __get_items__ |none|RadListBoxItemCollection|Gets a collection with all items|
| __get_selectedItem__ |none|RadListBoxItem|Gets the selected item (or the first selected item if the __SelectionMode="Multiple"__ ).|
| __get_selectedItems__ |none|array|Gets an array of the selected RadListBoxItem objects|
| __get_selectedIndex__ |none|int|Gets the index of the selected item|
| __get_checkedItems__ |none|array|Gets an array of the checked RadListBoxItem objects|
| __reorderItem__ |RadListBoxItem and Index|none|Moves the specified item to the specified index|
| __transferToDestination__ |RadListBoxItem|none|Transfers the specified item to the listbox specified by the __TransferToID__ property|
| __transferFromDestination__ |RadListBoxItem|none|Transfers the specified item from the listbox specified by the __TransferToID__ property|
| __transferItem__ |RadListBoxItem, SourceRadListBox, DestinationRadListBox|none|Transfers the specified item from the source listbox to the destination listbox|
| __get_element__ |none|HTML element|Gets the outer DIV of the RadListBox|
| __get_childListElement__ |none|HTML element|Gets the UL element of the RadListBox|
| __get_id__ |none|string|Gets the ClientID of the RadListBox|
| __deleteItem__ |RadListBoxItem|none|Deletes the item passed as an argument|
| __insertItems__ |Array of RadListboxItems|none|Bulk inserts an array of RadListbox items to RadListBox|



# See Also

 * [Overview]({%slug listbox/client-side-programming/overview%})

 * [RadListBoxItem Object]({%slug listbox/client-side-programming/objects/radlistboxitem-object%})
