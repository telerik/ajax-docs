---
title: Most Common RadGrid Mistakes
page_title: Most Common RadGrid Mistakes
description: Learn how to avoid common structure, data binding, view state, hierarchy, and item event mistakes in RadGrid for ASP.NET AJAX.
slug: grid/troubleshooting/most-common-mistakes
components: ["grid"]
tags: most,common,mistakes
published: True
position: 0
---

# Most Common RadGrid Mistakes

This article describes seven common mistakes when using **RadGrid** and explains how to avoid them.

## 1. Build the Columns and Detail Tables Correctly

Build the **RadGrid** structure consistently so that its columns and detail tables are recreated at the correct point in the page lifecycle. Creating the structure with the Visual Studio designer reduces the chance of configuration errors. When you create it programmatically, remember that **RadGrid** stores structure properties such as **DetailTables** and **Columns** in view state.

The following approaches are supported for creating a grid structure programmatically.

### Build the Structure in Page.Init

Create the **RadGrid** instance and its structure in the **Page.Init** event handler, then add the instance to the page's control collection. Because the structure is recreated during every page initialization, view state is not required to persist the structure.

> caption Create a RadGrid and its columns during Page.Init

````C#
this.RadGrid1 = new RadGrid();

this.RadGrid1.NeedDataSource += new GridNeedDataSourceEventHandler(this.RadGrid1_NeedDataSource);
this.RadGrid1.DetailTableDataBind += new GridDetailTableDataBindEventHandler(this.RadGrid1_DetailTableDataBind);

this.RadGrid1.CssClass = "RadGrid";

this.RadGrid1.Width = Unit.Percentage(100);
this.RadGrid1.PageSize = 5;
this.RadGrid1.AllowPaging = true;
this.RadGrid1.AutoGenerateColumns = false;
this.RadGrid1.GroupingEnabled = true;
this.RadGrid1.ShowGroupPanel = true;
this.RadGrid1.ClientSettings.AllowDragToGroup = true;

this.RadGrid1.MasterTableView.DataMember = "Customers";
this.RadGrid1.MasterTableView.PageSize = 15;

GridBoundColumn boundColumn = new GridBoundColumn();
boundColumn.DataField = "CustomerID";
boundColumn.HeaderText = "CustomerID";
this.RadGrid1.MasterTableView.Columns.Add(boundColumn);
// Add other columns and detail tables here.
this.PlaceHolder1.Controls.Add(this.RadGrid1);
````
````VB
Me.RadGrid1 = New RadGrid()

AddHandler Me.RadGrid1.NeedDataSource, New GridNeedDataSourceEventHandler(AddressOf Me.RadGrid1_NeedDataSource)
AddHandler Me.RadGrid1.DetailTableDataBind, New GridDetailTableDataBindEventHandler(AddressOf Me.RadGrid1_DetailTableDataBind)

Me.RadGrid1.CssClass = "RadGrid"

Me.RadGrid1.Width = Unit.Percentage(100)
Me.RadGrid1.PageSize = 5
Me.RadGrid1.AllowPaging = true
Me.RadGrid1.AutoGenerateColumns = false
Me.RadGrid1.GroupingEnabled = true
Me.RadGrid1.ShowGroupPanel = true
Me.RadGrid1.ClientSettings.AllowDragToGroup = true

Me.RadGrid1.MasterTableView.DataMember = "Customers"
Me.RadGrid1.MasterTableView.PageSize = 15

Dim boundColumn As New GridBoundColumn()
boundColumn.DataField = "CustomerID"
boundColumn.HeaderText = "CustomerID"
Me.RadGrid1.MasterTableView.Columns.Add(boundColumn)

Me.PlaceHolder1.Controls.Add(Me.RadGrid1)
````

### Build the Structure in Page.Load

Add **RadGrid** to the page with the designer, but create its programmatic structure in the **Page.Load** event handler only when `Page.IsPostBack` is `false`. Add each new column or detail table to the corresponding collection before setting its properties so that view state can manage the object.

> caption Add a dynamically created column to the grid before setting its properties

````C#
private void Page_Load(object sender, System.EventArgs e)
{
    if (!IsPostBack)
    {
        GridBoundColumn boundColumn = new GridBoundColumn();
        this.RadGrid1.MasterTableView.Columns.Add(boundColumn);
        boundColumn.DataField = "CustomerID";
        boundColumn.HeaderText = "CustomerID";
    }
}
````
````VB
Private Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        Dim boundColumn As New GridBoundColumn()
        Me.RadGrid1.MasterTableView.Columns.Add(boundColumn)
        boundColumn.DataField = "CustomerID"
        boundColumn.HeaderText = "CustomerID"
    End If
End Sub
````

## 2. Use the NeedDataSource Event Correctly

The **NeedDataSource** event lets **RadGrid** recreate its items after operations such as paging, sorting, and grouping. Assign a **DataSource** in this event and let RadGrid call `DataBind()` internally. Do not call `DataBind()` in the **NeedDataSource** handler.

>important Avoid changing the **RadGrid** structure in the **NeedDataSource** event handler. If a structural change is necessary, use the event argument to check why **NeedDataSource** was raised. Do not call **DataBind()** in the handler because RadGrid calls it internally when needed.
>

RadGrid raises **NeedDataSource** when it knows that an operation requires its items to be recreated. After changing the grid structure or data outside those operations, call `Rebind()`. This method causes RadGrid to raise **NeedDataSource** and bind the data again. For an example, see the [NeedDataSource demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/NeedDataSource/DefaultCS.aspx).

## 3. Disable ViewState Only in Supported Scenarios

See [Optimizing ViewState usage]({%slug grid/performance/optimizing-viewstate-usage%}) for details about the **EnableViewState** property.

## 4. Access Cells by UniqueName Instead of a Numeric Index

Unlike the standard .NET **DataGrid**, **RadGrid** has a dynamic column structure. Column reordering and grouping can change the **Cells** collection of **GridItem** objects, so a numeric index can refer to a different field after a user action.

Do not use a numeric cell index such as `item.Cells[4]` because column reordering can change which field the index identifies.

> caption Access a GridDataItem cell by its column UniqueName

````C#
GridDataItem dataItem = (GridDataItem)item;
dataItem["CustomerID"];
````
````VB
Dim dataItem As GridDataItem = DirectCast(item, GridDataItem)
dataItem("CustomerID")
````

Using the column's **UniqueName** keeps the lookup associated with the intended field.

## 5. Find Controls in the Correct Edit Item

Unlike the **DataGrid** or **GridView** controls, **RadGrid** uses the **EditForms** mode by default. The edit form appears in a separate item below the item being edited instead of replacing the row with in-place editors. Search the **EditFormItem** when you need to find a control from an edit template. Access it through the **GridDataItem.EditFormItem** property.

Additional details can be found in these help resources:

- [InPlace editing]({%slug grid/data-editing/edit-mode/in-place%})
- [EditForms editing]({%slug grid/data-editing/edit-mode/edit-forms%})
- [Custom edit forms]({%slug grid/data-editing/edit-mode/custom-edit-forms%})

## 6. Choose the Appropriate Hierarchical Control

For an overview of RadGrid hierarchy, see [Understanding hierarchical grid structure]({%slug grid/hierarchical-grid-types-and-load-modes/understanding-hierarchical-grid-structure%}).

**RadGrid** supports a hierarchical database structure or a self-referencing source table with `ID` and `ParentID` relations. In a [standard hierarchy](https://demos.telerik.com/aspnet-ajax/grid/examples/hierarchy/declarativerelations/defaultvb.aspx), each level has the same number of detail tables for its items. A level can have [several tables]({%slug grid/hierarchical-grid-types-and-load-modes/several-tables-at-a-level%}) when the data model requires them.

Unlike **RadTreeView**, RadGrid does not support a different number of nested tables for each item in the same hierarchy level. Use **RadTreeList** when you need variable-depth, tree-like data. See the [RadTreeList overview demo](https://demos.telerik.com/aspnet-ajax/treelist/examples/overview/defaultcs.aspx).

>note Note that **RadGrid** will not behave correctly if you add detail tables programmatically in **DetailTableDataBind** event handler.
>

## 7. Check the Item Type and Table When Handling Item Events

The **ItemCreated** and **ItemDataBound** event handlers let you manipulate controls and cell values in **RadGrid**. For event differences, see [Differences between ItemCreated and ItemDataBound]({%slug grid/control-lifecycle/differences-between-itemcreated-and-itemdatabound-%}).

When handling either event, check the following values before applying logic:

- **GridItemType**: Check `e.Item.ItemType` before casting or customizing the item. See the [GridItemType API reference](https://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_griditemtype.html) for the available values.
- **Detail table**: Check `e.Item.OwnerTableView.DataMember`, `e.Item.OwnerTableView.DataSourceID`, or `e.Item.OwnerTableView.Name` to identify the hierarchy level. The appropriate property depends on how the table is bound.

See [Distinguishing grid rows in ItemCreated and ItemDataBound]({%slug grid/how-to/hierarchy/distinguish-grid-rows-on-itemcreated-and-itemdatabound%}) for an example.

## See Also

- [NeedDataSource demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/NeedDataSource/DefaultCS.aspx)
- [Standard hierarchy demo](https://demos.telerik.com/aspnet-ajax/grid/examples/hierarchy/declarativerelations/defaultcs.aspx)
- [RadTreeList overview demo](https://demos.telerik.com/aspnet-ajax/treelist/examples/overview/defaultcs.aspx)
- [Optimizing ViewState usage]({%slug grid/performance/optimizing-viewstate-usage%})
- [Understanding hierarchical grid structure]({%slug grid/hierarchical-grid-types-and-load-modes/understanding-hierarchical-grid-structure%})
- [InPlace editing]({%slug grid/data-editing/edit-mode/in-place%})
- [EditForms editing]({%slug grid/data-editing/edit-mode/edit-forms%})
- [Custom edit forms]({%slug grid/data-editing/edit-mode/custom-edit-forms%})
