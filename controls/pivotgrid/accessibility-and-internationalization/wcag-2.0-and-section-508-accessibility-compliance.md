---
title: WCAG 2.0 and Section 508 Accessibility Compliance
page_title: WCAG 2.0 and Section 508 Accessibility Compliance | UI for ASP.NET AJAX Documentation
description: WCAG 2.0 and Section 508 Accessibility Compliance
slug: pivotgrid/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance
tags: wcag,2.0,and,section,508,accessibility,compliance
published: True
position: 0
---

# WCAG 2.0 and Section 508 Accessibility Compliance





## 

RadPivotGrid for ASP.NET AJAX satisfies the requirements of "Section 508" for software accessibility, as well as thosefor level AA (in compliance with the W3C Web Accessibility Guidelines 2.0).

[This online example](http://demos.telerik.com/aspnet-ajax/pivotgrid/examples/generalfeatures/accessibility/defaultcs.aspx) demonstrates how you can make RadPivotGrid accessible by leveraging the settings for the differentcaption, tooltip and summary properties of the rendered HTML elements.

__RadPivotGrid.AccessibilitySettings__


|  __Property__  |  __Description__  |
| ------ | ------ |
| __RowHeaderTableCaption__ |Gets or sets the 'caption' attribute for the row header table.|
| __RowHeaderTableSummary__ |Gets or sets the 'summary' attribute for the row header table.|
| __DataTableCaption__ |Gets or sets the 'caption' attribute for the data table.|
| __DataTableSummary__ |Gets or sets the 'summary' attribute for the data table.|
| __ColumnHeaderTableCaption__ |Gets or sets the 'caption' attribute for the column header table.|
| __ColumnHeaderTableSummary__ |Gets or sets the 'summary' attribute for the column header table.|
| __OuterTableCaption__ |Gets or sets the 'caption' attribute for the outer table.|
| __OuterTableSummary__ |Gets or sets the 'summary' attribute for the outer table.|
| __WrapperTableCaption__ |Gets or sets the 'caption' attribute for the table which wraps the RadPivtoGrid control when the configuration panel is shown.|
| __WrapperTableSummary__ |Gets or sets the 'summary' attribute for the table which wraps the RadPivtoGrid control when the configuration panel is shown.|

__PivotGridPagerStyle__


|  __Property__  |  __Description__  |
| ------ | ------ |
| __GoToPageTextBoxToolTip__ |ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'GoToPage' textbox.|
| __ChangePageSizeTextBoxToolTips__ |ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'ChangePageSize' textbox.|
| __GoToPageButtonToolTip__ |ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'GoToPage' button.|
| __ChangePageSizeButtonToolTip__ |ToolTip that would appear if Mode is NextPrevNumericAndAdvanced for 'Change' button|
| __ChangePageSizeComboBoxTableSummary__ |Gets or sets the 'summary' attribute for the PageSizeComboBox control's table.|
| __ChangePageSizeComboBoxToolTip__ |ToolTip that would appear over the pager's RadComboBox input.|

__ConfigurationPanelSettings__


|  __Property__  |  __Description__  |
| ------ | ------ |
| __ShowHideCheckBoxToolTip__ |ToolTip that would appear over the fields' checkboxes.|

Covering this criterion is very important when you wouldlike to make your components accessible to people with disabilities.

The Section 508 standards are listed on the official government site:

[Section 508](http://www.section508.gov/)
