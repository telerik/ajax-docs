```markdown
---
title: Preventing Stack Overflow Exception with Large Excel-Like Filtering in RadGrid
description: Learn how to handle stack overflow exceptions when using Excel-Like filtering with large user selections in RadGrid for UI for ASP.NET AJAX.
type: how-to
page_title: Resolving Stack Overflow in RadGrid Excel-Like Filtering
meta_title: Resolving Stack Overflow in RadGrid Excel-Like Filtering
slug: prevent-stack-overflow-radgrid-excel-like-filtering
tags: grid, ui-for-aspnet-ajax, excel-like-filtering, exception-handling
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

When using Excel-Like filtering in the RadGrid for UI for ASP.NET AJAX, a stack overflow exception may occur if the user's selection is very large. This happens because the system attempts to process and display all selected items in the filter window, leading to excessive memory and stack usage.

This knowledge base article also answers the following questions:
- How to handle stack overflow exceptions in RadGrid Excel-Like filtering?
- Why does RadGrid throw a stack overflow exception with large filtering selections?
- How to optimize Excel-Like filtering in RadGrid for large datasets?

## Solution

To prevent the stack overflow exception, configure RadGrid to limit the number of items displayed in the Excel-Like filtering window. Follow these steps:

1. Enable the `EnableExcelLikeFiltering` property for the RadGrid.

2. Use the `ExcelLikeFilteringSettings` property to set a maximum limit on the number of items displayed in the filter.

   Example:
   ```csharp
   protected void Page_Load(object sender, EventArgs e)
   {
       RadGrid1.MasterTableView.EnableExcelLikeFiltering = true;
       RadGrid1.MasterTableView.ExcelLikeFilteringSettings.FilterItemsCount = 100; // Set the limit to 100 items
   }
   ```

3. Customize the filtering behavior to improve performance and handle large datasets effectively.

   Example:
   ```csharp
   protected void RadGrid1_NeedDataSource(object source, GridNeedDataSourceEventArgs e)
   {
       RadGrid1.DataSource = GetData(); // Fetch data dynamically
   }

   private IEnumerable GetData()
   {
       // Implement logic to fetch a manageable subset of data for filtering
   }
   ```

By limiting the number of items in the filter window, the memory and stack usage remain under control, preventing stack overflow exceptions.

## See Also

- [RadGrid Excel-Like Filtering Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/filtering/excel-like-filtering)
- [RadGrid Filtering Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/filtering/overview)
- [RadGrid NeedDataSource Event](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/declarative-programmatic-binding/programmatic-binding/using-the-needdatasource-event)
```
