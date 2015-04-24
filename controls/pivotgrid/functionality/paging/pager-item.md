---
title: Pager Item
page_title: Pager Item | RadPivotGrid for ASP.NET AJAX Documentation
description: Pager Item
slug: pivotgrid/functionality/paging/pager-item
tags: pager,item
published: True
position: 1
---

# Pager Item



Required introduction

## 

When paging functionality is enabled **RadPivotGrid** renders pager item on bottom and/or on top of the control.

## PagerStyle

The appearance of the PagerItem could be fine tuned with the PagerStyle property of **RadPivotGrid**. In addition to the usual style properties like **ForeColor**, **BackColor**, **BorderStyle** and others, PagerStyle includes a number of options that are unique to the pager item:

## Position

PagerStyle.Position property specify where the pager item will be displayed relatively to the RadPivotGrid. The list of possible option is as follows:

* **Top**

* **TopAndBottom**

* **Bottom**
![PivotGrid Top and Bottom Pager](images/PivotGrid-PagerPosition.png)

## Mode

With the Mode property of the PagerStyle you could control what set of controls to be displayed in the pager item. Possible options are:

* **NextPrev**
![Pivot Grid-Pager Style 1](images/PivotGrid-PagerStyle1.png)

* **NumericPages**
![Numeric Pager](images/PivotGrid-PagerStyle2.png)

* **NextPrevAndNumeric**
![NexPrev and Numeric Pager](images/PivotGrid-PagerStyle3.png)

* **NextPrevNumericAndAdvanced**
![NexPrev and Numeric Pager and Advanced](images/PivotGrid-PagerStyle4.png)

* **Advanced**
![Advanced Pager](images/PivotGrid-PagerStyle5.png)

* **Slider**
![Slider pager](images/PivotGrid-PagerStyle6.png)

## Appearance

The appearance of the pager in RadPivotGrid could be controlled with the AlwaysVisible property. By default this property has a value of False. When the value is set to True pager item is displayed regardless of the item count.
