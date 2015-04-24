---
title: OnClientDropDownClosing
page_title: OnClientDropDownClosing | RadDropDownList for ASP.NET AJAX Documentation
description: OnClientDropDownClosing
slug: dropdownlist/client-side-programming/events/onclientdropdownclosing
tags: onclientdropdownclosing
published: True
position: 1
---

# OnClientDropDownClosing



## 

The **OnClientDropDownClosing** client-side event occurs before the drop-down list closes.

The event handler receives two parameters:

1. The instance of the DropDownList firing the event.

2. An eventArgs parameter containing the following methods:

	* **set_cancel** lets you prevent the drop-down from closing.

The following example uses the **OnClientDropDownClosing** event to prevent the drop-down list from closing if the prompt item is selected:

````ASPNET
<script type="text/javascript">
    function OnClientDropDownClosing(sender, eventArgs) {
        if (sender.get_selectedItem().get_text() == "Select An Item") {
            eventArgs.set_cancel(true);
        }
        else {
            eventArgs.set_cancel(false);
        }
    }
</script>

<telerik:RadDropDownList runat="server" ID="RadDropDownList1" OnClientDropDownClosing="OnClientDropDownClosing">
    <Items>
        <telerik:DropDownListItem runat="server" Text="Select An Item" />
        <telerik:DropDownListItem runat="server" Text="Item 1" />
        <telerik:DropDownListItem runat="server" Text="Item 2" />
        <telerik:DropDownListItem runat="server" Text="Item 3" />
    </Items>
</telerik:RadDropDownList>
````


