---
title: RadGrid Custom Paging and Aggregates
description: RadGrid Custom Paging and Aggregates. Check it now!
type: how-to
page_title: RadGrid Custom Paging and Aggregates
slug: grid-radgrid-custom-paging-and-aggregates
res_type: kb
---

## Description

The Grid control provides built-in Aggregates, both with or without Grouping:
 - [Aggregates Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/columns/aggregates)
 
 - [Grid Group Footers Demo](http://demos.telerik.com/aspnet-ajax/grid/examples/functionality/grouping/group-footers/defaultcs.aspx)  

When the AllowCustomPaging property is disabled (default value is false) and there is no intentional custom paging logic in the code-behind, the Aggregate values are populated from all the records in the database. However, when custom paging is present, the grid has access only to a portion of the database, therefore, the Aggregate calculation is done for the records loaded on the current page.  
  
## Solution

When the *AllowCustomPaging* property is set to true, this will tell the grid to expect that the developer will manually handle the paging. However, having this property by itself is not enough and you will need to do additional configuration.  
  

One of these requirements is setting the `VirtualItemCount` property, which should be set to the max total count of records - [Custom Paging Overview]({%slug grid/functionality/paging/custom-paging%})  
  
The idea of Custom Paging is to get only a subset of records from the database, similar to the *MyBusinessObjects.cs-&gt; Select(int startRowIndex, int maximumRows)* logic here - [Custom Paging Demo](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/paging/custom-paging/defaultcs.aspx)

If you would use programmatic binding, it would look like this:

````C#
protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    int startRowIndex = RadGrid1.CurrentPageIndex * RadGrid1.PageSize;
    int maximumRows = RadGrid1.PageSize;
    RadGrid1.DataSource = MyShipping.GenerateShippers().Skip(startRowIndex).Take(maximumRows);
}
````

Since Aggregates calculation needs info from the entire database in order to display correctly the sum, count, etc. of the whole dataset, I am afraid this won’t be possible with Custom Paging. What will happen is that the aggregates actually will display only the results from the visible rows on the current page.   
  
As a possible workaround, you can try using Custom aggregates - [How to Create Custom Aggregate Functions](https://www.telerik.com/support/kb/aspnet-ajax/grid/details/how-to-create-custom-aggregate-functions)

Using this approach, you can do the following: in the **CustomAggregate** event handler you can call a manual query to the database to get the desired calculation and set it to **e.Result**. Here are some SQL samples - [SQL count, avg, sum clauses](https://www.w3schools.com/sql/sql_count_avg_sum.asp)


