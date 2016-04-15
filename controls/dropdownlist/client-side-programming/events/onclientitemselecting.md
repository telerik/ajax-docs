---
title: OnClientItemSelecting
page_title: OnClientItemSelecting | RadDropDownList for ASP.NET AJAX Documentation
description: OnClientItemSelecting
slug: dropdownlist/client-side-programming/events/onclientitemselecting
tags: onclientitemselecting
published: True
position: 6
---

# OnClientItemSelecting



## 

The **OnClientItemSelecting** client-side event occurs before a certain item is about to be selected.

The event handler receives two parameters:

1. The instance of the DropDownList firing the event.

2. An eventArgs parameter containing the following methods:

	* **get_item()** returns the item that is about to be selected.

	* **set_cancel** lets you prevent the drop-down from closing.

The following example uses the **OnClientItemSelecting** event to prevent the selection if the prompt item is about to be selected:

````ASPNET
<script type="text/javascript">
    function OnClientItemSelecting(sender, eventArgs) {
        if (eventArgs.get_item().get_text() == "Select An Item") {
            eventArgs.set_cancel(true);
        }
        else {
            eventArgs.set_cancel(false);
        }
    }
</script>

<telerik:RadDropDownList RenderMode="Lightweight" runat="server" ID="RadDropDownList1" OnClientItemSelecting="OnClientItemSelecting">
    <Items>
        <telerik:DropDownListItem runat="server" Text="Select An Item" />
        <telerik:DropDownListItem runat="server" Text="Item1" />
        <telerik:DropDownListItem runat="server" Text="Item 2" />
        <telerik:DropDownListItem runat="server" Text="Item 3" />
    </Items>
</telerik:RadDropDownList>
````


