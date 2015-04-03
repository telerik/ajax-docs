---
title: Integration With RadControls
page_title: Integration With RadControls | UI for ASP.NET AJAX Documentation
description: Integration With RadControls
slug: formdecorator/integration-with-radcontrols
tags: integration,with,radcontrols
published: True
position: 2
---

# Integration With RadControls



## Unaffected Telerik controls

RadAsyncUpload, RadUpload, RadAutoCompleteBox, RadBarcode, RadBinaryImage, RadButton, RadCalendar, RadChart, RadComboBox, RadDataPager, RadEditor, RadFileExplorer, RadGauge, RadHtmlChart, RadImageEditor, RadListBox, RadRating, RadSiteMap, RadSlider, RadSocialShare, RadTabStrip, RadTagCloud

## 

## Affected Telerik controls

>tip [More details on decorating Standard Controls]({%slug formdecorator/integration-with-standard-controls%})
>



|  __Control__  |  __Effect__  |
| ------ | ------ |
| __RadCaptcha__ |Decorated input|
| __RadColorPicker__ |Decorated input that displays the hexadecimal code of the hovered color|
| __RadDatePicker, RadTimePicker, RadMonthYearPicker__ |Their inputs cannot be decorated|
| __RadDock__ |Controls inside its ContentTemplate are decorated|
| __RadFilter__ |Checkbox from BoolField and Input from TextField are decorated. Input from NumericField and DateField cannot be decorated|
| __RadGrid__ |

* Controls inside ItemTemplate of the GridTemplateColumn are decorated

* Buttons inside GridButtonColumn: PushButton is decorated

* Inputs in the filter are decorated.|
| __RadInput__ |Can be decorated. Refer to "Styling RadInput" section below|
| __RadListView__ |Controls inside ItemTemplate are decorated|
| __RadMenu__ |Controls inside ItemTemplate are decorated|
| __RadNotification__ |Controls inside ContentTemplate are decorated|
| __RadOrgChart__ |Controls inside ItemTemplate are decorated|
| __RadPanelBar__ |Controls inside ItemTemplate are decorated|
| __RadPivotGrid__ |

* In Configuration Panel the Checkboxes are decorated

* In Filter WindowRadioButtons are decorated and Checkboxes are not decorated|
| __RadRibbonBar__ |Controls inside RibbonBarTemplateItem are decorated|
| __RadRotator__ |Controls inside ItemTemplate are decorated|
| __RadScheduler__ |The Checkboxes in the NewAppointment dialog are decorated|
| __RadSpell__ |Button is decorated|
| __RadSplitter__ |Controls inside RadPane are decorated|
| __RadToolBar__ |Controls inside ItemTemplate are decorated|
| __RadToolTip__ |Added Controls to RadToolTip as well as dynamically loaded and displayed Controls on demand are decorated|
| __RadTreeList__ |

* Checkboxes in TreeListSelectColumn and TreeListCheckBoxColumn are decorated

* Inputs by clicking on Add record/Edit buttons in TreeListEditCommandColumn are decorated

* Controls inside ItemTemplate of the TreeListTemplateColumn are decorated|
| __RadTreeView__ |Controls inside NodeTemplate are decorated|
| __RadWindow__ |Controls inside ContentTemplate are decorated|

## Styling RadInput


|  __Control__  |  __Effect__  |
| ------ | ------ |
| __RadNumericTextBox, RadMaskedTextBox, RadTextBox, RadDateInput__ |Controls are fully decorated when their Skin property is set to empty string (i.e.: __Skin=""__ ):

* Label (if set through the Label property) is decorated - color and font are changed.

* Input is decorated (rounded corners are added)When the control has its built in skin enabled (i.e. the Skin property is set to a valid string, not an empty one) only the label is decorated and no rounded corners are added.|
| __RadInputManager__ (TextBoxSetting, NumericTextBoxSetting, DateInputSetting, RegExpTextBoxSetting)|The proper decoration of the controls requires the Skin property of RadInputManager to be set to empty string(e.g. __Skin=""__ ):Inputs are decorated|
