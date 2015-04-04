---
title: Hierarchical data-binding using declarative relations
page_title: Hierarchical data-binding using declarative relations | UI for ASP.NET AJAX Documentation
description: Hierarchical data-binding using declarative relations
slug: grid/hierarchical-grid-types-and-load-modes/hierarchical-data-binding-using-declarative-relations
tags: hierarchical,data-binding,using,declarative,relations
published: True
position: 3
---

# Hierarchical data-binding using declarative relations



When binding the detail tables in a hierarchical grid, you must provide some way of managing the data relationships between the data set for the detail tables and the records of the parent table. You can describe these relationships declaratively.

## Data sources

When using declarative relations to describe the data hierarchy, each table view (__MasterTableView__ and every __GridTableView__ inside the __DetailTables__ collection of a parent table view), must have its own data source. When using [declarative data sources]({%slug grid/data-binding/understanding-data-binding/server-side-binding/declarative-datasource%}), the data source for each table view is assigned to the __DataSourceID__ property. The data sources for detail tables should filter records based on all fields that link the detail table to the parent table, with parameters to supply the values of those linking fields. Typically, this is done using a __WHERE__ clause in the __SelectCommand__ of a data source, but more complicated SELECT methods are possible (for example, a parameterized stored procedure).

## DataKeyNames

You must set the __DataKeyNames__ property of every parent table view in the hierarchy to specify the fields in the table's data source that are used for linking to child tables. The __DataKeyNames__ property must list the exact names of these fields as they appear in the parent table's data source.

If multiple fields are needed for linking to child tables, you can list them in the ASPX file, separating their names with commas (but no spaces):

````ASPNET
	    <MasterTableView DataKeyNames="CustomerID, EmployeeID">			
````



__DataKeyNames__ is an array of strings, so if you are creating the grid's structure at runtime, assign each field name as a separate array entry:



````C#
	    RadGrid1.MasterTableView.DataKeyNames = new string[2] { "CustomerID", "EmployeeID" };			
````
````VB.NET
	     
							RadGrid1.MasterTableView.DataKeyNames = New String(2) {"CustomerID", "EmployeeID"}
				
````


## ParentTableRelation

You must set the __ParentTableRelation__ property of every detail table view to indicate how its data table links to the parent table view's data table.

__ParentTableRelation__ is a collection of __GridRelationFields__ objects. Each object specifies the link between a single field in the detail table and the corresponding field in the parent table. It does this using two properties:

* The __MasterKeyField__ property is the name of a field in the data source of the parent table. This property must match exactly a string in the __DataKeyNames__ collection of the parent table view.

* The __DetailKeyField__ property is the name of a field in the data source of the child table whose value must match the parent field specified by __MasterKeyField__. If you are using declarative data sources, this string must match exactly the name of a SELECT parameter in the detail table view's data source.

To summarize, you need to define the __ParentTableRelations/DataKeyNames__ for the __MasterTableView/GridTableViews__ according to the database relations conventions. And here are the exact conventions:

* the __primary key column__ name for each table in the grid source (used for master/detail table population) should be added to the __DataKeyNames__ collection of the respective master/detail table;

* the __MasterKeyField__ in the __GridRelationFields__ should match the __primary key of the parent table__ in the corresponding relation;

* the __DetailKeyField__ in the __GridRelationFields__ should match the __foreign key of the child table__ in the corresponding relation.

There is one more detail if you use declarative binding using __DataSource__ controls under .NET 2.x/3.x:You should have __WHERE__ clause in the __SelectCommand__ of the second DataSource control which to filter the records for the child table. The __WHERE__ clause should include the __DetailKeyField__ from the __ParentTableRelation__ definition between the master/child table. Furthermore, that same field has to be included in the __SelectParameters__ of the second DataSource (with exactly the same __Name__ value):

````ASPNET
	        <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	            ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers"
	            runat="server"></asp:SqlDataSource>
	        <asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	            ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
	            runat="server">
	            <SelectParameters>
	                <asp:Parameter Name="CustomerID" Type="string" />
	            </SelectParameters>
	        </asp:SqlDataSource>
	        <asp:SqlDataSource ID="SqlDataSource3" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	            ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [Order Details] where OrderID = @OrderID"
	            runat="server">
	            <SelectParameters>
	                <asp:Parameter Name="OrderID" Type="Int32" />
	            </SelectParameters>
	        </asp:SqlDataSource>
````



Every __GridRelationFields__ object should has only one field name for __DetailKeyField__ and __MasterKeyField__. For data relationships that are based on multiple fields, add multiple __GridRelationFields__ objects to the __ParentTableRelation__ collection:

````ASPNET
	    <ParentTableRelation>
	      <telerik:GridRelationFields DetailKeyField="DepartmentID" MasterKeyField="DepartmentID" />  
	      <telerik:GridRelationFields DetailKeyField="ManagerID" MasterKeyField="EmployeeID" />
	    </ParentTableRelation>			
````



For a live example that used declarative relations to generate a three-level hierarchy, see [Three level hierarchy](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Hierarchy/ThreeLevel/DefaultCS.aspx).
