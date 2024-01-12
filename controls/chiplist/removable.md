---
title: Removable
page_title: ChipList Removable
description: "Learn how to make the items removable in the Telerik WebForms ChipList component."
slug: chiplist/removable
tags: chiplist,removable
published: True
position: 5
---

# Removable

This option will enable the items to be removable when clicking on the remove icon. 

!["Removable Chips"](images/chiplist-removable.png "Removable Chips")

To make the items removable, set the `Removable` property to `true`. Doing so, the ChipList will render a remove icon for the items.

Example

````ASP.NET
<telerik:RadChipList ID="RadChipList1" runat="server" Removable="true">
    <Items>
        <telerik:ChipListItem Label="Chip 1" />
        <telerik:ChipListItem Label="Chip 2" />
        <telerik:ChipListItem Label="Chip 3" />
    </Items>
</telerik:RadChipList>
````

## Next Steps

- [Client-side Programming]({%slug chiplist/client-side-programming/overview%})
- [Server-side Programming]({%slug chiplist/server-side-programming/overview%})

## See Also

- [Overview]({%slug chiplist/overview%})
- [Getting Started with the ChipList]({%slug chiplist/getting-started%})
- [Change the Appearance]({%slug chiplist/appearance%})
- [Customize the ChipList]({%slug chiplist/customization%})
- [Enable Selection]({%slug chiplist/selection-mode%})
- [Client-side Programming]({%slug chiplist/client-side-programming/overview%})
- [Server-side Programming]({%slug chiplist/server-side-programming/overview%})

 