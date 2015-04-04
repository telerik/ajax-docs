---
title: Applying Custom Sort Criteria
page_title: Applying Custom Sort Criteria | UI for ASP.NET AJAX Documentation
description: Applying Custom Sort Criteria
slug: grid/functionality/sorting/applying-custom-sort-criteria
tags: applying,custom,sort,criteria
published: True
position: 5
---

# Applying Custom Sort Criteria



## 

By default, __RadGrid__ changes the [sort mode]({%slug grid/functionality/sorting/controlling-sort-modes%}) in an ascending/descending/none sequence when the user clicks the column headers. The way that sort mode is interpreted depends on the __DataType__ of the column:

* When the __DataType__ is "String", columns are sorted alphabetically.

* When the __DataType__ is a numeric type such as "Integer" or "Double", columns are sorted numerically.

You can skip this default sort behavior and provide your own custom sort order for a column by setting the __AllowCustomSorting__ property of the corresponding table view. With custom sorting enabled, __RadGrid__ displays the sorting icons but does not actually sort the data. Instead, you perform the custom sorting inside the __SortCommand__ event handler.

The following example shows how to apply custom sort pattern for two columns - FirstName and LastName. The first column is sorted based on the length of the strings in its cells while the second column is sorted in reverse order (descending/ascending/none):

>caution It is a good idea -not- to use auto-generated columns so that you can be sure of the DataField name for each column.
>


````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" AllowSorting="True" AutoGenerateColumns="False"
	        GridLines="None" OnSortCommand="RadGrid1_SortCommand" OnNeedDataSource="RadGrid1_NeedDataSource">
	        <MasterTableView AllowCustomSorting="true">
	            <Columns>
	                <telerik:GridBoundColumn HeaderText="First name" HeaderButtonType="TextButton" DataField="FirstName" />
	                <telerik:GridBoundColumn HeaderText="Last name" HeaderButtonType="TextButton" DataField="LastName"
	                    SortAscImageUrl="Img/SortDesc.gif" SortDescImageUrl="Img/SortAsc.gif" />
	            </Columns>
	        </MasterTableView>
	    </telerik:RadGrid>
````



In the code-behind, the __SortCommand__ event handler assigns a data source with the records in the desired sort order:

>tabbedCode

````C#
	    public DataTable GetDataTable(string query)
	    {
	        String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
	        SqlConnection conn = new SqlConnection(ConnString);
	        SqlDataAdapter adapter = new SqlDataAdapter();
	        adapter.SelectCommand = new SqlCommand(query, conn);
	
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
	    protected void RadGrid1_SortCommand(object source, GridSortCommandEventArgs e)
	    {
	        if ("FirstName".Equals(e.CommandArgument))
	        {
	            switch (e.OldSortOrder)
	            {
	                case GridSortOrder.None:
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees ORDER BY LEN(FirstName) ASC");
	                    e.Item.OwnerTableView.Rebind();
	                    break;
	                case GridSortOrder.Ascending:
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees ORDER BY LEN(FirstName) DESC");
	                    e.Item.OwnerTableView.Rebind();
	                    break;
	                case GridSortOrder.Descending:
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees");
	                    e.Item.OwnerTableView.Rebind();
	                    break;
	            }
	        }
	        else if ("LastName".Equals(e.CommandArgument))
	        {
	            switch (e.OldSortOrder)
	            {
	                case GridSortOrder.None:
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees ORDER BY LastName DESC");
	                    e.Item.OwnerTableView.Rebind();
	                    break;
	                case GridSortOrder.Ascending:
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees ORDER BY LastName ASC");
	                    e.Item.OwnerTableView.Rebind();
	                    break;
	                case GridSortOrder.Descending:
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees");
	                    e.Item.OwnerTableView.Rebind();
	                    break;
	            }
	        }
	    }
	    protected void RadGrid1_NeedDataSource(object source, GridNeedDataSourceEventArgs e)
	    {
	        RadGrid1.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees");
	    }
````
````VB.NET
	
	
	    Public Function GetDataTable(ByVal query As String) As DataTable
	        Dim ConnString As String = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
	        Dim conn As SqlConnection = New SqlConnection(ConnString)
	        Dim adapter As SqlDataAdapter = New SqlDataAdapter
	        adapter.SelectCommand = New SqlCommand(query, conn)
	        Dim table1 As New DataTable
	        conn.Open()
	        Try
	            adapter.Fill(table1)
	        Finally
	            conn.Close()
	        End Try
	        Return table1
	    End Function
	
	    Protected Sub RadGrid1_SortCommand(ByVal source As Object, ByVal e As GridSortCommandEventArgs)
	        If e.CommandArgument = "FirstName" Then
	            Select Case e.OldSortOrder
	                Case GridSortOrder.None
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees ORDER BY LEN(FirstName) ASC")
	                    e.Item.OwnerTableView.Rebind()
	                    Exit Select
	                Case GridSortOrder.Ascending
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees ORDER BY LEN(FirstName) DESC")
	                    e.Item.OwnerTableView.Rebind()
	                    Exit Select
	                Case GridSortOrder.Descending
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees")
	                    e.Item.OwnerTableView.Rebind()
	                    Exit Select
	            End Select
	        ElseIf e.CommandArgument = "LastName" Then
	            Select Case e.OldSortOrder
	                Case GridSortOrder.None
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees ORDER BY LastName DESC")
	                    e.Item.OwnerTableView.Rebind()
	                    Exit Select
	                Case GridSortOrder.Ascending
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees ORDER BY LastName ASC")
	                    e.Item.OwnerTableView.Rebind()
	                    Exit Select
	                Case GridSortOrder.Descending
	                    e.Item.OwnerTableView.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees")
	                    e.Item.OwnerTableView.Rebind()
	                    Exit Select
	            End Select
	        End If
	    End Sub
	    Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As GridNeedDataSourceEventArgs)
	        RadGrid1.DataSource = GetDataTable("SELECT FirstName, LastName FROM Employees")
	    End Sub
	
````
>end
