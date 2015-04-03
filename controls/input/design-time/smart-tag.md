---
title: Smart Tag
page_title: Smart Tag | UI for ASP.NET AJAX Documentation
description: Smart Tag
slug: input/design-time/smart-tag
tags: smart,tag
published: True
position: 0
---

# Smart Tag



The __RadInput__ Smart Tag allows easy access to frequently needed tasks. You can display the __Smart Tag__ by right clicking on a __RadInput__ control in the design window, and choosing __Show Smart Tag__ from its context menu.

## RadTextBox Smart Tag

The __RadTextBox__ Smart Tag lets you perform the following:

RadTextBox Tasks

* __Text__ lets you specify the text that appears in the __RadTextBox__ control.This control sets the __Text__ property.

* __Empty Message__ lets you specify the text that appears in the __RadTextBox__ control when the value of the __Text__ property is an empty string. This control sets the __EmptyMessage__ property.

Ajax Resources

* __Add RadAjaxManager...__ adds a RadAjaxManager component to your Web page, and displays the __RadAjax Property Builder__ where you can configure it.

* __Replace ScriptManager with RadScriptManager__ replaces the default __ScriptManager__ component that is added for AJAX-enabled Web sites with __RadScriptManager__.

* Add __RadStyleSheetManager__ adds a __RadStyleSheetManager__ to your Web page.

Skin

The __Skin__ drop-down lets you select from a list of available [skins]({%slug input/appearance-and-styling/skins%}) to customize the look of your __RadTextBox__ control.

Learning Center

Links navigate you directly to __RadInput__ examples, help, or code library. You can also search the Telerik web site for a given string.![Smart Tag](images/RadTextBoxSmartTag.png)

## RadMaskedTextBox

The __RadMaskedTextBox__ Smart Tag contains the same __Ajax Resources__, __Skin__, and __Learning Center__ sections as the other __RadInput__ controls. In addition, the __RadMaskedTextBox__ Smart Tag lets you do the following :

RadMaskedTextBox Tasks

* __Set Mask__ brings up the [Input Mask Dialog]({%slug input/design-time/input-mask-dialog%}),where you can specify an input mask that controls what input the user can enter into the masked text box.The input mask you specify in this dialog is assigned to the __Mask__ property.

* __Edit Mask Part__ shows the [MaskPart Collection Editor ]({%slug input/design-time/maskpart-collection-editor%}),where you can create and modify the masks that are the values of the __RadMaskedTextBox__.![Smart Tag](images/RadMaskedTextBoxSmartTag.png)

## RadNumericTextBox

The __RadNumericTextBox__ Smart Tag contains the same __Ajax Resources__, __Skin__, and __Learning Center__ sections as the other __RadInput__ controls. In addition, the __RadNumericTextBox__ Smart Tag lets you do the following :

RadNumericTextBox Tasks

* __NumericType__ lets you set the __Type__ property by selecting a type from the drop-down list. The __Type__ property governs the basic formatting of numeric values, according to the settings of the current __Culture__.__Numeric Type__ can be set to "Number", "Currency", or "Percent".

* __Value__ lets you set the __Value__ property to a numeric value.

* __Minimum Value__ lets you set the __MinValue__ property to a numeric value.

* __Maximum Value__ lets you set the __MaxValue__ property to a numeric value.![Smart tag](images/RadNumericTextBoxSmartTag.png)

## RadDateInput

The __RadDateInput__Smart Tag contains the same __Ajax Resources__, __Skin__, and __Learning Center__ sections as the other __RadInput__ controls. In addition, the __RadDateInput__Smart Tag lets you do the following :

RadDateInput Tasks

* __Set Display Date Format__ brings up the [Date Format Dialog]({%slug input/design-time/date-format-dialog%}), where you can assign a value to the __DisplayDateFormat__ property.The __DisplayDateFormat__property governs the format of the __SelectedDate__ value when the __RadDateInput__ control does not have focus.

* __Set Date Format__brings up the [Date Format Dialog]({%slug input/design-time/date-format-dialog%}), where you can assign a value to the __DateFormat__ property.The __DateFormat__property governs the format of the __SelectedDate__ value when the __RadDateInput__ control has focus (when the user can edit its value).

* __MinDate__ specifies the minimal date which the user will be allowed to enter

* __MaxDate__ specifies maximal date which the user will be allowed to enter![Smart tag](images/RadDateInputSmartTag.png)
