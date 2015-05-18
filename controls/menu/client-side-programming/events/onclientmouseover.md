---
title: OnClientMouseOver
page_title: OnClientMouseOver | RadMenu for ASP.NET AJAX Documentation
description: OnClientMouseOver
slug: menu/client-side-programming/events/onclientmouseover
tags: onclientmouseover
published: True
position: 5
---

# OnClientMouseOver

## 

The **OnClientMouseOver**client-side event occurs when the mouse moves over an item in the menu.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadMenuItem** under the mouse.

* **get_domEvent** returns a reference to the DOM event that caused the mouse movement.

You can use this event to respond when the mouse is over an item:

````ASP.NET
<script type="text/javascript">
    function ShowItem(menu, args) {
        var label = document.getElementById("Label1");
        label.innerText = args.get_item().get_text();
    }
</script>
<telerik:RadMenu ID="RadMenu1" runat="server" Flow="Horizontal" OnClientMouseOver="ShowItem">
    <Items>
        ...
    </Items>
</telerik:RadMenu>
<br />
<br />
<asp:Label ID="Label1" runat="server" Text=""></asp:Label>
````



# See Also

 * [OnClientMouseOut]({%slug menu/client-side-programming/events/onclientmouseout%})

 * [OnClientItemFocus]({%slug menu/client-side-programming/events/onclientitemfocus%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})
