---
title: Configure SqlDatSource for CRUD operations
description: Quick walkthrough configuring the ASP SqlDataSource control to handle CRUD operations.
type: how-to
page_title: Configure SqlDatSource for CRUD operations
slug: common-configure-sqldatasource-for-crud-operations
position: 
tags: configure, sqldatasource, for, crud, operations
res_type: kb
---

## SqlDataSource Configuration

Add a SqlDataSource component to the Page and configure the following properties:

- `ConnectionString` - Set a connection string to connect to the SQL database. For examples, check out the [SQL Server connection strings](https://www.connectionstrings.com/sql-server/) article.
- `SelectCommand` - SQL compliant `SELECT` query to select records from the database.
- `InsertCommand` - SQL compliant `INSERT` query to insert records to the database.
- `UpdateCommand` - SQL compliant `UPDATE` query to update records in the database.
- `DeleteCommand` - SQL compliant `DELETE` query to delete records from the database.

> For security purposes, it is recommended to add parameters for every Command that uses `@parameters`.
>- `SelectParameters`
>- `InsertParameters`
>- `UpdateParameters`
>- `DeleteParameters`

>caption Example

````ASP.NET
<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT [OrderID], [OrderDate], [Freight], [ShipName], [ShipCountry] FROM [Orders]"
    InsertCommand="INSERT INTO [Orders] ([OrderDate], [Freight], [ShipName], [ShipCountry]) VALUES (@OrderDate, @Freight, @ShipName, @ShipCountry)"
    UpdateCommand="UPDATE [Orders] SET [OrderDate] = @OrderDate, [Freight] = @Freight, [ShipName] = @ShipName, [ShipCountry] = @ShipCountry WHERE [OrderID] = @OrderID"
    DeleteCommand="DELETE FROM [Orders] WHERE [OrderID] = @OrderID">
    <InsertParameters>
        <asp:Parameter Name="OrderDate" DbType="DateTime" />
        <asp:Parameter Name="Freight" DbType="Decimal" />
        <asp:Parameter Name="ShipName" DbType="String" />
        <asp:Parameter Name="ShipCountry" DbType="String" />
    </InsertParameters>
    <UpdateParameters>
        <asp:Parameter Name="OrderID" DbType="Int32" />
        <asp:Parameter Name="OrderDate" DbType="DateTime" />
        <asp:Parameter Name="Freight" DbType="Decimal" />
        <asp:Parameter Name="ShipName" DbType="String" />
        <asp:Parameter Name="ShipCountry" DbType="String" />
    </UpdateParameters>
    <DeleteParameters>
        <asp:Parameter Name="OrderID" DbType="Int32" />
    </DeleteParameters>
</asp:SqlDataSource>
````

## See Also

- [Configure ObjectDataSource for CRUD operations]({%slug common-configure-objectdatasource-for-crud-operations%})

