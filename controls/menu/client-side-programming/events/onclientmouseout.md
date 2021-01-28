---
title: OnClientMouseOut
page_title: OnClientMouseOut - RadMenu
description: Check our Web Forms article about OnClientMouseOut.
slug: menu/client-side-programming/events/onclientmouseout
tags: onclientmouseout
published: True
position: 6
---

# OnClientMouseOut

## 

The **OnClientMouseOut**client-side event occurs when the mouse moves off an item in the menu.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following method:

* **get_item** returns a reference to the **RadMenuItem** that the mouse just left.

* **get_domEvent** returns a reference to the DOM event that caused the mouse movement.

You can use this event to respond when the mouse moves off an item:

````ASP.NET
<script type="text/javascript">
    function markItem(menu, args) {
        var attributes = args.get_item().get_attributes();
        attributes.setAttribute("visited", "true");
    }
</script>

<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" Flow="Horizontal" OnClientMouseOut="markItem">
    <Items>
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Item 1" visited="false" />
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Item 2" visited="false" />
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Item 3" visited="false" />
    </Items>
</telerik:RadMenu>
````


# See Also

 * [OnClientMouseOver]({%slug menu/client-side-programming/events/onclientmouseover%})

 * [OnClientItemBlur]({%slug menu/client-side-programming/events/onclientitemblur%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})
