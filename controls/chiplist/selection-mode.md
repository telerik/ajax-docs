---
title: Selection Mode
page_title: ChipList Selection Mode
description: "Learn how to set different selection modes for the Telerik WebForms ChipList component."
slug: chiplist/selection-mode
tags: chiplist,selection mode
published: True
position: 4
---

# Selection Mode

The ChipList provides options for setting its selection mode that will either prevent selecting the Chip items, allow selecting only one Chip item at a time, or allow selecting them all at the same time.

This option can be controlled through the `Selectable` property. The available options are:

* [`None`](#none-selection) (default)
* [`Single`](#single-selection)
* [`Multiple`](#multiple-selection)

## None Selection

The `None` selection mode disables the Chip selection.

!["ChipList Selection Mode None"](images/chiplist-selection-mode-none.gif "ChipList Selection Mode None")

Example

````ASP.NET
<telerik:RadChipList runat="server" Selectable="None">
    <Items>
        <telerik:ChipListItem Label="Chip 1"  />
        <telerik:ChipListItem Label="Chip 2"  />
        <telerik:ChipListItem Label="Chip 3"  />
    </Items>
</telerik:RadChipList>
````

## Single Selection

The `Single` selection mode enables selection for only one Chip at a time.

!["ChipList Selection Mode Single"](images/chiplist-selection-mode-single.gif "ChipList Selection Mode Single")

Example

 ````ASP.NET
<telerik:RadChipList runat="server" Selectable="Single">
    <Items>
        <telerik:ChipListItem Label="Chip 1"  />
        <telerik:ChipListItem Label="Chip 2"  />
        <telerik:ChipListItem Label="Chip 3"  />
    </Items>
</telerik:RadChipList>
````

## Multiple Selection

The `Multiple` selection mode enables selection for one or more Chips at the same time.

!["ChipList Selection Mode Multiple"](images/chiplist-selection-mode-multiple.gif "ChipList Selection Mode Multiple")

Example

````ASP.NET
<telerik:RadChipList runat="server" Selectable="Multiple">
    <Items>
        <telerik:ChipListItem Label="Chip 1"  />
        <telerik:ChipListItem Label="Chip 2"  />
        <telerik:ChipListItem Label="Chip 3"  />
    </Items>
</telerik:RadChipList>
````

## Next Steps

- [Removable]({%slug chiplist/removable%})
- [Client-side Programming]({%slug chiplist/client-side-programming/overview%})
- [Server-side Programming]({%slug chiplist/server-side-programming/overview%})

## See Also

- [Overview]({%slug chiplist/overview%})
- [Getting Started with the ChipList]({%slug chiplist/getting-started%})
- [Change the Appearance]({%slug chiplist/appearance%})
- [Customize the ChipList]({%slug chiplist/customization%})
- [Removable]({%slug chiplist/removable%})
- [Client-side Programming]({%slug chiplist/client-side-programming/overview%})
- [Server-side Programming]({%slug chiplist/server-side-programming/overview%})

 