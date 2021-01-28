---
title: WCAG 2.0 and Section 508 Accessibility Compliance
page_title: WCAG 2.0 and Section 508 Accessibility Compliance - RadPivotGrid
description: Check our Web Forms article about WCAG 2.0 and Section 508 Accessibility Compliance.
slug: pivotgrid/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance
tags: wcag,2.0,and,section,508,accessibility,compliance
published: True
position: 0
---

# WCAG 2.0 and Section 508 Accessibility Compliance





## 

RadPivotGrid for ASP.NET AJAX satisfies the requirements of "Section 508" for software accessibility, as well as thosefor level AA (in compliance with the W3C Web Accessibility Guidelines 2.0).

[This online example](https://demos.telerik.com/aspnet-ajax/pivotgrid/examples/generalfeatures/accessibility/defaultcs.aspx) demonstrates how you can make RadPivotGrid accessible by leveraging the settings for the differentcaption, tooltip and summary properties of the rendered HTML elements.

**RadPivotGrid.AccessibilitySettings**


|  **Property**  |  **Description**  |
| ------ | ------ |
| **RowHeaderTableCaption** |Gets or sets the 'caption' attribute for the row header table.|
| **RowHeaderTableSummary** |Gets or sets the 'summary' attribute for the row header table.|
| **DataTableCaption** |Gets or sets the 'caption' attribute for the data table.|
| **DataTableSummary** |Gets or sets the 'summary' attribute for the data table.|
| **ColumnHeaderTableCaption** |Gets or sets the 'caption' attribute for the column header table.|
| **ColumnHeaderTableSummary** |Gets or sets the 'summary' attribute for the column header table.|
| **OuterTableCaption** |Gets or sets the 'caption' attribute for the outer table.|
| **OuterTableSummary** |Gets or sets the 'summary' attribute for the outer table.|
| **WrapperTableCaption** |Gets or sets the 'caption' attribute for the table which wraps the RadPivtoGrid control when the configuration panel is shown.|
| **WrapperTableSummary** |Gets or sets the 'summary' attribute for the table which wraps the RadPivtoGrid control when the configuration panel is shown.|

**PivotGridPagerStyle**


|  **Property**  |  **Description**  |
| ------ | ------ |
| **GoToPageTextBoxToolTip** |ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'GoToPage' textbox.|
| **ChangePageSizeTextBoxToolTips** |ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'ChangePageSize' textbox.|
| **GoToPageButtonToolTip** |ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'GoToPage' button.|
| **ChangePageSizeButtonToolTip** |ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'Change' button|
| **ChangePageSizeComboBoxTableSummary** |Gets or sets the 'summary' attribute for the PageSizeComboBox control's table.|
| **ChangePageSizeComboBoxToolTip** |ToolTip that would appear over the pager's RadComboBox input.|

**ConfigurationPanelSettings**


|  **Property**  |  **Description**  |
| ------ | ------ |
| **ShowHideCheckBoxToolTip** |ToolTip that would appear over the fields' checkboxes.|

Covering this criterion is very important when you wouldlike to make your components accessible to people with disabilities.

The Section 508 standards are listed on the official government site:

[Section 508](http://www.section508.gov/)
