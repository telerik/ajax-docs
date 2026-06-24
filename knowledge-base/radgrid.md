---
title: Configuring RadGrid in UI for ASP.NET AJAX
description: Learn how to configure the RadGrid component in UI for ASP.NET AJAX.
type: how-to
page_title: How to Configure RadGrid in UI for ASP.NET AJAX
meta_title: How to Configure RadGrid in UI for ASP.NET AJAX
slug: configure-radgrid-ui-aspnet-ajax
tags: grid, ui for asp.net ajax, configuration
res_type: kb
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> UI for ASP.NET AJAX Grid </td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

I need to configure the [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) in UI for ASP.NET AJAX for proper functionality. Configuration includes data binding, enabling features like filtering, sorting, paging, and defining columns.

This knowledge base article also answers the following questions:
- How to set up RadGrid in UI for ASP.NET AJAX?
- How to enable filtering, sorting, and paging in RadGrid?
- How to bind data to RadGrid?

## Solution

To configure the RadGrid in UI for ASP.NET AJAX, follow these steps:

1. Define the RadGrid in your ASPX page. For example:

```aspnet
<telerik:RadGrid ID="RadGrid1" runat="server" AutoGenerateColumns="false">
    <MasterTableView>
        <Columns>
            <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Name" HeaderText="Name" UniqueName="Name"></telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
```

2. Bind data to the RadGrid using the `NeedDataSource` event. Example:

```csharp
protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetData(); // Replace with your data source method
}
```

3. Enable required features like filtering, sorting, and paging in the `MasterTableView` configuration. Example:

```aspnet
<MasterTableView AllowPaging="true" AllowSorting="true" AllowFilteringByColumn="true">
</MasterTableView>
```

4. Add the necessary scripts and stylesheets for Telerik UI for ASP.NET AJAX in your project to ensure proper rendering and functionality.

5. Test the RadGrid in the browser to verify its behavior.

## See Also

- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [RadGrid MasterTableView Settings](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/mastertableview)
- [RadGrid NeedDataSource Event](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-binding/advanced-data-binding)
