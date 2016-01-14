---
title: Telerik.Web.UI.TreeListPagerStyle
page_title: Telerik.Web.UI.TreeListPagerStyle
description: Telerik.Web.UI.TreeListPagerStyle
---

# Telerik.Web.UI.TreeListPagerStyle

RadTreeList use instance of this class to set style of thir PagerItem-s when rendering

## Inheritance Hierarchy

* System.Object
* System.MarshalByRefObject
* System.ComponentModel.Component
* System.Web.UI.WebControls.Style
* System.Web.UI.WebControls.TableItemStyle
* Telerik.Web.UI.TreeListTableItemStyle
* Telerik.Web.UI.TreeListPagerStyle

## Properties

###  AlwaysVisible `Boolean`

Gets or set a value indicating whether the Pager will be visible regardless of
            the number of items. (See the remarks)

#### Remarks
In order to display the TreeList pager regardless of the number of records returned
            and the page size, you should set this property to
            true. Its default value is false.

###  ChangePageSizeButtonToolTip `String`

The ToolTip that will be applied to the ChangePageSize  control.

###  ChangePageSizeComboBoxTableSummary `String`

The summary attribute that will be applied to the table which holds the ChangePageSize  control.

###  ChangePageSizeComboBoxToolTip `String`

The ToolTip that will be applied to the input element in the ChangePageSize  control.

###  ChangePageSizeLabelText `String`

Text that will appear before the dropdown for changing the page size.

###  ChangePageSizeLinkButtonText `String`

Text for the 'Change' button when Mode is Advanced.

###  ChangePageSizeTextBoxToolTip `String`

The ToolTip that will be applied to the ChangePageSize  control.

###  FirstPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'next' page button

###  GoToPageButtonToolTip `String`

The ToolTip that will be applied to the GoToPage input element.

###  GoToPageLabelText `String`

Text that will appear before current page number when Mode is Advanced.

###  GoToPageLinkButtonText `String`

Text for the 'Go' button when Mode is Advanced.

###  GoToPageTextBoxToolTip `String`

The ToolTip that will be applied to the GoToPage  control.

###  IsDefault `Boolean`

Gets a value indicating whether the default pager will be used, i.e. no
            customizations have been made.

###  IsDefault `Boolean`

Returns 'True' if none of the properties have been set

###  IsPagerOnBottom `Boolean`

Gets a value indicating whether the pager is displayed on the bottom of the
            treelist.

###  IsPagerOnTop `Boolean`

Gets a value indicating whether the pager is displayed on the top of the
            treelist.

###  LastPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'last' page button

###  Mode `TreeListPagerMode`

Gets or sets the mode of Telerik RadTreeList Pager. The mode defines what the pager
                will contain. This property accepts as values only members of the RadTreeListPagerMode Enumeration.

###  NextPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'next' page button

###  OwnerTreeList `RadTreeList`

Gets a reference to the owner RadTreeList object.

###  PageButtonCount `Int32`

Gets or sets the number of buttons that would be rendered if pager Mode is

#### Remarks
By default 10 buttons will be displayed. If the number of treelist pages is greater
            than 10, ellipsis will be displayed.

###  PageOfLabelText `String`

Text that will appear after the current page number and before count of all pages when Mode is Advanced.

###  PageSizeControlType `PagerDropDownControlType`

Gets or sets the type of the page size drop down control.

###  PageSliderDecreaseToolTip `String`

ToolTip that would appear if Mode is Slider for 'Decrease' button.

###  PageSliderDragToolTip `String`

ToolTip that would appear if Mode is Slider for 'Drag' button.

###  PageSliderIncreaseToolTip `String`

ToolTip that would appear if Mode is Slider for 'Increase' button.

###  PageSliderPagerLabel `String`

Text that will appear if Mode is Slider for current page.

###  Position `TreeListPagerPosition`

Gets or sets the Position of pager item(s).Accepts only values, members of the
                RadTreeListPagerPosition Enumeration.

###  PrevPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'prev' page button

## Methods

###  CopyFrom

Copies the style settings from a passed Style object. Before it is used for type specific settings
            a cast to TreeListPagerStyle is attempted.

#### Parameters

#### s `System.Web.UI.WebControls.Style`

A Style object containing the style settings which should be applied to the pager.

#### Returns

`System.Void` 

###  MergeWith

Merges the current style settings with those of a passed Style object. Before it is used for type specific settings
            a cast to TreeListPagerStyle is attempted.

#### Parameters

#### s `System.Web.UI.WebControls.Style`

A Style object containing the style settings which should be merged with those of the pager.

#### Returns

`System.Void` 

###  Reset

Resets all style settings in the pager item.

#### Returns

`System.Void` 

