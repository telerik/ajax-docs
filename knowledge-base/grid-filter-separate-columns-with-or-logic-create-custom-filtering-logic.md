---
title: Filter separate columns with OR logic; create custom filtering logic
description: Filter separate columns with OR logic; create custom filtering logic. Check it now!
type: how-to
page_title: Filter separate columns with OR logic; create custom filtering logic
slug: grid-filter-separate-columns-with-or-logic-create-custom-filtering-logic
res_type: kb
---


### HOW TO

Change the filtering of RadGrid so different columns filters are used with an `OR` logic instead of the default `AND` logic.

### DESCRIPTION

RadGrid uses `AND` logic for filters coming from separate columns. There isn't a built-in feature that allows you to change that, so you need to create your own filtering expression.

### SOLUTIONS

The solution boils down to creating a filter expression that will produce the desired results with the data source that you have.

There are two general ways to do this:

- Modify the `FilterExpression` of the table view and set the filters to the columns. This is showcased in the sample attached below.
- Filter the data source before providing it to the grid in the NeedDataSource event. A similar approach is used in the [Custom Paging demo](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/paging/custom-paging/defaultcs.aspx). You can see what filter expressions the grid provides in the [Edit this page Operate with the FilterExpression Manually]({%slug grid/how-to/filtering/operate-with-the-filterexpression-manually %}) help article.


### TIPS

You can use an approach similar to the [Filter Templates demo](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/filter-templates/defaultcs.aspx) and [fire a custom command]({%slug grid/client-side-programming/gridtableview-object/methods/firecommand %}) instead of using a button. This lets you invoke the same functionality in the ItemCommand handler by checking for your custom command name.

If you want to pre-filter the grid for your end user, you can either filter the data source, or use the approach from the [Apply Default Filter on Initial Load]({%slug controls/grid/functionality/filtering/how-to/apply-default-filter-on-initial-load %}) help article.

Using an OR operator for filtering several values in one column is supported out of the box in the [Excel-like filtering](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/excel-like-filtering/defaultcs.aspx) where you can check several values that you want present in the filtered data for that column.

### DOWNLOADS

A runnable page that shows the approach in action is attached here:
* [build-filter-expression.zip](files/grid-build-filter-expression.zip)

