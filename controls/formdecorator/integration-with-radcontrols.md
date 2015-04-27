---
title: Integration With RadControls
page_title: Integration With RadControls | RadFormDecorator for ASP.NET AJAX Documentation
description: Integration With RadControls
slug: formdecorator/integration-with-radcontrols
tags: integration,with,radcontrols
published: True
position: 2
---

# Integration With RadControls

## Unaffected Telerik controls

RadAsyncUpload, RadUpload, RadAutoCompleteBox, RadBarcode, RadBinaryImage, RadButton, RadCalendar, RadChart, RadComboBox, RadDataPager, RadEditor, RadFileExplorer, RadGauge, RadHtmlChart, RadImageEditor, RadListBox, RadRating, RadSiteMap, RadSlider, RadSocialShare, RadTabStrip, RadTagCloud

## Affected Telerik controls

>tip [More details on decorating Standard Controls]({%slug formdecorator/integration-with-standard-controls%})

|  **Control**  |  **Effect**  |
| ------ | ------ |
| **RadCaptcha** |Decorated input|
| **RadColorPicker** |Decorated input that displays the hexadecimal code of the hovered color|
| **RadDatePicker, RadTimePicker, RadMonthYearPicker** |Their inputs cannot be decorated|
| **RadDock** |Controls inside its ContentTemplate are decorated|
| **RadFilter** |Checkbox from BoolField and Input from TextField are decorated. Input from NumericField and DateField cannot be decorated|
| **RadGrid** | Controls inside ItemTemplate of the GridTemplateColumn are decorated; Buttons inside GridButtonColumn: PushButton is decorated; Inputs in the filter are decorated.|
| **RadInput** |Can be decorated. Refer to "Styling RadInput" section below|
| **RadListView** |Controls inside ItemTemplate are decorated|
| **RadMenu** |Controls inside ItemTemplate are decorated|
| **RadNotification** |Controls inside ContentTemplate are decorated|
| **RadOrgChart** |Controls inside ItemTemplate are decorated|
| **RadPanelBar** |Controls inside ItemTemplate are decorated|
| **RadPivotGrid** | In Configuration Panel the Checkboxes are decorated; In Filter WindowRadioButtons are decorated and Checkboxes are not decorated|
| **RadRibbonBar** |Controls inside RibbonBarTemplateItem are decorated|
| **RadRotator** |Controls inside ItemTemplate are decorated|
| **RadScheduler** |The Checkboxes in the NewAppointment dialog are decorated|
| **RadSpell** |Button is decorated|
| **RadSplitter** |Controls inside RadPane are decorated|
| **RadToolBar** |Controls inside ItemTemplate are decorated|
| **RadToolTip** |Added Controls to RadToolTip as well as dynamically loaded and displayed Controls on demand are decorated|
| **RadTreeList** | Checkboxes in TreeListSelectColumn and TreeListCheckBoxColumn are decorated; Inputs by clicking on Add record/Edit buttons in TreeListEditCommandColumn are decorated; Controls inside ItemTemplate of the TreeListTemplateColumn are decorated|
| **RadTreeView** |Controls inside NodeTemplate are decorated|
| **RadWindow** |Controls inside ContentTemplate are decorated|

## Styling RadInput

|  **Control**  |  **Effect**  |
| ------ | ------ |
| **RadNumericTextBox, RadMaskedTextBox, RadTextBox, RadDateInput** |Controls are fully decorated when their Skin property is set to empty string (i.e.: **Skin=""** ): 1) Label (if set through the Label property) is decorated - color and font are changed. 2) Input is decorated (rounded corners are added). When the control has its built in skin enabled (i.e. the Skin property is set to a valid string, not an empty one) only the label is decorated and no rounded corners are added.|
| **RadInputManager** (TextBoxSetting, NumericTextBoxSetting, DateInputSetting, RegExpTextBoxSetting)|The proper decoration of the controls requires the Skin property of RadInputManager to be set to empty string(e.g. **Skin=""** ):Inputs are decorated|
