---
title: Receiving Focus
page_title: Receiving Focus | UI for ASP.NET AJAX Documentation
description: Receiving Focus
slug: input/getting-started/receiving-focus
tags: receiving,focus
published: True
position: 5
---

# Receiving Focus



## 

How a __RadInput__ control behaves when it receives focus can be controlled by setting the __SelectionOnFocus__ property. It can be set to any of the following values:

* __Telerik.Web.UI.SelectionOnFocus.CaretToBeginning__: When the __SelectionOnFocus__ property is __CaretToBeginning__, the input caret appears at the beginning of the input control's value when it first gets focus. Text the user types is inserted at the beginning of the control's current value.

* __Telerik.Web.UI.SelectionOnFocus.CaretToEnd__: When the __SelectionOnFocus__ property is __CaretToEnd__, the input caret appears at the end of the input control's value when it first gets focus. Text the user types is appended to the control's current value.

* __Telerik.Web.UI.SelectionOnFocus.SelectAll__: When the __SelectionOnFocus__ property is __SelectAll__, the entire value of the input control is selected when it first gets focus. Text the user types replaces the control's current value.

* __Telerik.Web.UI.SelectionOnFocus.None__: When the __SelectionOnFocus__ property is __None__ (the default value), the browser determines the caret placement and selection when the control first gets focus.

All four __RadInput__ controls support the __SelectionOnFocus__ property. In addition, two of the __RadInput__ controls, __RadDateInput__ and __RadMaskedTextBox__, let you format their values differently, depending on whether they have focus.


>caption  

| RadInput Control | Properties for formatting value with focus | Properties for formatting value without focus |
| ------ | ------ | ------ |
|RadDateInput|DateFormat|DisplayDateFormat|
|RadMaskedTextBox|Mask, PromptChar|DisplayMask, DisplayPromptChar|

>note You do not need to set both sets of properties. If you only set the properties for formatting a value with focus, the RadInput control uses them even if the control does not have focus.
>


# See Also

 * [Setting Focus]({%slug input/getting-started/setting-focus%})
