---
title: LINQ to SQL - Binding and Automatic CRUD Operations
page_title: LINQ to SQL Binding and Automatic CRUD - RadGrid
description: Learn how to bind RadGrid to LINQ to SQL data and enable automatic insert, update, and delete operations in ASP.NET AJAX.
slug: grid/asp.net-3.5-features/linq-to-sql---binding-and-automatic-crud-operations
components: ["grid"]
tags: linq,to,sql,-,binding,and,automatic,crud,operations
published: True
position: 2
---

# LINQ to SQL - Binding and Automatic CRUD Operations

LINQ to SQL is an object-relational mapping (ORM) implementation included in ASP.NET Framework 3.5. It lets you model a relational database with .NET classes, query the database with LINQ, and update, insert, or delete data. LINQ to SQL tracks changes to the objects and translates the queries and updates into SQL for the database.

LINQ to SQL supports transactions, views, and stored procedures. It also provides a way to integrate data validation and business logic rules into your data model.

For more information about LINQ to SQL, review the following resources:

- [Using LINQ to SQL](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/sql/linq/)
- [LINQ to SQL: .NET Language-Integrated Query for Relational Data](https://msdn.microsoft.com/en-us/library/bb425822.aspx).

## Binding RadGrid to LinqDataSource

RadGrid for ASP.NET AJAX provides a declarative way to bind to `LinqDataSource`, similar to other ASP.NET data source controls. The example supports automatic data editing, hierarchical display, paging, and sorting. Configure the `LinqDataSource` properties at each level of the hierarchy, including the `Where` clause and `WhereParameters` for nested `LinqDataSource` controls.

To enable automatic editing at the data source level, set `AllowAutomaticUpdates`, `AllowAutomaticInserts`, and `AllowAutomaticDeletes` to `true` on the grid. Set the corresponding `EnableUpdate`, `EnableInsert`, and `EnableDelete` properties of the `LinqDataSource` to `true`.

## Configuring Automatic CRUD Operations

The following code snippets show the example configuration. They also demonstrate how to implement the `IBindableControl` interface for a custom Web User Control edit form.

> caption Example: Binding RadGrid to LINQ to SQL for automatic CRUD operations

````ASP.NET
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
    <AjaxSettings>
  <telerik:AjaxSetting AjaxControlID="RadGrid1">
    <UpdatedControls>
      <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
      <telerik:AjaxUpdatedControl ControlID="RadWindowManager1" />
    </UpdatedControls>
  </telerik:AjaxSetting>
</AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel runat="server" ID="RadAjaxLoadingPanel1" />
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" DataSourceID="LinqDataSource1" AllowAutomaticUpdates="true"
    AllowAutomaticInserts="true" AllowAutomaticDeletes="true" AutoGenerateColumns="false"
    AllowPaging="true" OnItemUpdated="RadGrid1_ItemUpdated" OnItemInserted="RadGrid1_ItemInserted"
    OnItemDeleted="RadGrid1_ItemDeleted" OnPreRender="RadGrid1_PreRender">
    <MasterTableView DataKeyNames="CategoryID" CommandItemDisplay="Top" InsertItemPageIndexAction="ShowItemOnCurrentPage"
        AllowPaging="false">
  <Columns>
    <telerik:GridBoundColumn DataField="CategoryID" HeaderText="Category ID" ReadOnly="true"
      ForceExtractValue="Always" />
    <telerik:GridBoundColumn DataField="CategoryName" HeaderText="Category Name" />
    <telerik:GridBoundColumn DataField="Description" HeaderText="Description" />
    <telerik:GridEditCommandColumn ButtonType="ImageButton" />
    <telerik:GridButtonColumn ConfirmText="Delete this category?" ConfirmDialogType="RadWindow"
      ConfirmTitle="Delete" ButtonType="ImageButton" CommandName="Delete" />
  </Columns>
  <DetailTables>
    <telerik:GridTableView DataSourceID="LinqDataSource2" CommandItemDisplay="Top" DataKeyNames="ProductID, CategoryID"
      Width="100%" InsertItemPageIndexAction="ShowItemOnCurrentPage" EditMode="PopUp">
      <ParentTableRelation>
        <telerik:GridRelationFields DetailKeyField="CategoryID" MasterKeyField="CategoryID" />
      </ParentTableRelation>
      <Columns>
        <telerik:GridEditCommandColumn ButtonType="ImageButton" />
        <telerik:GridBoundColumn DataField="ProductID" HeaderText="Product ID" ReadOnly="true"
          ForceExtractValue="Always" />
        <telerik:GridBoundColumn DataField="CategoryID" HeaderText="CategoryID" ReadOnly="true"
          ForceExtractValue="Always" Visible="false" />
        <telerik:GridBoundColumn DataField="ProductName" HeaderText="Product Name" />
        <telerik:GridBoundColumn DataField="UnitPrice" HeaderText="Price" DataFormatString="{0:c}" />
        <telerik:GridNumericColumn DataField="UnitsInStock" HeaderText="Units In Stock" NumericType="Number" />
        <telerik:GridButtonColumn ConfirmText="Delete this product?" ConfirmDialogType="RadWindow"
          ConfirmTitle="Delete" ButtonType="ImageButton" CommandName="Delete" />
      </Columns>
      <EditFormSettings EditFormType="WebUserControl" UserControlName="productdetailscs.ascx">
        <EditColumn ButtonType="ImageButton" />
        <PopUpSettings Modal="true" Width="350px" />
      </EditFormSettings>
    </telerik:GridTableView>
  </DetailTables>
  <EditFormSettings>
    <EditColumn ButtonType="ImageButton" />
    <PopUpSettings Modal="true" />
  </EditFormSettings>
</MasterTableView>
    <PagerStyle AlwaysVisible="true" />
</telerik:RadGrid>
<telerik:RadWindowManager RenderMode="Lightweight" ID="RadWindowManager1" runat="server" />
<asp:LinqDataSource ID="LinqDataSource1" runat="server" ContextTypeName="LinqToSql.NorthwindDataContext"
    EnableDelete="True" EnableInsert="True" EnableUpdate="True" TableName="Categories">
</asp:LinqDataSource>
<asp:LinqDataSource ID="LinqDataSource2" runat="server" ContextTypeName="LinqToSql.NorthwindDataContext"
    EnableDelete="True" EnableInsert="True" EnableUpdate="True" TableName="Products"
    Where="CategoryID == @CategoryID">
    <WhereParameters>
        <asp:Parameter Name="CategoryID" Type="Int32" />
    </WhereParameters>
</asp:LinqDataSource>
````
````C#
protected void RadGrid1_ItemUpdated(object source, GridUpdatedEventArgs e)
{
    if (e.Exception != null)
    {
        e.ExceptionHandled = true;
        ShowErrorMessage();
    }
}

protected void RadGrid1_ItemInserted(object source, GridInsertedEventArgs e)
{
    if (e.Exception != null)
    {
        e.ExceptionHandled = true;
        ShowErrorMessage();
    }
}

protected void RadGrid1_ItemDeleted(object source, GridDeletedEventArgs e)
{
    if (e.Exception != null)
    {
        e.ExceptionHandled = true;
        ShowErrorMessage();
    }
}

private void ShowErrorMessage()
{
    RadAjaxManager1.ResponseScripts.Add(string.Format("window.radalert(\"Please enter valid data!\")"));
}

protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    if (!IsPostBack && RadGrid1.MasterTableView.Items.Count > 0)
    {
        RadGrid1.MasterTableView.Items[1].Expanded = true;
    }
}
````
````VB.NET
Protected Sub RadGrid1_ItemDeleted(ByVal source As Object, ByVal e As Web.UI.GridDeletedEventArgs) Handles RadGrid1.ItemDeleted
    If e.Exception IsNot Nothing Then
        e.ExceptionHandled = True
        ShowErrorMessage()
    End If
End Sub

Protected Sub RadGrid1_ItemInserted(ByVal source As Object, ByVal e As Web.UI.GridInsertedEventArgs) Handles RadGrid1.ItemInserted
    If e.Exception IsNot Nothing Then
        e.ExceptionHandled = True
        ShowErrorMessage()
    End If
End Sub

Protected Sub RadGrid1_ItemUpdated(ByVal source As Object, ByVal e As Web.UI.GridUpdatedEventArgs) Handles RadGrid1.ItemUpdated
    If e.Exception IsNot Nothing Then
        e.ExceptionHandled = True
        ShowErrorMessage()
    End If
End Sub

Protected Sub ShowErrorMessage()
    RadAjaxManager1.ResponseScripts.Add(String.Format("window.radalert(""Please enter valid data!"")"))
End Sub

Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadGrid1.PreRender
    If (Not IsPostBack AndAlso RadGrid1.MasterTableView.Items.Count > 0) Then
        RadGrid1.MasterTableView.Items(1).Expanded = True
    End If
End Sub
````


````ASP.NET
<ul class="productDetails">
    <li <%=(DataItem is Telerik.Web.UI.GridInsertionObject) ? "style='display:none;'": ""%>>
        <label>
            Product ID:</label>
        <%# DataBinder.Eval(DataItem,"ProductID") %>
    </li>
    <li>
        <label>
            Product Name:</label>
        <telerik:RadTextBox RenderMode="Lightweight" runat="server" ID="ProductName" Text='<%#DataBinder.Eval(DataItem,"ProductName") %>'
            Width="150px" TextMode="MultiLine" /><asp:RequiredFieldValidator runat="server" ID="ProductNameValidator"
                ControlToValidate="ProductName" Text="*" Display="Dynamic" />
    </li>
    <li>
        <label>
            Price:</label>
        <telerik:RadNumericTextBox RenderMode="Lightweight" runat="server" ID="UnitPrice" MinValue="0" Type="Currency"
            Text='<%#DataBinder.Eval(DataItem,"UnitPrice") %>' Width="50px">
            <numberformat decimaldigits="2" keepnotroundedvalue="true" allowrounding="true" />
        </telerik:RadNumericTextBox><asp:RequiredFieldValidator runat="server" ID="UnitPriceValidator"
            ControlToValidate="UnitPrice" Text="*" Display="Dynamic" />
    </li>
    <li>
        <label>
            Units in Stock:</label>
        <telerik:RadNumericTextBox RenderMode="Lightweight" runat="server" ID="UnitsInStock" MinValue="0" Type="Number"
            Text='<%#DataBinder.Eval(DataItem,"UnitsInStock") %>' Width="50px">
            <numberformat decimaldigits="0" allowrounding="true" />
            <incrementsettings step="1" />
        </telerik:RadNumericTextBox>
    </li>
</ul>
<div style="float: right; padding-right: 15px;">
    <asp:ImageButton ID="btnUpdate" AlternateText="Update Product" ToolTip="Update Product"
        runat="server" CommandName="Update" Visible='<%# !(DataItem is Telerik.Web.UI.GridInsertionObject) %>'
        ImageUrl='<%# RadAjaxLoadingPanel.GetWebResourceUrl(Page, "Telerik.Web.UI.Skins.Default.Grid.Update.gif") %>' />
    <asp:ImageButton ID="btnInsert" ToolTip="Insert Product" AlternateText="Insert Product"
        runat="server" CommandName="PerformInsert" Visible='<%# DataItem is Telerik.Web.UI.GridInsertionObject %>'
        ImageUrl='<%# RadAjaxLoadingPanel.GetWebResourceUrl(Page, "Telerik.Web.UI.Skins.Default.Grid.Update.gif") %>' />
    &nbsp;<asp:ImageButton ID="btnCancel" ToolTip="Cancel" AlternateText="Cancel" runat="server"
        CausesValidation="False" CommandName="Cancel" ImageUrl='<%# RadAjaxLoadingPanel.GetWebResourceUrl(Page, "Telerik.Web.UI.Skins.Default.Grid.Cancel.gif") %>' />
</div>
````





````C#
public partial class Grid_Examples_dataediting_linqdatasource_productdetailscs:
    UserControl, IBindableControl
{
    public void ExtractValues(IOrderedDictionary dictionary)
    {
        // Retrieves all RadInputs and adds their values to the dictionary.
        foreach (var input in Controls.OfType<RadInputControl>().Select(control => new { FieldName = control.ID, FieldValue = control.Text }))
        {
            dictionary.Add(input.FieldName, input.FieldValue);
        }
    }

    public object DataItem { get; set; }
}
````
````VB.NET
Partial Class Grid_Examples_dataediting_linqdatasource_productdetailsvb
    Inherits System.Web.UI.UserControl
    Implements IBindableControl
    Public Sub ExtractValues(ByVal dictionary As System.Collections.Specialized.IOrderedDictionary) Implements System.Web.UI.IBindableControl.ExtractValues
        For Each i In Controls.OfType(Of RadInputControl)().Select(Function(control) New With {.FieldName = control.ID, .FieldValue = control.Text})
            dictionary.Add(i.FieldName, i.FieldValue)
        Next
    End Sub
    Private dtItem As Object
    Public Property DataItem() As Object
        Get
            Return dtItem
        End Get
        Set(ByVal value As Object)
            dtItem = value
        End Set
    End Property
End Class
````

## See Also

- [Manual LINQ to SQL CRUD operations]({%slug grid/asp.net-3.5-features/linq-to-sql---binding-and-manual-crud-operations%})
- [Entity Framework binding and CRUD operations]({%slug grid/asp.net-3.5-features/entity-framework---binding-and-crud-operations%})
- [Client binding to WCF and ADO.NET data services]({%slug grid/asp.net-3.5-features/client-binding-to-wcf-web-service-and-ado.net-data-service%})

