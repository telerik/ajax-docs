---
title: LINQ To SQL - Binding and Automatic CRUD Operations
page_title: LINQ To SQL - Binding and Automatic CRUD Operations | RadGrid for ASP.NET AJAX Documentation
description: LINQ To SQL - Binding and Automatic CRUD Operations
slug: grid/asp.net-3.5-features/linq-to-sql---binding-and-automatic-crud-operations
tags: linq,to,sql,-,binding,and,automatic,crud,operations
published: True
position: 2
---

# LINQ To SQL - Binding and Automatic CRUD Operations



## 

LINQ to SQL is an ORM (object relational mapping) implementation that ships in the ASP.NET Framework 3.5 release, and which allows you to model a relational database using .NET classes.You can then query the database using LINQ, as well as update/insert/delete data from it. LINQ to SQL provides a runtime infrastructure for managing relational data as objects without losing the ability to query. It does this by translating language-integrated queries into SQL for execution by the database, and then translating the tabular results back into objects you define. Your application is then free to manipulate the objects while LINQ to SQL stays in the background tracking your changes automatically.

LINQ to SQL fully supports transactions, views, and stored procedures.It also provides an easy way to integrate data validation and business logic rules into your data model.

For more information concerning LINQ to SQL review ScottGu's series of blog posts on this subject or the MSDN tutorial linked below:

Using LINQ to SQL (from [part 1](http://weblogs.asp.net/scottgu/archive/2007/05/19/using-linq-to-sql-part-1.aspx ) to [part 5](http://weblogs.asp.net/scottgu/archive/2007/07/16/linq-to-sql-part-5-binding-ui-using-the-asp-linqdatasource-control.aspx))

[LINQ to SQL: .NET Language-Integrated Query for Relational Data](http://msdn.microsoft.com/en-us/library/bb425822.aspx).

RadGrid for ASP.NET AJAX exposes declarative way to binding itself to LinqDataSource (similar to other ASP.NET 2.x/3.x data source controls). Additionally, the grid from the example supports automatic data editing operations, hierarchy as well as paging and sorting. The main points are to configure the LinqDataSource properties at each level of the hierarchy accordingly (using *Where* clause and *WhereParameters *for the nested tables LinqDataSource controls).

To enable automatic editing at data source level, set the *AllowAutomaticUpdates/AllowAutomaticInserts/AllowAutomaticDeletes* properties of the grid instance and the corresponding *EnableUpdate/EnableInsert/EnableDelete* properties of the LinqDataSource to true.

Here are the code snippets from the example referenced in the previous paragraph (it also demonstrates how to implement the *IBindableControl *interface, available in ASP.NET 3.5, in order to support automatic editing operations with WebUserControl custom edit form):

````ASP.NET
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
    <ajaxsettings>
  <telerik:AjaxSetting AjaxControlID="RadGrid1">
    <UpdatedControls>
      <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
      <telerik:AjaxUpdatedControl ControlID="RadWindowManager1" />
    </UpdatedControls>
  </telerik:AjaxSetting>
</ajaxsettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel runat="server" ID="RadAjaxLoadingPanel1" />
<telerik:RadGrid runat="server" ID="RadGrid1" DataSourceID="LinqDataSource1" AllowAutomaticUpdates="true"
    AllowAutomaticInserts="true" AllowAutomaticDeletes="true" AutoGenerateColumns="false"
    AllowPaging="true" OnItemUpdated="RadGrid1_ItemUpdated" OnItemInserted="RadGrid1_ItemInserted"
    OnItemDeleted="RadGrid1_ItemDeleted" OnPreRender="RadGrid1_PreRender">
    <mastertableview datakeynames="CategoryID" commanditemdisplay="Top" insertitempageindexaction="ShowItemOnCurrentPage"
        allowpaging="false">
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
</mastertableview>
    <pagerstyle alwaysvisible="true" />
</telerik:RadGrid>
<telerik:RadWindowManager ID="RadWindowManager1" runat="server" />
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
        <telerik:RadTextBox runat="server" ID="ProductName" Text='<%#DataBinder.Eval(DataItem,"ProductName") %>'
            Width="150px" TextMode="MultiLine" /><asp:RequiredFieldValidator runat="server" ID="ProductNameValidator"
                ControlToValidate="ProductName" Text="*" Display="Dynamic" />
    </li>
    <li>
        <label>
            Price:</label>
        <telerik:RadNumericTextBox runat="server" ID="UnitPrice" MinValue="0" Type="Currency"
            Text='<%#DataBinder.Eval(DataItem,"UnitPrice") %>' Width="50px">
            <numberformat decimaldigits="2" keepnotroundedvalue="true" allowrounding="true" />
        </telerik:RadNumericTextBox><asp:RequiredFieldValidator runat="server" ID="UnitPriceValidator"
            ControlToValidate="UnitPrice" Text="*" Display="Dynamic" />
    </li>
    <li>
        <label>
            Units in Stock:</label>
        <telerik:RadNumericTextBox runat="server" ID="UnitsInStock" MinValue="0" Type="Number"
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





````ASP.NET
public partial class Grid_Examples_dataediting_linqdatasource_productdetailscs:
UserControl, IBindableControl { public void ExtractValues(IOrderedDictionary dictionary)
{ //retrives all RadInputs and add thier values to the dictionary foreach (var input
in Controls.OfType<radinputcontrol>().Select(control => new {FieldName = control.ID, FieldValue = control.Text}))
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

