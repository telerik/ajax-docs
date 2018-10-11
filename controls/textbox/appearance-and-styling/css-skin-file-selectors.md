---
title: CSS Skin File Selectors
page_title: CSS Skin File Selectors | RadTextBox for ASP.NET AJAX Documentation
description: CSS Skin File Selectors
slug: radtextbox/appearance-and-styling/css-skin-file-selectors
tags: css,skin,file,selectors
published: True
position: 6
---

# CSS Skin File Selectors



The following table lists significant CSS selectors and descriptions that apply to the **RadInput** control in RadInput style sheets.

>tip These class names are for the "Default" skin. For other skins, replace the string "Default" with the name of the skin.
>


## RadInput CSS classes


>caption  

| Class Name | Element | Description | SIR* | OldRendering |
| ------ | ------ | ------ | ------ | ------ |
|.RadInput (RadInput_Default)|DIV or SPAN|The class for the entire control.|Yes|Yes|
|.riSingle|SPAN|The class for the entire control in SIR mode.|Yes| **No** |
|.riContentWrapper|SPAN|The class for the element, which wraps all elements without the label.|Yes| **No** |
|.riTextBox|INPUT OR TEXTAREA|The common class for the input area in all states.|Yes|Yes|
|.riEnabled|INPUT OR TEXTAREA|The class for the input area when it is enabled.|Yes|Yes|
|.riHover|INPUT OR TEXTAREA|The class for the input area when the mouse hovers over it.|Yes|Yes|
|.riRead|INPUT OR TEXTAREA|The class for the input area when the input control is read-only.|Yes|Yes|
|.riDisabled|INPUT OR TEXTAREA|The class for the input area and button areas when the input control is disabled.|Yes|Yes|
|.riEmpty|INPUT OR TEXTAREA|The class for the input area when the empty message is displayed.|Yes|Yes|
|.riFocused|INPUT OR TEXTAREA|The class for the input area when the control has focus.|Yes|Yes|
|.riError|INPUT OR TEXTAREA|The class for the input area when the user has entered an invalid value.|Yes|Yes|
|.riNegative|INPUT OR TEXTAREA|The class for the input area when it is displaying a negative number.|Yes|Yes|
|.riCell|TD|The class for the input area's wrapper table cell (rendered only when labels or buttons are enabled).| **No** |Yes|
|.riSpin|TD|The class for the area where spin buttons appear.| **No** |Yes|
|.riBtn|TD|The class for the cell where the image button appears.| **No** |Yes|
|.riLabel|LABEL|The class for the label.|Yes|Yes|
|.riUp|A|The class for the "up" spin button.|Yes|Yes|
|.riDown|A|The class for the "down" spin button.|Yes|Yes|
|.riButton|A|The class for the image button.|Yes| **No** |

\*Last two columns indicate whether the class is supported in Single Input Rendering mode or OldRendering mode.
