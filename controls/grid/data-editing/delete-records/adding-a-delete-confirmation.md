---
title: Adding a Delete Confirmation
page_title: Adding a Delete Confirmation | RadGrid for ASP.NET AJAX Documentation
description: Adding a Delete Confirmation
slug: grid/data-editing/delete-records/adding-a-delete-confirmation
tags: adding,a,delete,confirmation
published: True
position: 2
---

# Adding a Delete Confirmation



There are scenarios in which you would like to display a confirmation dialog to prompt the user whether the selected action should be executed or not. There are two possibilities:

## On postback invoke the confirm method

In the standard mode, when Telerik RadGrid performs postbacks, you will invoke the confirm javascript method.

## Built-in delete confirmation for GridButtonColumn

A common enhancement for GridButtonColumn is to display a confirm dialog when the user presses an arbitrary button from it. Since version 3.0 of Telerik RadGrid, we introduced the **ConfirmText** property for GridButtonColumns which is especially designed for cases like this. By default, this property value is empty, hence no confirmation dialog will be displayed when an action is propagated by clicking on an item in that column.If the developer, however, specifies a confirm text sequence, the user will be prompted on whether the task should be undertaken.

## Built-in delete confirmation for GridButtonColumn with RadWindow

RadGrid also supports showing confirmation dialog with [RadWindow](http://www.telerik.com/help/aspnet-ajax/windowoverview.html). You will need to set **ConfirmDialogType** property to **RadWindow** and place a **RadWindowManager**in the page. RadGrid will display a RadWindow confirmation dialog. You can additionally configure the [RadWindowManager](http://www.telerik.com/help/aspnet-ajax/window-design-radwindow-manager.html) control. If there is no RadWindowManager control, RadGrid will ignore this property and will display the default confirm dialog. When **ConfirmDialogType** is set to **"RadWindow"** RadGrid allows additional customization -- the dialog title can be configured through **ConfirmTitle** property.The most common usage of this confirmation dialog is upon deleting grid item (note that the Delete column is type of GridButtonColumn).

## Display confirmation dialog with text including column cell value

In this case you need to implement a different approach (without setting the **ConfirmText** property for the delete column), performing the steps below should ensure the desired functionality:

* wire the **ItemDataBound** event of the grid;

* extract the text value from the column of your choice;

* locate the **LinkButton** control inside the delete **GridButtonColumn**;

* add **onclick** attribute to its **Attributes** collection and relate it to confirm dialog passing the value from the chosen cell



````ASP.NET
	<telerik:RadGrid ID="RadGrid1" runat="server">
	  <MasterTableView AutoGenerateColumns="False">
	    <Columns>
	      <telerik:GridBoundColumn HeaderText="ContactName" DataField="ContactName" UniqueName="ContactName">
	      </telerik:GridBoundColumn>
	      <telerik:GridButtonColumn CommandName="Delete" Text="Delete" UniqueName="DeleteColumn">
	      </telerik:GridButtonColumn>
	    </Columns>
	  </MasterTableView>
	</telerik:RadGrid></pre>
````
````C#
	    private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.Item is GridDataItem)
	        {
	            GridDataItem dataItem = e.Item as GridDataItem;
	            string contactName = dataItem["ContactName"].Text;
	
	            LinkButton button = dataItem["DeleteColumn"].Controls[0] as LinkButton;
	            button.Attributes["onclick"] = "return confirm('Are you sure you want to delete " +
	            contactName + "?')";
	        }
	    }
````
````VB
	    Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
	        If TypeOf e.Item Is GridDataItem Then
	            Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
	
	            Dim contactName As String = dataItem("ContactName").Text
	
	            Dim button As LinkButton = CType(dataItem("DeleteColumn").Controls(0), LinkButton)
	            button.Attributes("onclick") = "return confirm('Are you sure you want to delete " & contactName & "?')"
	        End If
	    End Sub 'RadGrid1_ItemDataBound
````


## Confirmation from control inside a template

In case you would like to display a confirmation dialog to prompt the user whether the selected action should be executed or not (*from control inside some kind of template - ItemTemplate, CommandItemTemplate, etc.*), there are two possible scenarios:

* In the standard mode, when Telerik RadGrid performs postbacks, you will invoke the **confirm** javascript method.

* When Telerik RadGrid works in AJAX mode the same approach is still applicable - you merely need to **return false** from the **OnClientClick** handler in case the user chooses negative option from the confirmation dialog.

Here is an example usage:

````ASP.NET
	<telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="AccessDataSource1" OnNeedDataSource="RadGrid1_NeedDataSource">
	  <MasterTableView AutoGenerateColumns="False" DataKeyNames="CustomerID" DataSourceID="AccessDataSource1">
	    <Columns>
	      <telerik:GridBoundColumn DataField="CustomerID" HeaderText="CustomerID" ReadOnly="True"
	        SortExpression="CustomerID" UniqueName="CustomerID">
	      </telerik:GridBoundColumn>
	      <telerik:GridBoundColumn DataField="CompanyName" HeaderText="CompanyName" SortExpression="CompanyName"
	        UniqueName="CompanyName">
	      </telerik:GridBoundColumn>
	      <telerik:GridBoundColumn DataField="ContactName" HeaderText="ContactName" SortExpression="ContactName"
	        UniqueName="ContactName">
	      </telerik:GridBoundColumn>
	      <telerik:GridTemplateColumn UniqueName="TemplateColumn">
	        <ItemTemplate>
	          <asp:ImageButton ID="ImageButton1" runat="server" AlternateText="Delete Customer"
	            OnClientClick="javascript:if(!confirm('This action will delete the selected customer and all of his/her orders. Are you sure?')){return false;}"
	            ImageUrl="~/RadControls/Grid/Skins/Default/Delete.gif" />
	        </ItemTemplate>
	      </telerik:GridTemplateColumn>
	    </Columns>
	  </MasterTableView>
	</telerik:RadGrid>
````



The following screenshot displays the result from the above code:
![Confirmation dialog](images/grd_ConfirmationDialog.png)
