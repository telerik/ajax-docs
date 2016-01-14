---
title: Telerik.Web.UI.PivotGridPagerStyle
page_title: Telerik.Web.UI.PivotGridPagerStyle
description: Telerik.Web.UI.PivotGridPagerStyle
---

# Telerik.Web.UI.PivotGridPagerStyle

RadPivotGrid use instance of this class to set style of thir PagerItem-s when rendering

## Inheritance Hierarchy

* System.Object
* System.MarshalByRefObject
* System.ComponentModel.Component
* System.Web.UI.WebControls.Style
* System.Web.UI.WebControls.TableItemStyle
* Telerik.Web.UI.PivotGridTableItemStyle
* Telerik.Web.UI.PivotGridPagerStyle

## Properties

###  AlwaysVisible `Boolean`

Gets or set a value indicating whether the Pager will be visible regardless of
            the number of items. (See the remarks)

#### Remarks
In order to display the PivotGrid pager regardless of the number of records returned
            and the page size, you should set this property to
            true. Its default value is false.

###  ChangePageSizeButtonToolTip `String`

ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'Change' button

###  ChangePageSizeComboBoxTableSummary `String`

Gets or sets the 'summary' attribute for the PageSizeComboBox control's table.

#### Remarks
This attribute provides a summary of the table's purpose and structure for user
            agents rendering to non-visual media such as speech and Braille. This property is a
            part of Telerik RadPivotGrid accessibility features.

###  ChangePageSizeComboBoxToolTip `String`

ToolTip that would appear over the pager's RadComboBox input

###  ChangePageSizeLabelText `String`

Text that will appear before the dropdown for changing the page size.

###  ChangePageSizeLinkButtonText `String`

Text for the 'Change' button when Mode is Advanced.

###  ChangePageSizeTextBoxToolTip `String`

ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'ChangePageSize' textbox

###  FirstPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'next' page button

###  GoToPageButtonToolTip `String`

ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'GoToPage' button

###  GoToPageLabelText `String`

Text that will appear before current page number when Mode is Advanced.

###  GoToPageLinkButtonText `String`

Text for the 'Go' button when Mode is Advanced.

###  GoToPageTextBoxToolTip `String`

ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'GoToPage' textbox

###  IsDefault `Boolean`

Gets a value indicating whether the default pager will be used, i.e. no
            customizations have been made.

###  IsDefault `Boolean`

Returns 'True' if none of the properties have been set

###  IsPagerOnBottom `Boolean`

Gets a value indicating whether the pager is displayed on the bottom of the
            pivotgrid.

###  IsPagerOnTop `Boolean`

Gets a value indicating whether the pager is displayed on the top of the
            pivotgrid.

###  LastPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'last' page button

###  Mode `PivotGridPagerMode`

Gets or sets the mode of Telerik PivotGrid Pager. The mode defines what the pager
                will contain. This property accepts as values only members of the PivotGridPagerMode Enumeration.

###  NextPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'next' page button

###  PageButtonCount `Int32`

Gets or sets the number of buttons that would be rendered if pager Mode is

#### Remarks
By default 10 buttons will be displayed. If the number of pivotgrid pages is greater
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

###  Position `PivotGridPagerPosition`

Gets or sets the Position of pager item(s).Accepts only values, members of the
                PivotGridPagerPosition Enumeration.

###  PrevPageToolTip `String`

ToolTip that would appear if Mode is PrevNext for 'prev' page button

