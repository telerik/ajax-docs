---
title: Accessing Rows
page_title: Accessing rows Server-Side - RadGrid | Telerik UI for ASP.NET AJAX
description: Accessing Grid Rows on server
slug: grid/accessing-values-and-controls/server-side/accessing-rows
published: True
position: 2
---

# Accessing Grid Rows Server-Side

## Accessing rows from external Controls

Iterating through the Items collection on a Button's click

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    foreach (GridDataItem dataItem in RadGrid1.Items)
    {

    }

    foreach (GridDataItem dataItem in RadGrid1.MasterTableView.Items)
    {

    }
}
````

## Accessing Edit Forms

### Inserting

````C#
private void SomeMethod()
{
    if (RadGrid1.MasterTableView.IsItemInserted)
    {
        GridEditableItem insertItem = RadGrid1.MasterTableView.GetInsertItem();
    }
}
````


### Editing

Items in edit mode are contained in the [EditItems](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadGrid#edititems) property of the [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadGrid) object.

````C#
private void SomeMethod()
{
    GridItemCollection editItems = RadGrid1.EditItems;

    foreach (GridEditableItem editItem in editItems)
    {

    }
}
````

