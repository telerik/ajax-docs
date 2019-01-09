---
title: Customizing the Menu
page_title: Customizing the Menu | RadFilter for ASP.NET AJAX Documentation
description: Customizing the Menu
slug: filter/how-to/customizing-the-menu
tags: customizing,the,menu
published: True
position: 4
---

# Customizing the Menu



The menu used for displaying the fields of the field editors and the filter functions is a **RadContexMenu**. You can easily access it and customize it server-side as well as client-side.

## Accessing the context menu

You access the context menu of the RadFilter server-side with the following code:



````C#
RadContextMenu menu = RadFilter1.FindControl("rfContextMenu") as RadContextMenu;
````
````VB.NET
Dim menu As RadContextMenu = TryCast(RadFilter1.FindControl("rfContextMenu"), RadContextMenu)
````


To find it client-side, you can use the following code:

````JavaScript
var filter = $find("<%=RadFilter1.ClientID %>");
var menu = filter.get_contextMenu();
````



## Reducing the filter menu options

You can reduce the filter menu options to display only a subset of the available filter functions depending on the field. A suitable event for this is the **OnClientShowing** of the context menu of the **RadFilter**. In the code below the **IsNull** and **NotIsNull** filter options are hidden for **System.Int32** data:

````JavaScript
function pageLoad(sender, args) {
    var filter = $find("<%=RadFilter1.ClientID %>");
    var menu = filter.get_contextMenu();
    menu.add_showing(FilterMenuShowing);
}

function FilterMenuShowing(sender, args) {
    var filter = $find("<%=RadFilter1.ClientID %>");
    var currentExpandedItem = sender.get_attributes()._data.ItemHierarchyIndex;
    var fieldName = filter._expressionItems[currentExpandedItem];
    var allFields = filter._dataFields;
    var dataType = null;
    for (var i = 0, j = allFields.length; i < j; i++) {
        if (allFields[i].FieldName == fieldName) {
            dataType = allFields[i].DataType;
            break;
        }
    }
    if (dataType == "System.Int32") {
        sender.findItemByValue("IsNull").set_visible(false);
        sender.findItemByValue("NotIsNull").set_visible(false);
    }
}
````

Note that the filter has a default function that is shown in the filter editor row regardless of the context menu. If you want to hide that as well, you need to choose a different option when the current editor is created in the server `FieldEditorCreated` event.

For example, a `ShipVia` column will only have the `GreaterThan` option with the snippets below.

If there is going to only be one option, also make sure to `.click()` it instead of hiding it when the menu is about to show. This will invoke the actual filter operation that the user cannot otherwise call without the menu options.

````ASPX
<telerik:RadFilter RenderMode="Lightweight" runat="server" ID="RadFilter1" FilterContainerID="RadGrid1" ShowApplyButton="false" OnFieldEditorCreated="RadFilter1_FieldEditorCreated"></telerik:RadFilter>

<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" AutoGenerateColumns="false" DataSourceID="SqlDataSource1" AllowPaging="true" AllowSorting="true" AllowFilteringByColumn="true" OnItemCommand="RadGrid1_ItemCommand">
	<MasterTableView IsFilterItemExpanded="false" CommandItemDisplay="Top">
		<CommandItemTemplate>
			<telerik:RadToolBar RenderMode="Lightweight" runat="server" ID="RadToolBar1" AutoPostBack="true">
				<Items>
					<telerik:RadToolBarButton Text="Apply filter" CommandName="FilterRadGrid" ImagePosition="Right"></telerik:RadToolBarButton>
				</Items>
			</telerik:RadToolBar>
		</CommandItemTemplate>
		<Columns>
			<telerik:GridNumericColumn DataField="OrderID" HeaderText="OrderID" DataType="System.Int32"></telerik:GridNumericColumn>
			<telerik:GridDateTimeColumn DataField="OrderDate" HeaderText="OrderDate" DataFormatString="{0:MM/dd/yyyy}"></telerik:GridDateTimeColumn>
			<telerik:GridNumericColumn DataField="ShipVia" HeaderText="ShipVia" DataType="System.Int32"></telerik:GridNumericColumn>
			<telerik:GridBoundColumn DataField="ShipName" HeaderText="ShipName"></telerik:GridBoundColumn>
			<telerik:GridBoundColumn DataField="ShipAddress" HeaderText="ShipAddress"></telerik:GridBoundColumn>
			<telerik:GridNumericColumn DataField="Freight" HeaderText="Freight" DataType="System.Decimal"></telerik:GridNumericColumn>
		</Columns>
	</MasterTableView>
</telerik:RadGrid>

<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" SelectCommand="Select OrderID, OrderDate, ShipVia, ShipName, ShipAddress, Freight FROM Orders"></asp:SqlDataSource>

<script>
	function FilterMenuShowing(sender, args) {
		var filter = $find("<%=RadFilter1.ClientID %>");
		var currentExpandedItem = sender.get_attributes()._data.ItemHierarchyIndex;
		var fieldName = filter._expressionItems[currentExpandedItem];
		if (fieldName == "ShipVia") { //we choose to modify the ShipVia field
			sender.findItemByValue("EqualTo").set_visible(false);
			//sender.findItemByValue("Contains").set_visible(false);
			sender.findItemByValue("IsNull").set_visible(false);
			sender.findItemByValue("DoesNotContain").set_visible(false);
			sender.findItemByValue("StartsWith").set_visible(false);
			sender.findItemByValue("EndsWith").set_visible(false);
			sender.findItemByValue("NotEqualTo").set_visible(false);
			sender.findItemByValue("GreaterThanOrEqualTo").set_visible(false);
			sender.findItemByValue("LessThanOrEqualTo").set_visible(false);
			sender.findItemByValue("Between").set_visible(false);
			sender.findItemByValue("NotBetween").set_visible(false);
			sender.findItemByValue("IsEmpty").set_visible(false);
			sender.findItemByValue("NotIsEmpty").set_visible(false);
			sender.findItemByValue("NotIsNull").set_visible(false);
			sender.findItemByValue("GreaterThan").set_visible(false);

			//let's say that we want to use only this filter
			sender.findItemByValue("GreaterThan").click();

			sender.findItemByValue("LessThan").set_visible(false);
			sender.findItemByValue("NotOr").set_visible(false);
			sender.findItemByValue("NotAnd").set_visible(false);
			sender.findItemByValue("Or").set_visible(false);
		}
	}

	function pageLoad(sender, args) {
		var filter = $find("<%=RadFilter1.ClientID %>");
		var menu = filter.get_contextMenu();
		menu.add_showing(FilterMenuShowing);
	}
</script>
````

````C#
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
	if (e.CommandName == "FilterRadGrid")
	{
		RadFilter1.FireApplyCommand();
	}
}


protected void RadFilter1_FieldEditorCreated(object sender, RadFilterFieldEditorCreatedEventArgs e)
{
	//this has to match the client-side code
	if(e.Editor.FieldName == "ShipVia")
	{
		e.Editor.DefaultFilterFunction = RadFilterFunction.GreaterThan;
	}
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    If e.CommandName = "FilterRadGrid" Then
        RadFilter1.FireApplyCommand()
    End If
End Sub

Protected Sub RadFilter1_FieldEditorCreated(ByVal sender As Object, ByVal e As RadFilterFieldEditorCreatedEventArgs)
    'this has to match the client-side code'
    If e.Editor.FieldName = "ShipVia" Then
        e.Editor.DefaultFilterFunction = RadFilterFunction.GreaterThan
    End If
End Sub
````

