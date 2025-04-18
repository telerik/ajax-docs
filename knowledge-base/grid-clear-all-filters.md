---
title: Clear all filters in RadGrid
description: Learn how to clear all filters in the Grid control programmatically for resetting data views.
type: how-to
page_title: Clear all filters - RadGrid
slug: grid-clear-all-filters
res_type: kb
---


## HOW TO

Clear RadGrid filters programmatically (e.g., on a button click).

## SOLUTION

You need to do a few steps:

1. Loop through the columns and
    - set their **ListOfFilterValues** to **null**
    - set their **CurrentFilterFunction** to **GridKnownFunction.NoFilter**
    - set their **CurrentFilterValue** to **string.Empty**
2. Set the **MasterTableView.FilterExpression** to **string.Empty**
3. Refresh the Grid by calling **Rebind()**


#### The Button Click event handler to Clear the Filters

````C#
protected void RadButton_ClearAllFilters_Click(object sender, EventArgs e)
{
    foreach (GridColumn column in RadGrid1.MasterTableView.Columns)
    {
        column.ListOfFilterValues = null; // CheckList values set to null will uncheck all the checkboxes

        column.CurrentFilterFunction = GridKnownFunction.NoFilter;
        column.AndCurrentFilterFunction = GridKnownFunction.NoFilter;

        column.CurrentFilterValue = string.Empty;
        column.AndCurrentFilterValue = string.Empty;
    }
    RadGrid1.MasterTableView.FilterExpression = string.Empty;
    RadGrid1.MasterTableView.Rebind();
}
````
````VB
Protected Sub RadButton_ClearAllFilters_Click(ByVal sender As Object, ByVal e As EventArgs)
    For Each column As GridColumn In RadGrid1.MasterTableView.Columns
        column.ListOfFilterValues = Nothing

        column.CurrentFilterFunction = GridKnownFunction.NoFilter
        column.AndCurrentFilterFunction = GridKnownFunction.NoFilter

        column.CurrentFilterValue = String.Empty
        column.AndCurrentFilterValue = String.Empty
    Next

    RadGrid1.MasterTableView.FilterExpression = String.Empty
    RadGrid1.MasterTableView.Rebind()
End Sub
````

## Code snippets for a complete sample - OPTIONAL

The above function will work with all Filter types

### FilterType="Classic"

````XML
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
    AllowFilteringByColumn="true"
    FilterType="Classic"  
    OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView CommandItemDisplay="Top">
    <CommandItemTemplate>
        <telerik:RadButton runat="server" ID="RadButton_ClearAllFilters" Text="Clear all filters" OnClick="RadButton_ClearAllFilters_Click" />
    </CommandItemTemplate>
</MasterTableView>
</telerik:RadGrid>
````

### FilterType="CheckList"

````XML
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
    AllowFilteringByColumn="true"
    FilterType="CheckList"  
    OnFilterCheckListItemsRequested="RadGrid1_FilterCheckListItemsRequested"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    OnColumnCreated="RadGrid1_ColumnCreated">
    <MasterTableView CommandItemDisplay="Top">
    <CommandItemTemplate>
        <telerik:RadButton runat="server" ID="RadButton_ClearAllFilters" Text="Clear all filters" OnClick="RadButton_ClearAllFilters_Click" />
    </CommandItemTemplate>
</MasterTableView>
</telerik:RadGrid>
````


### FilterType="Combined"

````XML
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
    AllowFilteringByColumn="true"
    FilterType="Combined"
    OnFilterCheckListItemsRequested="RadGrid1_FilterCheckListItemsRequested"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    OnColumnCreated="RadGrid1_ColumnCreated">
    <MasterTableView CommandItemDisplay="Top">
    <CommandItemTemplate>
        <telerik:RadButton runat="server" ID="RadButton_ClearAllFilters" Text="Clear all filters" OnClick="RadButton_ClearAllFilters_Click" />
    </CommandItemTemplate>
</MasterTableView>
</telerik:RadGrid>
````

### FilterType="HeaderContext" (Excel-Like filtering)

````XML
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
    AllowFilteringByColumn="true"
    FilterType="HeaderContext"  
    EnableHeaderContextMenu="true"
    EnableHeaderContextFilterMenu="true"
    OnFilterCheckListItemsRequested="RadGrid1_FilterCheckListItemsRequested"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    OnColumnCreated="RadGrid1_ColumnCreated">
    <MasterTableView CommandItemDisplay="Top">
    <CommandItemTemplate>
        <telerik:RadButton runat="server" ID="RadButton_ClearAllFilters" Text="Clear all filters" OnClick="RadButton_ClearAllFilters_Click" />
    </CommandItemTemplate>
</MasterTableView>
</telerik:RadGrid>
````

### Code for binding data to the any of the Grid above

````C#
protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = OrdersTable();
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 70; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["OrderDate"] = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index);
        row["Freight"] = index * 0.1 + index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;

        dt.Rows.Add(row);
    }

    return dt;
}

// Event required only by FilterType CheckList and HeaderContext.
protected void RadGrid1_FilterCheckListItemsRequested(object sender, GridFilterCheckListItemsRequestedEventArgs e)
{
    string DataField = (e.Column as IGridDataColumn).GetActiveDataField();

    e.ListBox.DataSource = OrdersTable().DefaultView.ToTable(true, DataField);
    e.ListBox.DataKeyField = DataField;
    e.ListBox.DataTextField = DataField;
    e.ListBox.DataValueField = DataField;
    e.ListBox.DataBind();
}

// Event required by FilterType CheckList, Combined and HeaderContext
protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
{
    // if column supports filtering
    if(e.Column.SupportsFiltering())
    {
        // enable the Check list
        e.Column.FilterCheckListEnableLoadOnDemand = true;
    }
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = OrdersTable()
End Sub

Private Function OrdersTable() As DataTable
    Dim dt As DataTable = New DataTable()
    dt.Columns.Add(New DataColumn("OrderID", GetType(Integer)))
    dt.Columns.Add(New DataColumn("OrderDate", GetType(DateTime)))
    dt.Columns.Add(New DataColumn("Freight", GetType(Decimal)))
    dt.Columns.Add(New DataColumn("ShipName", GetType(String)))
    dt.Columns.Add(New DataColumn("ShipCountry", GetType(String)))
    dt.PrimaryKey = New DataColumn() {dt.Columns("OrderID")}

    For i As Integer = 0 To 70 - 1
        Dim index As Integer = i + 1
        Dim row As DataRow = dt.NewRow()
        row("OrderID") = index
        row("OrderDate") = New DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index)
        row("Freight") = index * 0.1 + index * 0.01
        row("ShipName") = "Name " & index
        row("ShipCountry") = "Country " & index
        dt.Rows.Add(row)
    Next

    Return dt
End Function

Protected Sub RadGrid1_FilterCheckListItemsRequested(ByVal sender As Object, ByVal e As GridFilterCheckListItemsRequestedEventArgs)
    Dim DataField As String = (TryCast(e.Column, IGridDataColumn)).GetActiveDataField()
    e.ListBox.DataSource = OrdersTable().DefaultView.ToTable(True, DataField)
    e.ListBox.DataKeyField = DataField
    e.ListBox.DataTextField = DataField
    e.ListBox.DataValueField = DataField
    e.ListBox.DataBind()
End Sub

Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs)
    If e.Column.SupportsFiltering() Then
        e.Column.FilterCheckListEnableLoadOnDemand = True
    End If
End Sub
````

## See Also

- [Save and Restore filters]({%slug grid-save-and-restore-filters-programmatically%})
- [Reset the Grid State]({%slug grid-reset-state%})
  
