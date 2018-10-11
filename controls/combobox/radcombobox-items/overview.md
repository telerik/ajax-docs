---
title: Overview
page_title: RadComboBox Items Overview | RadComboBox for ASP.NET AJAX Documentation
description: Overview
slug: combobox/radcombobox-items/overview
tags: overview
published: True
position: 0
---

# RadComboBox Items Overview



## Properties of RadComboBox Items

The items of **RadComboBox** have a few important properties, which are listed below:

* **Text** - string that the user sees for the item in the drop-down list.

* **ToolTip** - text that appears when the user hovers the mouse over an item in the drop-down list.

>tip Setting the tooltip can enable an accessibility feature. Special accessibility readers like JAWS, can pronounce the tooltip of the highlighted item.
>


* **Value** - unique identifier for the item. It determines the value of RadComboBox' **SelectedValue** property when an item is selected.

* **Selected** - indicates whether the item is selected. Only one item can be selected at a time. If no item is currently selected, then the **Selected** property of all items will be **False**. Setting the **Selected** property of one item to **True** automatically sets the **Selected** property of all other items in RadComboBox to **False**.

* **Enabled** determines whether the user can select the item from the drop-down list.

* **CssClass** - name of a CSS style to be applied to RadComboBox item. The style can be declared in the CSS file of the applied [skin]({%slug combobox/appearance-and-styling/skins%}).

* **ImageUrl** - image that will be displayed on the left of the item's Text.

* **DisabledImageUrl** - image that will be displayed on the left of the item's Text when the item is disabled.

In addition to the built-in properties, you can add your own [custom attributes]({%slug combobox/radcombobox-items/custom-attributes%}) to RadComboBox items to expand their functionality.

## Items Definition

There are a number of ways you can control the items that **RadComboBox** holds. You can:

* [Specify the items in-line]({%slug combobox/radcombobox-items/declaring-the-items-in-line%}) at design time.

* Load the items from an [XML file]({%slug combobox/radcombobox-items/loading-items-from-xml%}).

* [Bind RadComboBox]({%slug combobox/data-binding/overview%}) to a data source.

* Add, remove, and edit the items in RadComboBox in [server-side code]({%slug combobox/radcombobox-items/working-with-items-at-server-side%}).

* Add, remove, and edit the items in RadComboBox in [client-side code]({%slug combobox/radcombobox-items/working-with-items-in-client-side%}).

* Let RadComboBox to [load items on demand]({%slug combobox/load-on-demand/overview%}) to improve performance.


