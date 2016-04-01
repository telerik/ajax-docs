---
title: Showing Indicator for Selected Items
page_title: Showing Indicator for Selected Items | RadGrid for ASP.NET AJAX Documentation
description: Showing Indicator for Selected Items
slug: grid/how-to/selecting/showing-indicator-for-selected-items
previous_url: grid/functionality/selecting/how-to/showing-indicator-for-selected-items
tags: client-side,selecting, indicator
published: True
position: 7
---

# Showing Indicator for Selected Items

To provide additional feedback about the selected row, you can display a row indicator beside each selected row. The row indicator then clearly shows that the row has been selected. To add a selection indicator:

1. Place an html image inside template column.

1. Handle the OnRowSelected and OnRowDeselected client-side events.

1. In the event handlers, show or hide the image in the template column to reflect the selection state of the row.

The following example shows how to access the template image and show or hide it to reflect the selection state of a row:
````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<script type="text/javascript">
  function RowDeselected(sender, eventArgs) {
    var MasterTable = sender.get_masterTableView();
    var row = eventArgs.get_gridDataItem();
    var cell = MasterTable.getCellByColumnUniqueName(row, "ArrowColumn");
    var image = cell.getElementsByTagName("IMG")[0];
    image.style.display = "none";
  }
  function RowSelected(sender, eventArgs) {
    var MasterTable = sender.get_masterTableView();
    var row = eventArgs.get_gridDataItem();
    var cell = MasterTable.getCellByColumnUniqueName(row, "ArrowColumn");
    var image = cell.getElementsByTagName("IMG")[0];
    image.style.display = "block";
  }
  function RowCreated(sender, eventArgs) {
  }      
</script>
<telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" AllowSorting="True"
  Skin="Web20" Width="95%" AllowMultiRowSelection="true" AllowPaging="true" ShowGroupPanel="true">
  <MasterTableView Width="100%">
    <Columns>
      <telerik:GridTemplateColumn UniqueName="ArrowColumn">
        <ItemTemplate>
          <img src="arrow.GIF" style="display: none;" />
        </ItemTemplate>
        <HeaderStyle Width="30px" />
      </telerik:GridTemplateColumn>
    </Columns>
  </MasterTableView>
  <ClientSettings AllowDragToGroup="true">
    <Selecting AllowRowSelect="true" />
    <ClientEvents OnRowDeselected="RowDeselected" OnRowSelected="RowSelected" OnRowCreated="RowCreated" />
  </ClientSettings>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"   
    SelectCommand="SELECT TOP 10 [CustomerID], [ContactName], [ContactTitle], [Address] FROM [Customers]">
</asp:SqlDataSource>
````

>note The empty **OnRowCreated** event handler is needed to initialize the **get_gridDataItem()** parameter value from within the **OnRowSelected** handler (designed in such a way due to performance reasons).
>

