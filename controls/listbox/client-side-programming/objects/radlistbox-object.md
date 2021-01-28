---
title: RadListBox Object
page_title: RadListBox Object - RadListBox
description: Check our Web Forms article about RadListBox Object.
slug: listbox/client-side-programming/objects/radlistbox-object
tags: radlistbox,object
published: True
position: 0
---

# RadListBox Object

## 

The following table lists the most important methods of the client-side **RadListBox** object:


>caption   

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **trackChanges** |none|none|Starts tracking changes made to the listbox that will be preserved over post-backs.|
| **commitChanges** |none|none|Writes the changes to the listbox that were made since a previous call to trackChanges, so that they are preserved over post-backs. (see **Example 1**)| 
|  **findItemByText**  | string | RadListBoxItem | Returns the first **RadListBoxItem** object whose **Text** property equals to the passed parameter. |
| **findItemByValue** |string|RadListBoxItem|Returns the first **RadListBoxItem** object whose **Value** property equals to the passed parameter.|
| **findItemByAttribute** |string (attribute name), string (attribute value)|RadListBoxItem|Gets the first instance of a **RadListBoxItem** with the specified attribute / value pair.|
| **clearSelection** |none|none|Clears the selection. There will be no selected items.|
| **clearSelectionExcept** |int or RadListBoxItem|none|Clears the current selection except the specified Index or Item.|
| **getItem** |int|RadListBoxItem|Gets the item from the Items collection residing at the index specified by the parameter.|
| **get_items** |none|RadListBoxItemCollection|Gets a collection with all items|
| **get_selectedItem** |none|RadListBoxItem|Gets the selected item (or the first selected item if the **SelectionMode="Multiple"** ).|
| **get_selectedItems** |none|array|Gets an array of the selected RadListBoxItem objects|
| **get_selectedIndex** |none|int|Gets the index of the selected item|
| **get_checkedItems** |none|array|Gets an array of the checked RadListBoxItem objects|
| **reorderItem** |RadListBoxItem and Index|none|Moves the specified item to the specified index|
| **transferToDestination** |RadListBoxItem|none|Transfers the specified item to the listbox specified by the **TransferToID** property|
| **transferFromDestination** |RadListBoxItem|none|Transfers the specified item from the listbox specified by the **TransferToID** property|
| **transferItem** |RadListBoxItem, SourceRadListBox, DestinationRadListBox|none|Transfers the specified item from the source listbox to the destination listbox|
| **get_element** |none|HTML element|Gets the outer DIV of the RadListBox|
| **get_childListElement** |none|HTML element|Gets the UL element of the RadListBox|
| **get_id** |none|string|Gets the ClientID of the RadListBox|
| **deleteItem** |RadListBoxItem|none|Deletes the item passed as an argument|
| **insertItems** |Array of RadListboxItems|none|Bulk inserts an array of RadListbox items to RadListBox|


>caption Example 1: Demonstrates the usage of the commitChanges method
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


# See Also

 * [Overview]({%slug listbox/client-side-programming/overview%})

 * [RadListBoxItem Object]({%slug listbox/client-side-programming/objects/radlistboxitem-object%})
