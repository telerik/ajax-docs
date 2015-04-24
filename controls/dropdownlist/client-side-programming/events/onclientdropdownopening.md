---
title: OnClientDropDownOpening
page_title: OnClientDropDownOpening | RadDropDownList for ASP.NET AJAX Documentation
description: OnClientDropDownOpening
slug: dropdownlist/client-side-programming/events/onclientdropdownopening
tags: onclientdropdownopening
published: True
position: 3
---

# OnClientDropDownOpening



## 

The **OnClientDropDownOpening** client-side event occurs before the drop-down list opens.

The event handler receives two parameters:

1. The instance of the DropDownList firing the event.

2. An eventArgs parameter containing the following methods:

	* **set_cancel** lets you prevent the drop-down from opening.

The example below shows how to prevent the drop-down list from opening when there are no items to be displayed:

````ASPNET
<script language="javascript" type="text/javascript">
    function OnClientDropDownOpening(sender, eventArgs) {
        if (sender.get_items().get_count() == 0)
            eventArgs.set_cancel(true);
    }
</script>
<telerik:RadDropDownList
    ID="RadDropDownList1"
    runat="server"
    OnClientDropDownOpening="OnClientDropDownOpening">
</telerik:RadDropDownList>
````


