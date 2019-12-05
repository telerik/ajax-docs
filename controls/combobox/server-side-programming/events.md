---
title: Events
page_title: Events | RadComboBox for ASP.NET AJAX Documentation
description: Events
slug: combobox/server-side-programming/events
tags: events
published: True
position: 0
---

# 

**RadComboBox** provides many built-in features which can be enabled using a single property. You can find a detailed list of the available configuration options and their respective descriptions here:

[RadComboBox API Reference](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadComboBox)

This article provides a summary of the most popular events used in real business cases. Default inherited events like Init, Load and PreRender are not mentioned explicitly since they do not provide additional custom arguments like the other events do. However, they still can have their place in some implementations.

## Events

**RadComboBox** supports a number of server-side events that let you respond to events with complex actions that can't be performed in client-side code.

* [ItemsRequested]({%slug combobox/server-side-programming/itemsrequested%}) occurs when the load-on-demand mechanism needs to add items to the combobox.

* [ItemCreated]({%slug combobox/server-side-programming/itemcreated%}) occurs when a new item is added to the Items collection.

* [ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%}) occurs for each item when it is being bound to a data value.

* [SelectedIndexChanged]({%slug combobox/server-side-programming/selectedindexchanged%}) occurs when the selected item has just changed.

* [TextChanged]({%slug combobox/server-side-programming/textchanged%}) occurs when the text in the input area has been changed.

* [ItemChecked]({%slug combobox/server-side-programming/itemchecked%}) occurs when a checkbox is checked/unchecked.

* [CheckAllCheck]({%slug combobox/server-side-programming/checkallcheck%}) occurs when the check all items check box is changed.

>note The **SelectedIndexChanged** , **TextChanged** and **OnCheckAllCheck** events do not fire unless you set the **AutoPostBack** property to **True** .
>

## Practical Use of the Individual Events

Although every event has its own dedicated article, in this section you can find a summary for their practical usage.

#### Data-binding

Usually, in every day applications, the combo components do not have so many options to choose from. But in some cases they need to present the user with a lot of choices. In these scenarios the developer can choose to use the **EnableLoadOnDemand** or **EnableAutomaticLoadOnDemand** features. And **ItemsRequested** comes into play right at this place.

The **ItemDataBound** event is similar to the other controls. It is raised for every item of the combo and you can then execute custom logic per every option. Usually, this includes some type of conditional statements.

And while the **ItemDataBound** event is raised only while databinding, **ItemCreated** on the other hand is raised on every regular PostBack action which can have its use in some scenarios.

#### Value Change   

The default event here is the one and only **SelectedIndexChanged**. However, when the **AllowCustomText** property (or other similar feature which enforces this property) is switched on, you can also make avail of the **TextChanged** event.

#### CheckBox Events

**RadComboBox** also provides built-in CheckBoxes functionality. They also have their related events. **ItemChecked** corresponds and is raised when the user checks a single item, while the **CheckAllCheck** is raised when the top CheckBox is checked to mark all of the combobox options.


# See Also

 * [Events]({%slug combobox/client-side-programming/events%})
