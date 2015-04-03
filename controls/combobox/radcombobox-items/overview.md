---
title: RadComboBox Items Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: combobox/radcombobox-items/overview
tags: overview
published: True
position: 0
---

# RadComboBox Items Overview



## Properties of RadComboBox Items

The items of __RadComboBox__ have a few important properties, which are listed below:

* __Text__ - string that the user sees for the item in the drop-down list.

* __ToolTip__ - text that appears when the user hovers the mouse over an item in the drop-down list.

>note Setting the tooltip can enable an accessibility feature. Special accessibility readers like JAWS, can pronounce the tooltip of the highlighted item.
>


* __Value__ - unique identifier for the item. It determines the value of RadComboBox' __SelectedValue__ property when an item is selected.

* __Selected__ - indicates whether the item is selected. Only one item can be selected at a time. If no item is currently selected, then the __Selected__ property of all items will be __False__. Setting the __Selected__ property of one item to __True__ automatically sets the __Selected__ property of all other items in RadComboBox to __False__.

* __Enabled__ determines whether the user can select the item from the drop-down list.

* __CssClass__ - name of a CSS style to be applied to RadComboBox item. The style can be declared in the CSS file of the applied [skin]({%slug combobox/appearance-and-styling/skins%}).

* __ImageUrl__ - image that will be displayed on the left of the item's Text.

* __DisabledImageUrl__ - image that will be displayed on the left of the item's Text when the item is disabled.

In addition to the built-in properties, you can add your own [custom attributes]({%slug combobox/radcombobox-items/custom-attributes%}) to RadComboBox items to expand their functionality.

## Items Definition

There are a number of ways you can control the items that __RadComboBox__ holds. You can:

* [Specify the items in-line]({%slug combobox/radcombobox-items/declaring-the-items-in-line%}) at design time.

* Load the items from an [XML file]({%slug combobox/radcombobox-items/loading-items-from-xml%}).

* [Bind RadComboBox]({%slug combobox/data-binding/overview%}) to a data source.

* Add, remove, and edit the items in RadComboBox in [server-side code]({%slug combobox/radcombobox-items/working-with-items-at-server-side%}).

* Add, remove, and edit the items in RadComboBox in [client-side code]({%slug combobox/radcombobox-items/working-with-items-in-client-side%}).

* Let RadComboBox to [load items on demand]({%slug combobox/load-on-demand/overview%}) to improve performance.


