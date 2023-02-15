---
title: Filter RadGrid based on Time Portion (hh:mm:ss)
description: Check out how to filter a RadGrid based on hours and minutes.
type: how-to
page_title: Filter RadGrid based on Time Portion (hh:mm:ss)
slug: grid-filter-based-on-time-portion
position: 
tags: 
ticketid: 1597284
res_type: kb
---

## Description

You have a **RadGrid** containing a **GridDateTimeColumn** that displays values with **DataFormatString** set to {0:HH:mm} or similar. You would like to filter using "EqualTo" on time only and for the filter ignore date (year,month, and date).

## Solution

**RadGrid** itself has no direct control over the entries in its data source. As the filtering is applied on the data source of the Grid, you can consider adding a separate field in the data source that holds only the time portion so it can be used as filtering criteria.

How you can modify the SELECT statement and set up the **GridDateTimeColumn** in order to effectively sort and filter based on hours and minutes?

You can generate new `DateTime` objects holding equal date (today) but with the time portion taken from the existing database field. These new `DateTime` objects can be bound seamlessly to a separate **GridDateTimeColumn** and can be further sorted and filtered. The tricky part here is that all the `DateTime` objects bound to that column should have the same date, month, and year.

Here is a sample column declaration and a SQL select statement that should do the job:

````ASPX
<telerik:GridDateTimeColumn
    HeaderText="Some Time" DataField="someTime" UniqueName="SomeTime"
    DataType="System.DateTime" PickerType="TimePicker" DataFormatString="{0:HH:mm}">
</telerik:GridDateTimeColumn>
````

````SQL
SELECT CAST(CONCAT(CAST(GETDATE() AS Date),' ', CAST(someDateTime AS time(0))) AS datetime) AS someTime FROM [someTable]
````

Test that approach with a **RadGrid** bound to a **SqlDataSource** component. The same selection should also work when the database is queried from the **NeedDataSource** event.

Here is a complete sample code leveraging the Northwind database:

````ASPX
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
    DataSourceID="SqlDataSource1" AllowFilteringByColumn="true" AllowSorting="true">
    <MasterTableView DataSourceID="SqlDataSource1" AutoGenerateColumns="False" CommandItemDisplay="Top"
        DataKeyNames="OrderID">
        <Columns>
            <telerik:GridNumericColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridNumericColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight">
            </telerik:GridNumericColumn>
            <telerik:GridDateTimeColumn
                HeaderText="Some Time" DataField="someTime" UniqueName="SomeTime"
                DataType="System.DateTime" PickerType="TimePicker" DataFormatString="{0:HH:mm}">
            </telerik:GridDateTimeColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry"
                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
                SortExpression="ShipCountry" UniqueName="ShipCountry">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>

<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT [OrderID], [OrderDate], [Freight], [ShipName], [ShipCountry], CAST(CONCAT(CAST(GETDATE() AS Date),' ', CAST(OrderDate AS time(0))) AS datetime) AS someTime FROM [Orders]">
</asp:SqlDataSource>
````

 