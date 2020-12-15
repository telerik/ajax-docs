---
title: Properties
page_title: Server-side Programming Overview | RadTextBox for ASP.NET AJAX Documentation
description: Overview
slug: radtextbox/server-side-programming/properties
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

For a detailed list with the server-side properties and methods of the control, see the [Server-Side API of the RadTextBox class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadTextBox).

While the four RadInput controls (**RadTextBox**, **RadMaskedTextBox**, **RadDateInput**, and **RadNumericTextBox**) each have their own unique properties for configuring the control for its associated type of values, most of the properties of these controls are common to all four types.

## Properties common to all four types

* The **ReadOnly** property specifies whether the control is used for display purposes only, or whether the user can use the control to enter values.

* The **ToolTip** property is a string that appears in a tooltip when the user hovers the mouse over the input control.

* The **SelectionOnFocus** property specifies how the input control behaves when it first [gets input focus]({%slug radtextbox/features/receiving-focus%}).

* The **Label** property lets you [add a label]({%slug radtextbox/appearance-and-styling/adding-labels%}) to the input control.

* The **EmptyMessage** property lets you specify the appearance of the input control when the user has not entered a value.

* The **ShowButton**, **ButtonsPosition**, and **ButtonCssClass** properties let you add and configure buttons on the input control.

* A variety of [style properties]({%slug radtextbox/appearance-and-styling/styles%}) let you customize the appearance of the input control in different states.

* The **Skin** property lets you specify a [skin]({%slug radtextbox/appearance-and-styling/skins%}) to set the look and feel of the input control.

* The **AutoPostBack**, **ValidationGroup** and **CausesValidation** properties let you cause a postback that [triggers validation]({%slug radtextbox/features/validation%}), validating the values of other controls on the Web page.

* The **InvalidStyleDuration** property is used to determine how long (in milliseconds) the control will display its invalid style when incorrect data is entered. Must be a positive integer.

* The **Display** property is used to specify if the control will be displayed on the client. When set to false, the control is rendered on the client as invisible and can be shown using the set_display() client-side property.

* The **WrapperCssClass** property specifies the CSS class(es) added to the wrapper element of the RadInput control.

* The **LabelCssClass** property specifies the CSS class(es) added to the [label]({%slug radtextbox/appearance-and-styling/adding-labels%}) of the RadInput control.

* The **LabelWidth** property specifies the width of the label of the RadInput control.

* The **DisplayText** property allows you to set the display value from the Server to a different value the actual value.Similar to the empty message, but shown even if the input is not empty. This text will be cleared once the user changes the input value.

* The **Invalid** property makrs the input as invalid and applies the **.riError** class to the input. Thus the user is indicated that the enteredvalue is not correct. This propery is not persited in the ViewState. This is done in order to distinguish the client-side and the server-sidevalidation. Additionally, the client-side property value does not affect the server-side property value, but if you set the server-side property to true, theclient-side property will be set to true also.

* The **ValidationText** is a read-only property which returns the value used to validate the entered data.For the four types it returns respectively:

* **RadTextBox** - the text itself

* **RadMaskedTextBox** - **TextWithLiterals** value ( the text the user entered, plus any literal characters in the mask, but no prompt characters.)

* **RadNumericTextBox** - the number with the specific decimal mark corresponding to currently active culture

* **RadDateInput** - the date in universal format ( "yyyy-MM-dd-HH-mm-ss" )

>note The four different **RadInput** controls use different properties to represent their values. See [Getting and Setting Values]({%slug radtextbox/features/getting-and-setting-values%}) for details.
>


## Properties common to RadTextBox and RadMaskedTextBox

* The **TextMode** property specifies how the control displays its value. It can be set to any of the following values:

* **Telerik.Web.UI.InputMode.SingleLine**: When the **TextMode** property is **SingleLine**, the value of the text box appears in a single line of text. The **MaxLength** property determines the maximum length of the text the user can enter into the text box.

* **Telerik.Web.UI.InputMode.MultiLine**: When the **TextMode** property is **MultiLine**, the text box displays its value using multiple lines. The **Columns** property determines the width of each line in characters, and the **Rows** property determines the number of lines the text box displays.If the **Wrap** property is **True**, the value in the text box wraps over multiple lines, and a vertical scroll bar appears if the value exceeds the limits set by the **Rows** and **Columns** properties. If the **Wrap** property is **False**, the value does not wrap, and a horizontal scroll bar appears if the value exceeds the limit set by the **Columns** property.

* **Telerik.Web.UI.InputMode.Password**: When the **TextMode** property is **Password**, the text box behaves like a single-line text box, except that instead of displaying its text value, it displays a row of dots.

## Properties common to RadNumericTextBox and RadDateInput

* The **IncrementSettings** property specifies how the control changes its value in response to the arrow keys, mouse wheel, and (in the case of **RadNumericTextBox**) spin buttons. **IncrementSettings** is a composite property with the following sub-properties:

* **InterceptArrowKeys**: When **InterceptArrowKeys** is **True**, the user can use the arrow keys to change the value of the control.See [Keyboard Support]({%slug radtextbox/accessibility-and-internationalization/keyboard-support%}) for details.

* **InterceptMouseWheel**: When **InterceptMouseWheel** is **True**, the user can use the mouse wheel to change the value in the control. See [Mouse Wheel Support]({%slug radtextbox/accessibility-and-internationalization/mouse-wheel-support%}) for details.

* **Step**: Step specifies the magnitude by which the value in the control changes with each click of an arrow key, movement of the mouse wheel, or click of the spin button.

# See Also

 * [RadTextBox Overview]({%slug radtextbox/overview%})

