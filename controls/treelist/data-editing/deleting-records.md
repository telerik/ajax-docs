---
title: Deleting Records
page_title: Deleting Records | UI for ASP.NET AJAX Documentation
description: Deleting Records
slug: treelist/data-editing/deleting-records
tags: deleting,records
published: True
position: 6
---

# Deleting Records



There are generally two ways to perform a delete operation inside RadTreeList:

* Through the automatic operations provided by the control.

* Manually, by wiring the ItemCommand or DeleteCommand event of the control.

In both cases, the most straightforward way to trigger the delete is to use a
__TreeListButtonColumn__ with a CommandName property set to "Delete".

## Deleting records using automatic operations

You can take advantage of the automatic datasource operations of RadTreeList by setting up a
datasource control to allow deletes and binding the treelist to it. Additionally, if you allow cascade deletes for your database, you can set the __AllowRecursiveDelete__ property to __"true"__ which will take care of deleting all child items (if any) of the currently deleted item.

## Deleting records manually

The manual delete operations in RadTreeList consist of two main parts:

1. Accessing the datakey value of the item to be deleted.

1. Using it to find the record inside the treelistcdatasource and deleting it.

Once the user clicks the delete button inside the treelist, you can handle the __DeleteCommand__ event and perform these steps there. The code snippet below demonstrated a possible approach:



````ASPNET
	        <telerik:RadTreeList ID="RadTreeList1" runat="server" DataKeyNames="ID" ParentDataKeyNames="ParentID"
	            AutoGenerateColumns="false" OnNeedDataSource="RadTreeList1_NeedDataSource" OnDeleteCommand="RadTreeList1_DeleteCommand">
	            <Columns>
	                <telerik:TreeListBoundColumn DataField="ID" UniqueName="ID" HeaderText="ID">
	                </telerik:TreeListBoundColumn>
	                <telerik:TreeListBoundColumn DataField="Name" UniqueName="Name" HeaderText="Name">
	                </telerik:TreeListBoundColumn>
	                <telerik:TreeListBoundColumn DataField="ParentID" UniqueName="ParentID" HeaderText="ParentID">
	                </telerik:TreeListBoundColumn>
	                <telerik:TreeListButtonColumn HeaderText="Delete" CommandName="Delete" Text="Delete" />
	            </Columns>
	        </telerik:RadTreeList>
````
````C#
	    protected void RadTreeList1_NeedDataSource(object sender, TreeListNeedDataSourceEventArgs e)
	    {
	        RadTreeList1.DataSource = GetDataTable();
	    }
	
	    protected void RadTreeList1_DeleteCommand(object sender, TreeListCommandEventArgs e)
	    {
	        //accessing the datakey value through the server API of the TreeListDataItem
	        string dataKeyValue = (e.Item as TreeListDataItem).GetDataKeyValue("ID").ToString();
	        //the actual deletion logic depends on the kind of datasource that you use, your only task is to remove the item from the datasource. The RadTreeList control will implicitly rebind itself afterwards.
	        String ConnString = ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString;
	        SqlConnection conn = new SqlConnection(ConnString);
	        SqlCommand deleteCommand = new SqlCommand("DELETE FROM SelfReferencing WHERE ID='" + dataKeyValue + "'", conn);
	        conn.Open();
	        try
	        {
	            deleteCommand.ExecuteNonQuery();
	        }
	        finally
	        {
	            conn.Close();
	        }
	    }
	
	    public DataTable GetDataTable()
	    {
	        String ConnString = ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString;
	        SqlConnection conn = new SqlConnection(ConnString);
	        SqlDataAdapter adapter = new SqlDataAdapter();
	        adapter.SelectCommand = new SqlCommand("SELECT ID, Name, ParentID FROM SelfReferencing", conn);
	
	        DataTable myDataTable = new DataTable();
	        conn.Open();
	        try
	        {
	            adapter.Fill(myDataTable);
	        }
	        finally
	        {
	            conn.Close();
	        }
	        return myDataTable;
	    }
````
````VB.NET
	    Protected Sub RadTreeList1_NeedDataSource(ByVal sender As Object, ByVal e As TreeListNeedDataSourceEventArgs)
	        RadTreeList1.DataSource = GetDataTable()
	    End Sub
	
	    Protected Sub RadTreeList1_DeleteCommand(ByVal sender As Object, ByVal e As TreeListCommandEventArgs)
	        'accessing the datakey value through the server API of the TreeListDataItem
	        Dim dataKeyValue As String = TryCast(e.Item, TreeListDataItem).GetDataKeyValue("ID").ToString()
	        'the actual deletion logic depends on the kind of datasource that you use, your only task is to remove the item from the datasource. The RadTreeList control will implicitly rebind itself afterwards.
	        Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("TelerikConnectionString").ConnectionString
	        Dim conn As New SqlConnection(ConnString)
	        Dim deleteCommand As New SqlCommand("DELETE FROM SelfReferencing WHERE ID='" + dataKeyValue + "'", conn)
	        conn.Open()
	        Try
	            deleteCommand.ExecuteNonQuery()
	        Finally
	            conn.Close()
	        End Try
	    End Sub
	
	    Public Function GetDataTable() As DataTable
	        Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("TelerikConnectionString").ConnectionString
	        Dim conn As New SqlConnection(ConnString)
	        Dim adapter As New SqlDataAdapter()
	        adapter.SelectCommand = New SqlCommand("SELECT ID, Name, ParentID FROM SelfReferencing", conn)
	
	        Dim myDataTable As New DataTable()
	        conn.Open()
	        Try
	            adapter.Fill(myDataTable)
	        Finally
	            conn.Close()
	        End Try
	        Return myDataTable
	    End Function
````


>note Please note that with this approach you might need to take care of deleting the child itemsof the deleted item as well.
>

