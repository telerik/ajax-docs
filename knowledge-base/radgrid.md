---
title: Configuring the RadGrid in UI for ASP.NET AJAX
description: Learn how to configure the RadGrid component in UI for ASP.NET AJAX to display data effectively and meet your requirements.
type: how-to
page_title: Setting Up RadGrid in UI for ASP.NET AJAX
meta_title: Setting Up RadGrid in UI for ASP.NET AJAX
slug: configuring-radgrid-ui-ajax
tags: radgrid, ui for asp.net ajax, grid configuration
res_type: kb
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>UI for ASP.NET AJAX Grid</td>
</tr>
<tr>
<td>Version</td>
<td>Current</td>
</tr>
</tbody>
</table>

## Description

I want to configure the [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) component in UI for ASP.NET AJAX to display data correctly and meet specific requirements. This includes setting up columns, binding data, and enabling additional features like sorting, paging, and filtering.

This knowledge base article also answers the following questions:

- How to bind data to RadGrid in UI for ASP.NET AJAX?
- How to enable sorting and paging in RadGrid?
- How to configure columns in RadGrid?

## Solution

To configure the RadGrid in UI for ASP.NET AJAX, follow these steps:

1. **Add RadGrid to the Page**  
   Place the RadGrid control inside the `<form>` tag in your ASPX page.
   ```html
   <telerik:RadGrid ID="RadGrid1" runat="server"></telerik:RadGrid>
   ```

2. **Set Up Data Source**  
   Bind the RadGrid to a data source like SqlDataSource, ObjectDataSource, or programmatically bind it to a list or data table in the code-behind.

   Example of programmatically binding data in the code-behind:
   ```csharp
   protected void Page_Load(object sender, EventArgs e)
   {
       if (!IsPostBack)
       {
           RadGrid1.DataSource = GetData(); // Replace GetData() with your data retrieval logic
           RadGrid1.DataBind();
       }
   }
   ```

3. **Configure Columns**  
   Define the columns in the RadGrid using `<MasterTableView>` and `<Columns>` tags.
   ```html
   <telerik:RadGrid ID="RadGrid1" runat="server">
       <MasterTableView AutoGenerateColumns="false">
           <Columns>
               <telerik:GridBoundColumn DataField="FieldName" HeaderText="Header Name" UniqueName="UniqueName" />
               <telerik:GridButtonColumn Text="Edit" CommandName="Edit" />
           </Columns>
       </MasterTableView>
   </telerik:RadGrid>
   ```

4. **Enable Features**  
   Enable features like sorting, paging, and filtering by setting the relevant properties.

   Example:
   ```html
   <telerik:RadGrid ID="RadGrid1" runat="server" AllowSorting="true" AllowPaging="true">
       <MasterTableView AllowFilteringByColumn="true" PageSize="10">
           <Columns>
               <telerik:GridBoundColumn DataField="FieldName" HeaderText="Header Name" UniqueName="UniqueName" />
           </Columns>
       </MasterTableView>
   </telerik:RadGrid>
   ```

5. **Handle Events (Optional)**  
   Add event handlers in the code-behind for advanced customizations like `NeedDataSource`, `ItemCommand`, or `ItemDataBound`.
   ```csharp
   protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
   {
       RadGrid1.DataSource = GetData(); // Replace with your data source logic
   }
   ```

## See Also

- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [RadGrid Columns Configuration](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/columns/overview)
- [RadGrid Data Binding](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-binding/overview)
- [RadGrid Sorting, Filtering, and Paging](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/sorting-filtering-paging-overview)
