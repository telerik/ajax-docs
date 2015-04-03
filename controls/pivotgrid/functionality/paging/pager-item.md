---
title: Pager Item
page_title: Pager Item | UI for ASP.NET AJAX Documentation
description: Pager Item
slug: pivotgrid/functionality/paging/pager-item
tags: pager,item
published: True
position: 1
---

# Pager Item



Required introduction

## 

When paging functionality is enabled __RadPivotGrid__ renders pager item on bottom and/or on top of the control.

## PagerStyle

The appearance of the PagerItem could be fine tuned with the PagerStyle property of __RadPivotGrid__. In addition to the usual style properties like __ForeColor__, __BackColor__, __BorderStyle__ and others, PagerStyle includes a number of options that are unique to the pager item:

## Position

PagerStyle.Position property specify where the pager item will be displayed relatively to the RadPivotGrid. The list of possible option is as follows:

* __Top__

* __TopAndBottom__

* __Bottom__![PivotGrid Top and Bottom Pager](images/PivotGrid-PagerPosition.png)

## Mode

With the Mode property of the PagerStyle you could control what set of contorls to be displayed in the pager item. Possible options are:

* __NextPrev__![Pivot Grid-Pager Style 1](images/PivotGrid-PagerStyle1.png)

* __NumericPages__![Numeric Pager](images/PivotGrid-PagerStyle2.png)

* __NextPrevAndNumeric__![NexPrev and Numeric Pager](images/PivotGrid-PagerStyle3.png)

* __NextPrevNumericAndAdvanced__![NexPrev and Numeric Pager and Advanced](images/PivotGrid-PagerStyle4.png)

* __Advanced__![Advanced Pager](images/PivotGrid-PagerStyle5.png)

* __Slider__![Slider pager](images/PivotGrid-PagerStyle6.png)

## Appearance

The appearance of the pager in RadPivotGrid could be controlled with the AlwaysVisible property. By default this property has a value of False. When the value is set to True pager item is displayed regardless of the item count.
