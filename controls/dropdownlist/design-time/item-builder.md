---
title: Item Builder
page_title: Item Builder | RadDropDownList for ASP.NET AJAX Documentation
description: Item Builder
slug: dropdownlist/design-time/item-builder
tags: item,builder
published: True
position: 2
---

# Item Builder



The **RadDropDownList Item Builder** lets you define items **inline** (in the aspx page).

## RadDropDownList Item Builder

There are two ways to bring up the RadDropDownList Item Builder:

* From the **RadDropDownList** [ Smart Tag ]({%slug dropdownlist/design-time/smart-tag%}), click on the **Build RadDropDownList** link.

* Right-click on the **RadDropDownList** control and select **Build RadDropDownList** from its pop-up menu.

You can add, edit, delete and re-arrange items:


|  **Button**  |  **Description**  |
| ------ | ------ |
|![dropdownlist itembuilder additem](images/dropdownlist_itembuilder_additem.png)|Click the Add button to append a DropDownListItem to the list.|
|![dropdownlist itembuilder moveitem](images/dropdownlist_itembuilder_moveitem.png)|Use the up and down arrow buttons to rearrange the items in the list. This order determines the order the items appear in the drop-down list.|
|![dropdownlist itembuilder removeitem](images/dropdownlist_itembuilder_removeitem.png)|Select an item and click the Delete button to delete it from the list.|
|![dropdownlist designtime sorting](images/dropdownlist_designtime_sorting.png)|Select individual items to change their properties using the property pane on the right of the **RadDropDownList Item builder** . Use the sorting controls above the property paneto sort the properties by category or alphabetically.|

![dropdownlist itembuilder](images/dropdownlist_itembuilder.png)

## RadDropDownListItem Properties

For each **RadDropDownListItem**,

* **Text** is the string that the user sees for the item in the drop-down list.

* **Value** is the value associated with the item. It determines the value of the dropdownlist's **SelectedValue** property when the item is selected.

* **ToolTip** is a string that appears in the tooltip window when the user hovers the mouse over the item in the drop-down list.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* **Selected** lets you control which item is initially selected when the **RadDropDownList** first appears.

>note Only one item can be selected at a time. If you set **Selected** to **True** for an item, the **Selected** property of all other items is automatically set to **False** .
>


* **Enabled** determines whether the user can select the item from the drop-down list.

* **CssClass** is the name of a CSS style to be applied to the dropdownlist item. The style can be declared in the CSS file of the applied [skin]({%slug combobox/appearance-and-styling/skins%}).
