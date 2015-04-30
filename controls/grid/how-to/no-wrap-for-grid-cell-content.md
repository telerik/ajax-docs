---
title: No Wrap for Grid Cell Content
page_title: No Wrap for Grid Cell Content | RadGrid for ASP.NET AJAX Documentation
description: No Wrap for Grid Cell Content
slug: grid/how-to/no-wrap-for-grid-cell-content
tags: no,wrap,for,grid,cell,content
published: True
position: 1
---

# No Wrap for Grid Cell Content



## 

This appearance customization is not supported out-of-the-box in the current version of Telerik RadGrid. However, there is a workaround which you can apply to prevent the wrapping for column cells content. Set the DataFormatString property for each column to **<nobr>{0}</nobr>**. Thus the column(s) in your grid instance should stretch to fit the width of the longest text inside the column(s) cells.

For declarative columns the code be as below:

````ASP.NET
	  <telerik:RadGrid ID="RadGrid1" runat="server">
	    <MasterTableView AutoGenerateColumns="false">
	      <telerik:GridBoundColumn UniqueName="ContactName" HeaderText="Contact name" DataField="ContactName"
	        DataFormatString="<nobr>{0}</nobr>" />
	      <telerik:GridBoundColumn UniqueName="ContactTitle" HeaderText="Contact title" DataField="ContactTitle"
	        DataFormatString="<nobr>{0}</nobr>" />
	      <telerik:GridBoundColumn UniqueName="CompanyName" HeaderText="Company name" DataField="CompanyName"
	        DataFormatString="<nobr>{0}</nobr>" />
	      <telerik:GridBoundColumn UniqueName="Country" HeaderText="Country" DataField="Country"
	        DataFormatString="<nobr>{0}</nobr>" />
	      <telerik:GridBoundColumn UniqueName="City" HeaderText="City" DataField="City" DataFormatString="<nobr>{0}</nobr>" />
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
	            (e.Column as GridBoundColumn).DataFormatString = "<nobr>{0}</nobr>";
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs) Handles RadGrid1.ColumnCreated
	        'add more column types to the conditional check if needed
	        If (TypeOf e.Column Is GridBoundColumn) Then
	            CType(e.Column, GridBoundColumn).DataFormatString = "<nobr>{0}</nobr>"
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
````VB.NET
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

