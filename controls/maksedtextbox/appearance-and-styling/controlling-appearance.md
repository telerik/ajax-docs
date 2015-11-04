---
title: Controlling Appearance
page_title: Controlling Appearance | RadMaskedTextBox for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: radraskedtextbox/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance



A number of properties let you set the look and feel of the **RadInput** controls:

* The **Skin** property lets you specify a [skin]({%slug input/appearance-and-styling/skins%}) to set the overall look and feel of the input control.

* In addition to the skin, you can [set a variety of styles]({%slug input/appearance-and-styling/styles%}) that let the input control change its appearance depending on whether it is enabled or disabled, is under the mouse, has focus, contains an empty value, or contains an invalid value.

* The **Label** property lets you [add a label]({%slug input/appearance-and-styling/adding-labels%}) to the input control.

* The **EmptyMessage** property lets you [specify a string that appears when the user has not entered a value]({%slug input/appearance-and-styling/displaying-empty-values%}).

* The **ButtonsPosition** property lets you specify the layout of any [buttons]({%slug input/getting-started/adding-buttons%}) associated with the input control.

* The **WrapperCssClass** property specifies the CSS class(es) added to the wrapper element of the RadInput control.

* The **LabelCssClass** property specifies the CSS class(es) added to the [label]({%slug input/appearance-and-styling/adding-labels%})	of the RadInput control.

* The **LabelWidth** property specifies the width of the [label]({%slug input/appearance-and-styling/adding-labels%})	of the RadInput control. When [Single Input Rendering]({%slug input/single-input-rendering-mode%}) is enabled, the default value is 40%.

* The **Width** property specifies the width of the wrapper of the control. When [Single Input Rendering]({%slug input/single-input-rendering-mode%}) is enabled, the default value is 160px.

In addition to the properties mentioned above, which apply to all types of **RadInput** controls, each type of control has additional properties that affect its appearance.


## RadMaskedTextBox

**RadMaskedTextBox** also supports the **TextMode** property, so that you can create both single-line and multi-line text boxes.

**RadMaskedTextBox** also uses the **Mask**, **Prompt**, **DisplayMask**, and **DisplayPrompt** properties to customize the formatting of the value, based on the Mask that also restricts the allowable input. For details, see [Using RadmaskedTextBox]({%slug input/radmaskedtextbox/overview%}).
