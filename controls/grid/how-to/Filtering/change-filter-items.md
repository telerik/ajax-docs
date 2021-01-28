---
title: Change Filter Items
page_title: Change Filter Items - RadGrid
description: Check our Web Forms article about Change Filter Items.
slug: grid/how-to/filtering/change-filter-items
previous_url: controls/grid/functionality/filtering/how-to/change-filter-items
tags: change,filter,items
published: True
position: 3
---

# Change Filter Items



##

You can change the appearance of the items in the filtering item (the filter textbox and filter menu image). For example, you may want to change the height and width of the default filter textbox to prevent it from wrapping text or hiding the filter menu image. You can change the url for the default filter menu image to use your own custom image.

In case you would like to set the width for the filter control declaratively, use the **FilterControlWidth** property of the corresponding grid column to define the width dimension of the filter input.For programmatic solution or when you would like to alter the settings for the filtering image:

1. Create a handler for the grid's **ItemCreated** event.

1. In the **ItemCreated** event handler, check whether the item is of type **GridFilteringItem**.

1. Retrieve a reference to the **TextBox** inside this item for the column of interest (or for each column in turn).

1. Set the properties of the **TextBox**.

The following example illustrates this technique to change the width of the text box:



````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridFilteringItem)
    {
        GridFilteringItem filteringItem = e.Item as GridFilteringItem;
        //set dimensions for the filter textbox  
        TextBox box = filteringItem["ContactName"].Controls[0] as TextBox;
        box.Width = Unit.Pixel(30);
    }
}
````
````VB
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated
    If TypeOf e.Item Is GridFilteringItem Then
        Dim filteringItem As GridFilteringItem = CType(e.Item, GridFilteringItem)
        'set dimensions for the filter textbox   
        Dim box As TextBox = CType(filteringItem("ContactName").Controls(0), TextBox)
        box.Width = Unit.Pixel(30)
    End If
End Sub
````


If you want to show a tooltip for the filter control, you can use the **FilterControlTooltip** property. Note that it is applicable for columns inheriting from GridBoundColumn.

In order to change the filtering image or its tooltip, use the **FilterImageUrl** or **FilterImageToolTip** properties of the corresponding grid column (either declaratively or programmatically).

How to customize auto-generated/declarative columns in RadGrid at runtime you can learn from [this topic]({%slug grid/columns/using-columns%}) (paragraph Customizing columns programmatically).
