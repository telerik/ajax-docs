---
title: RadHtmlChart with DateTime Axis Loads Slowly
description: RadHtmlChart with DateTime Axis Loads Slowly. Check it now!
type: how-to
page_title: RadHtmlChart with DateTime Axis Loads Slowly
slug: chart-radhtmlchart-with-datetime-axis-loads-slowly
res_type: kb
---

## Problem

The RadHtmlChart performance suffers, or the browser hangs, when using a DateTime Axis with data-points in the same day.

## Description

When I use a DateTime Axis, I sometimes see the RadHtmlChart load very slowly, or even cause the browser to hang. This seems to happen when there are data-points that are in the same day, but not when the data-points are more spread out.

## Solution

This issue occurs due to the way intervals are automatically generated for a DateTime Axis. The RadHtmlChart looks at the source data to calculate the interval between all data-points along the axis. For example, if the data contain two records that are 5-minutes apart, the data-points on the axis will have an interval of 5-minutes. If the data also contains records spanning a week, over 2,000 data-points would need to be generated along the DateTime Axis to show an unbiased representation of the data.

There are several options to overcome this behavior:

 - Explicitly set the **BaseUnit** property of the DateTime Axis to a value that will display the data correctly, without producing too many axis data-points.
 
 - Pre-process the source data before binding to the RadHtmlChart in order to aggregate values that are close together.
 
 - Remove the *Time* component from DateTime objects in the source data. This effectively makes the minimum interval one day.


 