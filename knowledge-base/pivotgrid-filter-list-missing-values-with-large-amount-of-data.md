---
title: Filter List Missing Values With Large Amount of Data
description: Filter List Missing Values With Large Amount of Data. Check it now!
type: how-to
page_title: Filter List Missing Values With Large Amount of Data
slug: pivotgrid-filter-list-missing-values-with-large-amount-of-data
res_type: kb
---


## Problem

The possible values in the filter window is limited and does not include (load) the entire list of all items available from the data source.

## Description

The ListBox control used in the `FilterWindow` has a **default max value** of items set to **1000** items. If you have more items they will not be shown/loaded.

Also, these items cannot be sorted, so you may not see them in the order you may expect (e.g, alphabetically), but as they come from the data source.

## Solution

**Increase** the `SetConditionListCapacity` property under the OLAP settings:

````ASP.NET
<telerik:RadPivotGrid runat="server" ID="RadPivotGrid1">
    <OlapSettings SetConditionListCapacity="23456">
    </OlapSettings>
</telerik:RadPivotGrid>
````



