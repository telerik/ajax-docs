---
title: Hiding the Expand/Collapse Images
page_title: Hiding the Expand/Collapse Images | RadGrid for ASP.NET AJAX Documentation
description: Hiding the Expand/Collapse Images
slug: grid/how-to/grouping/hiding-the-expand-and-collapse-images
previous_url: grid/functionality/grouping/how-to/hiding-the-expand-and-collapse-images
tags: hiding,the,expand/collapse,images
published: True
position: 5
---

# Hiding the Expand/Collapse Images



You can disable the **GridGroupSplitterColumn** so that users can't collapse the groups in a grid. The following steps describe how to accomplish this:

1. Set the grid's **ClientSettings.Resizing.AllowColumnResize** property to *True*.
2. Add a **ColumnCreated** event handler to the grid. In the **ColumnCreated** event handler, when the column is a **GridGroupSplitterColumn**
	* Set its *Width* property to *1px*.
	* Set its *Resizable *property to *False**.**
3. Remove the unwanted button on **ItemCreated**
4. (**Optional**) If desired, change the style of the group header items (based on the group level) in the **ItemDataBound** event handler.

Note that if the **GroupSplitterColumn** cells have side paddings (and they do when using embedded skins), you need to remove those paddings, otherwise the column cells will remain visible in *IE7* and below. One way to remove the paddings is to use **HeaderStyle-CssClass** and **ItemStyle-CssClass**, or (if using *RadGrid 2009.1+*) to use the native *CSS* class for the **GroupSplitterColumn** cells (note that a custom *CSS* class for the *RadGrid* is used, otherwise you will remove the paddings from all *RadGrids* on the page (or website):

````ASP.NET
.rgGroupCol
{
    padding-left: 0 !important;
    padding-right: 0 !important;
}
````
````C#
protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
{
    if (e.Column is GridGroupSplitterColumn)
    {
        e.Column.HeaderStyle.Width = Unit.Pixel(1);
        e.Column.HeaderStyle.Font.Size = FontUnit.Point(1);
        e.Column.ItemStyle.Width = Unit.Pixel(1);
        e.Column.ItemStyle.Font.Size = FontUnit.Point(1);
        e.Column.Resizable = false;
    }
}
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridGroupHeaderItem)
    {
        (e.Item as GridGroupHeaderItem).Cells[0].Controls.Clear();
    }
}
````
````VB
Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs)
    If TypeOf e.Column Is GridGroupSplitterColumn Then
        e.Column.HeaderStyle.Width = Unit.Pixel(1)
        e.Column.HeaderStyle.Font.Size = FontUnit.Point(1)
        e.Column.ItemStyle.Width = Unit.Pixel(1)
        e.Column.ItemStyle.Font.Size = FontUnit.Point(1)
        e.Column.Resizable = False
    End If
End Sub
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridGroupHeaderItem Then
        TryCast(e.Item, GridGroupHeaderItem).Cells(0).Controls.Clear()
    End If
End Sub
````


````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridGroupHeaderItem)
    {
        GridGroupHeaderItem item = e.Item as GridGroupHeaderItem;
        if (item.GroupIndex.Split('_').Length == 4)
        {
            e.Item.BackColor = Color.Beige;
        }
        else if (item.GroupIndex.Split('_').Length == 3)
        {
            e.Item.BackColor = Color.Bisque;
        }
        else if (item.GroupIndex.Split('_').Length == 2)
        {
            e.Item.BackColor = Color.AliceBlue;
        }
        else if (item.GroupIndex.Split('_').Length == 1)
        {
            e.Item.BackColor = Color.Coral;
        }
    }
}
````
````VB
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridGroupHeaderItem Then
        Dim item As GridGroupHeaderItem = CType(e.Item, GridGroupHeaderItem)
        If item.GroupIndex.Split("_").Length = 4 Then
            e.Item.BackColor = Color.Beige
        ElseIf item.GroupIndex.Split("_").Length = 3 Then
            e.Item.BackColor = Color.Bisque
        ElseIf item.GroupIndex.Split("_").Length = 2 Then
            e.Item.BackColor = Color.AliceBlue
        ElseIf item.GroupIndex.Split("_").Length = 1 Then
            e.Item.BackColor = Color.Coral
        End If
    End If
End Sub
````

