---
title: Paging Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: pivotgrid/functionality/paging/overview
tags: overview
published: True
position: 0
---

# Paging Overview



## 

__RadPivotGrid__ has built-in pager functionality which is available out of the box and it is controlled with the AllowPaging property. Paging functionality allows the user to fetch and display data by chunks. This behavior provides better performance and ease of use for the user.

If the __AllowPaging__ property is set to __True__ the paging functionality will be enabled. By default the __AllowPaging__ property has __False__ value.

You could control how many items will be fetched and displayed by the __PageSize__ property. This property is used by __RadPivotGrid__ to split the returned result set of the datasource.![General Pager](images/PivotGrid-Basic-Paging.png)

__RadPivotGrid__ supports different pager styles, that you could choose from. For more information see [this article]({%slug pivotgrid/functionality/paging/pager-item%}).

__RadPivotGrid__ exposes the __PageSizeControlType__ property in its__PagerStyle__ property collection which is an enum of type __PagerDropDownControlType__. It has three values available with __RadComboBox__ being the default one:

* __None__

* __RadComboBox__

* __RadDropDownList__

As it name implies, the property specifies what type of page size drop down control will be rendered.The property provides an easy wayto switch off the page size combo or replace it with its light weight counterpart __RadDropDownList__.

# See Also

 * [Pager Item]({%slug pivotgrid/functionality/paging/pager-item%})
