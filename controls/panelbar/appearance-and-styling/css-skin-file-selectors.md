---
title: CSS Skin File Selectors
page_title: CSS Skin File Selectors | RadPanelBar for ASP.NET AJAX Documentation
description: CSS Skin File Selectors
slug: panelbar/appearance-and-styling/css-skin-file-selectors
tags: css,skin,file,selectors
published: True
position: 7
---

# CSS Skin File Selectors



## 

The following table lists the CSS selectors and descriptions for **RadPanelBar** style sheets.


|  **Class Name**  |  **Element**  |  **Description**  |
| ------ | ------ | ------ |
|RadPanelBar_[Skin]e.g. RadPanelBar_ **Outlook** |DIV|Applied to the root element of the panel bar.|
|RadPanelBar_[Skin]_rtl|DIV|Applied to the root element of the panel bar when it has a right-to-left orientation.|
|.rpRtl|DIV|Applied to the root element of the panel bar when it has a right-to-left orientation.|
|.rpRootGroup|UL|Applied to the UL element that lays out the root-level items in the panel bar.|
|.rpGroup|UL|Applied to the UL element that lays out a group of child items.|
|.rpLevel[n]|UL|Applied to the UL element at the respective level. The first group of child items is level 1, the next level is level 2, and so on. This class is not applied to the root group.|
|.rpItem|LI|Applied to the LI element for every item in the panel bar (including child items).|
|.rpFirst|LI|Applied to the first item of any level.|
|.rpLast|LI|Applied to last item of any level.|
|.rpSeparator|LI|Applied to separator items.|
|.rpLink|A|Applied to the A element that represents an item at any level of the panel bar.|
|.rpExpandable|A|Applied to items that have child items when they are in the unexpanded state.|
|.rpExpanded|A|Applied to items that have child items when they are in the expanded state.|
|.rpSelected|A|Applied to the single selected item in the panel bar.|
|.rpDisabled|A|Applied to an item when it is disabled.|
|.rpClicked|A|Applied to an item when it is clicked.|
|.rpFocused|A|Applied to an item when it has focus.|
|.rpText|SPAN|Applied to the text label of an item.|
|.rpImage|IMG|Applied to the image assigned to an item.|
|.rpSlide|DIV|Applied to the DIV that manages animated effects for a group of child items.|
|.rpTemplate|DIV|Applied to the template of an item.|

# See Also

 * [Understanding the Skin CSS File]({%slug panelbar/appearance-and-styling/understanding-the-skin-css-file%})

 * [Tutorial: Creating A Custom Skin]({%slug panelbar/appearance-and-styling/creating-a-custom-skin%})

 * [Setting  the CSS Class of Items]({%slug panelbar/appearance-and-styling/setting--the-css-class-of-items%})
