---
title: Paging Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: grid/functionality/paging/overview
tags: overview
published: True
position: 0
---

# Paging Overview



## 

__RadGrid__ natively supports table paging, which lets users view large sets of data in small chunks for faster loading and easier navigation. It also provides a set of events, helper methods and properties if the paging operation requires custom intervention.

Set the __AllowPaging__ property to __True__ to have __RadGrid__ handle paging. By default, the __AllowPaging__ property is __False__. You can set the AllowPaging property on the entire grid, or set it for each __GridTableView__ individually. The __AllowPaging__ setting on a __GridTableView__ control overrides the default specified by the grid.

If you want to [handle paging in a custom manner]({%slug grid/functionality/paging/custom-paging%}), set the grid's __AllowCustomPaging__ property to __True__ as well.

Set the __PageSize__ property on the grid or table view to specify the number of records that should appear in each chunk. When paging is enabled, __RadGrid__ renders a pager item (__GridPagerItem__) on the bottom and/or top of each __GridTableView__ displayed in the hierarchy when the number of records in the table view exceeds the page size.![Pager](images/grd_Pager.png)

Since Q2 2012 the RadGrid control provides __PageSizes__ property which determines the values that will be displayed in the PageSize combo box in the RadGrid pager item.![grd Page Sizes](images/grd_PageSizes.png)

The default value of this property is __int[] { 10,20,50 }__.

There are a number of different [pager types]({%slug grid/functionality/paging/pager-item%}) you can use, including [template support]({%slug grid/functionality/paging/changing-the-default-pager/setting-pager-template%}) for designing your own pager.

__RadGrid__ exposes the __PageSizeControlType__ property in its__PagerStyle__ property collection which is an enum of type __PagerDropDownControlType__. It has three values available with __RadComboBox__ being the default one:

* __None__

* __RadComboBox__

* __RadDropDownList__

As it name implies, the property specifies what type of page size drop down control will be rendered.The property provides an easy wayto switch off the page size combo or replace it with its light weight counterpart __RadDropDownList__.
