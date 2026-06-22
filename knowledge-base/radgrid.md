```markdown
---
title: Configuring RadGrid in UI for ASP.NET AJAX
description: Learn how to configure and work with the RadGrid in UI for ASP.NET AJAX.
type: how-to
page_title: Setting Up and Using RadGrid in UI for ASP.NET AJAX
meta_title: Setting Up and Using RadGrid in UI for ASP.NET AJAX
slug: configuring-radgrid-ui-for-aspnet-ajax
tags: radgrid, ui-for-aspnet-ajax, grid, configuration
res_type: kb
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>Current</td>
</tr>
</tbody>
</table>

## Description

I need guidance on configuring and using the [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) component in UI for ASP.NET AJAX. This knowledge base article also answers the following questions:
- How do I set up RadGrid in UI for ASP.NET AJAX?
- What are the basic features of RadGrid in UI for ASP.NET AJAX?
- How do I bind data to RadGrid in UI for ASP.NET AJAX?

## Solution

To configure and use the RadGrid component in UI for ASP.NET AJAX, follow these steps:

1. Add the RadGrid control to your ASP.NET Web Form:
   ```aspnet
   <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="true" AllowSorting="true" AutoGenerateColumns="false">
       <MasterTableView>
           <Columns>
               <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID" />
               <telerik:GridBoundColumn DataField="Name" HeaderText="Name" UniqueName="Name" />
           </Columns>
       </MasterTableView>
   </telerik:RadGrid>
   ```

2. Configure the data source for the RadGrid. For example, use an `SqlDataSource`:
   ```aspnet
   <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<Your Connection String>" SelectCommand="SELECT ID, Name FROM YourTable"></asp:SqlDataSource>
   ```

3. Bind the data source to the RadGrid:
   ```aspnet
   <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" AllowPaging="true" AllowSorting="true" AutoGenerateColumns="false">
       <MasterTableView>
           <Columns>
               <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID" />
               <telerik:GridBoundColumn DataField="Name" HeaderText="Name" UniqueName="Name" />
           </Columns>
       </MasterTableView>
   </telerik:RadGrid>
   ```

4. Enable additional features like filtering, grouping, and exporting by setting the corresponding properties in the RadGrid configuration.

5. Use the code-behind file to handle events such as `NeedDataSource` if you prefer binding data programmatically:
   ```csharp
   protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
   {
       RadGrid1.DataSource = GetData(); // Replace with your data retrieval logic
   }
   ```

## See Also

- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [RadGrid Data Binding](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-binding/overview)
- [RadGrid Columns](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/columns)
```
