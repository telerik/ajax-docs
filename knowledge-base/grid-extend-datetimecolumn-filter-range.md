---
title: Extend DateTimeColumn Filter Range
description: Extend DateTimeColumn Filter Range. Check it now!
type: how-to
page_title: Extend DateTimeColumn Filter Range
slug: grid-extend-datetimecolumn-filter-range
res_type: kb
---


### HOW TO

Allow filtering a `DateTime` column in a range beyond (1900, 2100).

By default, you can't select dates outside of this range in the grid, because the date picker grays them out and they are disabled for the end user. The grid enforces this limit for a variety of reasons, not the least being common data source problems.

So, it effectively appears that the RadDatePicker does not reflect the `MinDate` and `MaxDate` settings of its column.

### SOLUTION

You can overcome this limit in two ways:

- Use your own pickers in the FilterTemplate of the column. You can find an example of how to do that in the **OrderDate column** in the [Filter Templates demo](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/filter-templates/defaultcs.aspx).
- OR, set the min/max dates to the pickers in the code-behind and then again on the client-side when their popup opens. You can find attached an example of this below.

### DOWNLOADS

You can find atached the projects demonstrating the described approached here:

* [change-filter-item-picker-range.zip](files/grid-change-filter-item-picker-range.zip)


