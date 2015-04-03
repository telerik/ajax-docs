---
title: CSS Skin File Selectors
page_title: CSS Skin File Selectors | UI for ASP.NET AJAX Documentation
description: CSS Skin File Selectors
slug: input/appearance-and-styling/css-skin-file-selectors
tags: css,skin,file,selectors
published: True
position: 6
---

# CSS Skin File Selectors



The following table lists significant CSS selectors and descriptions that apply to the __RadInput__ control in RadInput style sheets.

>note These class names are for the "Default" skin. For other skins, replace the string "Default" with the name of the skin.
>


## RadInput CSS classes


>caption  

| Class Name | Element | Description | SIR* | OldRendering |
| ------ | ------ | ------ | ------ | ------ |
|.RadInput (RadInput_Default)|DIV or SPAN|The class for the entire control.|Yes|Yes|
|.riSingle|SPAN|The class for the entire control in SIR mode.|Yes| __No__ |
|.riContentWrapper|SPAN|The class for the element, which wraps all elements without the label.|Yes| __No__ |
|.riTextBox|INPUT OR TEXTAREA|The common class for the input area in all states.|Yes|Yes|
|.riEnabled|INPUT OR TEXTAREA|The class for the input area when it is enabled.|Yes|Yes|
|.riHover|INPUT OR TEXTAREA|The class for the input area when the mouse hovers over it.|Yes|Yes|
|.riRead|INPUT OR TEXTAREA|The class for the input area when the input control is read-only.|Yes|Yes|
|.riDisabled|INPUT OR TEXTAREA|The class for the input area and button areas when the input control is disabled.|Yes|Yes|
|.riEmpty|INPUT OR TEXTAREA|The class for the input area when the empty message is displayed.|Yes|Yes|
|.riFocused|INPUT OR TEXTAREA|The class for the input area when the control has focus.|Yes|Yes|
|.riError|INPUT OR TEXTAREA|The class for the input area when the user has entered an invalid value.|Yes|Yes|
|.riNegative|INPUT OR TEXTAREA|The class for the input area when it is displaying a negative number.|Yes|Yes|
|.riCell|TD|The class for the input area's wrapper table cell (rendered only when labels or buttons are enabled).| __No__ |Yes|
|.riSpin|TD|The class for the area where spin buttons appear.| __No__ |Yes|
|.riBtn|TD|The class for the cell where the image button appears.| __No__ |Yes|
|.riLabel|LABEL|The class for the label.|Yes|Yes|
|.riUp|A|The class for the "up" spin button.|Yes|Yes|
|.riDown|A|The class for the "down" spin button.|Yes|Yes|
|.riButton|A|The class for the image button.|Yes| __No__ |

__*__Last two columns indicate whether the class is supported in [Single Input Rendering]({%slug input/single-input-rendering-mode%}) mode or OldRendering mode.

## Input Manager CSS classes


>caption  

| Class Name | Element | Description |
| ------ | ------ | ------ |
|.RadInputMgr_Default|INPUT or TEXTAREA|The common class applied to RadInputManager textboxes, regardless of their state|
|.RadInput_Enabled_Default|INPUT or TEXTAREA|The class for RadInputManager textboxes in "Enabled" state|
|.RadInput_Empty_Default|INPUT or TEXTAREA|The class for RadInputManager textboxes in "Empty" state|
|.RadInput_Hover_Default|INPUT or TEXTAREA|The class for RadInputManager textboxes in hovered state|
|.RadInput_Focused_Default|INPUT or TEXTAREA|The class for RadInputManager textboxes in focused state|
|.RadInput_Read_Default|INPUT or TEXTAREA|The class for RadInputManager textboxes in read-only state|
|.RadInput_Disabled_Default|INPUT or TEXTAREA|The class for RadInputManager textboxes in disabled state|
|.RadInput_Negative_Default|INPUT or TEXTAREA|The class for RadInputManager numeric textboxes with a negative value|

# See Also

 * [HTML Output and CSS Styling]({%slug input/appearance-and-styling/html-output-and-css-styling%})
