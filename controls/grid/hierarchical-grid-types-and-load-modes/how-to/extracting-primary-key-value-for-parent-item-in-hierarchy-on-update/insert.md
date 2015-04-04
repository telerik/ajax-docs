---
title: Extracting primary key value for parent item in hierarchy on update/insert
page_title: Extracting primary key value for parent item in hierarchy on update/insert | UI for ASP.NET AJAX Documentation
description: Extracting primary key value for parent item in hierarchy on update/insert
slug: grid/hierarchical-grid-types-and-load-modes/how-to/extracting-primary-key-value-for-parent-item-in-hierarchy-on-update/insert
tags: extracting,primary,key,value,for,parent,item,in,hierarchy,on,update/insert
published: True
position: 1
---

# Extracting primary key value for parent item in hierarchy on update/insert



## 

Sometimes it is helpful to know the parent item primary key value when updating/inserting child records in grid hierarchy - for example, to refresh the parent row on update action as well (when certain conditions are met) or to hide some edit field in the child insertion form for specific parent item. Below are the steps which can be followed to fetch the parent row primary field in these situations:

* wire the __ItemCommand__ event of the grid.

* in case __e.CommandName__ is __RadGrid.UpdateCommandName__ the __e.Item.OwnerTableView.ParentItem__ instance will point to the item from the parent table to which the child records belong.

* if __e.CommandName__ is __RadGrid.InitInsertCommandName__ or __RadGrid.PerformInsertCommandName__ the case is identical - once again __e.Item.OwnerTableView.ParentItem__ will reference the parent table row.

The code section shows how to get the primary key field for up-level rows using __DataKeyNames/DataKeyValues__:



````ASPNET
	  <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" runat="server" Skin="Desert"
	    Width="95%" AutoGenerateColumns="False" PageSize="3" AllowSorting="True" AllowPaging="True">
	    <PagerStyle Mode="NumericPages"></PagerStyle>
	    <MasterTableView DataSourceID="SqlDataSource1" DataKeyNames="CustomerID" Width="100%">
	      <DetailTables>
	        <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="SqlDataSource2" Width="100%"
	          runat="server" CommandItemDisplay="Top">
	          <ParentTableRelation>
	            <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
	          </ParentTableRelation>
	          <Columns>
	            <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID" HeaderButtonType="TextButton"
	              DataField="OrderID" UniqueName="OrderID">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date Ordered" HeaderButtonType="TextButton"
	              DataField="OrderDate" UniqueName="OrderDate">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn SortExpression="EmployeeID" HeaderText="EmployeeID" HeaderButtonType="TextButton"
	              DataField="EmployeeID" UniqueName="EmployeeID">
	            </telerik:GridBoundColumn>
	            <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
	          </Columns>
	        </telerik:GridTableView>
	      </DetailTables>
	      <Columns>
	        <telerik:GridBoundColumn SortExpression="CustomerID" HeaderText="CustomerID" HeaderButtonType="TextButton"
	          DataField="CustomerID" UniqueName="CustomerID">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn SortExpression="ContactName" HeaderText="Contact Name" HeaderButtonType="TextButton"
	          DataField="ContactName" UniqueName="ContactName">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn SortExpression="CompanyName" HeaderText="Company" HeaderButtonType="TextButton"
	          DataField="CompanyName" UniqueName="CompanyName">
	        </telerik:GridBoundColumn>
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	      ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers"
	      runat="server"></asp:SqlDataSource>
	  <asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	      ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
	      runat="server">
	      <SelectParameters>
	          <asp:Parameter Name="CustomerID" SessionField="CustomerID" Type="string" />
	      </SelectParameters>
	  </asp:SqlDataSource>
````
````VB.NET
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If (e.CommandName = RadGrid.UpdateCommandName AndAlso e.Item.OwnerTableView.DataSourceID = "AccessDataSource2") Then
	            Dim OrderID As String = e.Item.OwnerTableView.Items(e.Item.ItemIndex)("OrderID").Text
	            RadGrid1.Controls.Add(New LiteralControl("Updated item primary key value is: " & OrderID & "<br/>"))
	
	            Dim parentItem As GridDataItem = e.Item.OwnerTableView.ParentItem
	
	            If (Not parentItem Is Nothing) Then
	                RadGrid1.Controls.Add(New LiteralControl("Parent item primary field value is: " &
	                CType(parentItem.OwnerTableView.DataKeyValues(parentItem.ItemIndex)("CustomerID"), String)))
	            End If
	        End If
	        If (e.CommandName = RadGrid.InitInsertCommandName Or e.CommandName = RadGrid.PerformInsertCommandName) Then
	            If (e.Item.OwnerTableView.DataSourceID = "AccessDataSource2") Then
	                Dim parentItem = CType(e.Item.OwnerTableView.ParentItem, GridDataItem)
	
	                If (Not parentItem Is Nothing) Then
	                    RadGrid1.Controls.Add(New LiteralControl("Parent item primary field value is: " &
	                    CType(parentItem.OwnerTableView.DataKeyValues(parentItem.ItemIndex)("CustomerID"), String)))
	                End If
	            End If
	        End If
	    End Sub
````
````C#
	    protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.UpdateCommandName && e.Item.OwnerTableView.DataSourceID == "AccessDataSource2")
	        {
	            string OrderID = e.Item.OwnerTableView.Items[e.Item.ItemIndex]["OrderID"].Text;
	
	            RadGrid1.Controls.Add(new LiteralControl("Updated item primary key value is: " + OrderID + "<br/>"));
	
	            GridDataItem parentItem = e.Item.OwnerTableView.ParentItem;
	            if (parentItem != null)
	            {
	                RadGrid1.Controls.Add(new LiteralControl("Parent item primary field value is: " +
	                (string)(parentItem.OwnerTableView.DataKeyValues[parentItem.ItemIndex]["CustomerID"])));
	            }
	        }
	        if (e.CommandName == RadGrid.InitInsertCommandName || e.CommandName == RadGrid.PerformInsertCommandName)
	        {
	            if (e.Item.OwnerTableView.DataSourceID == "AccessDataSource2")
	            {
	                GridDataItem parentItem = (GridDataItem)(e.Item.OwnerTableView.ParentItem);
	
	                if (parentItem != null)
	                {
	                    RadGrid1.Controls.Add(new LiteralControl("Parent item primary field value is: " +
	                    (string)(parentItem.OwnerTableView.DataKeyValues[parentItem.ItemIndex]["CustomerID"])));
	                }
	            }
	        }
	    }
````

