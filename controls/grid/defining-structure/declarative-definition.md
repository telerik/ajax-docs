---
title: Declarative Definition
page_title: Declarative Definition | UI for ASP.NET AJAX Documentation
description: Declarative Definition
slug: grid/defining-structure/declarative-definition
tags: declarative,definition
published: True
position: 1
---

# Declarative Definition



## 

When defining __RadGrid__ declaratively, the structure of the objects in the ASPX form mirrors the structure of the tables in the __RadGrid__ control. Inside the __RadGrid__ declaration, the [MasterTableView declaration]({%slug grid/defining-structure/radgrid-and-mastertableview-difference%}) is nested. This corresponds to a __GridTableView__ object for the top-level table in the grid. If the grid has a hierarchical structure, a __DetailTables__ node is added to hold the detail tables for any table view that has children. Inside the __DetailTables__ node, add the declarations for the __GridTableView__ objects that represent each detail table.

The following example shows the declaration of a three-tier hierarchical grid:

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="AccessDataSource1">
	    <MasterTableView DataKeyNames="CustomerID" DataSourceID="AccessDataSource1">
	      <DetailTables>
	        <telerik:GridTableView runat="server" DataKeyNames="OrderID" DataSourceID="AccessDataSource2">
	          <ParentTableRelation>
	            <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
	          </ParentTableRelation>
	          <DetailTables>
	            <telerik:GridTableView runat="server" DataSourceID="AccessDataSource3">
	              <ParentTableRelation>
	                <telerik:GridRelationFields DetailKeyField="OrderID" MasterKeyField="OrderID" />
	              </ParentTableRelation>
	            </telerik:GridTableView>
	          </DetailTables>
	        </telerik:GridTableView>
	      </DetailTables>
	    </MasterTableView></telerik:RadGrid>
	  <asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="~/App_Data/Nwind.mdb"
	    SelectCommand="SELECT * FROM [Customers]"></asp:AccessDataSource>
	  <asp:AccessDataSource ID="AccessDataSource2" runat="server" DataFile="~/App_Data/Nwind.mdb"
	    SelectCommand="SELECT * FROM [Orders] WHERE ([CustomerID] = ?)">
	    <SelectParameters>
	      <asp:Parameter Name="CustomerID" Type="String" />
	    </SelectParameters>
	  </asp:AccessDataSource>
	  <asp:AccessDataSource ID="AccessDataSource3" runat="server" DataFile="~/App_Data/Nwind.mdb"
	    SelectCommand="SELECT * FROM [Order Details] WHERE ([OrderID] = ?)">
	    <SelectParameters>
	      <asp:Parameter Name="OrderID" Type="Int32" />
	    </SelectParameters>
	  </asp:AccessDataSource>
````


