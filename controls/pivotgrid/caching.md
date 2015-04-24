---
title: Caching
page_title: Caching | RadPivotGrid for ASP.NET AJAX Documentation
description: Caching
slug: pivotgrid/caching
tags: caching
published: True
position: 11
---

# Caching



**RadPivotGrid**’s aggregate calculations and grouping are driven by a powerful data engine which produces a special pivot view model. The latter feeds the aggregate values into the final output by the control. At times, however, when the data to be aggregated is quite large, the creation of the pivot view model can get pretty demanding in terms of CPU resources. In order to avoid the recalculation of large data that does not change very often, RadPivotGrid allows the caching of the pivot view model into the session state.

## 

Caching is enabled through the **EnableCaching** property of the control. For large sets of data using it will result in considerable speed up of any operations that require the rebinding of the pivot grid.

However, there are trade-offs that should be carefully considered before opting for the employment of this feature:

* **Memory consumption** is very likely to increase significantly if the web page where RadPivotGrid is placed on experiences intense traffic.

* There is evidently **no guarantee the data to be displayed will be up-to-date.**

Note that in case you need to remove the model from the session you just should add the following line of code:

````C#
Session[RadPivotGrid1.UniqueID] = null;
````




