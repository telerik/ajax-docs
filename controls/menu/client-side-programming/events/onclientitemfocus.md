---
title: OnClientItemFocus
page_title: OnClientItemFocus | RadMenu for ASP.NET AJAX Documentation
description: OnClientItemFocus
slug: menu/client-side-programming/events/onclientitemfocus
tags: onclientitemfocus
published: True
position: 11
---

# OnClientItemFocus

## 

The **OnClientItemFocus** client-side event occurs when an item in the menu receives focus.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following method:

* **get_item** returns a reference to the **RadMenuItem** that received focus.

* **get_domEvent** returns a reference to the DOM event that caused the focusing.

You can use this event to respond when an item receives focus. For example, the following event handler moves focus to the first child when a root level item receives focus:

````ASP.NET
<script type="text/javascript">
function FocusItem(menu, args) {
    var item = args.get_item();
    if (item.get_level() == 0)
        item.focusFirstChild();
}
</script>

<telerik:RadMenu ID="RadMenu1" runat="server" Flow="Horizontal" OnClientItemFocus="FocusItem">
    <Items>
        ...
    </Items>
</telerik:RadMenu>
````

# See Also

 * [OnClientItemBlur]({%slug menu/client-side-programming/events/onclientitemblur%})

 * [OnClientMouseOver]({%slug menu/client-side-programming/events/onclientmouseover%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})
