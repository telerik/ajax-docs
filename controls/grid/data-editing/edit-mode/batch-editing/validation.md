---
title: Validation
page_title: Batch Editing Validation | RadGrid for ASP.NET AJAX Documentation
description: Batch Editing Validation
slug: grid/data-editing/edit-mode/batch-editing/validation
tags: batch,editing,validation
published: True
position: 5
---

# Validation

Batch editing functionality supports validation by either using the **ColumnValidationSettings** or declaring a **GridTemplateColumn** and placing a validator in the **EditItemTemplate** or **InsertItemTemplate**. 

>note Saving the changes or opening other cells or rows for edit will be prevented when there is a validator that is not valid. Validation happens on the client only, when a cell is about to be closed.
>
>When validators are present in the grid, the `Tab` keyboard navigation (`ClientSettings.AllowKeyboardNavigation="true"`) will only go through the fields with validators when inserting rows. When editing rows and there is a validator that is not satisfied, you will not be allowed to leave the cell.

>caption Examples of a built-in required field validator and a custom validator for input length

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" GridLines="None" runat="server" AllowAutomaticDeletes="True"
				 AllowAutomaticInserts="True" PageSize="10"  AllowAutomaticUpdates="True" AllowPaging="True"
				 AutoGenerateColumns="False"  DataSourceID="SqlDataSource1">
	<MasterTableView CommandItemDisplay="TopAndBottom" DataKeyNames="ProductID"
					 DataSourceID="SqlDataSource1" HorizontalAlign="NotSet" EditMode="Batch" AutoGenerateColumns="False">
		<BatchEditingSettings EditType="Cell" />
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
					<asp:TextBox ID="Textbox1" runat="server" />
					<asp:CustomValidator runat="server" ID="myValidator" EnableClientScript="true" ClientValidationFunction="myValidation" ControlToValidate="Textbox1" ErrorMessage="Enter more than three characters"></asp:CustomValidator>
				</EditItemTemplate>
			</telerik:GridTemplateColumn>
		</Columns>
	</MasterTableView>
	<ClientSettings AllowKeyboardNavigation="true">
	</ClientSettings>
</telerik:RadGrid>
<script>
	function myValidation(sender, args) {
		var currValue = args.Value;
		if (currValue.length < 3) {
			args.IsValid = false;
		}
	}
</script>
````

>caption MaxLength validation

The `MaxLength` property of a grid column is applicable only with server editing and with batch editing you should use one of the following options:
* a custom validator in a `GridTemplateColumn` as shown in the example above
* for a `GridBoundColumn`, [access the column editor on the server]({%slug grid/rows/accessing-cells-and-rows%}#accessing-controls-in-batch-edit-mode) and set its `TextBoxMaxLength` property. This will set the `maxLength` attribute of the `<input>` element because in batch edit mode a simple `<input>` will be rendered regardless of the `DataType`.
* for a `GridNumericColumn` you can use the `MaxValue` and `MinValue` properties, as it works with numbers and does not have the concept of a string length, and will render a `RadNumericTextBox` control.

````ASP.NET
<telerik:GridBoundColumn DataField="myField" UniqueName="myColumn">
</telerik:GridBoundColumn>

<telerik:GridNumericColumn MaxValue="999" MinValue="0" DataField="myNumericField" HeaderText="numeric max length"
UniqueName="myNumericColumn"></telerik:GridNumericColumn>
````

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    GridTableView masterTable = ((RadGrid)sender).MasterTableView;
    GridTextBoxColumnEditor editor = masterTable.GetBatchColumnEditor("myColumn") as GridTextBoxColumnEditor;
    editor.TextBoxMaxLength = 3;
}

//the sample below can let you loop through all columns in the grid and set similar settings to all of them at the same time
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    RadGrid grid = sender as RadGrid;
    foreach (GridColumn col in grid.MasterTableView.RenderColumns)
    {
        if (col is GridNumericColumn)
        {
            GridNumericColumnEditor editor = grid.MasterTableView.GetBatchColumnEditor(col.UniqueName) as GridNumericColumnEditor;
            editor.NumericTextBox.MaxValue = 100;
            continue; //because the numeric column is also a bound column
        }
        if (col is GridBoundColumn)
        {
            GridTextBoxColumnEditor editor = grid.MasterTableView.GetBatchColumnEditor(col.UniqueName) as GridTextBoxColumnEditor;
            editor.TextBoxMaxLength = 3;
        }

    }
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs) Handles RadGrid1.PreRender
	Dim masterTable As GridTableView = (CType(sender, RadGrid)).MasterTableView
	Dim editor As GridTextBoxColumnEditor = TryCast(masterTable.GetBatchColumnEditor("myColumn"), GridTextBoxColumnEditor)
	editor.TextBoxMaxLength = 3
End Sub

'the sample below can let you loop through all columns in the grid and set similar settings to all of them at the same time'
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs) Handles RadGrid1.PreRender
    Dim grid As RadGrid = TryCast(sender, RadGrid) 

    For Each col As GridColumn In grid.MasterTableView.RenderColumns

        If TypeOf col Is GridNumericColumn Then
            Dim editor As GridNumericColumnEditor = TryCast(grid.MasterTableView.GetBatchColumnEditor(col.UniqueName), GridNumericColumnEditor)
            editor.NumericTextBox.MaxValue = 100
            Continue For 'because the numeric column is also a bound column
        End If

        If TypeOf col Is GridBoundColumn Then
            Dim editor As GridTextBoxColumnEditor = TryCast(grid.MasterTableView.GetBatchColumnEditor(col.UniqueName), GridTextBoxColumnEditor)
            editor.TextBoxMaxLength = 3
        End If
    Next
End Sub
````

>caption How to use controls from other cells in validation

````ASP.NET
<script>
	function validateHired(sender, args) {
		var grid = $telerik.$(sender).parents(".RadGrid").first().get(0).control;
		grid.get_masterTableView().get_dataItems();
		var batchEditManager = grid.get_batchEditingManager();

		var currRow = batchEditManager.get_currentlyEditedRow();
		//the minimum of safety checks for the several times the validation will fire
		// due to the several changes of the content that happen
		if (!currRow) return;
		var dataItem = $find(currRow.getAttribute("id"));

		//access other cells and get reference to controls in them
		//an alternative is the getCellValue(cell) method of the batch editing manager
		var secondCell = dataItem.get_cell("gcExpired");
		var secondDatePicker = $telerik.findControl(secondCell, "gcExpires");
		var secondTime = secondDatePicker.get_selectedDate();

		var currTime = args.Value;//directly taken from the <input> by the framework, can work for the current control
		//another way is to access the current cell's control
		var currCell = dataItem.get_cell("gcHired");
		var currDatePicker = $telerik.findControl(currCell, "gcHire");
		var currTimeFromPicker = currDatePicker.get_selectedDate();

		console.log(currTime + "____" + currTimeFromPicker + " ------" + secondTime);
		//use information to validate

		var errorCondition = false;//actual validation here

		//very simple sample validation
		if (currTimeFromPicker > secondTime) {
			errorCondition = true;
		}

		//invalidate the custom validator
		args.IsValid = !errorCondition;
	}
</script>

<telerik:RadGrid ID="RadGrid1" GridLines="None" runat="server" AllowAutomaticDeletes="True"
				 AllowAutomaticInserts="True" PageSize="10" AllowAutomaticUpdates="True" AllowPaging="True"
				 AutoGenerateColumns="False" DataSourceID="SqlDataSource1">
	<MasterTableView CommandItemDisplay="TopAndBottom"
					 DataSourceID="SqlDataSource1" HorizontalAlign="NotSet" EditMode="Batch" AutoGenerateColumns="False">
		<BatchEditingSettings EditType="Row" />
		<Columns>
			<telerik:GridTemplateColumn UniqueName="gcHired" DataField="OrderDate" HeaderText="Hired" AllowFiltering="False" AllowSorting="False" FilterControlAltText="Filter column column" DataType="System.DateTime">
				<HeaderStyle Width="180px"></HeaderStyle>
				<ItemTemplate>
					<telerik:RadLabel ID="labHired" runat="server" Text='<%# Eval("OrderDate").ToString() %>' Width="100px"></telerik:RadLabel>
				</ItemTemplate>
				<EditItemTemplate>
				<%--In edit mode the batch manager sets the editor value according to the current value of the cell in read mode, so Eval statements are not supported, as this works entirely on the client-side with JS--%>
					<telerik:RadDatePicker ID="gcHire" runat="server">
					</telerik:RadDatePicker>
					<asp:CustomValidator runat="server" ID="hiredValidator" ControlToValidate="gcHire" EnableClientScript="true" ClientValidationFunction="validateHired" ErrorMessage="Hire date must be prior to orders"></asp:CustomValidator>
				</EditItemTemplate>
			</telerik:GridTemplateColumn>

			<telerik:GridTemplateColumn UniqueName="gcExpired" DataField="ShippedDate" HeaderText="Expires" DataType="System.DateTime" HeaderStyle-Width="180px">
				<ItemTemplate>
					<telerik:RadLabel ID="labExpires" runat="server" Text='<%# Eval("ShippedDate")%>'></telerik:RadLabel>
				</ItemTemplate>
				<EditItemTemplate>
					<telerik:RadDatePicker ID="gcExpires" runat="server">
					</telerik:RadDatePicker>
				</EditItemTemplate>
			</telerik:GridTemplateColumn>
		</Columns>
	</MasterTableView>
</telerik:RadGrid>

<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	ProviderName="System.Data.SqlClient" SelectCommand="SELECT Top 10 [ShippedDate], [OrderDate] FROM [Orders]"
	runat="server">
</asp:SqlDataSource>
````

## See Also

* [Batch Editing Client-side API]({% slug grid/data-editing/edit-mode/batch-editing/client-side-api %})
* [The Custom Validator Control](https://msdn.microsoft.com/en-us/library/9eee01cx(v=vs.71).aspx)

