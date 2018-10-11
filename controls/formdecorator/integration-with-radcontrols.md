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
| **RadInput** |Can be decorated. Refer to [Styling RadInput](#styling-radinput) section below|
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

The various Telerik input controls fetch their own styling through the skinning mechanism all controls from the UI for ASP.NET AJAX suite use. Thus, by default, RadFormDecorator does not style them.

There is a way, however, to use the Form Decorator stying for the [RadInput](#radinput) and [RadInputManager](#radinputmanager) controls. Below you can find the effects and examples of how to apply them.

### RadInput

This section applies to the **RadNumericTextBox**, **RadMaskedTextBox**, **RadTextBox** and **RadDateInput** controls. They can be fully decorated, or partially decorated, depending on the effect you seek and how you configure them.

#### Partial Decoration

If you have a `Skin` set for the Telerik inputs, RadFormDecorator will not modify the inputs appearance. Rounded corners and coloring will not be added to the inputs and only the labels may inherit the [generic styling]({%slug formdecorator/integration-with-standard-controls%}) for a `<label>` that the form decorator provides.

#### Full Decoration

These controls can be fully decorated when their `Skin` property is set to empty string (i.e.: `Skin=""` ). This includes: 
* the label (if set through the `Label` property) - color and font are changed
* the actual input- rounded corners and coloring are added

It is important to note that when the skin of a control is disabled, left on its own, its appearance will not be correct. For example, date pickers will lose the icon that opens the popup, or their dimensions may change.

To decorate RadInput controls fully, you need to:

1. ensure the `RenderMode` of the inpuit and the RadFormDecorator is the same

1. set the Skin property of the input to an empty string (`Skin=""`)

1. set the `CssClass` property of the input to the RadFormDecorator classes depending on the `RenderMode`:
    * for the `Lightweight` RenderMode use `CssClass="rfdTextInput"`
        
        **ASP.NET**

            <telerik:RadFormDecorator runat="server" ID="RadFormDecorator1" DecoratedControls="All"
                RenderMode="Lightweight" Skin="Black" />
            <telerik:RadTextBox runat="server" ID="RadTextBox1" Label="Label for generic textbox"
                Skin="" RenderMode="Lightweight" CssClass="rfdTextInput">
            </telerik:RadTextBox>
            <telerik:RadNumericTextBox runat="server" ID="RadNumericTextBox1" Label="Label for numeric textbox"
                Skin="" RenderMode="Lightweight" CssClass="rfdTextInput">
            </telerik:RadNumericTextBox>
            <telerik:RadMaskedTextBox runat="server" ID="RadMaskedTextBox1" Label="Label for masked textbox"
                Skin="" RenderMode="Lightweight" CssClass="rfdTextInput"></telerik:RadMaskedTextBox>
            <telerik:RadDatePicker runat="server" ID="RadDatePicker1"
                Skin="" RenderMode="Lightweight">
                <DateInput CssClass="rfdTextInput" Label="Label for date input"></DateInput>
            </telerik:RadDatePicker>

    * for the `Classic` RenderMode use `CssClass="rfdRoundedCorners rfdDecorated"`

        **ASP.NET**

            <telerik:RadFormDecorator runat="server" ID="RadFormDecorator1" DecoratedControls="All"
                RenderMode="Classic" Skin="Black" />
            <telerik:RadTextBox runat="server" ID="RadTextBox1" Label="Label for generic textbox"
                Skin="" RenderMode="Classic" CssClass="rfdRoundedCorners rfdDecorated">
            </telerik:RadTextBox>
            <telerik:RadNumericTextBox runat="server" ID="RadNumericTextBox1" Label="Label for numeric textbox"
                Skin="" RenderMode="Classic" CssClass="rfdRoundedCorners rfdDecorated">
            </telerik:RadNumericTextBox>
            <telerik:RadMaskedTextBox runat="server" ID="RadMaskedTextBox1" Label="Label for masked textbox"
                Skin="" RenderMode="Classic" CssClass="rfdRoundedCorners rfdDecorated"></telerik:RadMaskedTextBox>
            <telerik:RadDatePicker runat="server" ID="RadDatePicker1" Skin="" RenderMode="Classic">
                <DateInput CssClass="rfdRoundedCorners rfdDecorated" Label="Label for date input"></DateInput>
            </telerik:RadDatePicker>

    >tip For the Date/Time pickers, you must set the class to the `DateInput` and not on the main control.

>tip The form decorator has different default widhts for the inputs in the different render modes. For example, if you are using the Lightweight RenderMode, decorated input widths default to `192px` and so if the RadInput width is smaller than that you may have appearance issues.

### RadInputManager

To decorate the inputs that are targetted by RadInputManager's settings (TextBoxSetting, NumericTextBoxSetting, DateInputSetting, RegExpTextBoxSetting), you must set `Skin` property of the input manager to an empty string (`Skin=""`).

Then, the form decorator can add rounded corners and coloring to the inputs as if they were [standard input elements]({%slug formdecorator/integration-with-standard-controls%}).

