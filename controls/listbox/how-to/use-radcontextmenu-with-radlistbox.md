---
title: Use RadContextMenu with RadListBox
page_title: Use RadContextMenu with RadListBox | UI for ASP.NET AJAX Documentation
description: Use RadContextMenu with RadListBox
slug: listbox/how-to/use-radcontextmenu-with-radlistbox
tags: use,radcontextmenu,with,radlistbox
published: True
position: 1
---

# Use RadContextMenu with RadListBox

## 

This article will show you how to integrate **RadContextMenu** in **RadListBox**. Right clicking on the list item will show the context menu with several options: Delete, Move Up and Move Down.

Here is the declaration:

````ASPNET
<telerik:RadListBox ID="RadListBox1"
   Skin="Vista"
   Height="150px"
   AllowReorder="true"
   AllowDelete="true"
   OnClientContextMenu="showContextMenu"
   runat="server">
   <Items>
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem1" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem2" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem3" />
   </Items>
   <ButtonSettings ShowDelete="false" ShowReorder="false" />
 </telerik:RadListBox>
<telerik:RadContextMenu ID="cm1"
   runat="server"
   OnClientItemClicked="onItemClicked"
   Skin="Vista">
   <Items>
	   <telerik:RadMenuItem Text="Delete"></telerik:RadMenuItem>
	   <telerik:RadMenuItem Text="Move Up"></telerik:RadMenuItem>
	   <telerik:RadMenuItem Text="Move Down"></telerik:RadMenuItem>
   </Items>
</telerik:RadContextMenu> 	        
````

and the javascript code:

````JavaScript	
function showContextMenu(sender, e) {
	var menu = $find("<%= cm1.ClientID %>");
	var rawEvent = e.get_domEvent().rawEvent; menu.show(rawEvent);
	e.get_item().select();
	$telerik.cancelRawEvent(rawEvent);

}
function onItemClicked(sender, e) {
	var listBox = $find("<%= RadListBox1.ClientID %>");
	var listItem = listBox.get_selectedItem();
	var menuItem = e.get_item();
	switch (menuItem.get_text()) {
		case "Delete": listBox.deleteItem(listItem);
			break;
		case "Move Up": listBox.reorderItem(listItem, listItem.get_index() > 1 ? listItem.get_index() - 1 : 0);
			break;
		case "Move Down": var maxIndex = listBox.get_items().get_count() - 1; listBox.reorderItem(listItem, listItem.get_index() < maxIndex ? listItem.get_index() + 1 : maxIndex); break;
	}
}	
````

The example uses the [OnClientContextMenu]({%slug listbox/client-side-programming/events/onclientcontextmenu%}) event of the listbox to show the RadContextMenu. Then, based on the clicked menu item - the listbox item is either deleted or reordered using the [client-side API of the RadListBox object]({%slug listbox/client-side-programming/objects/radlistbox-object%}).
