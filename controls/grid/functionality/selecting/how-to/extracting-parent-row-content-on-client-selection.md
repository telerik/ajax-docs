---
title: Extracting Parent Row Content on Client Selection in Hierarchy
page_title: Extracting Parent Row Content on Client Selection in Hierarchy | RadGrid for ASP.NET AJAX Documentation
description: Extracting Parent Row Content on Client Selection in Hierarchy
slug: grid/functionality/selecting/how-to/extracting-parent-row-content-on-client-selection
tags: client-side,selecting, extracting
published: True
position: 6
---

# Extracting Parent Row Content on Client Selection in Hierarchy

There are times when you may want to retrieve the value of a cell in the parent table's row when the user selects a row in the detail table. This information can be useful as it provides context information about the values in the detail table.

To accomplish this,

1. Add a handler to the RowSelected client event.

1. In the **RowSelected** event handler, check whether the selection is raised from the detail table.

1. If a detail row is selected, get a reference to the parent item, and get the value for the desired cell in that row.
	
The following example illustrates this approach in a two-level hierarchy:

````ASP.NET
<script type="text/javascript">
  function RowSelected(sender, eventArgs) {
    if (eventArgs.get_tableView().get_name() == "Orders") {
      //the selection is from the detail
      table
      //get a cell from the
      masterTable
      var parentRow =
      args.get_tableView().get_parentRow();
      var masterCell = parentRow.cells[3];
      //use the cell's content
      alert(masterCell.innerHTML);
    }
  }                    
</script>
<telerik:RadGrid ID="RadGrid1" runat="server" AllowSorting="true" DataSourceID="SqlDataSource1"
  AllowPaging="true" PageSize="3" AllowMultiRowSelection="true">
  <MasterTableView DataKeyNames="CustomerID" Name="Customers">
    <DetailTables>
      <telerik:GridTableView DataKeyNames="OrderID,CustomerID" DataSourceID="SqlDataSource2"
        Name="Orders">
        <ParentTableRelation>
          <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
        </ParentTableRelation>
      </telerik:GridTableView>
    </DetailTables>
  </MasterTableView>
  <ClientSettings>
    <Selecting AllowRowSelect="true" EnableDragToSelectRows="true" />
    <ClientEvents OnRowSelected="RowSelected" />
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

