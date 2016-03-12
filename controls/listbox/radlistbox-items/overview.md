---
title: Overview
page_title: RadListBox Items Overview | RadListBox for ASP.NET AJAX Documentation
description: Overview
slug: listbox/radlistbox-items/overview
tags: overview
published: True
position: 0
---

# RadListBox Items Overview



## The properties of RadListBox items

The items of **RadListBox** have a few important properties, which are listed below:

* **Text** is the string that the user sees for the item in the list.

* **Value** is the value associated with the item. It determines the value of the ListBox' **SelectedValue** property when the item is selected.

* **Checked** - determines the state of the checkbox next to the item (when the **CheckBoxes="True"**)

* **Checkable** - determines whether the item can be checked (when the **CheckBoxes="True"**)

* **AllowDrag** - determines whether the item can be dragged (when **EnableDragAndDrop="True"**).

* **ToolTip** is the text of the tooltip that appears when the user hovers the mouse over the item in the list.Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.

* **Selected** indicates whether the item is selected (True or False). The number of items that can be selected depends on the **SelectionMode** property of the listbox. If it set to **Single** (default) then only one item can be selected at a time, if it is set to **Multiple** - more than one items can be selected. If no items are currently selected, then the Selected property of all items will be False.

* **Enabled** determines whether the user can select the item from the list.

* **CssClass** is the name of a CSS style to be applied to the ListBox item (the \<li\> html element). The style can be declared in the CSS file of the applied skin.

* **ImageUrl** determines the image that will be displayed on the left of the item's Text.

* **Attributes** - in addition to the built-in properties, you can add your own custom attributes to ListBox items to expand their functionality. They will be rendered as an attribute of the \<li\> tag of the items.



## The methods of RadListBox items

* **Clone** - creates a new instance of the item having the same Text, Value, AllowDrag, Checkable, Checked, CssClass, Enabled and ImageUrl properties as the original one.



## Controlling which items to appear

There are a number of ways you can control the items that RadListBox holds. You can:

* [Specify the items inline]({%slug listbox/radlistbox-items/declaring-the-items-inline%}) at design time.

* Load the items [from an XML file]({%slug listbox/radlistbox-items/loading-items-from-xml%}).

* [Bind the ListBox]({%slug listbox/data-binding/overview%}) to a data source.

* Add, remove, and edit the items in the ListBox in [server-side code]({%slug listbox/radlistbox-items/working-at-server-side%}).

* Add, remove, and edit the items in the ListBox in [client-side code]({%slug listbox/radlistbox-items/working-at-client-side%}).

# See Also

 * [Declaring the Items Inline]({%slug listbox/radlistbox-items/declaring-the-items-inline%})

 * [Loading Items from XML]({%slug listbox/radlistbox-items/loading-items-from-xml%})

 * [Working at Server-side]({%slug listbox/radlistbox-items/working-at-server-side%})

 * [Working at Client-side]({%slug listbox/radlistbox-items/working-at-client-side%})

 * [Item Builder]({%slug listbox/design-time/item-builder%})
