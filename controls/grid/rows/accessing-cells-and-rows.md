---
title: Accessing Cells and Rows
page_title: Accessing Cells and Rows - RadGrid
description: Learn how to access RadGrid rows, cells, data keys, editors, and client-side values in ASP.NET AJAX.
slug: grid/rows/accessing-cells-and-rows
tags: accessing,cells,and,rows
published: False
position: 3
---

# Accessing Cells and Rows

## Accessing Rows

The **GridTableView** object has an **Items** property that contains all the data rows in the table view. Each row is represented by a **GridDataItem** or **GridEditFormItem** object, depending on whether the row is an edit form. The **GridDataItem** or **GridEditFormItem** has an **ItemIndex** property that is its index in the **Items** property collection.

When implementing an event handler for an event such as **ItemCreated**, **ItemDataBound**, **ItemCommand**, **UpdateCommand**, **InsertCommand** or **DeleteCommand**, you can obtain a **GridDataItem** or **GridEditFormItem** for the row from the event arguments (**e.Item** or, in a hierarchical grid, **e.Item.OwnerTableView.ParentItem**).



````C#
//e is the event argument object
if (e.Item is GridDataItem)
{
    GridDataItem dataItem = e.Item as GridDataItem;
}
else if (e.Item is GridEditFormItem)
{
    GridEditFormItem editItem = e.Item as GridEditFormItem;
}
````
````VB
'e is the event argument object
     If TypeOf e.Item Is GridDataItem Then
Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
    ElseIf TypeOf e.Item Is GridEditFormItem Then
Dim editItem As GridEditFormItem = CType(e.Item, GridEditFormItem)
End If
````


## Accessing Cells Using Column Unique Name

Because of features such as [column reordering]({%slug grid/columns/reordering%}) and [grouping]({%slug grid/functionality/grouping/overview%}), the index of individual columns can change on the client. This means that using indexes to access individual cells in the **Cells** collection of a row is not a reliable method of obtaining a cell in a particular column.

To provide a reliable way to locate a cell in a particular column, each grid column has a **UniqueName** property of type `string`. This property is assigned automatically at design time. For example, an auto-generated **GridBoundColumn** with **DataField** `ContactName` has a **UniqueName** of `ContactName`. You can also set the **UniqueName** property explicitly, although automatic generation handles most cases. Using a column's **UniqueName** lets you locate the column reliably even when its index changes.



````C#
TableCell cell = dataItem["ColumnUniqueName"]; //where dataItem is object of type GridDataItem
````
````VB
Dim cell As TableCell = dataItem("ColumnUniqueName")
'where dataItem is object of type GridDataItem
````


To get the cell's value, use the **Text** property of the cell:



````C#
string itemValue = dataItem["ColumnUniqueName"].Text; //where dataItem is object of type GridDataItem
````
````VB
Dim itemValue As String = dataItem("ColumnUniqueName").Text
'where dataItem is object of type GridDataItem
````


>caution This approach of obtaining cell values works for auto-generated columns and built-in column types except for **GridTemplateColumn** and **GridCheckBoxColumn** . For template columns, you must find the control in the grid cell and extract its value.
>


When you need to retrieve value from a **GridCheckBoxColumn** you have to	first get reference to the **TableCell** object and cast the first control from its Controls collection to a **CheckBox**.	Then you can use the **Checked** property for retrieving the checked state:



````C#
bool boolValue = (item["GridCheckBoxColumnUniqueName"].Controls[0] as CheckBox).Checked;
````
````VB
Dim boolValue As Boolean = TryCast(item("GridCheckBoxColumnUniqueName").Controls(0), CheckBox).Checked
````


The same approach applies to header and footer items. Reference the header or footer item and use the column's **UniqueName** property to identify the cell of interest:



````C#
GridHeaderItem headerItem = RadGrid1.MasterTableView.GetItems(GridItemType.Header)[0] as GridHeaderItem;
// fetch the data with headerItem["ColumnUniqueName"].Text
// or (headerItem["ColumnUniqueName"].Controls(0) as LinkButton).Text if sorting is enabled
````
````VB
Dim headerItem As GridHeaderItem = CType(RadGrid1.MasterTableView.GetItems(GridItemType.Header)(0), GridHeaderItem)
'fetch the data with headerItem("ColumnUniqueName").Text
'or CType(headerItem["ColumnUniqueName"].Controls(0), LinkButton).Text if sorting is enabled
````




````C#
GridFooterItem footerItem = RadGrid1.MasterTableView.GetItems(GridItemType.Footer)[0] as GridFooterItem;
//fetch the data with footerItem["ColumnUniqueName"].Text
````
````VB
Dim footerItem As GridFooterItem = CType(RadGrid1.MasterTableView.GetItems(GridItemType.Footer)(0), GridFooterItem)
'fetch the data with footerItem("ColumnUniqueName").Text
````

The **GridTableView.GetHeaderCellByColumnUniqueName** server-side method accepts a column's unique name and returns a **GridTableHeaderCell** object. Use this method to access a column header cell when you use multi-column headers or regular columns. The **GridTableHeaderCell.ParentHeaderCell** property returns a reference to the parent header cell.

````C#
GridTableHeaderCell cell = RadGrid1.MasterTableView.GetHeaderCellByColumnUniqueName("ContactName");
````

````VB
Dim cell As GridTableHeaderCell = RadGrid1.MasterTableView.GetHeaderCellByColumnUniqueName("ContactName")
````

## Accessing Raw Field Data and Key Values

Accessing a cell value through **cell.Text**, as shown in the previous section, works for most scenarios. However, the cell text can be modified by the column's **DataFormatString**, so the value may differ from the database value. For example, parsing a currency-formatted number back to its original numeric form can be troublesome.

In such cases, it is useful to extract the data directly from the underlying **DataItem** object of the **GridDataItem** instance. The **DataItem** is available only within the **OnItemDataBound** event handler provided by RadGrid.

````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridDataItem)
    {
        GridDataItem item = (GridDataItem)e.Item;
        var value = DataBinder.Eval(item.DataItem, "ShipCountry");
    }
}
````
````VB
Protected Sub RadGrid1_ItemDataBound(sender As Object, e As GridItemEventArgs)
	If TypeOf e.Item Is GridDataItem Then
		Dim item As GridDataItem = DirectCast(e.Item, GridDataItem)
		Dim value = DataBinder.Eval(item.DataItem, "ShipCountry")
	End If
End Sub
````

If you need the value during another phase of the page lifecycle, include the field name in the **DataKeyNames** property of the **MasterTableView** or the corresponding **GridTableView** tag, and then use the **GetDataKeyValue** method.

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    if (e.CommandName == "RowClick")
    {
        GridDataItem item = (GridDataItem)e.Item;
        var value = item.GetDataKeyValue("ShipCountry");
    }
}
````
````VB
Protected Sub RadGrid1_ItemCommand(sender As Object, e As GridCommandEventArgs)
	If e.CommandName = "RowClick" Then
		Dim item As GridDataItem = DirectCast(e.Item, GridDataItem)
		Dim value = item.GetDataKeyValue("ShipCountry")
	End If
End Sub
````

>tip If you are using detail tables, check the `item.OwnerTableView.Name` before accessing a value to prevent null reference errors. Download the [access-parent-data.zip](access-parent-data.zip) example for a detailed demonstration of how to access data from parent tables.

## Accessing Controls in Template Column

Accessing a cell in a template column is the same as accessing any other cell. To access a **TextBox** declared in the column's **ItemTemplate**, use **FindControl** on the data item:



````C#
TableCell cell = dataItem["ColumnUniqueName"];
TextBox textBox = dataItem.FindControl("TextBoxID") as TextBox;
````
````VB
Dim cell As TableCell = dataItem("ColumnUniqueName")
Dim textBox As TextBox = CType(dataItem.FindControl("TextBoxID"), TextBox)
````


## Accessing the Value of Cells in Edit Mode

If the grid item is in edit mode, you can still use the column's **UniqueName** to access the cell (even if it is in an edit form). Then you can locate the control that contains the cell's value and, depending on [the type of the column editor]({%slug grid/columns/column-types%}), cast it to the appropriate type, and access the value.



````C#
TableCell cell = editedItem["ColumnUniqueName"];
string itemValue = (cell.Controls[0] as TextBox).Text;
````
````VB
Dim cell As TableCell = editedItem("ColumnUniqueName")
Dim itemValue As String = (CType(cell.Controls(0), TextBox)).Text
````


If you have a reference to the column object, you can get an instance of **GridEditManager** from the item and use its **GetColumnEditor(editableCol)** method to access the column editor.



````C#
GridEditableItem editedItem = e.Item as GridEditableItem;
GridEditManager editMan = editedItem.EditManager;
IGridColumnEditor editor = editMan.GetColumnEditor(columnReference);
````
````VB
Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
Dim editMan As GridEditManager = editedItem.EditManager
Dim editor As IGridColumnEditor = editMan.GetColumnEditor(editableCol)
````


For a live example that uses **GridEditManager** to access the column editor, see [Using Column Editors](https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/EditModes/DefaultCS.aspx).

## Accessing Controls in Edit/Insert Mode

When editing or inserting a grid item, you could access and modify the controls generated in the editable item.



````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
       GridEditableItem editableItem = e.Item as GridEditableItem;
       // execute custom logic
    }
}
````
````VB
Protected Sub RadGrid1_ItemDataBound(sender As Object, e As GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
        Dim editableItem As GridEditableItem = TryCast(e.Item, GridEditableItem)
        ' execute custom logic
    End If
End Sub
````


However, you will need to use a different approach corresponding to the chosen **EditFormType**.

* **AutoGenerated:**



````C#
TextBox textBox = editableItem["ColumnUniqueName"].Controls[0] as TextBox;
````
````VB
Dim textBox As TextBox = CType(editableItem("ColumnUniqueName").Controls(0), TextBox)
````


* **Template:**



````C#
TextBox textBox = editableItem.FindControl("TextBox1") as TextBox;
````
````VB
Dim textBox As TextBox = CType(editableItem.FindControl("TextBox1"), TextBox)
````


* **WebUserControl:**



````C#
UserControl userControl = editableItem.FindControl(GridEditFormItem.EditFormUserControlID) as UserControl;
TextBox textBox = userControl.FindControl("TextBox1") as TextBox;
````
````VB
Dim userControl As UserControl = CType(editableItem.FindControl(GridEditFormItem.EditFormUserControlID), UserControl)
Dim textBox As TextBox = CType(userControl.FindControl("TextBox1"), TextBox)
````


>caution **InPlace** **EditMode** is supported only for an **AutoGenerated** **EditFormType**. In this case, the editable item is **GridDataItem** or **GridDataInsertItem**, rather than the usual **GridEditFormItem** or **GridEditFormInsertItem**.
>

## Accessing Controls in Batch Edit Mode

**Batch editing** differs from the other edit modes because it is primarily a client-side feature. Use JavaScript and the client-side events provided by **RadGrid** to access the elements generated in the cells:
[OnBatchEditOpened Client-Side Event]({%slug grid/client-side-programming/events/onbatcheditopened%})

For example, consider a **GridDateTimeColumn** in a **RadGrid** with 10 items per page. Unlike the other edit modes, RadGrid does not generate 10 separate **RadDatePicker** controls. It loads one picker on the server and reuses it for the column. If you set a property such as **FocusedDate** in code-behind, the setting applies to all picker elements in that column.

>caption How to access the built-in column editor

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    GridTableView masterTable = ((RadGrid)sender).MasterTableView;
    GridDateTimeColumnEditor editor = masterTable.GetBatchColumnEditor("OrderDate") as GridDateTimeColumnEditor;
    RadDatePicker picker = editor.PickerControl;
    picker.FocusedDate = new DateTime(1990, 3, 3);
}
````
````VB
Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs)
	Dim masterTable As GridTableView = DirectCast(sender, RadGrid).MasterTableView
	Dim editor As GridDateTimeColumnEditor = TryCast(masterTable.GetBatchColumnEditor("OrderDate"), GridDateTimeColumnEditor)
	Dim picker As RadDatePicker = editor.PickerControl
	picker.FocusedDate = New DateTime(1990, 3, 3)
End Sub
````

>caption How to access custom controls in a template column

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
	RadComboBox combo = ((sender as RadGrid).MasterTableView.GetBatchEditorContainer("CategoryID").FindControl("rcbCategory") as RadComboBox);
	combo.EnableLoadOnDemand = true;
}
````
````VB
Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs) Handles RadGrid1.PreRender
	Dim combo As RadComboBox = DirectCast(DirectCast(sender, RadGrid).MasterTableView.GetBatchEditorContainer("CategoryID").FindControl("rcbCategory"), RadComboBox)
	combo.EnableLoadOnDemand = True
End Sub
````


Read more in the [Batch editing mode]({%slug grid/data-editing/edit-mode/batch-editing/overview%}) article.


## Accessing Cells and Values in Client-Side Code

Once you have a reference to the client-side object of a **GridDataItem**, you can access its cell values in several ways. You can get a reference to the client-side item by traversing the DOM or by using its index.

>caption How to access the data item object by traversing the DOM:


````JavaScript
function getDataClientSide(btn) {
	var $ = $telerik.$;//or use other jQuery

	//get the DOM object of the grid row - the <tr> element
	var gridRowElem = $(btn).parents("tr").first()[0];

	//here is how you can get the grid
	//var grid = $(btn).parents("div.RadGrid").first()[0].control;
	//console.log(grid);

	//get a reference to the client-side object of the grid row to use its API
	var gridRowObj = gridRowElem.control;

	//get the value of a column that you have added to the ClientDataKeyNames collection
	var nameFieldValue = gridRowObj.getDataKeyValue("name");

	alert(nameFieldValue)

	//you can use the other available methods of the item
	//alert(gridRowObj.get_itemIndexHierarchical())
}
function enumerateDataItems(sender, args) {
	//enumerate the data items so they are available
	//this puts them in memory, so you can move it to the button click handler
	//which will, however, cause the enumeration on every click
	sender.get_masterTableView().get_dataItems();
}
````

The following grid declaration uses `ClientDataKeyNames` so the `id` and `name` values are available on the client.

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<telerik:RadGrid runat="server" ID="RadGrid1" RenderMode="Lightweight" OnItemCommand="RadGrid1_ItemCommand" OnNeedDataSource="RadGrid1_NeedDataSource">
	<ClientSettings>
		<ClientEvents OnGridCreated="enumerateDataItems" />
	</ClientSettings>
	<MasterTableView AutoGenerateColumns="false" ClientDataKeyNames="id,name">
		<Columns>
			<telerik:GridBoundColumn UniqueName="id" DataField="id"></telerik:GridBoundColumn>
			<telerik:GridBoundColumn UniqueName="name" DataField="name"></telerik:GridBoundColumn>
			<telerik:GridBoundColumn UniqueName="someData" DataField="data"></telerik:GridBoundColumn>
			<telerik:GridBoundColumn UniqueName="otherData" DataField="someColumn"></telerik:GridBoundColumn>
			<telerik:GridTemplateColumn UniqueName="myDeleteColumn">
				<ItemTemplate>
					<asp:Button ID="Button1" CommandName="Delete" Text="Get column value client-side by traversing the DOM" OnClientClick="getDataClientSide(this); return false;" runat="server" />
				</ItemTemplate>
			</telerik:GridTemplateColumn>
		</Columns>
	</MasterTableView>
</telerik:RadGrid>
````
````C#
protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
	(sender as RadGrid).DataSource = GetData();
}

protected DataTable GetData()
{
	DataTable tbl = new DataTable();
	tbl.Columns.Add(new DataColumn("id", typeof(decimal)));
	tbl.Columns.Add(new DataColumn("name", typeof(string)));
	tbl.Columns.Add(new DataColumn("data", typeof(decimal)));
	tbl.Columns.Add(new DataColumn("someColumn", typeof(string)));
	tbl.Rows.Add(new object[] { 1, "one", 2, "5" });
	tbl.Rows.Add(new object[] { 2, "two", 3, null/*SIMULATE EMPTY VALUE*/ });
	tbl.Rows.Add(new object[] { 3, "three", 4, "5" });
	tbl.Rows.Add(new object[] { 4, "four", 5, "5" });

	return tbl;
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(sender As Object, e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
	TryCast(sender, RadGrid).DataSource = GetData()
End Sub

Protected Function GetData() As DataTable
	Dim tbl As New DataTable()
	tbl.Columns.Add(New DataColumn("id", GetType(Decimal)))
	tbl.Columns.Add(New DataColumn("name", GetType(String)))
	tbl.Columns.Add(New DataColumn("data", GetType(Decimal)))
	tbl.Columns.Add(New DataColumn("someColumn", GetType(String)))
	tbl.Rows.Add(New Object() {1, "one", 2, "5"})
		'SIMULATE EMPTY VALUE
	tbl.Rows.Add(New Object() {2, "two", 3, Nothing})
	tbl.Rows.Add(New Object() {3, "three", 4, "5"})
	tbl.Rows.Add(New Object() {4, "four", 5, "5"})

	Return tbl
End Function
````

>caption How to access the data item object by its index:

````JavaScript
var grid = $find('<%= RadGrid1.ClientID %>');
var masterTable = grid.get_masterTableView();
var item = masterTable.get_dataItems()[3];//where 3 is the hierarchical index of the item you want
````

Once you have a reference to the grid row data item on the client-side, you can use various methods to get information from it:

### get_cell()

Using the **get_cell()** method is the most straightforward approach to get to the DOM of the grid so you can extract text, or access controls/elements. You need to pass the `UniqueName` of the column whose cell you want.

````JavaScript
function rowClick(sender, args) {
    var item = args.get_item();
    var cell = item.get_cell("ShipCountry");
    var value = $telerik.$(cell).text().trim();
}
````

### getDataKeyValue()

You can extract the raw value directly in its original database form. The required action is to add the Field name in the **ClientDataKeyNames** property of the **MasterTableView** or the corresponding **GridTableView** tag.

````JavaScript
function gridCreated(sender, args) {
    var masterTable = sender.get_masterTableView();
    var item = masterTable.get_dataItems()[3];
    var value = item.getDataKeyValue("ShipCountry");
}
````

### getCellByColumnUniqueName()

The client-side object of **GridTableView** provides **getCellByColumnUniqueName()** method, which is another alternative to get a reference to the cell element by passing its `UniqueName`.

````JavaScript
function pageLoad() {
    var grid = $find('<%= RadGrid1.ClientID %>');
    var masterTable = grid.get_masterTableView();
    var item = masterTable.get_dataItems()[3];
    var cell = masterTable.getCellByColumnUniqueName(item, "ShipCountry");
    var value = $telerik.$(cell).text().trim();
}
````

## Accessing Table Views in a Hierarchical Grid

In a hierarchical grid, each item in the **Items** collection of a parent **GridTableView** has a **ChildItem** property of type **GridNestedViewItem**. This child item is the container for the nested child table(s). The **GridNestedViewItem** has a **NestedTableViews** property that holds the collection of all the detail tables for the parent table.

You can use these properties to access the detail tables of a row in the parent table, as follows:



````C#
GridTableView firstDetail = RadGrid1.MasterTableView.Items[0].ChildItem.NestedTableViews[0];
````
````VB
Dim firstDetail As GridTableView = RadGrid1.MasterTableView.Items(0).ChildItem.NestedTableViews(0)
````


Conversely, if you have a reference to the instance of an item in a child table and want to access the parent table view, you can use the **ParentItem** property.



````C#
GridTableView parentTable = childItem.OwnerTableView.ParentItem.OwnerTableView;
````
````VB
Dim parentTable As GridTableView = childItem.OwnerTableView.ParentItem.OwnerTableView
````


## See Also

 * [Column Types]({%slug grid/columns/column-types%})

 * [Data Items]({%slug grid/rows/data-items%})

 * [Accessing Values and Controls]({%slug grid/accessing-values-and-controls/overview%})
