---
title: No Wrap for Grid Cell Content
page_title: No Wrap for Grid Cell Content - RadGrid
description: Check our Web Forms article about No Wrap for Grid Cell Content.
slug: grid/how-to/common/no-wrap-for-grid-cell-content
previous_url: grid/how-to/no-wrap-for-grid-cell-content
tags: no,wrap,for,grid,cell,content
published: True
position: 1
---

# No Wrap for Grid Cell Content

This appearance customization is not supported out-of-the-box in the current version of **RadGrid**. However, you can use a CSS rule which apply **white-space: nowrap** style attribute to all cells of the grid. Thus the column(s) in your grid instance should stretch to fit the width of the longest text inside the column(s) cells.

For declarative columns the code be as below:

````ASP.NET

<style>
   .RadGrid .rgRow td,
   .RadGrid .rgAltRow td 
   {
      white-space: nowrap;
   }
</style> 

<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
  <MasterTableView AutoGenerateColumns="false">
    <telerik:GridBoundColumn UniqueName="ContactName" HeaderText="Contact name" DataField="ContactName" />
    <telerik:GridBoundColumn UniqueName="ContactTitle" HeaderText="Contact title" DataField="ContactTitle" />
    <telerik:GridBoundColumn UniqueName="CompanyName" HeaderText="Company name" DataField="CompanyName" />
    <telerik:GridBoundColumn UniqueName="Country" HeaderText="Country" DataField="Country" />
    <telerik:GridBoundColumn UniqueName="City" HeaderText="City" DataField="City" />
  </MasterTableView>
</telerik:RadGrid>
````



For auto-generated column subscribe to the **ColumnCreated** event and set the **DataFormatString** in the corresponding handler:



````C#
protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
{
    //add more column types to the conditional check if needed
    if (e.Column is GridBoundColumn)
    {
        (e.Column as GridBoundColumn).DataFormatString = "<span style='white-space: nowrap;'>{0}</span>"; 
    }
}
````
````VB
Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs) Handles RadGrid1.ColumnCreated
    'add more column types to the conditional check if needed
    If (TypeOf e.Column Is GridBoundColumn) Then
        CType(e.Column, GridBoundColumn).DataFormatString = "<span style='white-space: nowrap;'>{0}</span>"
    End If
End Sub
````


In the code-behind (just data-binding):



````C#
private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    OleDbConnection MyOleDbConnection = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/Grid/Data/Access/Nwind.mdb"));
    OleDbDataAdapter MyOleDbDataAdapter = new OleDbDataAdapter();
    MyOleDbDataAdapter.SelectCommand = new OleDbCommand("SELECT TOP 10 CompanyName, ContactName, ContactTitle, Country, City FROM Customers", MyOleDbConnection);
    DataTable myDataTable = new DataTable();
    MyOleDbConnection.Open();
    try
    {
        MyOleDbDataAdapter.Fill(myDataTable);
    }
    finally
    {
        MyOleDbConnection.Close();
    }
    RadGrid1.DataSource = myDataTable.DefaultView;
}
````
````VB
Private Sub RadGrid1_NeedDataSource(ByVal [source] As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    Dim MyOleDbConnection As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/Grid/Data/Access/Nwind.mdb"))
    Dim MyOleDbDataAdapter As New OleDbDataAdapter()
    MyOleDbDataAdapter.SelectCommand = New OleDbCommand("SELECT TOP 10 CompanyName, ContactName, ContactTitle, Country, City FROM Customers", MyOleDbConnection)

    Dim myDataTable As New DataTable()

    MyOleDbConnection.Open()
    Try
        MyOleDbDataAdapter.Fill(myDataTable)
    Finally
        MyOleDbConnection.Close()
    End Try

    RadGrid1.DataSource = myDataTable.DefaultView
End Sub
````


>note This functionality is not supported with static headers (UseStaticHeaders = true) and column resizing. With static headers the cell content will be clipped if you resize a column to make its width dimension smaller than the longest cell data.
>

