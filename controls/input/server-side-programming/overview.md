---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: input/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



While the four RadInput controls (__RadTextBox__, __RadMaskedTextBox__, __RadDateInput__, and __RadNumericTextBox__) each have their own unique properties for configuring the control for its associated type of values, most of the properties of these controls are common to all four types.

## Properties common to all four types

* The __ReadOnly__ property specifies whether the control is used for display purposes only, or whether the user can use the control to enter values.

* The __ToolTip__ property is a string that appears in a tooltip when the user hovers the mouse over the input control.

* The __SelectionOnFocus__ property specifies how the input control behaves when it first [gets input focus]({%slug input/getting-started/receiving-focus%}).

* The __Label__ property lets you [add a label]({%slug input/appearance-and-styling/adding-labels%}) to the input control.

* The __EmptyMessage__ property lets you [specify the appearance of the input control when the user has not entered a value]({%slug input/appearance-and-styling/displaying-empty-values%}).

* The __ShowButton__, __ButtonsPosition__, and __ButtonCssClass__ properties let you [add and configure buttons]({%slug input/getting-started/adding-buttons%}) on the input control.

* A variety of [style properties]({%slug input/appearance-and-styling/styles%}) let you customize the appearance of the input control in different states.

* The __Skin__ property lets you specify a [skin]({%slug input/appearance-and-styling/skins%}) to set the look and feel of the input control.

* The __AutoPostBack__, __ValidationGroup__ and __CausesValidation__ properties let you cause a postback that [triggers validation]({%slug input/how-to/validation%}), validating the values of other controls on the Web page.

* The __InvalidStyleDuration__ property is used to determine how long (in milliseconds) the control will display its invalid style when incorrect data is entered. Must be a positive integer.

* The __Display__ property is used to specify if the control will be displayed on the client. When set to false, the control is rendered on the client as invisible and can be shown using the set_display() client-side property.

* The __WrapperCssClass__ property specifies the CSS class(es) added to the wrapper element of the RadInput control.

* The __LabelCssClass__ property specifies the CSS class(es) added to the [label]({%slug input/appearance-and-styling/adding-labels%})of the RadInput control.

* The __LabelWidth__ property specifies the width of the [label]({%slug input/appearance-and-styling/adding-labels%})of the RadInput control. When [Single Input Rendering]({%slug input/single-input-rendering-mode%}) is enabled, the default value is 40%.

* The __DisplayText__ property allows you to set the display value from the Server to a different value the actual value.Similar to the empty message, but shown even if the input is not empty. This text will be cleared once the user changes the input value.

* The __Invalid__ property makrs the input as invalid and applies the __.riError__ class to the input. Thus the user is indicated that the enteredvalue is not correct. This propery is not persited in the ViewState. This is done in order to distinguish the client-side and the server-sidevalidation. Additionally, the client-side property value does not affect the server-side property value, but if you set the server-side property to true, theclient-side property will be set to true also.

* The __ValidationText__ is a read-only property which returns the value used to validate the entered data.For the four types it returns respectively:

* __RadTextBox__ - the text itself

* __RadMaskedTextBox__ - __TextWithLiterals__ value ( the text the user entered, plus any literal characters in the mask, but no prompt characters. )

* __RadNumericTextBox__ - the number with the specific decimal mark corresponding to currently active culture

* __RadDateInput__ - the date in universal format ( "yyyy-MM-dd-HH-mm-ss" )

>note The four different __RadInput__ controls use different properties to represent their values. See[Getting and Setting Values]({%slug input/getting-started/getting-and-setting-values%})for details.
>


## Properties common to RadTextBox and RadMaskedTextBox

* The __TextMode__ property specifies how the control displays its value. It can be set to any of the following values:

* __Telerik.Web.UI.InputMode.SingleLine__: When the __TextMode__ property is __SingleLine__, the value of the text box appears in a single line of text. The __MaxLength__ property determines the maximum length of the text the user can enter into the text box.

* __Telerik.Web.UI.InputMode.MultiLine__: When the __TextMode__ property is __MultiLine__, the text box displays its value using multiple lines. The __Columns__ property determines the width of each line in characters, and the __Rows__ property determines the number of lines the text box displays.If the __Wrap__ property is __True__, the value in the text box wraps over multiple lines, and a vertical scroll bar appears if the value exceeds the limits set by the __Rows__ and __Columns__ properties. If the __Wrap__ property is __False__, the value does not wrap, and a horizontal scroll bar appears if the value exceeds the limit set by the __Columns__ property.

* __Telerik.Web.UI.InputMode.Password__: When the __TextMode__ property is __Password__, the text box behaves like a single-line text box, except that instead of displaying its text value, it displays a row of dots.

## Properties common to RadNumericTextBox and RadDateInput

* The __IncrementSettings__ property specifies how the control changes its value in response to the arrow keys, mouse wheel, and (in the case of __RadNumericTextBox__) spin buttons. __IncrementSettings__ is a composite property with the following sub-properties:

* __InterceptArrowKeys__: When __InterceptArrowKeys__ is __True__, the user can use the arrow keys to change the value of the control.See [Keyboard Support]({%slug input/accessibility-and-internationalization/keyboard-support%}) for details.

* __InterceptMouseWheel__: When __InterceptMouseWheel__ is __True__, the user can use the mouse wheel to change the value in the control. See [Mouse Wheel Support]({%slug input/accessibility-and-internationalization/mouse-wheel-support%}) for details.

* __Step__: Step specifies the magnitude by which the value in the control changes with each click of an arrow key, movement of the mouse wheel, or click of the spin button.

# See Also

 * [Overview]({%slug input/radtextbox/overview%})

 * [Overview]({%slug input/radmaskedtextbox/overview%})

 * [Overview]({%slug input/radnumerictextbox/overview%})

 * [Overview]({%slug input/raddateinput/overview%})
