---
title: Reset RadGrid state
description: Reset the grid's state
type: how-to
page_title: Reset the grid's state - RadGrid
slug: grid-reset-state
res_type: kb
---

## DESCRIPTION

When you want your grid to return to its clean and tidy initial state, you can clear its applied settings manually. If you are using integration with RadPersistenceFramework and want to clear the grid state initially depending on some condition.

## SOLUTION
  
#### The Magic

The following method contains the logic that will clear the Grid's state of major functionalities

````C#
private void ResetGridState(RadGrid grid)
{
    // Sorting
    grid.MasterTableView.SortExpressions.Clear();
    // Grouping
    grid.MasterTableView.GroupByExpressions.Clear();
    // Paging
    grid.CurrentPageIndex = 0;
    // Editing
    grid.EditIndexes.Clear();
    // Inserting
    grid.MasterTableView.IsItemInserted = false;
    // Filtering
    foreach (GridColumn column in grid.MasterTableView.RenderColumns)
    {
        column.CurrentFilterFunction = GridKnownFunction.NoFilter;
        column.CurrentFilterValue = string.Empty;

           column.AndCurrentFilterFunction = GridKnownFunction.NoFilter;
           column.AndCurrentFilterValue = string.Empty;
        // for CheckList and HeaderContext filtering
        column.ListOfFilterValues = null;
    }
    grid.MasterTableView.FilterExpression = string.Empty;
 
    // Refresh
    grid.Rebind();
}
````

#### Usage

You can use that Logic at different events.

**At initial Load**

````C#
protected void Page_PreRender(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        // Pass the Grid to the method. In this example the Grid uses the ID="RadGrid1"
        ResetGridState(RadGrid1);
    }
}
````

**On a Button Click**

````C#
protected void Button1_Click(object sender, EventArgs e)
{
    ResetGridState(RadGrid1);
}
````

## See Also

- [Clear all Filters]({%slug grid-clear-all-filters%})
- [Save and Restore filters]({%slug grid-save-and-restore-filters-programmatically%})

 
