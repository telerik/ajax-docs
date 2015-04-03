---
title: Expanding and Collapsing Items
page_title: Expanding and Collapsing Items | UI for ASP.NET AJAX Documentation
description: Expanding and Collapsing Items
slug: panelbar/radpanelbar-items/expanding-and-collapsing-items
tags: expanding,and,collapsing,items
published: True
position: 1
---

# Expanding and Collapsing Items



The __ExpandMode__ property affects the way the panel bar responds when users select panel items that have child items. __ExpandMode__ has three possible settings:

* __MultipleExpandedItems__ (the default)

* __SingleExpandedItem__

* __FullExpandedItem__

## MultipleExpandedItems

When __ExpandMode__ is "MultipleExpandedItems", more than one item can be expanded at a time. The panel bar ignores the value of its __Height__ property and resizes as needed to display all expanded items:

![Multiple Expanded Items](images/panelbar_multipleexpandeditems.png)

## Expanding items

Clicking on an unexpanded item (or pressing [ENTER] when the item has focus) causes it to expand. The other panel items in the panel bar are unaffected.

## Collapsing items

Clicking on an expanded item (or pressing [ESC] when the item has focus) causes it to collapse. To prevent an item from being collapsible, you can set its __PreventCollapse__ property to __True__.

## SingleExpandedItem

When __ExpandMode__ is "SingleExpandedItem", only one item can be expanded at a time.

>note There is an exception to this rule. If a panel item has its __PreventCollapse__ property set to __True__ , then the user can expand another item at the same level, and the panel bar will allow both items to be expanded at the same time.
>


The panel bar ignores the value of its __Height__ property and resizes as needed to display all expanded items:

![Single Expanded Item](images/panelbar_singleexpandeditem.png)

## Expanding items

Clicking on an unexpanded item (or pressing [ENTER] when the item has focus) causes it to expand and any other panel item at the same level to collapse.

## Collapsing items

By default, an expanded item can only be collapsed by expanding another item at the same level of the panel bar. (This is true even if another item is expanded because its __PreventCollapse__ property has been set to __True__).

To allow users to collapse items by clicking on them when __ExpandMode__ is "SingleExpandedItem", set the __AllowCollapseAllItems__ property to __True__.

## FullExpandedItem

When __ExpandMode__ is "FullExpandedItem", only one item can be expanded at a time (just like "SingleExpandedItem"). However, in this mode, the panel bar always maintains the height specified by its __Height__ property.

If the panel items are do not fill the entire height, the region for the Level 1 panel items expands to fill the entire height of the panel bar:

![Full Expanded Item](images/panelbar_fullexpandeditem.png)

If the panel items do not fit within the height of the panel bar, the panel bar displays scroll bars:

![Full Expanded Item ScrollBars](images/panelbar_fullexpandeditemscrollbars.png)

>note We strongly recommend the use of __FullExpandedItem__ together with Height property.
>


## Expanding items

## Collapsing items

As with "SingleExpandedItem", an expanded item can only be collapsed by expanding another item at the same level of the panel bar unless the __AllowCollapseAllItems__ property is __True__. When AllowCollapseAllItems is True, users can collapse expanded items by clicking on them (or pressing [ENTER] when they have focus).
