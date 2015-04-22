---
title: Hiding the expand/collapse images when no records in self-referencing hierarchy
page_title: Hiding the expand/collapse images when no records in self-referencing hierarchy | RadGrid for ASP.NET AJAX Documentation
description: Hiding the expand/collapse images when no records in self-referencing hierarchy
slug: grid/hierarchical-grid-types-and-load-modes/how-to/hiding-the-expand/collapse-images-when-no-records-in-self-referencing-hierarchy
tags: hiding,the,expand/collapse,images,when,no,records,in,self-referencing,hierarchy
published: True
position: 4
---

# Hiding the expand/collapse images when no records in self-referencing hierarchy



## 

You may want to hide the expand/collapse images when there are not records under parent grid item in self-referencing hierarchy (choosing **HierarchyLoadMode = ServerOnDemand** or **HierarchyLoadMode = ServerBind** options for loading grid hierarchy). To accomplish this task you need to:

1. Wire the **PreRender** event of Telerik RadGrid

1. Check whether the referenced GridTableView's **Controls** collection is not empty

1. Traverse all grid items and get reference to those which are of type **GridNestedViewItem**

1. Verify whether their **NestedTableViews** collection is empty

1. If so, locate the expand/collapse image inside the **ExpandCollapse** column of the respective **GridTableView**

1. Hide the image along with the corresponding **GridNestedViewItem**

1. Perform a recursive call in case the referenced GridTableView's **Items** collection is not empty

Below is the code of a simple demo implementation:

>note In case you use .NET 3.5 or later, you should set the **EnableLinqExpressions** property of the RadGrid control to **false** or use Linq syntax for the grid FilterExpression.
>




````ASPNET
	  <telerik:RadGrid ID="RadGrid1" ShowHeader="true" OnNeedDataSource="RadGrid1_NeedDataSource"
	    runat="server" Skin="Vista" Width="97%" OnColumnCreated="RadGrid1_ColumnCreated"
	    OnPreRender="RadGrid1_PreRender" OnItemCreated="RadGrid1_ItemCreated" GridLines="None">
	    <MasterTableView HierarchyLoadMode="ServerOnDemand" HierarchyDefaultExpanded="true"
	      EnableNoRecordsTemplate="true" DataKeyNames="ID, ParentID" Width="100%">
	      <SelfHierarchySettings ParentKeyName="ParentID" KeyName="ID" />
	    </MasterTableView>
	  </telerik:RadGrid>
````
````C#
	    private void Page_Load(object sender, System.EventArgs e)
	    {
	        if (!IsPostBack)
	        {
	            RadGrid1.MasterTableView.FilterExpression = "ParentID = 0";
	        }
	    }
	    public DataTable GetDataTable(string query)
	    {
	        OleDbConnection connection1 = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + System.Web.HttpContext.Current.Server.MapPath("~/App_Data/db1.mdb"));
	        OleDbDataAdapter adapter1 = new OleDbDataAdapter();
	        adapter1.SelectCommand = new OleDbCommand(query, connection1);
	        DataTable table1 = new DataTable();
	        connection1.Open();
	        try
	        {
	            adapter1.Fill(table1);
	        }
	        finally
	        {
	            connection1.Close();
	        }
	        return table1;
	    }
	    protected void RadGrid1_NeedDataSource(object source, GridNeedDataSourceEventArgs e)
	    {
	        RadGrid1.DataSource = GetDataTable("SELECT * FROM SelfReferencing");
	    }
	    protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
	    {
	        if (e.Column.IsBoundToFieldName("ID") || e.Column.IsBoundToFieldName("ParentID"))
	        {
	            e.Column.Visible = false;
	        }
	    }
	    protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridHeaderItem)
	        {
	            e.Item.Style["display"] = "none";
	        }
	    }
	    protected void RadGrid1_PreRender(object sender, System.EventArgs e)
	    {
	        RemoveExpandIconWhenNoRecords(RadGrid1.MasterTableView);
	    }
	    protected void RemoveExpandIconWhenNoRecords(GridTableView view)
	    {
	        if (view.Controls.Count > 0)
	        {
	            foreach (GridItem item in view.Controls[0].Controls)
	            {
	                if (item is GridNestedViewItem)
	                {
	                    GridNestedViewItem nestedViewItem = (GridNestedViewItem)item;
	                    if (nestedViewItem.NestedTableViews[0].Items.Count == 0)
	                    {
	                        TableCell cell = nestedViewItem.NestedTableViews[0].ParentItem["ExpandColumn"];
	                        cell.Controls[0].Visible = false;
	                        cell.Text = "&nbsp"; 
	                        nestedViewItem.Visible = false;
	                    }
	                    else
	                    {
	                        RemoveExpandIconWhenNoRecords(nestedViewItem.NestedTableViews[0]);
	                    }
	                }
	            }
	        }
	    }
````
````VB.NET
	    Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Me.Load
	        If Not IsPostBack Then
	            RadGrid1.MasterTableView.FilterExpression = "ParentID = 0"
	        End If
	    End Sub
	    Public Function GetDataTable(ByVal query As String) As DataTable
	        Dim connection1 As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + System.Web.HttpContext.Current.Server.MapPath("~/App_Data/db1.mdb"))
	        Dim adapter1 As New OleDbDataAdapter()
	        adapter1.SelectCommand = New OleDbCommand(query, connection1)
	        Dim table1 As New DataTable()
	        connection1.Open()
	        Try
	            adapter1.Fill(table1)
	        Finally
	            connection1.Close()
	        End Try
	        Return table1
	    End Function
	    Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As GridNeedDataSourceEventArgs)
	        RadGrid1.DataSource = GetDataTable("SELECT * FROM SelfReferencing")
	    End Sub
	    Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs)
	        If e.Column.IsBoundToFieldName("ID") OrElse e.Column.IsBoundToFieldName("ParentID") Then
	            e.Column.Visible = False
	        End If
	    End Sub
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
	        If TypeOf e.Item Is GridHeaderItem Then
	            e.Item.Style("display") = "none"
	        End If
	    End Sub
	    Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As System.EventArgs)
	        RemoveExpandIconWhenNoRecords(RadGrid1.MasterTableView)
	    End Sub
	    Protected Sub RemoveExpandIconWhenNoRecords(ByVal view As GridTableView)
	        Dim item As GridItem
	        If (view.Controls.Count > 0) Then
	            For Each item In view.Controls(0).Controls
	                If TypeOf item Is GridNestedViewItem Then
	                    Dim nestedViewItem As GridNestedViewItem = CType(item, GridNestedViewItem)
	                    If nestedViewItem.NestedTableViews(0).Items.Count = 0 Then
	                        Dim cell As TableCell = nestedViewItem.NestedTableViews(0).ParentItem("ExpandColumn")
	                        cell.Controls(0).Visible = False
	                        cell.Text = "&nbsp"
	                        nestedViewItem.Visible = False
	                    Else
	                        RemoveExpandIconWhenNoRecords(nestedViewItem.NestedTableViews(0))
	                    End If
	                End If
	            Next item
	        End If
	    End Sub
````

