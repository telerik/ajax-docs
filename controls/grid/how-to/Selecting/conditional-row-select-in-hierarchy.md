---
title: Conditional Row Select in Hierarchy
page_title: Conditional Row Select in Hierarchy | RadGrid for ASP.NET AJAX Documentation
description: Conditional Row Select in Hierarchy
slug: grid/how-to/selecting/conditional-row-select-in-hierarchy
previous_url: grid/functionality/selecting/how-to/conditional-row-select-in-hierarchy
tags: client-side,selecting,conditional, hierarchy
published: True
position: 3
---

# Conditional Row Select in Hierarchy

If you have client-side selection enabled in a hierarchical grid with a master table and one detail table, you might want to allow users to select rows at the detail level, but not the master level. To accomplish this:

1. Add a handler for the grid's client-side RowSelecting event.

1. In the event handler, call the **get_tableView()** method of the event arguments to access the current table view

1. Check whether the current table view is the master table, and if so, call **set_cancel(true)** to prevent the selection.

To determine whether the current table view is the master table,

1. When you create the grid, set the **Name** property of the **MasterTableView** and detail **GridTableView** objects.

1. In the event handler, use the **get_name()** method of the client-side object to access the name of the table.

This approach can be extended to a grid with more levels of hierarchy as well.

````ASP.NET
<script type="text/javascript">
  function RowSelecting(sender, eventArgs) {
    //eventArgs.get_tableView() returns the
    gridtable
    //from which the event originated
    if (eventArgs.get_tableView().get_name() == "Customers") {
      eventArgs.set_cancel(true);
    }
  }
</script>
<telerik:RadGrid ID="RadGrid1" runat="server" AllowMultiRowSelection="False" DataSourceID="SqlDataSource1">
  <MasterTableView DataSourceID="SqlDataSource1" DataKeyNames="CustomerID" AllowPaging="True"
    PageSize="3" AllowSorting="True" Width="100%" Name="Customers">
    <DetailTables>
      <telerik:GridTableView DataSourceID="SqlDataSource2" DataKeyNames="OrderID" AllowPaging="True"
        PageSize="4" AllowSorting="True" Width="100%" Name="Orders">
        <ParentTableRelation>
          <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID">
          </telerik:GridRelationFields>
        </ParentTableRelation>
      </telerik:GridTableView>
    </DetailTables>
  </MasterTableView>
  <ClientSettings>
    <Selecting AllowRowSelect="True" />
    <ClientEvents OnRowSelecting="RowSelecting" />
  </ClientSettings>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers"
    runat="server">
</asp:SqlDataSource>
<asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
    runat="server">
    <SelectParameters>
        <asp:Parameter Name="CustomerID" SessionField="CustomerID" Type="string" />
    </SelectParameters>
</asp:SqlDataSource>
````

