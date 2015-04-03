---
title: Multicolumn Headers
page_title: Multicolumn Headers | UI for ASP.NET AJAX Documentation
description: Multicolumn Headers
slug: grid/columns/multicolumn-headers
tags: multicolumn,headers
published: True
position: 8
---

# Multicolumn Headers



The __MultiColumn Headers__ of the RadGrid represent a tree-like structure where one or more columns can be grouped together by a common header. That common header in its turn can be child of another upper MultiColumn header which can also span both columns and other headers. On-line example demonstrating this functionality is available [here](http://demos.telerik.com/aspnet-ajax/grid/examples/columns-rows/columns/multi-column-headers/defaultcs.aspx).

## Structure rules

* A __MultiColumn Header__ can be a child of only one other multicolumn header.

* A __MultiColumn Header__ must span at least one column.

* A __MultiColumn Header__ should be defined only for a single row header per level. Hence a multicolumn header always has __RowSpan=1__.

* A column can have as a parent only one __MultiColumn Header__.

* Each column header can span only a single column. Hence a column header always has __ColSpan=1__.

* A column surrounded (in order of definition) by other columns with common multi header cannot have a different multicolumn header on __the same or higher row level__ than the columns that surround it. This rule ensures proper rendering and avoids overlapping of multicolumn headers.

## Definition

In order to define the MultiColumn Headers in RadGrid __Column Groups__ should be set.#_ASPX_

	

          <ColumnGroups>
          <telerik:GridColumnGroup HeaderText="Product Details" Name="ProductDetails"/>
          <telerik:GridColumnGroup HeaderText="Location" Name="Location"/>
          <telerik:GridColumnGroup HeaderText="Category" Name="Category" ParentGroupName="ProductDetails"/>
          <telerik:GridColumnGroup HeaderText="Order Details" Name="OrderDetails" ParentGroupName="ProductDetails"/>
          </ColumnGroups>
        



In order to add the needed column in the MultiColumn Header the __ColumnGroupName__ property should be used:#_ASPX_

	

          <telerik:GridBoundColumn UniqueName="Address" DataField="Address" ColumnGroupName="Location" HeaderText="Address"/>
        



The above definition will be presented in the following output:![grid Multi Column Headers](images/grid_MultiColumnHeaders.jpg)

## API Model

The described feature is presented by some additional properties related to the __GridTableView__ and __GridColumn__ objects. The __GridColumn__ provides new __ColumnGroupName__ property which is string type and sets the name of the multicolumn header (GridColumnGroup) to which the current column belongs. As for the __GridTableView__, two new properties are added. These properties are __HasMultiHeaders__ which is boolean type and __ColumnGroups__ which holds a collection of the multiheaders in the GridTableView and is __GridColumnGroupCollection__ type.

The __GridColumnGroupCollection__ type is a new type that implements StateManager and IComparable interface. This type presents the follwoing properties:


|  __Property__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __HeaderText__ | __String__ |The text that will serve as a caption of the multicolumn header cell.|
| __Name__ | __String__ |The name that uniquely identifies each multicolumn header. Used to associate columns to it.|
| __ParentGroupName__ | __String__ |Holds the name of the parent multicolumn header of the current header. If not specified the multiheader is no the top level.|
| __HeaderStyle__ | __TableItemStyle__ |Defines styles for each multicolumn header style. See Styling section below for more info.|
| __ColSpan__ | __Int__ |Public ReadOnly. Return the number of spanned columns by the multicolumn header. Min value is 1.|
| __Visible__ | __Bool__ |Public ReadOnly. Returns whether a multicolumn header cell will be rendered as visible or not. True if at least one of its children (gridcolumn or columngroup) is visible, otherwise false.|
| __CompareTo__ | __Int__ |Implemetns standard comparison operation and also allows comparison between GridColumnGroups and ordinary GridColumns. Used to determine the proper order of the cells in each multiheader.|

## MultiColumn Headers Limitations

The functionalities listed below are officially not supported with multicolumn headers:

* __Frozen Columns;__
