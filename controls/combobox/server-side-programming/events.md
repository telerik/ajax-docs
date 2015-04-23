---
title: Events
page_title: Events | RadComboBox for ASP.NET AJAX Documentation
description: Events
slug: combobox/server-side-programming/events
tags: events
published: True
position: 0
---

# Events



## 

**RadComboBox** supports a number of server-side events that let you respond to events with complex actions that can't be performed in client-side code.

* [ItemsRequested]({%slug combobox/server-side-programming/itemsrequested%}) occurs when the load-on-demand mechanism needs to add items to the combobox.

* [ItemCreated]({%slug combobox/server-side-programming/itemcreated%}) occurs when a new item is added to the Items collection.

* [ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%}) occurs for each item when it is being bound to a data value.

* [SelectedIndexChanged]({%slug combobox/server-side-programming/selectedindexchanged%}) occurs when the selected item has just changed.

* [TextChanged]({%slug combobox/server-side-programming/textchanged%}) occurs when the text in the input area has been changed.

* [CheckAllCheck]({%slug combobox/server-side-programming/checkallcheck%}) occurs when the check all items check box is changed.

>note The **SelectedIndexChanged** , **TextChanged** and **OnCheckAllCheck** events do not fire unless you set the **AutoPostBack** property to **True** .
>


# See Also

 * [Events]({%slug combobox/client-side-programming/events%})
