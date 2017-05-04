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

>note Saving the changes or opening other cells or rows for edit will be prevented when there is a validator that is not valid.

>caption Examples of a built-in required field validator and a custom validator

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





