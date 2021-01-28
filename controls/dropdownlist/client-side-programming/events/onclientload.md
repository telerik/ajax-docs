---
title: OnClientLoad
page_title: OnClientLoad - RadDropDownList
description: Check our Web Forms article about OnClientLoad.
slug: dropdownlist/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 7
---

# OnClientLoad



## 

The **OnClientLoad** client-side event occurs after the DropDownList has been fully initialized on the client-side.

The event handler receives one parameter:

1. The DropDownList instance firing the event.

This event is helpful if you need to get the client-side instance of the DropDownList when it is embedded in other controls. Hook the **OnClientLoad** event and get the client-side instance of the DropDownList as demonstrated in the example below. This technique can be used to retrieve the DropDownList instance for use elsewhere.

````ASPNET
<script type="text/javascript">
    function OnClientLoadHandler(sender) {
        var dropdownlist;
        dropdownlist = sender;
    }
</script>
<telerik:RadDropDownList
    ID="RadDropDownList1"
    runat="server"
    OnClientLoad="OnClientLoadHandler">
</telerik:RadDropDownList>
````



>caution This technique may not work when AJAX is used. The asynchronous requests may interfere with the **OnClientLoad** event.
>


This event cannot be cancelled.
