---
title: Telerik.Web.UI.GridScrolling
page_title: Telerik.Web.UI.GridScrolling
description: Telerik.Web.UI.GridScrolling
---

# Telerik.Web.UI.GridScrolling

Contains properties related to customizing the settings for scrolling operation
            in Telerik RadGrid.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridScrolling

## Properties

###  AllowScroll `Boolean`

Gets or sets a value indicating whether scrolling will be enabled in
            Telerik RadGrid.

###  ScrollHeight `Unit`

Gets or sets a value specifying the grid height in pixels (px) beyond which the
            scrolling will be enabled.

###  ScrollBarWidth `Unit`

###  ScrollTop `String`

###  AJAXScrollTop `String`

###  ScrollLeft `String`

###  UseStaticHeaders `Boolean`

Gets or sets a value indicating whether grid column headers will scroll as the
            rest of the grid items or will remain static (MS Excel ® style).

#### Remarks
This property is meaningful only when used in conjunction with
                 set to true.

###  SaveScrollPosition `Boolean`

Gets or sets a value indicating whether Telerik RadGrid will keep the
            scroll position during postbacks.

#### Remarks
This property is meaningful only when used in conjunction with
                 set to true.

###  EnableVirtualScrollPaging `Boolean`

Gets or sets a value indicating whether Telerik RadGrid will change
            the pages when you scroll using the grid scroller. This in terms of
            Telerik RadGrid is called Virtual Scrolling.

#### Remarks
This property is particularly useful when working with huge datasets. Using
                the grid scrollbar, you can change the grid pages just like in Microsoft
                Word®. When scrolling with the virtual scrollbar,
                Telerik RadGrid uses AJAX requests to change the pages, i.e. no
                Postbacks are performed. The overall behavior is smooth and with no flicker.Note that you should have AJAX enabled for Telerik RadGrid by
                setting the EnableAJAX="True".

###  FrozenColumnsCount `Int32`

To enable static columns, set the ClientSettings.Scrolling.FrozenColumnsCount property to a value greater than 0. 
            The value of FrozenColumnsCount specifies the number of columns (starting with the leftmost column) that do not
            scroll when the of the user scrolls the grid horizontally, using the horizontal scroll bar. This feature is 
            functional even when in hierarchical grids and grids that support grouping.

###  CountGroupSplitterColumnAsFrozen `Boolean`

Gets or sets a value indicating if the  will be part of the frozen columns count in grid

## Methods

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

