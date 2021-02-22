---
title: Accessing Cells and Values
page_title: Accessing cells Client-Side - RadGrid
description: Check our Web Forms article about Accessing Grid Cells on Client.
slug: grid/accessing-values-and-controls/client-side/accessing-cells
published: True
position: 3
---

# Accessing Grid Cells, Cell Values and Raw DataKey Values Client-Side

This article describes how to get a reference to the client-side object of a **GridDataItem** and how to access  its cell values from the client-side code.

To [access the cell values](#step-2-access-the-cell-values), first get a reference to the grid data item object by using one of the methods listed below.

## Step 1: Getting a Reference to the Grid Data Item Object

To get a reference, you can either traverse the DOM, or access the data item by index:

* Traverse the DOM.

   >caption How to access the data item object by traversing the DOM

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

   Finally, add the grid declaration. Note the `ClientDataKeyNames` so you can access those columns client-side:

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

* Access the data item by its index.

   >caption How to access the data item object by its index:

   ````JavaScript
   var grid = $find('<%= RadGrid1.ClientID %>');
   var masterTable = grid.get_masterTableView();
   var item = masterTable.get_dataItems()[3];//where 3 is the hierarchical index of the item you want
   ````


## Step 2: Access the Cell Values

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

## See Also

- [Accessing Values and Controls - Overview]({%slug grid/accessing-values-and-controls/overview %})
- [Accessing RadGrid]({%slug grid/accessing-values-and-controls/client-side/accessing-radgrid %})
- [Accessing Items/Rows]({%slug grid/accessing-values-and-controls/client-side/accessing-items %})

