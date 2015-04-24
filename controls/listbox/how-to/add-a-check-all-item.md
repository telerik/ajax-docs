---
title: Add a Check All Item
page_title: Add a Check All Item | RadListBox for ASP.NET AJAX Documentation
description: Add a Check All Item
slug: listbox/how-to/add-a-check-all-item
tags: add,a,check,all,item
published: True
position: 4
---

# Add a Check All Item

## 

>note From Q3 2013 you can use a **CheckAll** checkbox functionality in RadListBox. You can set the **ShowCheckAll** property of RadListBox to *True* and if **CheckBoxes** is also set to true the **CheckAll** checkbox will be shown at the top of all other items of RadListBox.
>


This article will show you how to have an item which checks/unchecks all other items (CheckBoxes = True). In addition, checking manually all other items will cause this item to get checked as well. Unchecking one item from all will uncheck it too.

````ASPNET
<telerik:RadListBox id="RadListBox1" runat="server" skin="Vista" onclientitemchecked="onItemChecked"
	checkboxes="true">
   <Items>
	   <telerik:RadListBoxItem runat="server" Text="All" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem2" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem3" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem4" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem5" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem6" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem7" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem8" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem9" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem10" />
	   <telerik:RadListBoxItem runat="server" Text="RadListBoxItem11" />
   </Items>
</telerik:radlistbox>
````

````JavaScript	
function onItemChecked(sender, e) {
	var item = e.get_item();
	var items = sender.get_items();
	var checked = item.get_checked();
	var firstItem = sender.getItem(0);
	if (item.get_text() == "All") {
		items.forEach(function (itm) { itm.set_checked(checked); });
	}
	else {
		if (sender.get_checkedItems().length == items.get_count() - 1) {
			firstItem.set_checked(!firstItem.get_checked());
		}
	}
}
````

# See Also

 * [RadListBox Object]({%slug listbox/client-side-programming/objects/radlistbox-object%})

 * [RadListBoxItem Object]({%slug listbox/client-side-programming/objects/radlistboxitem-object%})
