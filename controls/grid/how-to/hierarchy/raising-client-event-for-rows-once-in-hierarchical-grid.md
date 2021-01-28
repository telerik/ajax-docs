---
title: Raising Client Event for Rows
page_title: Raising client event for rows once in hierarchical grid - RadGrid
description: Check our Web Forms article about Raising client event for rows once in hierarchical grid.
slug: grid/how-to/hierarchy/raising-client-event-for-rows-once-in-hierarchical-grid
previous_url: controls/grid/hierarchical-grid-types-and-load-modes/how-to/raising-client-event-for-rows-once-in-hierarchical-grid
tags: raising,client,event,for,rows,once,in,hierarchical,grid
published: True
position: 7
---

# Raising client event for rows once in hierarchical grid



##

By default the client event bubbling mechanism of Telerik RadGrid will raise all row events once for the respective row in the grid hierarchy and once for each **NestedView** which wraps the inner grid row. To prevent that from happening (if necessary), you can perform the following conditional check in the corresponding client event handler:

````JavaScript
if (eventArgs.get_tableView().get_name() == "DetailTable") {
  alert("Event executed only once for each double-clicked row in the hierarchy");
  //execute some custom logic here
}
````



In the next section you can find the code of a simple example which propagates the logic mentioned above hooking the **OnRowDblClick** event of Telerik RadGrid (keep in mind that for performance reasons, the **RadGridTable.Rows** collection is available **only** when you enable specific client features/events for the rows in the grid (such **AllowRowResize**, **AllowRowSelect**, **OnRowClick,** etc.)):

````ASP.NET
<script type="text/javascript">    
function RowDblClick(sender, eventArgs) {
    if (eventArgs.get_tableView().get_name() == "DetailTable") {
      alert("Event executed only once for each double-clicked row in the hierarchy");
      //execute some custom logic here     
    }
  }
</script>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AutoGenerateColumns="False" PageSize="3"
  AllowSorting="True" AllowPaging="True">
  <PagerStyle Mode="NumericPages"></PagerStyle>
  <MasterTableView DataKeyNames="CustomerID" AllowMultiColumnSorting="True" Width="100%">
    <DetailTables>
      <telerik:GridTableView DataKeyNames="OrderID" DataMember="Orders" Width="100%" GridLines="Horizontal">
        <ParentTableRelation>
          <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
        </ParentTableRelation>
        <DetailTables>
          <telerik:GridTableView DataKeyNames="OrderID" DataMember="OrderDetails" Width="100%"
            GridLines="Horizontal">
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
  <ClientSettings>
    <Selecting AllowRowSelect="true" />
    <ClientEvents OnRowDblClick="RowDblClick" />
  </ClientSettings>
</telerik:RadGrid>
````




