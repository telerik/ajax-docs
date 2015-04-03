---
title: Controlling Appearance
page_title: Controlling Appearance | UI for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: input/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance



A number of properties let you set the look and feel of the __RadInput__ controls:

* The __Skin__ property lets you specify a [skin]({%slug input/appearance-and-styling/skins%}) to set the overall look and feel of the input control.

* In addition to the skin, you can [set a variety of styles]({%slug input/appearance-and-styling/styles%}) that let the input control change its appearance depending on whether it is enabled or disabled, is under the mouse, has focus, contains an empty value, or contains an invalid value.

* The __Label__ property lets you [add a label]({%slug input/appearance-and-styling/adding-labels%}) to the input control.

* The __EmptyMessage__ property lets you [specify a string that appears when the user has not entered a value]({%slug input/appearance-and-styling/displaying-empty-values%}).

* The __ButtonsPosition__ property lets you specify the layout of any [buttons]({%slug input/getting-started/adding-buttons%}) associated with the input control.

* The __WrapperCssClass__ property specifies the CSS class(es) added to the wrapper element of the RadInput control.

* The __LabelCssClass__ property specifies the CSS class(es) added to the [label]({%slug input/appearance-and-styling/adding-labels%})	of the RadInput control.

* The __LabelWidth__ property specifies the width of the [label]({%slug input/appearance-and-styling/adding-labels%})	of the RadInput control. When [Single Input Rendering]({%slug input/single-input-rendering-mode%}) is enabled, the default value is 40%.

* The __Width__ property specifies the width of the wrapper of the control. When [Single Input Rendering]({%slug input/single-input-rendering-mode%}) is enabled, the default value is 160px.

In addition to the properties mentioned above, which apply to all types of __RadInput__ controls, each type of control has additional properties that affect its appearance.

## RadTextBox

On the __RadTextBox__ control, the __TextMode__ property specifies whether the text appears in a single line or multiple lines. The __Columns__, __Rows__, and __Wrap__ properties further customize the appearance of [multi-line text boxes]({%slug input/appearance-and-styling/multi-line-text-boxes%}).

## RadMaskedTextBox

__RadMaskedTextBox__ also supports the __TextMode__ property, so that you can create both single-line and multi-line text boxes.

__RadMaskedTextBox__ also uses the __Mask__, __Prompt__, __DisplayMask__, and __DisplayPrompt__ properties to customize the formatting of the value, based on the Mask that also restricts the allowable input. For details, see [Using RadmaskedTextBox]({%slug input/radmaskedtextbox/overview%}).

## RadNumericTextBox

On __RadNumericTextBox__, the __Type__, __Culture__, and __NumberFormat__ properties control how the numeric text box formats its value into a string representation when the control does not have focus. For details, see [Using RadNumericTextBox]({%slug input/radnumerictextbox/overview%}).

__RadNumericTextBox__ also lets you customize the appearance of the text box when its value is negative by setting the __NegativeStyle__ property.

## RadDateInput

On __RadDateInput__, the __DateFormat__ and __DisplayDateFormat__ properties control how the value is formatted into its string representation.


