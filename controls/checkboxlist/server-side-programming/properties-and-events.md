---
title: Properties and Events
page_title: Properties and Events - RadCheckBoxList
description: Check our Web Forms article about Properties and Events.
slug: checkboxlist/server-side-programming/properties-and-events
tags: properties,and,events
published: True
position: 0
---

# Properties and Events

## RadCheckBoxList common features (properties)

| Property | Description |
| ------ | ------ |
| **AccessKey** |Specifies the access key that triggers the functionality of the first button in the list. |
| **AriaSettings** |Gets the object that controls the Wai-Aria settings applied on the control's element.|
| **AppendDataBoundItems** |Gets or sets a value that indicates whether list items are cleared before data binding.|
| **AutoPostBack** |Specifies if change of the checkbox list should initiate a postback.|
| **CausesValidation** |Gets or sets a value indicating whether validation is performed when the checkbox list gets changed.|
| **ClientEvents** |Inline property of type CheckBoxClientEvents, which gets or sets the client event handlers attached to the control. |
| **CssClass** |Gets or sets the CSS class applied to the element of the control. |
| **DataSource** |Gets or sets the object from which the data-bound control retrieves its list of data items. |
| **DataSourceID** |Gets or sets the ID of the control from which the data-bound control retrieves its list of data items.|
| **DataBindings** |Inline property of type CheckBoxListBindings Gets or sets the databinding configuration of the control|
| **EnableAriaSupport** |When set to true enables support for WAI-ARIA|
| **Enabled** |Gets or sets a value indicating whether the Web server control is enabled. |
| **Height** |Gets or sets the height of the Web server control. |
| **KeyboardNavigationSettings** |Define keyboard shortcut to focus the first list item.|
| **Items** |Gets the collection of ButtonListItem items in the list control. An item has Text, Value, Selected and Enabled properties.|
| **OnSelectedIndexChanged** |Raises the SelectedIndexChanged event. This allows you to provide a custom handler for the event. |
| **OnItemDataBound** |Raises the ItemDataBound event when each item is data bound. This allows you to provide a custom handler for the event.|
| **OnItemCreated** |Raises the ItemCreated event when an item is created. This allows you to provide a custom handler for the event. |
| **Layout** |Gets or sets the layout in which the checkboxes are rendered. Possible values are Flow, OrderedList, UnorderedList. OrderedList and UnorderedList do not support Horizontal Direction and Columns. |
| **Columns** |Gets or sets the number of columns to display in the RadCheckBox control, when the layout is Flow. |
| **Direction** |Gets or sets the direction in which the checkboxes within the group are displayed. |
| **ItemCount** |Gets the number of list items in the RadCheckBox control. |
| **SelectedIndex** |Gets or sets the lowest ordinal index of the selected items in the list. |
| **SelectedIndices** |Gets a collection of all selected checkboxes by indices. |
| **SelectedItem** |Gets or sets the selected item with the lowest index in the list control. |
| **SelectedItems** |Gets a collection of all selected checkbox items. |
| **SelectedValue** |Gets or sets the value of the selected item in the list control, or selects the single item in the list control that contains the specified value. |
| **SelectedValues** |Gets a collection of all selected checkboxes by values.|
| **TabIndex** |Gets or sets the tab index of the Web server control. Applied on each checkbox.|
| **ToolTip** |Gets or sets the text displayed when the mouse pointer hovers over the Web server control. |
| **ValidationGroup** |Gets or sets the group of controls for which the Button control causes validation when it posts back to the server |
| **Visible** |Gets or sets a value that indicates whether a server control is rendered as UI on the page. |
| **Width** |Specifies the width of the button |


## Server - side Events:

| Property | Description |
| ------ | ------ |
| **SelectedIndexChanged** |Raised when the selected item is changed.|
| **ItemDataBound** |Raised when the **RadCheckBoxList** performs a data bound.|
| **ItemCreated** |Raised when an item is created in the Items collection of **RadCheckBoxList**.|

