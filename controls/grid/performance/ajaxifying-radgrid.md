---
title: Ajaxifying RadGrid
page_title: Ajaxifying RadGrid - RadGrid
description: Learn how to use RadAjaxManager or RadAjaxPanel to update RadGrid asynchronously and reduce full-page postbacks in ASP.NET AJAX applications.
slug: grid/performance/ajaxifying-radgrid
components: ["grid"]
tags: ajax,ajaxifying,radgrid,partial rendering
published: True
position: 1
---

# Ajaxify RadGrid

You can ajaxify **RadGrid** to update the grid asynchronously instead of refreshing the entire page after a grid command.

AJAX updates replace only the controls configured for the update. This can reduce the amount of page markup transferred during a request, but the performance benefit depends on the page structure and the amount of data rendered by the grid.

Use **RadAjaxManager**, **RadAjaxPanel**, or the ASP.NET AJAX **UpdatePanel** to configure the grid for partial rendering. The following example registers **RadGrid** as an updated control through **RadAjaxManager**.

> caption Configure RadAjaxManager to update RadGrid asynchronously

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />

<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight">
            </telerik:GridNumericColumn>
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
````

> caption Bind the RadGrid used in the AJAX example

````C#
using System;
using System.Linq;
using Telerik.Web.UI;

protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = Enumerable.Range(1, 5).Select(index => new
    {
        OrderID = index,
        OrderDate = DateTime.Today.AddDays(-index),
        Freight = index * 10.5m,
        ShipName = "Name " + index,
        ShipCountry = "Country " + index
    });
}
````
````VB
Imports System
Imports System.Linq
Imports Telerik.Web.UI

Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = Enumerable.Range(1, 5).Select(Function(index) New With {
        .OrderID = index,
        .OrderDate = DateTime.Today.AddDays(-index),
        .Freight = index * 10.5D,
        .ShipName = "Name " & index,
        .ShipCountry = "Country " & index
    }).ToList()
End Sub
````

Furthermore, there is a mechanism for making any control integrated in the grid to perform AJAX callbacks instead of postbacks. For example, the drag-and-drop for grouping and column reordering uses that mechanism to facilitate no-postback experience.

The AJAX framework preserves the ASP.NET page lifecycle. You can continue to set properties on the grid and on controls inside the grid, including third-party controls. Keep the data-binding lifecycle in mind when you configure asynchronous updates, and ensure that the grid is recreated and bound as required on each request.

## See Also

- [Grid Performance Optimizations]({%slug grid/performance/grid-performance-optimizations%})
- [RadAjaxManager Overview]({%slug ajaxmanager/overview%})
- [RadAjaxPanel Overview]({%slug ajaxpanel/overview%})

