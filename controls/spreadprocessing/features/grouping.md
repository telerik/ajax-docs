---
title: Grouping
page_title: Grouping | UI for ASP.NET AJAX Documentation
description: Grouping
slug: spreadprocessing/features/grouping
tags: grouping
published: True
position: 17
---

# Grouping



The purpose of this article is to describe what is grouping and how to work with it through the __RadSpreadProcessing__ model. It contains thefollowing sections:

* [What is grouping?](#what-is-grouping?)

* [Grouping rows or columns](#grouping-rows-or-columns)

* [Ungrouping Rows or Columns](#ungrouping-rows-or-columns)

* [Getting the Outline Level](#getting-the-outline-level)

## What is Grouping?

Grouping is a mechanism to organize data in sections, in order to be able to show and hide the relevant chunks.

Each row or column which is part of a group is assigned an outline level, which determines the level of grouping and from there which rows or columns it is grouped with.
>caption Figure 1

![Rad Spread Processing Features Grouping 01](images/RadSpreadProcessing_Features_Grouping_01.png)

In __Figure 1__, the rows 1, 2, 4 and 8 have outline level value of 1. Rows 5, 6, and 7 have outline level 2. Rows 3 and 9 do not participatein the grouping and have the default value of 0.

The maximum outline level is 7.

## Grouping Rows or Columns

There are two available options when grouping. The first option is to simply assign the outline level property of the rows or columns:

>tabbedCode

````C#
	    Workbook workbook = new Workbook(); 
	    Worksheet worksheet = workbook.Worksheets.Add();
	    worksheet.Columns[0].SetOutlineLevel(1);
	    worksheet.Columns[1, 2].SetOutlineLevel(2);
	    worksheet.Columns[3].SetOutlineLevel(1);
````



````VB.NET
	    Dim workbook = New Workbook()
	    Dim worksheet = workbook.Worksheets.Add()
	    worksheet.Columns(0).SetOutlineLevel(1)
	    worksheet.Columns(1, 2).SetOutlineLevel(2)
	    worksheet.Columns(3).SetOutlineLevel(1)
````


>end

The other option is to use the Group method exposed by the row/column selection classes.

>tabbedCode

````C#
	    Workbook workbook = new Workbook(); 
	    Worksheet worksheet = workbook.Worksheets.Add();
	    worksheet.Columns[0, 3].Group();
	    worksheet.Columns[1, 2].Group();
````



````VB.NET
	    Dim workbook = New Workbook()
	    Dim worksheet = workbook.Worksheets.Add()
	    worksheet.Columns(0, 3).Group()
	    worksheet.Columns(1, 2).Group()
````


>end

Both approaches will result in the following file:
>caption Figure 2

![Rad Spread Processing Features Grouping 02](images/RadSpreadProcessing_Features_Grouping_02.png)

## Ungrouping Rows or Columns

As with grouping, ungrouping can be done both through setting the outline level property of the row or column selection, or by using the Ungroup methodexposed by the same classes.

The following code snippets exemplify the two approaches to make these changes in a file:
>caption Figure 3

![Rad Spread Processing Features Grouping 03](images/RadSpreadProcessing_Features_Grouping_03.png)

>tabbedCode

````C#
	    worksheet.Rows[0, 1].ClearOutlineLevel(); 
	    worksheet.Rows[4, 6].SetOutlineLevel(1);
````



````VB.NET
	    worksheet.Rows(0, 1).ClearOutlineLevel() 
	    worksheet.Rows(4, 6).SetOutlineLevel(1)
````


>end

You can achieve the same result with the code in __Example 4__:

>tabbedCode

````C#
	    worksheet.Rows[0, 1].Ungroup(); 
	    worksheet.Rows[4, 6].Ungroup(); 
````



````VB.NET
	    worksheet.Rows(0, 1).Ungroup() 
	    worksheet.Rows(4, 6).Ungroup() 
````


>end

## Getting the outline level

You can get the outline level of a row/column or a group of rows/columns using the code in __Example 5__:

>tabbedCode

````C#
	    RangePropertyValue outlineLevelRangeValue = worksheet.Rows[0, 1].GetOutlineLevel(); 
	    int outLineLevel = outlineLevelRangeValue.Value;
````



````VB.NET
	    Dim outlineLevelRangeValue As RangePropertyValue(Of Integer) = worksheet.Rows(0, 1).GetOutlineLevel()
	    Dim outLineLevel As Integer = outlineLevelRangeValue.Value
````


>end

# See Also

 * [Filtering]({%slug spreadprocessing/features/filtering%})

 * [Sorting]({%slug spreadprocessing/features/sorting%})
