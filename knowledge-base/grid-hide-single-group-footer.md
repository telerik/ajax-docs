---
title: Hide footer of groups with one item
description: Follow along to learn how to hide footer of groups with one item RadGrid.
type: how-to
page_title: Hide footer of groups with one item
slug: grid-hide-single-group-footer
position: 
tags: radgrid, custom, footer, group, hide group footer, remove group footer
ticketid: 1633759
res_type: kb
---


## Description

Sometimes one might want to hide a group footer when the associated group has only one item.

!["Example figure with removed single group footer"](images/grid-exclude-single-footer.png "Example figure with removed single group footer")

## Solution

In the **ItemDataBound** event handler, check for how many child items are there in a certain group. If there is only one child item, add the **hidden** CSS class.

Example:

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
````VB
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridGroupFooterItem Then
        Dim groupFooterItem As GridGroupFooterItem = CType(e.Item, GridGroupFooterItem)
        Dim groupHeaderItem As GridGroupHeaderItem = groupFooterItem.GroupHeaderItem
        Dim groupItems As GridItem() = groupHeaderItem.GetChildItems()

        If groupItems.Count() < 2 Then groupFooterItem.CssClass = "hidden"
    End If
End Sub
````

````CSS
<style>
    .RadGrid .rgMasterTable .rgFooter.hidden {
        display: none;
    }
</style>
````
 