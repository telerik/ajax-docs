---
title: Hierarchical data-binding using declarative relations
page_title: Hierarchical data-binding using declarative relations - RadGrid
description: Learn how to bind RadGrid detail tables with declarative relations, DataKeyNames, and GridRelationFields for linked data sources.
slug: grid/hierarchical-grid-types-and-load-modes/hierarchical-data-binding-using-declarative-relations
components: ["grid"]
tags: hierarchical,data-binding,using,declarative,relations
published: True
position: 3
---

# Hierarchical Data Binding Using Declarative Relations

When binding the detail tables in a hierarchical grid, you must provide some way of managing the data relationships between the data set for the detail tables and the records of the parent table. You can describe these relationships declaratively.

## Data Sources

When using declarative relations to describe the data hierarchy, each table view (**MasterTableView** and every **GridTableView** inside the **DetailTables** collection of a parent table view), must have its own data source. When using [declarative data sources]({%slug grid/data-binding/server-side-binding/declarative-datasource%}), the data source for each table view is assigned to the **DataSourceID** property. The data sources for detail tables should filter records based on all fields that link the detail table to the parent table, with parameters to supply the values of those linking fields. Typically, this is done using a **WHERE** clause in the **SelectCommand** of a data source, but more complicated SELECT methods are possible (for example, a parameterized stored procedure).

## DataKeyNames

You must set the **DataKeyNames** property of every parent table view in the hierarchy to specify the fields in the table's data source that are used for linking to child tables. The **DataKeyNames** property must list the exact names of these fields as they appear in the parent table's data source.

If multiple fields are needed for linking to child tables, you can list them in the ASPX file, separating their names with commas (but no spaces):

````ASP.NET
<MasterTableView DataKeyNames="CustomerID,EmployeeID">
````



**DataKeyNames** is an array of strings, so if you are creating the grid's structure at runtime, assign each field name as a separate array entry:



````C#
RadGrid1.MasterTableView.DataKeyNames = new string[] { "CustomerID", "EmployeeID" };
````
````VB
RadGrid1.MasterTableView.DataKeyNames = New String() {"CustomerID", "EmployeeID"}
````


## ParentTableRelation

You must set the **ParentTableRelation** property of every detail table view to indicate how its data table links to the parent table view's data table.

**ParentTableRelation** is a collection of **GridRelationFields** objects. Each object specifies the link between a single field in the detail table and the corresponding field in the parent table. It does this using two properties:

* The **MasterKeyField** property is the name of a field in the data source of the parent table. This property must match exactly a string in the **DataKeyNames** collection of the parent table view.

* The **DetailKeyField** property is the name of a field in the data source of the child table whose value must match the parent field specified by **MasterKeyField**. If you are using declarative data sources, this string must match exactly the name of a SELECT parameter in the detail table view's data source.

To summarize, you need to define **ParentTableRelation** and **DataKeyNames** for the **MasterTableView** and **GridTableView** objects according to the database relations conventions. Here are the exact conventions:

* Add the **primary key column** name for each table in the grid source to the **DataKeyNames** collection of the respective master or detail table.

* Make **MasterKeyField** in **GridRelationFields** match the **primary key of the parent table** in the corresponding relation.

* Make **DetailKeyField** in **GridRelationFields** match the **foreign key of the child table** in the corresponding relation.

If you use declarative binding with **DataSource** controls under .NET 2.x or 3.x, you must have a **WHERE** clause in the **SelectCommand** of the second data source control to filter the child table records. The **WHERE** clause must include the **DetailKeyField** from the **ParentTableRelation** definition between the master and child tables. Include the same field in the second data source's **SelectParameters** with exactly the same **Name** value:

````ASP.NET
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



Every **GridRelationFields** object should have one field name for **DetailKeyField** and one for **MasterKeyField**. For data relationships based on multiple fields, add multiple **GridRelationFields** objects to the **ParentTableRelation** collection:

````ASP.NET
<ParentTableRelation>
  <telerik:GridRelationFields DetailKeyField="DepartmentID" MasterKeyField="DepartmentID" />
  <telerik:GridRelationFields DetailKeyField="ManagerID" MasterKeyField="EmployeeID" />
</ParentTableRelation>
````



For a live example that uses declarative relations to generate a three-level hierarchy, see the [three-level hierarchy demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/Hierarchy/ThreeLevel/DefaultCS.aspx).

## See Also

- [What you should know about hierarchical grids]({%slug grid/hierarchical-grid-types-and-load-modes/what-you-should-know%})
- [Hierarchical data binding using the DetailTableDataBind event]({%slug grid/hierarchical-grid-types-and-load-modes/hierarchical-data-binding-using-detailtabledatabind-event%})
- [Several tables at a level]({%slug grid/hierarchical-grid-types-and-load-modes/several-tables-at-a-level%})
