---
title: OnClientItemClosed
page_title: OnClientItemClosed - RadMenu
description: Check our Web Forms article about OnClientItemClosed.
slug: menu/client-side-programming/events/onclientitemclosed
tags: onclientitemclosed
published: True
position: 10
---

# OnClientItemClosed

## 

The **OnClientItemClosed** client-side event occurs immediately after an item in the menu contracts to hide its child items.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following method:

* **get_item** returns a reference to the **RadMenuItem** that was closed.

* **get_domEvent** returns a reference to the DOM event that caused the closing.

You can use this event to respond when the list of child items closes.

````ASP.NET
<script type="text/javascript">
    function ItemClosed(menu, args) {
        alert("Closing " + args.get_item().get_text());
    }
</script>
<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" Flow="Horizontal" OnClientItemClosed="ItemClosed">
    <Items>
        ...
    </Items>
</telerik:RadMenu>
````

# See Also

 * [OnClientItemClosing]({%slug menu/client-side-programming/events/onclientitemclosing%})

 * [OnClientItemOpened]({%slug menu/client-side-programming/events/onclientitemopened%})

 * [OnClientHidden]({%slug menu/client-side-programming/events/onclienthidden%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})
