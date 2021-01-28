---
title: Setting Paging from Design Time
page_title: Setting Paging from Design Time - RadGrid
description: Check our Web Forms article about Setting Paging from Design Time.
slug: grid/design-time/setting-paging-from-design-time
tags: setting,paging,from,design,time
published: True
position: 4
---

# Setting Paging from Design Time



The Paging section of the Telerik RadGrid Properties lets you specify whether your grid will use pages and the specific paging options.

![Design-time Paging](images/grid_setting_paging_from_design-time.png)

## Paging

In order to turn the paging on (enable dividing data into portions called pages) you must check the [**Allow Paging**] box [sets the **AllowPaging Property**] on the top of the Editor. This will enable the default paging mechanism of Telerik RadGrid. However you are free to use your **own paging** system. All you need to do is to check the [**Allow Custom Paging**] box [sets the **AllowCustomPaging Property**] .

The size of a given Page in Telerik RadGrid is defined by the number of rows, this page will hold. You can define the page size using the [**Page size**] [sets the **PageSize Property**] field.

## Page Navigation

This dialog allows you to customize the way navigation is performed. You can show the navigation buttons, which will help the site-visitor to navigate through the data visualized by Telerik RadGrid. In order to enable the buttons, check the [**Show page navigation**] check box.

Now you can customize the navigation button properties:

* **Position** - use the drop-down list to specify the position of the navigation buttons relative to the grid.

* **Mode** - Specify the way navigation buttons are displayed. You can have navigation buttons appear as page numbers or as previous/next buttons with text. The custom text can be set in the fields below. Note, that you can even enter HTML tags for formatting the custom text.

* **Numeric buttons**: specifies the maximum number of page numbers, that will be shown. If you set this to "5" and your grid has 10 pages, you will see them in series of five numbers ("* ... ,2, 3, 4, 5, 6, ... *" for example).
