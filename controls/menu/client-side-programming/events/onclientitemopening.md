---
title: OnClientItemOpening
page_title: OnClientItemOpening | RadMenu for ASP.NET AJAX Documentation
description: OnClientItemOpening
slug: menu/client-side-programming/events/onclientitemopening
tags: onclientitemopening
published: True
position: 7
---

# OnClientItemOpening

## 

The **OnClientItemOpening** client-side event occurs when the menu item is about to expand, showing its child items. This event only occurs for menu items that have child items.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadMenuItem** that is about to expand.

* **set_cancel** lets you prevent the menu item from showing its children.

* **get_cancel** returns a boolean value indicating whether the menu item will expand after the event handler exits.

* **get_domEvent** returns a reference to the DOM event that caused the opening.

You can use this event to control when menu items can expand, or customize the child items before the menu expands:

````ASP.NET	
<script type="text/javascript">
function ItemOpening(menu, args) {
    var status = $get("hdCurrentStatus");
    var item = args.get_item();
    if (status.value == "")
        args.set_cancel(true);
    else {
        item.get_item().getItem(0).set_text(status.value);
    }
}
</script>

<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" Flow="Horizontal" OnClientItemOpening="ItemOpening">
    <Items>
        ...
    </Items>
</telerik:RadMenu>
<input type="hidden" id="hdCurrentStatus" />
````



# See Also

 * [OnClientItemOpened]({%slug menu/client-side-programming/events/onclientitemopened%})

 * [OnClientItemClosing]({%slug menu/client-side-programming/events/onclientitemclosing%})

 * [OnClientItemPopulating]({%slug menu/client-side-programming/events/onclientitempopulating%})

 * [OnClientShowing]({%slug menu/client-side-programming/events/onclientshowing%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})
