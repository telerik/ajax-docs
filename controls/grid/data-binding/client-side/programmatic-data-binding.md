---
title: Programmatic Data Binding
page_title: Programmatic Data Binding - RadGrid
description: Binding data to RadGrid programmatically on Client-side.
slug: grid/data-binding/client-side/programmatic-data-binding
tags: telerik,radgrid,programmatic,binding,client-side
published: True
position: 2
previous_url: controls/grid/data-binding/understanding-data-binding/client-side-binding/client-side-binding-specifics, controls/grid/data-binding/client-side-binding/client-side-binding-specifics
---

# Programmatic Data Binding


## Overview

RadGrid offers the option to bind an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of JavaScript [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) to it on Client-side by exposing the [set_dataSource()]({%slug grid/client-side-programming/gridtableview-object/methods/set_datasource%}) and [dataBind()]({%slug grid/client-side-programming/gridtableview-object/methods/databind%}) Client-side methods.



> The Grid's structure must be defined (in the markup/backend) for the Client-side data binding to work.
> With the Programmatic data binding approach

Supported data source structure

````JavaScript
var dataSource = [
  { Column1: "Value", Column2: "Value", ColumnN: "Value" },
  { Column1: "Value", Column2: "Value", ColumnN: "Value" },
  { Column1: "Value", Column2: "Value", ColumnN: "Value" }
];
````

## Examples

### Basic data binding

Basic data binding to display records in RadGrid.

>note **Paging**, **Sorting**, **Filtering**, and or **Hierarchy** can also be implemented additionally. For an example, check out the [Programmatic Data Binding with Hierarchy on Client-side]({%slug grid-programmatic-data-binding-with-hierarchy-on-client-side%}) knowledge base article.

>caption Example

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <MasterTableView>
        <Columns>
            <telerik:GridNumericColumn DataField="OrderID" HeaderText="OrderID" UniqueName="OrderID" ReadOnly="true"></telerik:GridNumericColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" HeaderText="OrderDate" UniqueName="OrderDate"></telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" HeaderText="Freight" UniqueName="Freight"></telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName" HeaderText="ShipName" UniqueName="ShipName"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry" HeaderText="ShipCountry" UniqueName="ShipCountry"></telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
    <ClientSettings>
        <ClientEvents OnCommand="function(){}" />
    </ClientSettings>
</telerik:RadGrid>

<script>
    function addDays(days) {
        return Date.now() + days * 1000 * 60 * 60 * 24;
    }

    function getOrders() {
        var orders = [
            { OrderID: 1, OrderDate: `/Date(${addDays(1)})/`, Freight: (1).toFixed(2), ShipName: `Name ${1}`, ShipCountry: `Country ${1}` },
            { OrderID: 2, OrderDate: `/Date(${addDays(2)})/`, Freight: (2).toFixed(2), ShipName: `Name ${2}`, ShipCountry: `Country ${2}` },
            { OrderID: 3, OrderDate: `/Date(${addDays(3)})/`, Freight: (3).toFixed(2), ShipName: `Name ${3}`, ShipCountry: `Country ${3}` },
            { OrderID: 4, OrderDate: `/Date(${addDays(4)})/`, Freight: (4).toFixed(2), ShipName: `Name ${4}`, ShipCountry: `Country ${4}` },
            { OrderID: 5, OrderDate: `/Date(${addDays(5)})/`, Freight: (5).toFixed(2), ShipName: `Name ${5}`, ShipCountry: `Country ${5}` },
            { OrderID: 6, OrderDate: `/Date(${addDays(6)})/`, Freight: (6).toFixed(2), ShipName: `Name ${6}`, ShipCountry: `Country ${6}` },
            { OrderID: 7, OrderDate: `/Date(${addDays(7)})/`, Freight: (7).toFixed(2), ShipName: `Name ${7}`, ShipCountry: `Country ${7}` },
            { OrderID: 8, OrderDate: `/Date(${addDays(8)})/`, Freight: (8).toFixed(2), ShipName: `Name ${8}`, ShipCountry: `Country ${8}` },
            { OrderID: 9, OrderDate: `/Date(${addDays(9)})/`, Freight: (9).toFixed(2), ShipName: `Name ${9}`, ShipCountry: `Country ${9}` },
            { OrderID: 10, OrderDate: `/Date(${addDays(10)})/`, Freight: (10).toFixed(2), ShipName: `Name ${10}`, ShipCountry: `Country ${10}` },
        ];

        return orders;
    }

    function pageLoadHandler() {
        var grid = $find("<%= RadGrid1.ClientID %>");
        var masterTable = grid.get_masterTableView();
        var dataSource = getOrders();

        masterTable.set_dataSource(dataSource);
        masterTable.dataBind();
    }
    Sys.Application.add_load(pageLoadHandler);
</script>
````

### Generate title and href attributes for hyperlinks on the client

There are scenarios, when RadGrid is data-bound on the client, and one needs to alter properties of controls nested in different cells. Such cases include:*Generating title and href attributes for hyperlinks on the clientGeneratingsrc attributes for images on the client*

The proper way to handle these requirements is in the onRowDataBound client side event handler, where we can access the cell(s) within the data item, and alter their properties. This is demonstrated in the code snippet below:

````JavaScript
function OnRowDataBound(sender, args) {
  var spanControl = args.get_item().get_cell("Change").getElementsByTagName('span')[0];
  var image = args.get_item().get_cell("Change").getElementsByTagName('img')[0];
  //This is where we manually set the hyperlink's title
  var item = args.get_item(); var dataItem = args.get_dataItem();
  var link = item.get_cell("StockTicker").getElementsByTagName("a")[0]; link.title = dataItem.StockTicker + " (change: " + dataItem.Change + ")";
  if (args.get_dataItem().Change > 0) {
    image.style.display = ""; image.src = "Images/up.gif"; spanControl.style.color = "green";
  }
  else if (args.get_dataItem().Change < 0) {
    image.style.display = ""; image.src = "Images/down.gif"; spanControl.style.color = "red";
  }
  else {
    image.style.display = "none"; spanControl.style.color = "";
  }
}
````
