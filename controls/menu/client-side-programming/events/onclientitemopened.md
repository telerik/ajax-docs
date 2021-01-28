---
title: OnClientItemOpened
page_title: OnClientItemOpened - RadMenu
description: Check our Web Forms article about OnClientItemOpened.
slug: menu/client-side-programming/events/onclientitemopened
tags: onclientitemopened
published: True
position: 8
---

# OnClientItemOpened

## 

The **OnClientItemOpened** client-side event occurs immediately after an item in the menu expands to show its child items.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadMenuItem** that was opened.

* **get_domEvent** returns a reference to the DOM event that caused the opening.

You can use this event to initialize the list of child items:

````ASP.NET	
<script type="text/javascript">
function ItemOpened(menu, args) {
    var d = new Date();
    var item = args.get_item();
    var str = "";
    if (item.get_text() == "Date") {
        str = d.toLocaleDateString();
    } else if (item.get_text() == "Time") {
        str = d.toLocaleTimeString();
    }
    item.get_items().getItem(0).set_text(str);
}
</script>

<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" Flow="Horizontal" OnClientItemOpened="ItemOpened">
    <Items>
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Time">
            <Items>
                <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" />
            </Items>
        </telerik:RadMenuItem>
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Date">
            <Items>
                <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" />
            </Items>
        </telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
````


# See Also

 * [OnClientItemOpening]({%slug menu/client-side-programming/events/onclientitemopening%})

 * [OnClientItemClosed]({%slug menu/client-side-programming/events/onclientitemclosed%})

 * [OnClientItemPopulated]({%slug menu/client-side-programming/events/onclientitempopulated%})

 * [OnClientShown]({%slug menu/client-side-programming/events/onclientshown%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})
