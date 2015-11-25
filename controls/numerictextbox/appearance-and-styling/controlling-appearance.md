---
title: Controlling Appearance
page_title: Controlling Appearance | RadInput for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: numerictextbox/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance



A number of properties let you set the look and feel of the **RadInput** controls:

* The **Skin** property lets you specify a [skin]({%slug numerictextbox/appearance-and-styling/skins%}) to set the overall look and feel of the input control.

* In addition to the skin, you can [set a variety of styles]({%slug numerictextbox/appearance-and-styling/styles%}) that let the input control change its appearance depending on whether it is enabled or disabled, is under the mouse, has focus, contains an empty value, or contains an invalid value.

* The **Label** property lets you add a label to the input control.

* The **EmptyMessage** property lets you specify a string that appears when the user has not entered a value.

* The **ButtonsPosition** property lets you specify the layout of any buttons associated with the input control.

* The **WrapperCssClass** property specifies the CSS class(es) added to the wrapper element of the RadInput control.

* The **LabelCssClass** property specifies the CSS class(es) added to the label of the RadInput control.

* The **LabelWidth** property specifies the width of the label	of the RadInput control.

* The **Width** property specifies the width of the wrapper of the control.

In addition to the properties mentioned above, which apply to all types of **RadInput** controls, each type of control has additional properties that affect its appearance.


## RadNumericTextBox specific properties

On **RadNumericTextBox**, the **Type**, **Culture**, and **NumberFormat** properties control how the numeric text box formats its value into a string representation when the control does not have focus. For details, see [Using RadNumericTextBox]({%slug numerictextbox/overview%}).

**RadNumericTextBox** also lets you customize the appearance of the text box when its value is negative by setting the **NegativeStyle** property.

