---
title: RadComboBox Item Builder
page_title: RadComboBox Item Builder | UI for ASP.NET AJAX Documentation
description: RadComboBox Item Builder
slug: combobox/design-time/radcombobox-item-builder
tags: radcombobox,item,builder
published: True
position: 1
---

# RadComboBox Item Builder



The __RadComboBox Item Editor__ lets you define items __inline__ (in the aspx page).

## RadComboBox Item Editor

There are two ways to bring up the RadComboBox Item Editor:

* From the __RadComboBox__[ Smart Tag ]({%slug combobox/design-time/smart-tag%}), click on the __Build RadComboBox__ link.

* Right-click on the __RadComboBox__ control and select __Build RadComboBox__ from its pop-up menu.

You can add, edit, delete and re-arrange items:


|  __Button__  |  __Description__  |
| ------ | ------ |
|![ComboBox Add Button](images/combobox_addbutton.png)|Click the Add button to append a ComboBoxItem to the list.|
|![ComboBox Up Down Buttons](images/combobox_updownbuttons.png)|Use the up and down arrow buttons to rearrange the items in the list. This order determines the order the items appear in the drop-down list.|
|![ComboBox Delete Button](images/combobox_deleteicon.png)|Select an item and click the Delete button to delete it from the list.|
|![ComboBox Sort Properties](images/combobox_propertysort.png)|Select individual items to change their properties using the property pane on the right of the __RadComboBox Item Editor__ . Use the sorting controls above the property paneto sort the properties by category or alphabetically.|

![combobox additem](images/combobox_additem.png)

## RadComboBoxItem Properties

For each __RadComboBoxItem__,

* __Text__ is the string that the user sees for the item in the drop-down list.

* __ToolTip__ is a string that appears in the tooltip window when the user hovers the mouse over the item in the drop-down list.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* __Value__ is the value associated with the item. It determines the value of the combobox's __SelectedValue__ property when the item is selected. By default it is equal to the __Text__ of the item.

* __Selected__ lets you control which item is initially selected when the __RadComboBox__ first appears.

>note Only one item can be selected at a time. If you set __Selected__ to __True__ for an item, the __Selected__ property of all other items is automatically set to __False__ .
>


* __Enabled__ determines whether the user can select the item from the drop-down list.

* __CssClass__ is the name of a CSS style to be applied to the combobox item. The style can be declared in the CSS file of the applied [skin]({%slug combobox/appearance-and-styling/skins%}).

>tip You can also customize the appearance of items using[templates]({%slug combobox/templates/overview%}).
>


# See Also

 * [Overview]({%slug combobox/radcombobox-items/overview%})
