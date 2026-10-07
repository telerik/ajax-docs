---
title: Rebind Grid with EnableViewState = false
page_title: Rebind Grid with EnableViewState = false - RadGrid
description: Learn how to refresh RadGrid after a command or external postback when EnableViewState is disabled, using NeedDataSource and Rebind().
slug: grid/performance/rebind-grid-with-enableviewstate-=-false
components: ["grid"]
tags: grid,rebind,enableviewstate,needdatasource,databinding
published: True
position: 5
---

# Rebind RadGrid when EnableViewState is disabled

When **EnableViewState** is `False`, RadGrid must recreate its items and data source during the page lifecycle. This article explains the event sequence after a grid command and shows how to rebind the grid from an external control.

The example uses a delete command. Other operations use different command events, such as **UpdateCommand**, **InsertCommand**, paging, sorting, or grouping events.

## Event sequence after a delete command

Assign the data source in the **NeedDataSource** handler. With ViewState disabled, the relevant events for a delete occur in this order:

1. **ItemCreated**: The grid creates the command item.

2. **Page_Load**.

3. **NeedDataSource**: The grid recreates its data-bound items.

4. **ItemCreated** and **ItemDataBound** run for each data item.

5. **ItemCommand** with `CommandName="Delete"`.

6. **DeleteCommand**.

7. **ItemCreated** and **ItemDataBound** run again when the grid recreates its items.

8. **Page_PreRender**.

>note Recreate the grid in **NeedDataSource** exactly as it was when the grid was bound on the previous request. The command operation does not raise a second **NeedDataSource** event; the grid recreates its items after the command.

## Rebind from an external control

To rebind **RadGrid** from an external control, set the grid **DataSource** property to `null` or `Nothing`, then call the **Rebind()** method. With ViewState disabled, clearing the data source before calling **Rebind()** makes **NeedDataSource** fire. Calling **Rebind()** without first clearing the data source does not raise **NeedDataSource**; the grid recreates its items and raises **ItemCreated** and **ItemDataBound** instead.

> caption Rebind RadGrid after an external button postback

````C#
protected void MyButton_Click(object sender, EventArgs e)
{
    // Perform the operation that changes the underlying data here.
    RadGrid1.DataSource = null;
    // Clearing DataSource makes NeedDataSource run during Rebind().
    RadGrid1.Rebind();
}
````
````VB
Protected Sub MyButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles MyButton.Click
    ' Perform the operation that changes the underlying data here.
    RadGrid1.DataSource = Nothing
    ' Clearing DataSource makes NeedDataSource run during Rebind().
    RadGrid1.Rebind()
End Sub
````

## See Also

- [Grid Performance Optimizations]({%slug grid/performance/grid-performance-optimizations%})
- [Optimizing ViewState usage]({%slug grid/performance/optimizing-viewstate-usage%})

