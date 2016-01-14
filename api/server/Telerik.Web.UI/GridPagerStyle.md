---
title: Telerik.Web.UI.GridPagerStyle
page_title: Telerik.Web.UI.GridPagerStyle
description: Telerik.Web.UI.GridPagerStyle
---

# Telerik.Web.UI.GridPagerStyle

RadGrid and GridTableView use instance of this class to set style of thir PagerItem-s when rendering

## Inheritance Hierarchy

* System.Object
* System.MarshalByRefObject
* System.ComponentModel.Component
* System.Web.UI.WebControls.Style
* System.Web.UI.WebControls.TableItemStyle
* Telerik.Web.UI.GridTableItemStyle
* Telerik.Web.UI.GridPagerStyle

## Properties

###  AlwaysVisible `Boolean`

Gets or set a value indicating whether the Pager will be visible regardless of
            the number of items. (See the remarks)

#### Remarks
In order to display the grid pager regardless of the number of records returned
            and the page size, you should set this property of the corresponding GridTableView to
            true. Its default value is false.

###  ChangePageSizeButtonToolTip `String`

The ToolTip that will be applied to the ChangePageSize  control.

###  ChangePageSizeComboBoxTableSummary `String`

The summary attribute that will be applied to the table which holds the ChangePageSize  control.

###  ChangePageSizeComboBoxToolTip `String`

The ToolTip that will be applied to the input element in the ChangePageSize  control.

###  ChangePageSizeTextBoxToolTip `String`

The ToolTip that will be applied to the ChangePageSize  control.

###  EnableAllOptionInPagerComboBox `Boolean`

When this property is enabled, the combobox control in the pager will have an "All" option which could be used to display all items without disabling the paging

###  EnableSEOPaging `Boolean`

Get or set a value indicating whether the SEO (Search Engine Optimized) paging
            enabled

###  FirstPageImageUrl `String`

Gets or sets url for first page image

###  FirstPageText `String`

Text that would appear if Mode is PrevNext for 'first' page button

###  FirstPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'next' page button

###  GoToPageButtonToolTip `String`

The ToolTip that will be applied to the GoToPage input element.

###  GoToPageTextBoxToolTip `String`

The ToolTip that will be applied to the GoToPage  control.

###  HorizontalAlign `HorizontalAlign`

Gets or sets the horizontal align of the pager. Accepts as values members of the
                 enumeration.

###  IsDefault `Boolean`

Gets a value indicating whether the default pager will be used, i.e. no
            customizations have been made.

###  IsDefault `Boolean`

Returns 'True' if none of the properties have been set

###  IsPagerOnBottom `Boolean`

Gets a value indicating whether the pager is displayed on the bottom of the
            grid.

###  IsPagerOnTop `Boolean`

Gets a value indicating whether the pager is displayed on the top of the
            grid.

###  LastPageImageUrl `String`

Gets or sets url for first page image

###  LastPageText `String`

Text that would appear if Mode is PrevNext for 'last' page button

###  LastPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'last' page button

###  Mode `GridPagerMode`

Gets or sets the mode of Telerik RadGrid Pager. The mode defines what the pager
                will contain. This property accepts as values only members of the GridPagerMode Enumeration.

#### Remarks
You should have Paging enabled by setting the 
                property.

###  NextPageImageUrl `String`

Gets or sets url for Next Page image

###  NextPagesToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'next' page button

###  NextPageText `String`

Text that would appear if Mode is PrevNext for 'next' page button

###  NextPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'next' page button

###  PageButtonCount `Int32`

Gets or sets the number of buttons that would be rendered if pager Mode is

#### Remarks
By default 10 buttons will be displayed. If the number of grid pages is greater
            than 10, ellipsis will be displayed.

###  PagerTextFormat `String`

The string used to format the description text that appears in a pager item. See
            the remarks.

#### Remarks
The parameters {0) - {4} are mandatory.
            Parameter {0} is used to display current page number.
            Parameter {1} is total number of pages.
            Parameter {2} will be replaced with the number of the first item in the current
            page.
            Parameter {3} will be set to the number of the last item in the current page.
            Parameter {4} indicates where pager buttons would appear.
            Parameter {5} corresponds to number of all items in the datasource.

###  PageSizeControlType `PagerDropDownControlType`

Gets or sets the type of the page size drop down control.

###  PageSizeLabelText `String`

The text of the page size label situated before the page size combo.

###  PageSizes `Int32[]`

Gets/sets a comma/semicolon delimited list of page size values.

###  Position `GridPagerPosition`

Gets or sets the Position of pager item(s).Accepts only values, members of the
                GridPagerPosition Enumeration.

###  PrevPageImageUrl `String`

Gets or sets url for Previous Page image

###  PrevPagesToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'prev' page button

###  PrevPageText `String`

Text that would appear if Mode is PrevNext for 'previous' page button

###  PrevPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'prev' page button

###  SEOPageIndexRouteParameterName `String`

Gets or sets the name of the URL parameter that specifies the page number
            when SEO paging and routing are enabled.

###  SEOPagingQueryStringKey `String`

Gets or sets the SEO paging query string key.

###  SEORouteName `String`

Gets or sets the name of the route that is used when SEO paging and routing are enabled.

###  ShowPagerText `Boolean`

Gets or sets a value indicating whether the pager text or only the pager buttons
            will be displayed.

###  UseRouting `Boolean`

Gets or sets a value indicating whether URL Routing is enabled for the 
            current web application

###  Visible `Boolean`

Gets or sets the visibility of the pager item

## Methods

###  CopyFrom

Duplicates the non-empty style properties of the specified 
            into the instance of the 
            class that this method is called from.

#### Parameters

#### s `System.Web.UI.WebControls.Style`

A  that represents
            the style to copy.

#### Returns

`System.Void` 

###  MergeWith

Combines the style properties of the specified 
            into the instance of the 
            class that this method is called from.

#### Parameters

#### s `System.Web.UI.WebControls.Style`

A  that represents
            the style to combine.

#### Returns

`System.Void` 

###  Reset

Removes any defined style elements from the state bag.

#### Returns

`System.Void` 

