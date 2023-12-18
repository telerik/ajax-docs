---
title: Exclude single group Footer from Grid
description: Follow along to learn how to exclude single group footer from RadGrid.
type: how-to
page_title: Exclude single group Footer from Grid
slug: grid-exclude-single-group-footer
position: 
tags: radgrid, custom, gooter, group, group footer
ticketid: 1633759
res_type: kb
---


## Description

Sometimes one might want to exclude a group footer when the associated group has only one item.

!["Example figure with excluded single group footer"](images/grid-exclude-single-footer.png "Example figure with excluded single group footer")

## Solution

1. On the **ItemDataBound** event handler, check for how many child items are there in a certain group.
1. If there is only one child item, add the **hidden** CSS class.

Example

````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridGroupFooterItem)
    {
        GridGroupFooterItem groupFooterItem = (GridGroupFooterItem)e.Item;  // Get a reference to the footer item
        GridGroupHeaderItem groupHeaderItem = groupFooterItem.GroupHeaderItem; // Get a reference to the header item
        GridItem[] groupItems = groupHeaderItem.GetChildItems(); // Get the children elements of each grouped items

        if (groupItems.Count() < 2)
            groupFooterItem.CssClass = "hidden";
    }
}
````

````CSS
<style>
    .RadGrid .rgMasterTable .rgFooter.hidden {
        display: none;
    }
</style>
````
 