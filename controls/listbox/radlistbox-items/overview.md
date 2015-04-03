---
title: RadListBox Items Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: listbox/radlistbox-items/overview
tags: overview
published: True
position: 0
---

# RadListBox Items Overview



## The properties of RadListBox items

The items of __RadListBox__ have a few important properties, which are listed below:

* __Text__ is the string that the user sees for the item in the list.

* __Value__ is the value associated with the item. It determines the value of the ListBox' __SelectedValue__ property when the item is selected.

* __Checked__ - determines the state of the checkbox next to the item (when the __CheckBoxes="True"__)

* __Checkable__ - determines whether the item can be checked (when the __CheckBoxes="True"__)

* __AllowDrag__ - determines whether the item can be dragged (when __EnableDragAndDrop="True"__).

* __ToolTip__ is the text of the tooltip that appears when the user hovers the mouse over the item in the list.Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.

* __Selected__ indicates whether the item is selected (True or False). The number of items that can be selected depends on the __SelectionMode__ property of the listbox. If it set to __Single__ (default) then only one item can be selected at a time, if it is set to __Multiple__ - more than one items can be selected. If no items are currently selected, then the Selected property of all items will be False.

* __Enabled__ determines whether the user can select the item from the list.

* __CssClass__ is the name of a CSS style to be applied to the ListBox item (the <LI> html element). The style can be declared in the CSS file of the applied skin.

* __ImageUrl__ determines the image that will be displayed on the left of the item's Text.

* __Attributes__ - in addition to the built-in properties, you can add your own custom attributes to ListBox items to expand their functionality. They will be rendered as an attribute of the <LI> tag of the items.



## The methods of RadListBox items

* __Clone__ - creates a new instance of the item having the same Text, Value, AllowDrag, Checkable, Checked, CssClass, Enabled and ImageUrl properties as the original one.



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
