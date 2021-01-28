---
title: OnBatchEditOpened
page_title: OnBatchEditOpened - RadGrid
description: Check our Web Forms article about OnBatchEditOpened.
slug: grid/client-side-programming/events/onbatcheditopened
tags: onbatcheditopened
published: True
position: 84
---

# OnBatchEditOpened


This event is fired after a cell is opened for edit. You can use it to access and modify cell values and inner controls from template columns. 


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **cell** - gets the currently edited cell **row** - gets the currently edited row **column** - gets the currently edited column **columnUniqueName** - gets the UniqueName of the edited column **tableView** - gets the TableView in which the edited item is located|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:radgrid id="RadGrid1" datasourceid="SqlDataSource1">
    <MasterTableView EditMode="Batch">
    </MasterTableView>
    <ClientSettings>
        <ClientEvents OnBatchEditOpened="BatchEditOpened"/>
    </ClientSettings>
</telerik:radgrid>
````

````JavaScript
function BatchEditOpened(sender, args) {
    var row = args.get_row();
    var cell = args.get_cell();
    var tableView = args.get_tableView();
    var column = args.get_column();
    var columnUniqueName = args.get_columnUniqueName();
}
````

>caption Modify a cell/control according to other cell values.

This example uses the following:

* the [Batch Edit Manager API]({%slug grid/data-editing/edit-mode/batch-editing/client-side-api%})
* the [dataItem object]({%slug grid/client-side-programming/griddataitem-object/griddataitem-class-members%})


````JavaScript
function OnBatchEditOpened(sender, args) {
	//check which is the column currently being opened so you can easily get the combo box
	if (args.get_columnUniqueName() == "CategoryID") {
		//get the currently opened cell that holds the combo box
		var comboCell = args.get_cell();
		//enumerate the data items in the grid so you can access them later
		args.get_tableView().get_dataItems();
		//get the data item so you can get values from the grid
		var dataItem = $find(args.get_row().getAttribute("id"));
		//traverse the DOM to get a reference to the combo
		var combo = $telerik.$(comboCell).find(".RadComboBox").first()[0].control;
		//get the cell whose value you want to get
		var parameterCell = dataItem.get_cell("ProductName");
		//get the current value of the cell that will be a parameter for the combo
		var parameterText = sender.get_batchEditingManager().getCellValue(parameterCell);
		//if you want the combo to make a new request each time the cell is opened, uncommend this line
		//combo.clearItems();
		//set the combo text as it will be sent to the ItemsRequested handler
		combo.set_text(parameterText);
	}
}
````

Sample markup:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" GridLines="None" runat="server" AllowAutomaticDeletes="True"
				 AllowAutomaticInserts="True" PageSize="10"  AllowAutomaticUpdates="True" AllowPaging="True"
				 AutoGenerateColumns="False" DataSourceID="SqlDataSource1">
	<ClientSettings AllowKeyboardNavigation="true">
		<ClientEvents OnBatchEditOpened="OnBatchEditOpened" />
	</ClientSettings>
	<MasterTableView CommandItemDisplay="TopAndBottom" DataKeyNames="ProductID"
					 DataSourceID="SqlDataSource1" HorizontalAlign="NotSet" EditMode="Batch" AutoGenerateColumns="False">
		<BatchEditingSettings EditType="Row" />
		<SortExpressions>
			<telerik:GridSortExpression FieldName="ProductID" SortOrder="Descending" />
		</SortExpressions>
		<Columns>
			<telerik:GridBoundColumn DataField="ProductName" HeaderStyle-Width="210px" HeaderText="ProductName" SortExpression="ProductName"
									 UniqueName="ProductName">
				<ColumnValidationSettings EnableRequiredFieldValidation="true">
					<RequiredFieldValidator ForeColor="Red" Text="*This field is required" Display="Dynamic">
					</RequiredFieldValidator>
				</ColumnValidationSettings>
			</telerik:GridBoundColumn>
			<telerik:GridTemplateColumn HeaderText="Category" DefaultInsertValue="Beverages" HeaderStyle-Width="150px" UniqueName="CategoryID" DataField="CategoryID">
				<ItemTemplate>
				<%# Eval("CategoryName") %>
				</ItemTemplate>
				<EditItemTemplate>
					<telerik:RadComboBox runat="server" ID="rcbCategory" RenderMode="Lightweight" EnableLoadOnDemand="true" OnItemsRequested="rcbCategory_ItemsRequested"></telerik:RadComboBox>
				</EditItemTemplate>
			</telerik:GridTemplateColumn>
		</Columns>
	</MasterTableView>
</telerik:RadGrid>

<script>
	function OnBatchEditOpened(sender, args) {
		//check which is the column currently being opened so you can easily get the combo box
		if (args.get_columnUniqueName() == "CategoryID") {
			//get the currently opened cell that holds the combo box
			var comboCell = args.get_cell();
			//enumerate the data items in the grid so you can access them later
			args.get_tableView().get_dataItems();
			//get the data item so you can get values from the grid
			var dataItem = $find(args.get_row().getAttribute("id"));
			//traverse the DOM to get a reference to the combo
			var combo = $telerik.$(comboCell).find(".RadComboBox").first()[0].control;
			//get the cell whose value you want to get
			var parameterCell = dataItem.get_cell("ProductName");
			//get the current value of the cell that will be a parameter for the combo
			var parameterText = sender.get_batchEditingManager().getCellValue(parameterCell);
			//if you want the combo to make a new request each time the cell is opened, uncommend this line
			//combo.clearItems();
			//set the combo text as it will be sent to the ItemsRequested handler
			combo.set_text(parameterText);
		}
	}
</script>

<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    DeleteCommand="DELETE FROM [Products] WHERE [ProductID] = @ProductID"
    InsertCommand="INSERT INTO [Products] ([ProductName], [CategoryID]) VALUES (@ProductName, @CategoryID)"
    SelectCommand="SELECT [ProductID], [ProductName], [CategoryName], [Products].[CategoryID] FROM [Products] JOIN Categories ON Products.CategoryID=Categories.CategoryID"
    UpdateCommand="UPDATE [Products] SET [ProductName] = @ProductName, [CategoryID] = @CategoryID WHERE [ProductID] = @ProductID">
    <DeleteParameters>
        <asp:Parameter Name="ProductID" Type="Int32"></asp:Parameter>
    </DeleteParameters>
    <InsertParameters>
        <asp:Parameter Name="ProductName" Type="String"></asp:Parameter>
        <asp:Parameter Name="CategoryID" Type="Int32"></asp:Parameter>
    </InsertParameters>
    <UpdateParameters>
        <asp:Parameter Name="ProductName" Type="String"></asp:Parameter>
        <asp:Parameter Name="CategoryID" Type="Int32"></asp:Parameter>
    </UpdateParameters>
</asp:SqlDataSource>

With this sample the CategoryID is a simple integer created in a loop to showcase how the control works,
and the text you see for it in the combo will not match the actual values
so if you actually update the database you will see a different category name, not what you selected.
````

Sample implementation of the load-on-demand for the combo box

````C#
protected void rcbCategory_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
	string currText = e.Text;
	RadComboBox combo = sender as RadComboBox;
	for (i = 1; i <= 10; i++) {
		combo.Items.Add(new RadComboBoxItem(currText + i, i));
	}
}
````
````VB
Protected Sub rcbCategory_ItemsRequested(sender As Object, e As RadComboBoxItemsRequestedEventArgs)
	Dim currText As String = e.Text
	Dim combo As RadComboBox = DirectCast(sender, RadComboBox)
	For index = 1 To 10
		combo.Items.Add(New RadComboBoxItem(currText & index, index))
	Next
End Sub
````

## See Also

* [Batch Edit Manager API]({%slug grid/data-editing/edit-mode/batch-editing/client-side-api%})
* [dataItem object]({%slug grid/client-side-programming/griddataitem-object/griddataitem-class-members%})
