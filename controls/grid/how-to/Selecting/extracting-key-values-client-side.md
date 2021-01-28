---
title: Extracting Key Values Client-side
page_title: Extracting Key Values Client-side - RadGrid
description: Check our Web Forms article about Extracting Key Values Client-side.
slug: grid/how-to/selecting/extracting-key-values-client-side
previous_url: controls/grid/functionality/selecting/how-to/extracting-key-values-client-side
tags: client-side,selecting,values,rows
published: True
position: 1
---

# Extracting Key Values Client-side



##

To simplify your code logic, you can specify certain columns whose values you want to access easily on the client. When you add the value of the DateField to the **ClientDataKeyNames** array of the **MasterTableView** or a detail **GridTableView**, **RadGrid** makes that column's value available through the getDataKeyValue() function of the GridDataItem client-side object and of the arguments for client-side event handlers that respond to item events.

To use **getDataKeyValue()**, pass the **UniqueName** of the column as an argument. This method returns the value of that column for the **GridDataItem**.

>caution When getting a reference to a **GridDataItem** using the RadGrid client object's **get_dataItems()** method, be aware that this method creates the client-side objects for all rows in the grid. This can lead to a performance penalty if RadGrid displays too many items in one page.
>

````ASP.NET
<script type="text/javascript">
    function RowSelected(sender, args) {
        var label = document.getElementById("<%= Label1.ClientID %>");
        label.innerHTML =
   "<b>CustomerID: </b>" +
   args.getDataKeyValue("CustomerID") +
   "<br />" + "<b>CompanyName: </b>" +
   args.getDataKeyValue("CompanyName");
    }

    function GetFirstDataItemKeyValues() {
        var firstDataItem = $find("<%=RadGrid1.ClientID %>").get_masterTableView().get_dataItems()[0];
        var keyValues =
   'CustomerID: "' +
    firstDataItem.getDataKeyValue("CustomerID") + '"' +
    ' \r\n' +
    'CompanyName: "' +
    firstDataItem.getDataKeyValue("CompanyName") + '"';
        alert(keyValues);
    }

</script>
<asp:Button ID="Button1" runat="server" Text="Get first GridDataItem key values"
  OnClientClick="GetFirstDataItemKeyValues(); return false;" /><br />
<br />
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" DataSourceID="SqlDataSource" AllowPaging="true"
  PageSize="10" Width="97%" AllowSorting="true">
  <MasterTableView Width="100%" ClientDataKeyNames="CustomerID,CompanyName" />
  <ClientSettings>
    <Selecting AllowRowSelect="true" />
    <ClientEvents OnRowSelected="RowSelected" />
  </ClientSettings>
</telerik:RadGrid><br />
<br />
<asp:Label ID="Label1" runat="server" />
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
     SelectCommand="SELECT * FROM [Customers]">
</asp:SqlDataSource>
````

Another approach for fetching values from grid cells is to use the **GetCellByColumnUniqueName(rowObject, columnName)** method. Further information about that approach, see [Getting cell values for selected rows client-side]({%slug grid/how-to/selecting/getting-cell-values-for-selected-rows%}).

