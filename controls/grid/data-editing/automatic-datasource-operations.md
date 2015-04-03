---
title: Automatic DataSource Operations
page_title: Automatic DataSource Operations | UI for ASP.NET AJAX Documentation
description: Automatic DataSource Operations
slug: grid/data-editing/automatic-datasource-operations
tags: automatic,datasource,operations
published: True
position: 4
---

# Automatic DataSource Operations



__RadGrid__ provides an API for inserting new data, updating existing data and deleting data from the specified data source. You can use these features while writing very little code.

## Controlling the automatic data source operations

Once it is bound to a __DataSource__ control that supports Insert, Update, and Delete operations, __RadGrid__ can take an advantage of the data source capabilities to perform the required operations with no code except error handling required. In order to achieve this, you need to set the following three properties:

* __AllowAutomaticDeletes__="__True__"

* __AllowAutomaticInserts__="__True__"

* __AllowAutomaticUpdates__="__True__"

The automatic data source operations only work when binding the grid to a [declarative data source]({%slug grid/data-binding/understanding-data-binding/server-side-binding/declarative-datasource%}) using the __DataSourceID__ property of the grid. You must configure the data source so that it supports the automatic operations.

You also need to set the __DataKeyNames__ property of the table views in the grid so that the insert, update, and delete operations perform as expected.

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" PageSize="5" Skin="Silk"
	    DataSourceID="SqlDataSource1" AllowAutomaticInserts="True" AllowAutomaticUpdates="True"
	    AllowAutomaticDeletes="True">
	    <MasterTableView EditMode="InPlace" CommandItemDisplay="Bottom" DataSourceID="SqlDataSource1"
	      DataKeyNames="OrderID" AutoGenerateColumns="False">
	      <EditFormSettings>
	        <EditColumn UniqueName="EditCommandColumn1" />
	        <PopUpSettings ScrollBars="None" />
	      </EditFormSettings>
	      <Columns>
	        <telerik:GridEditCommandColumn />
	        <telerik:GridButtonColumn CommandName="Delete" Text="Delete" UniqueName="DeleteColumn" />
	        <telerik:GridBoundColumn DataField="OrderID" HeaderText="Order ID" ReadOnly="True"
	          UniqueName="OrderID" Display="False" />
	        <telerik:GridBoundColumn DataField="CustomerID" HeaderText="Customer ID" UniqueName="CustomerID" />
	        <telerik:GridBoundColumn DataField="EmployeeID" HeaderText="Employee ID" UniqueName="EmployeeID">
	        </telerik:GridBoundColumn>
	        <telerik:GridDateTimeColumn DataField="OrderDate" HeaderText="Order Date" UniqueName="OrderDate"
	          PickerType="DatePicker" />
	        <telerik:GridBoundColumn DataField="ShipName" HeaderText="Shipping Name" UniqueName="ShipName" />
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	     SelectCommand="SELECT [OrderID], [CustomerID], [EmployeeID], [OrderDate], [ShipName] FROM [Orders]" 
	     DeleteCommand="DELETE FROM [Orders] WHERE [OrderID] = @OrderID" 
	     InsertCommand="INSERT INTO [Orders] ([CustomerID], [EmployeeID], [OrderDate], [ShipName]) VALUES (@CustomerID, @EmployeeID, @OrderDate, @ShipName)" 
	     UpdateCommand="UPDATE [Orders] SET [CustomerID] = @CustomerID, [EmployeeID] = @EmployeeID, [OrderDate] = @OrderDate, [ShipName] = @ShipName WHERE [OrderID] = @OrderID">
	     <DeleteParameters>
	         <asp:Parameter Name="OrderID" Type="Int32" />
	     </DeleteParameters>
	     <InsertParameters>
	         <asp:Parameter Name="CustomerID" Type="String" />
	         <asp:Parameter Name="EmployeeID" Type="Int32" />
	         <asp:Parameter Name="OrderDate" Type="DateTime" />
	         <asp:Parameter Name="ShipName" Type="String" />
	     </InsertParameters>
	     <UpdateParameters>
	         <asp:Parameter Name="CustomerID" Type="String" />
	         <asp:Parameter Name="EmployeeID" Type="Int32" />
	         <asp:Parameter Name="OrderDate" Type="DateTime" />
	         <asp:Parameter Name="ShipName" Type="String" />
	         <asp:Parameter Name="OrderID" Type="Int32" />
	      </UpdateParameters>
	   </asp:SqlDataSource>
````



## Additional resources

The following articles describe how to configure some of the more common __DataSource__ controls:

## AccessDataSource:

[http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.accessdatasource.aspx](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.accessdatasource.aspx)

## SqlDataSource:

[http://msdn2.microsoft.com/en-us/library/dz12d98w(vs.80).aspx](http://msdn2.microsoft.com/en-us/library/dz12d98w(vs.80).aspx)

## ObjectDataSource:

[http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx)

## LinqDataSource:

[http://msdn2.microsoft.com/en-us/library/bb547113.aspx](http://msdn2.microsoft.com/en-us/library/bb547113.aspx)

## XmlDataSource:

[http://msdn.microsoft.com/en-us/library/494y92bs.aspx](http://msdn.microsoft.com/en-us/library/494y92bs.aspx)

## EntityDataSource:

[http://msdn.microsoft.com/en-us/library/cc488502.aspx](http://msdn.microsoft.com/en-us/library/cc488502.aspx)

## OpenAccessLinqDataSource:

[http://docs.telerik.com/data-access/developers-guide/asp.net-development/working-with-openaccesslinqdatasource/developer-guide-oalinqdatasource-getting-started](http://docs.telerik.com/data-access/developers-guide/asp.net-development/working-with-openaccesslinqdatasource/developer-guide-oalinqdatasource-getting-started)

For a tutorial that uses automatic CRUD operations feature, see [Add controls to column templates]({%slug grid/getting-started/add-controls-to-column-templates%}).

For a live example that demonstrates automatic data source operations, see [Automatic operations](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/AllEditableColumns/DefaultCS.aspx).

You may also examine the resources below:

[Automatic operations with SqlDataSource control in hierarchical grid](http://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/insert-update-delete-hierarchy/defaultcs.aspx)

[Insert/Update/Delete with stored procedures and SqlDataSource control](http://www.telerik.com/community/code-library/submission/b311D-tgcgc.aspx)

>note Automatic editing operations are not supported when the viewstate of the grid is disabled (EnableViewState = false). You will need to perform update/insert/delete manually with code as illustrated[here](http://www.telerik.com/community/code-library/submission/b311D-tgtkd.aspx).
>


## Extracting values

__RadGrid__ has several [types of columns]({%slug grid/columns/column-types%}) capable of editing data that support automatic data source operations. These are:

* __GridBoundColumn__

* __GridCheckboxColumn__

* __GridDropDownColumn__

* __GridDateTimeColumn__

* __GridNumericColumn__

* __GridMaskedColumn__

* __GridHTMLEditorColumn__

* __GridTemplateColumn__

By default __RadGrid__ extracts the values from the column editors for all columns of the currently edited __GridItem__ when updating or inserting a new record unless they are set as read-only. When deleting an item, __RadGrid__ extracts the values from the cells of the __GridItem__ that is to be deleted. The extraction of all values is necessary when the data source control has __ConflictDetection="CompareAllValues"__ (the default DataSource control behavior).

Extracting values from an __Item__ is supported only when the grid has an edit mode of __InPlace__ or __EditForms__ (auto-generated edit forms) or uses a template.

__RadGrid__ can extract values from columns that are set as read-only, if the column's __ForceExtractValue__ property is set to:

* "InBrowseMode" - when deleting records

* "InEditMode" - when inserting or updating records

* "Always" - for all modes

The default value for the __ForceExtractValue__ property is "None", which means that the extraction of default values will not be performed for read-only columns.

## Automatic operations with WebUserControl as EditForm

Automatic operations through the __DataSource__ control are not supported when you use standard __WebUserControl__ as a custom edit form. If you are using a custom edit form, there are three options for implementing the data source operations:

1. Make the user control class (which represents your user control) implement the *IBindableControl *interface as follows:

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" AllowSorting="true" AllowPaging="true" DataSourceID="SqlDataSource1"
	    runat="server">
	    <MasterTableView DataKeyNames="ProductID" AllowAutomaticDeletes="true" AllowAutomaticUpdates="true"
	      AllowAutomaticInserts="true" AutoGenerateColumns="false" CommandItemDisplay="Top">
	      <EditFormSettings EditFormType="WebUserControl" UserControlName="WebUserControl.ascx" />
	      <Columns>
	        <telerik:GridButtonColumn Text="Delete" CommandName="Delete" HeaderStyle-Width="30px" />
	        <telerik:GridEditCommandColumn HeaderStyle-Width="30px" />
	        <telerik:GridBoundColumn DataField="ProductID" HeaderText="ProductID" />
	        <telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" />
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
````



````XML
	  <%@ Control Language="C#" AutoEventWireup="true" CodeFile="WebUserControl.ascx.cs" Inherits="WebUserControl" %>
	    <asp:TextBox ID="TextBox1" Text='<%# Bind("ProductName") %>' runat="server" />
	    <asp:Button ID="Button1" Text="Update" CommandName="Update" runat="server" />
	    <asp:Button ID="Button2" Text="Cancel" CommandName="Cancel" runat="server" />
````



````C#
	    public partial class WebUserControl : System.Web.UI.UserControl, IBindableControl
	    {
	        public void ExtractValues(System.Collections.Specialized.IOrderedDictionary dictionary)
	        {
	            dictionary["ProductName"] = TextBox1.Text;
	        }
	    }
````



````VB.NET
	    Partial Public Class WebUserControl
	        Inherits System.Web.UI.UserControl
	        Implements IBindableControl
	        Public Sub ExtractValues(ByVal dictionary As System.Collections.Specialized.IOrderedDictionary)
	            dictionary("ProductName") = TextBox1.Text
	        End Sub
	    End Class
````



1. Use a template edit form (__FormTemplate__) instead of a __WebUserControl__. You can copy the template from the user control to the edit form template and modify the binding logic using the __Bind__() syntax (two-way binding) instead of __DataBinder.Eval__ (one-way binding). For an example of this approach, see [Form template edit form.](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultCS.aspx)

>note Note that in this case __RadGrid__ automatically extracts the edited values and calls the update method of the __DataSource__ control.
>


1. Implement the data-editing manually. In the code of the __WebUserControl__, write code to extract the values from all controls (such as text boxes and other input controls). You can use __DataAdapters__ to save the changes to your database. You can also execute the __DataSourceView.Update__ method as described in the ASP.NET documentation:

* [http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasourceview.aspx](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasourceview.aspx)

* [http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.update.aspx](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.update.aspx)
