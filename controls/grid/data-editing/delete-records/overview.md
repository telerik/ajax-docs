---
title: Delete Records Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: grid/data-editing/delete-records/overview
tags: overview
published: True
position: 0
---

# Delete Records Overview



## 

This is a common task that can be accomplished by placing __GridButtonColumn__ with __CommandName__= __"Delete"__ in the grid body.Basically, there are two available options:

1. Perform the delete operation automatically by enabling automatic delete through a DataSource control (see [this online demo](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/AllEditableColumns/DefaultCS.aspx) for more details).

1. Execute the delete operation manually wiring the ItemCommand/DeleteCommand event of the control.

The code section below demonstrates the second case. In this example the grid data source is stored in a Session variable:

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" OnDeleteCommand="RadGrid1_DeleteCommand"
	    OnNeedDataSource="RadGrid1_NeedDataSource">
	    <MasterTableView AutoGenerateColumns="False" DataKeyNames="CustomerID">
	      <Columns>
	        <telerik:GridButtonColumn CommandName="Delete" Text="Delete" UniqueName="DeleteColumn" />
	        <telerik:GridBoundColumn HeaderText="CompanyName" DataField="CompanyName" UniqueName="CompanyName" />
	        <telerik:GridBoundColumn HeaderText="ContactName" DataField="ContactName" UniqueName="ContactName" />
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
````



In the code-behind you should handle properly the __RadGrid1_DeleteCommand__ event.

>tabbedCode

````C#
	    private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
	    {
	        OleDbConnection MyOleDbConnection = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/Grid/Data/Access/Nwind.mdb"));
	        OleDbDataAdapter MyOleDbDataAdapter = new OleDbDataAdapter();
	        MyOleDbDataAdapter.SelectCommand = new OleDbCommand("SELECT TOP 10 CustomerID,CompanyName, ContactName FROM  Customers", MyOleDbConnection);
	        DataTable myDataTable;
	        if (Session["DataSource"] != null)
	        {
	            myDataTable = (DataTable)Session["DataSource"];
	        }
	        else
	        {
	            myDataTable = new DataTable();
	            MyOleDbConnection.Open();
	            try
	            {
	                MyOleDbDataAdapter.Fill(myDataTable);
	            }
	            finally
	            {
	                MyOleDbConnection.Close();
	            }
	            myDataTable.PrimaryKey = new DataColumn[] { myDataTable.Columns["CustomerID"] };
	            Session["DataSource"] = myDataTable;
	        }
	        RadGrid1.DataSource = myDataTable;
	    }
	    private void RadGrid1_DeleteCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        string ID = e.Item.OwnerTableView.DataKeyValues[e.Item.ItemIndex]["CustomerID"].ToString();
	        DataTable table = (DataTable)Session["DataSource"];
	        if (table.Rows.Find(ID) != null)
	        {
	            table.Rows.Find(ID).Delete();
	            table.AcceptChanges();
	            Session["DataSource"] = table;
	        }
	    }
````



````VB.NET
	
	    Private Sub RadGrid1_NeedDataSource(ByVal [source] As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
	        Dim MyOleDbConnection As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/Grid/Data/Access/Nwind.mdb"))
	        Dim MyOleDbDataAdapter As New OleDbDataAdapter
	        MyOleDbDataAdapter.SelectCommand = New OleDbCommand("SELECT TOP 10 CustomerID, Address, ContactName, Country FROM Customers", MyOleDbConnection)
	        Dim myDataTable As DataTable
	        If Not (Session("DataSource") Is Nothing) Then
	            myDataTable = CType(Session("DataSource"), DataTable)
	        Else
	            myDataTable = New DataTable
	            MyOleDbConnection.Open()
	            Try
	                MyOleDbDataAdapter.Fill(myDataTable)
	            Finally
	                MyOleDbConnection.Close()
	            End Try
	            myDataTable.PrimaryKey = New DataColumn() {myDataTable.Columns("CustomerID")}
	            Session("DataSource") = myDataTable
	        End If
	        RadGrid1.DataSource = myDataTable
	    End Sub
	    Private Sub RadGrid1_DeleteCommand(ByVal [source] As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
	        Dim ID As String = e.Item.OwnerTableView.DataKeyValues(e.Item.ItemIndex)("CustomerID").ToString()
	        Dim table As DataTable = CType(Session("DataSource"), DataTable)
	        If Not (table.Rows.Find(ID) Is Nothing) Then
	            table.Rows.Find(ID).Delete()
	            table.AcceptChanges()
	            Session("DataSource") = table
	        End If
	    End Sub
````


>end
