---
title: Styles
page_title: Styles | RadTimePicker for ASP.NET AJAX Documentation
description: Styles
slug: timepicker/appearance-and-styling/styles
tags: styles
published: True
position: 1
---

# Styles



**RadTimePicker** control comes with a set of predefined styles, which are specified by the styles in the current skin CSS classes. If the [Skin]({%slug timepicker/appearance-and-styling/skins%}) property is not set to an empty string, you can use a variety of style properties to further customize the appearance of the control.

Setting these properties will copy any non-blank elements of the specified style to the specific element of the rendered control, overwriting any existing style elements defined by the used skin.

>caution 
Setting a style property does not always affect the appearance of a control, if the skin has a setting that applies to a more specific element.
>



## RadTimeView Styles

The following table lists the styles that you can assign to the embedded **RadTimeView** control that acts as a popup to **RadTimePicker**:


| Property | Default CSS Class | Description |
| ------ | ------ | ------ |
|TimeStyle||The style for the selectable time values.|
|AlternatingTimeStyle||The style for every other selectable time value.|
|TimeOverStyle|rcHover|The style that is applied when the mouse hovers over a time value.|
|HeaderStyle|rcHeader|The style for the header region.|
|FooterStyle|rcFooter|The style for the footer region.|

## RadInput Styles

The following table lists the styles that you can assign to the embedded **RadInput** control of **RadTimePicker**:


| Property | Default CSS class | Description |
| ------ | ------ | ------ |
|EnabledStyle|riEnabled|The style for the enabled input control.|
|DisabledStyle|riDisabled|The style that is applied for the disabled input control.|
|EmptyMessageStyle|riEmpty|The style when the value is not set and the input control does not have focus.|
|FocusedStyle|riFocused|The style when the input control has focus.|
|HoveredStyle|riHover|The style when the mouse hovers over the input control.|
|InvalidStyle|riError|The style when the value of the input control is invalid.|

>note 
The CSS class definitions for the embedded **RadInput** control are found in the Input CSS skin file rather than the Calendar CSS file.
>


