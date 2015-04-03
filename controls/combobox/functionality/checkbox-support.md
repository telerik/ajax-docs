---
title: CheckBox Support
page_title: CheckBox Support | UI for ASP.NET AJAX Documentation
description: CheckBox Support
slug: combobox/functionality/checkbox-support
tags: checkbox,support
published: True
position: 4
---

# CheckBox Support



## Simple CheckBox Support

### CheckBoxes Overview

As of __Q2 2011__, RadComboBox introduces simple CheckBox support. You can enable the CheckBox mode by setting the RadComboBox's __CheckBoxes__ property to "true". When the CheckBox funtionality is enabled, the behavior of the RadComboBox is different than the standard one - the selection of items should be interpreted in terms of checking. The user is now checking items intead of selecting. As a result of this behavior, the events OnClientItemChecking and OnClientItemChecked should be handled instead of OnClientSelectedIndexChanged and OnClientSelectedIndexChanging. The same is valid for the server-side event ItemChecked which should be used instead of SelectedIndexChanged.

>caution Not supported scenarios when CheckBox support is enabled:
>
*  __MarkFirstMatch__ and __Filter__ functionalities are not supported. The reason is that the CheckBox selection is different from the standard RadComboBox's selection - there is no single selected item.
*  __Load On Demand__ functionality is not supported. The reason is that RadComboBox's items loaded on demand are not accessible on the server which is needed for the CheckBox feature.>
![RadCombobox CheckBoxes](images/combobox_checkboxes.png)

### New properties

1. __Checked__ - controls whether a particular item will be checked or not.

1. __CheckedItems__ - a collection property, available both client and server side.

1. __EnableCheckAllItemsCheckBox__ - when set to 'true', a "Check All" CheckBox appears in the drop-down above all the items. It enables check / uncheck-all functionality for the RadComboBox items.

>note "Check All" CheckBox is not a RadComboBox item. It is a functionality implemented entirely on the client and does make a post-back to the server on checked / unchecked events, when AutoPostBack of RadComboBox is set to 'true'.
>


1. __CheckedItemsTexts__ - receives two predefined values:

* __FitInInput__ - default value. When this value is set and the text of the checked items exceeds the width of the intput, it is replaced by __"X items checked"__.

* __DisplayAllInInput__ - the text of all checked items is displayed in the input of the RadComboBox.

1. __DataCheckedField__ - bindable property for the checked state of the RadComboBox's items. It is of type boolean and defines which column from the data source will be used for the checked state of the RadComboBox's item.

### CheckBox related events

Client-side events:

* [OnClientItemChecking]({%slug combobox/client-side-programming/events/onclientitemchecking%}) - occurs when a particular item is about to be checked. This event could be canceled.

* [OnClientItemChecked]({%slug combobox/client-side-programming/events/onclientitemchecked%}) - occurs when a particular item is checked.

Server-side events:

* [ItemChecked]({%slug combobox/server-side-programming/itemchecked%}) - occurs when a particular item is checked. In order for this event to be fired, __AutoPostBack__ property should be set to __True__.

### Functionality

The text of the checked items is shown in the input of the RadComboBox, separated by commas. When the text exceeds the width of the input, it is replaced by __"X items checked"__ where X denotes the number of items being checked, unless the __CheckedItemsTexts__ property is set to __DisplayAllInInput__. When all of the items are checked, __"All items checked"__ message appears in the input.

In order to access the checked items on the client-side use the [get_checkedItems()]({%slug combobox/client-side-programming/objects/radcombobox-object%}) method of the RadComboBox's client-side object.

When working with the RadComboBox on the server-side note that the __SelectedValue__ property is empty, because there is no single selected item. If you want to access the values of the checked items the aforementioned __CheckedItems__ property should be used.

The newly added messages as "All items checked", "X items checked" and "Check All" could be localized.

# See Also

 * [Checkboxes Demo](http://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/checkboxes/defaultcs.aspx)

 * [Configurator Demo](http://demos.telerik.com/aspnet-ajax/combobox/examples/configurator/defaultcs.aspx)
