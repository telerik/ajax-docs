---
title: Accessing Cells and Rows
page_title: Accessing Cells and Rows | RadGrid for ASP.NET AJAX Documentation
description: Accessing Cells and Rows
slug: grid/rows/accessing-cells-and-rows
tags: accessing,cells,and,rows
published: True
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

To provide a reliable way of locating the cell in a particular column, each column in the grid has a **UniqueName** propertyof type string. This property is assigned automatically at design time. For example, an auto-generated **GridBoundColumn** with **DataField** 'ContactName' generates a **UniqueName** of 'ContactName').You can also set the **UniqueName** property explicitly, although the automatic generation handles most cases. Using the **UniqueName** property of a column lets you reliably locate a column even when its index changes.



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


The same approach can be applied to header and footer items. Simply reference the header or footer item of the control and use the column **UniqueName** property to identify the cell of interest:



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

With the Q3 2015 release GridTableView exposes a new server-side GetHeaderCellByColumnUniqueName method which receives as a parameter a string(the column unique name) and return s GridTableHeaderCell object. The idea for creating such a method is to allow developers to more easily access the column header cells when mulit-column headers are used(you can also use the method in cases when column groups are not present). Additionally the GridTableHeaderCell object now has a ParentHeaderCell property which returns a reference to the parent GridTableHeaderCell. 
This new addition will allow users to more easily access the parent header cells if some modifications are to be performed. An example use of the new method can be seen below: 

````C#
GridTableHeaderCell cell = RadGrid1.MasterTableView.GetHeaderCellByColumnUniqueName("ContactName");
````

````VB
Dim cell As ridTableHeaderCell = RadGrid1.MasterTableView.GetHeaderCellByColumnUniqueName("ContactName")
````

## Accessing Raw Field Data and Key Values

Accessing the cell value via the **cell.Text** approach demonstrated in the previous section works for the majority of the scenarios. However, in some cases, the Text of the cell is modified, e.g. when using the **DataFormatString** property of the column, therefore, the obtained value would not be the same as in the database. For instance, it is a common practice to display numeric values as Currency and it may turn out a troublesome task to parse the string text back to its original numeric form.

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

If you need to get the value during any other phase, you can include the Field name in the **DataKeyNames** property of the **MasterTableView** or the corresponding **GridTableView** tag and use the **GetDataKeyValue** method.

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

## Accessing Controls in Template Column

While accessing cells with Template columns remains the same, you could use a little different approach to get the controls in the cell. For example, to access a TextBox declared in the ItemTemplate of the column:



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


For a live example that uses **GridEditManager** to access the column editor, see [Using Column Editors](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/EditModes/DefaultCS.aspx).

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


>caution  **InPlace** EditMode is supported only for an **AutoGenerated** EditFormType. In this case, the editable item is of type **GridDataItem** or **GridDataInsertItem** , rather than **GridEditFormItem** and **GridEditFormInsertItem** as usual.
>

## Accessing Controls in Batch Edit Mode

Essentially, **Batch editing** is a bit different from the other Edit modes. It is mainly a client-side functionality and in this sense, it would be reasonable to implement javascript approaches when accessing the individual elements generated in the cells. This can be achieved using the client-side event handlers provided by RadGrid regarding its **Batch editing** feature:
[OnBatchEditOpened Client-Side Event]({%slug grid/client-side-programming/events/onbatcheditopened%})

Let's take for example the GridDateTime column of a RadGrid with 10 items per page. Unlike the other Edit modes, there are not **10 different RadDatePicker** controls generated to edit each of the records, but there is **only 1 picker** loaded on the server, which contributes for ideal performance and rendering optimization. If you access the generated picker on code-behind and apply some properties, e.g. **FocusedDate**, the setting will be applied to all the picker elements of the column.

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

Once you have a reference to the client-side object of a **GridDataItem**, there are several ways to access its cell values. There are several ways to get a reference to the grid data item object.

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
function enumareteDataItems(sender, args) {
	//enumerate the data items so they are available
	//this puts them in memory, so you can move it to the button click handler
	//which will, however, cause the enumeration on every click
	sender.get_masterTableView().get_dataItems();
}
````

and the grid declaration. Note the `ClientDataKeyNames` so you can access those columns client-side.

````ASP.NET
<telerik:RadGrid runat="server" ID="RadGrid1" RenderMode="Lightweight" OnItemCommand="RadGrid1_ItemCommand" OnNeedDataSource="RadGrid1_NeedDataSource">
	<ClientSettings>
		<ClientEvents OnGridCreated="enumareteDataItems" />
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

* Using **get_cell()** method is the most straightforward approach to achieve that.

````JavaScript
function rowClick(sender, args) {
    var item = args.get_item();
    var cell = item.get_cell("ShipCountry");
    var value = $telerik.$(cell).text().trim();
}
````

* The next approach enables extracting the raw value directly in its original database form. The required action is to add the Field name in the **ClientDataKeyNames** property of the **MasterTableView** or the corresponding **GridTableView** tag.

````JavaScript
function gridCreated(sender, args) {
    var masterTable = sender.get_masterTableView();
    var item = masterTable.get_dataItems()[3];
    var value = item.getDataKeyValue("ShipCountry");
}
````

* The client-side object of **GridTableView** provides **getCellByColumnUniqueName()** method, which is another alternative to get a reference to the cell element.

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
