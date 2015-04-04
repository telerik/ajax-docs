---
title: Single expand in hierarchical grid
page_title: Single expand in hierarchical grid | UI for ASP.NET AJAX Documentation
description: Single expand in hierarchical grid
slug: grid/hierarchical-grid-types-and-load-modes/how-to/single-expand-in-hierarchical-grid
tags: single,expand,in,hierarchical,grid
published: True
position: 2
---

# Single expand in hierarchical grid



## 

In some particular scenarios you may want to allow single row expand at a time for each level in the grid hierarchy (due to user preference, custom development conventions, etc.). This feature is not built-in for Telerik RadGrid, however you can provide with only several lines of code. You merely need to:

1. Hook the __ItemCommand__ event and check whether __e.CommandName__ is __RadGrid.ExpandCollapseCommandName__

1. Traverse all items in the currently active GridTableView

1. Set the __Expanded__ property for all items which differ from the __e.Item__ instance to __false__

And here is the code of a simple demo:

>tabbedCode

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" AutoGenerateColumns="False">
	    <MasterTableView DataKeyNames="CustomerID" Width="100%">
	      <DetailTables>
	        <telerik:GridTableView DataKeyNames="OrderID" DataMember="Orders" Width="100%">
	          <ParentTableRelation>
	            <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
	          </ParentTableRelation>
	          <DetailTables>
	            <telerik:GridTableView DataKeyNames="OrderID" DataMember="OrderDetails">
	              <ParentTableRelation>
	                <telerik:GridRelationFields DetailKeyField="OrderID" MasterKeyField="OrderID" />
	              </ParentTableRelation>
	              <Columns>
	                <telerik:GridBoundColumn SortExpression="UnitPrice" HeaderText="Unit Price" HeaderButtonType="TextButton"
	                  DataField="UnitPrice">
	                </telerik:GridBoundColumn>
	                <telerik:GridBoundColumn SortExpression="Quantity" HeaderText="Quantity" HeaderButtonType="TextButton"
	                  DataField="Quantity">
	                </telerik:GridBoundColumn>
	                <telerik:GridBoundColumn SortExpression="Discount" HeaderText="Discount" HeaderButtonType="TextButton"
	                  DataField="Discount">
	                </telerik:GridBoundColumn>
	              </Columns>
	            </telerik:GridTableView>
	          </DetailTables>
	          <Columns>
	            <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID" HeaderButtonType="TextButton"
	              DataField="OrderID">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date Ordered" HeaderButtonType="TextButton"
	              DataField="OrderDate">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn SortExpression="EmployeeID" HeaderText="EmployeeID" HeaderButtonType="TextButton"
	              DataField="EmployeeID">
	            </telerik:GridBoundColumn>
	          </Columns>
	        </telerik:GridTableView>
	      </DetailTables>
	      <Columns>
	        <telerik:GridBoundColumn SortExpression="CustomerID" HeaderText="CustomerID" HeaderButtonType="TextButton"
	          DataField="CustomerID">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn SortExpression="ContactName" HeaderText="Contact Name" HeaderButtonType="TextButton"
	          DataField="ContactName">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn SortExpression="CompanyName" HeaderText="Company" HeaderButtonType="TextButton"
	          DataField="CompanyName">
	        </telerik:GridBoundColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
````
````C#
	
	    private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
	    {
	        if (!e.IsFromDetailTable)
	        {
	            RadGrid1.DataSource = DataSourceHelperCS.GetDataTable("SELECT TOP 5 * FROM Customers");
	        }
	
	        RadGrid1.MasterTableView.DetailTables[0].DataSource = DataSourceHelperCS.GetDataTable("SELECT * FROM Orders");
	        RadGrid1.MasterTableView.DetailTables[0].DetailTables[0].DataSource = DataSourceHelperCS.GetDataTable("SELECT * FROM [Order Details]");
	    }
	    private void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.ExpandCollapseCommandName)
	        {
	            foreach (GridItem item in e.Item.OwnerTableView.Items)
	            {
	                if (item.Expanded && item != e.Item)
	                {
	                    item.Expanded = false;
	                }
	            }
	        }
	    }
	
````
````VB.NET
	    Private Sub RadGrid1_NeedDataSource(ByVal [source] As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
	        If Not e.IsFromDetailTable Then
	            RadGrid1.DataSource = DataSourceHelperCS.GetDataTable("SELECT TOP 5 * FROM Customers")
	        End If
	
	        RadGrid1.MasterTableView.DetailTables(0).DataSource = DataSourceHelperCS.GetDataTable("SELECT * FROM Orders")
	        RadGrid1.MasterTableView.DetailTables(0).DetailTables(0).DataSource = DataSourceHelperCS.GetDataTable("SELECT * FROM [Order Details]")
	    End Sub 'RadGrid1_NeedDataSource
	
	    Private Sub RadGrid1_ItemCommand(ByVal [source] As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If e.CommandName = RadGrid.ExpandCollapseCommandName Then
	            Dim item As GridItem
	            For Each item In e.Item.OwnerTableView.Items
	                If item.Expanded AndAlso Not item Is e.Item Then
	                    item.Expanded = False
	                End If
	            Next item
	        End If
	    End Sub
````
>end
