---
title: Accessing Items
page_title: Accessing Items Server-Side | Telerik UI for ASP.NET AJAX
description: Accessing Items Server-Side
slug: grid/server-side-programming/accessing-items
tags: 
published: True
position: 0
---

# Accessing Items Server-Side

## Accessing Rows

````C#
protected void Page_PreRender(object sender, EventArgs e)
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

