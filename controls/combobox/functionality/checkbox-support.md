---
title: CheckBox Support
page_title: CheckBox Support | RadComboBox for ASP.NET AJAX Documentation
description: CheckBox Support
slug: combobox/functionality/checkbox-support
tags: checkbox,support
published: True
position: 4
---

# CheckBox Support



## Simple CheckBox Support

### CheckBoxes Overview

As of **Q2 2011**, RadComboBox introduces simple CheckBox support. You can enable the CheckBox mode by setting the RadComboBox's **CheckBoxes** property to "true". When the CheckBox funtionality is enabled, the behavior of the RadComboBox is different than the standard one - the selection of items should be interpreted in terms of checking. The user is now checking items intead of selecting. As a result of this behavior, the events OnClientItemChecking and OnClientItemChecked should be handled instead of OnClientSelectedIndexChanged and OnClientSelectedIndexChanging. The same is valid for the server-side event ItemChecked which should be used instead of SelectedIndexChanged.

>caution Not supported scenarios when CheckBox support is enabled:
>
*  **MarkFirstMatch** and **Filter** functionalities are not supported. The reason is that the CheckBox selection is different from the standard RadComboBox's selection - there is no single selected item.
*  **Load On Demand** functionality is not supported. The reason is that RadComboBox's items loaded on demand are not accessible on the server which is needed for the CheckBox feature.
>

![RadCombobox CheckBoxes](images/combobox_checkboxes.png)

### New properties

1. **Checked** - controls whether a particular item will be checked or not.

2. **CheckedItems** - a collection property, available both client and server side.

3. **EnableCheckAllItemsCheckBox** - when set to 'true', a "Check All" CheckBox appears in the drop-down above all the items. It enables check / uncheck-all functionality for the RadComboBox items.

>note "Check All" CheckBox is not a RadComboBox item. It is a functionality implemented entirely on the client and does make a post-back to the server on checked / unchecked events, when AutoPostBack of RadComboBox is set to 'true'.
>


4. **CheckedItemsTexts** - receives two predefined values:

	* **FitInInput** - default value. When this value is set and the text of the checked items exceeds the width of the intput, it is replaced by **"X items checked"**.

	* **DisplayAllInInput** - the text of all checked items is displayed in the input of the RadComboBox.

5. **DataCheckedField** - bindable property for the checked state of the RadComboBox's items. It is of type boolean and defines which column from the data source will be used for the checked state of the RadComboBox's item.

### CheckBox related events

Client-side events:

* [OnClientItemChecking]({%slug combobox/client-side-programming/events/onclientitemchecking%}) - occurs when a particular item is about to be checked. This event could be cancelled.

* [OnClientItemChecked]({%slug combobox/client-side-programming/events/onclientitemchecked%}) - occurs when a particular item is checked.

Server-side events:

* [ItemChecked]({%slug combobox/server-side-programming/itemchecked%}) - occurs when a particular item is checked. In order for this event to be fired, **AutoPostBack** property should be set to **True**.

### Functionality

The text of the checked items is shown in the input of the RadComboBox, separated by commas. When the text exceeds the width of the input, it is replaced by **"X items checked"** where X denotes the number of items being checked, unless the **CheckedItemsTexts** property is set to **DisplayAllInInput**. When all of the items are checked, **"All items checked"** message appears in the input.

In order to access the checked items on the client-side use the [get_checkedItems()]({%slug combobox/client-side-programming/objects/radcombobox-object%}) method of the RadComboBox's client-side object.

When working with the RadComboBox on the server-side note that the **SelectedValue** property is empty, because there is no single selected item. If you want to access the values of the checked items the aforementioned **CheckedItems** property should be used.

The newly added messages as "All items checked", "X items checked" and "Check All" could be localized.

# See Also

 * [Checkboxes Demo](http://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/checkboxes/defaultcs.aspx)

 * [Configurator Demo](http://demos.telerik.com/aspnet-ajax/combobox/examples/configurator/defaultcs.aspx)
