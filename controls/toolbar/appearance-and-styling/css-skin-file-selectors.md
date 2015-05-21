---
title: CSS Skin File Selectors
page_title: CSS Skin File Selectors | RadToolBar for ASP.NET AJAX Documentation
description: CSS Skin File Selectors
slug: toolbar/appearance-and-styling/css-skin-file-selectors
tags: css,skin,file,selectors
published: True
position: 7
---

# CSS Skin File Selectors

## 

The following table lists the CSS selectors and descriptions for **RadToolBar** style sheets.


| Class Name | Element | Description |
| ------ | ------ | ------ |
|RadToolBar_[Skin]e.g. RadToolBar_ **Outlook** |DIV|Applied to the root element of the toolbar.|
|RadToolBar_[Skin]_Horizontal|DIV|Applied to the root element of the toolbar when it has a horizontal orientation.|
|RadToolBar_[Skin]_Vertical|DIV|Applied to the root element of the toolbar when it has a vertical orientation.|
|.rtbOuter|DIV|Applied to the outermost of three nested DIV elements that enclose the toolbar. The three nested DIV elements are designed to work together for shaping the toolbar.|
|.rtbMiddle|DIV|Applied to the middle of three nested DIV elements that enclose the toolbar. The three nested DIV elements are designed to work together for shaping the toolbar.|
|.rtbInner|DIV|Applied to the innermost of three nested DIV elements that enclose the toolbar. The three nested DIV elements are designed to work together for shaping the toolbar.|
|.rtbUL|UL|Applied to the UL element that manages the layout of the buttons in the toolbar.|
|.rtbItem|LI|Applied to the LI element that represents a single item in the toolbar or drop-down list.|
|.rtbBtn|LI|Applied to the LI element for a **RadToolBarButton** in the toolbar.|
|.rtbDropDown|LI|Applied to the LI element for a **RadToolBarDropDown** .|
|.rtbSplBtn|LI|Applied to the LI element for a **RadToolBarSplitButton** .|
|.rtbChecked|LI|Applied to the LI element that represents a button in the "checked" state.|
|.rtbDisabled|LI|Applied to the LI element for a disabled item.|
|.rtbItemFocused|LI|Applied to the LI element for an item when it has focus.|
|.rtbItemHovered|LI|Applied to the LI element for an item when the mouse hovers over it.|
|.rtbSplBtnExpanded|LI|Applied to the LI element for a split button when its drop-down list is showing.|
|.rtbDropDownExpanded|LI|Applied to the LI element for a drop-down button when its drop-down list is showing.|
|.rtbWrap|A|Applied to the A element for an item in the toolbar or drop-down list.|
|.rtbOut|SPAN|Applied to the outermost of three nested SPAN elements that represent an item in the toolbar. The three nested SPAN elements are designed to work together for shaping buttons.|
|.rtbMid|SPAN|Applied to the middle of three nested SPAN elements that represent an item in the toolbar. The three nested SPAN elements are designed to work together for shaping buttons.|
|.rtbIn|SPAN|Applied to the innermost of three nested SPAN elements that represent an item in the toolbar. The three nested SPAN elements are designed to work together for shaping buttons.|
|.rtbSplBtnActivator|SPAN|Applied to the "button" portion of a split button (all but the drop-down arrow). This encloses the image and text label.|
|.rtbText|SPAN|Applied to the text label of an item in the toolbar or in a drop-down list.|
|.rtbIcon|IMG|Applied to the image that labels an item in the toolbar or drop-down list.|
|.rtbChoiceArrow|SPAN|Applied to drop-down arrow of a drop-down button or split button.|
|.RadToolBarDropDown_[Skin]|DIV|Applied to the drop-down list of a drop-down button or split button.|
|.rtbGroup|UL|Applied to the UL element that lays out a drop-down list.|
|.rtbActive|UL|Applied to the UL element for a drop-down list when it is expanded.|
|.rtbItemHovered|LI|Applied to a button in a drop-down list when the mouse hovers over it.|
|.rtbFocused|LI|Applied to a button in a drop-down list when it has focus.|
|.rtbSeparator|LI|Applied to a separator in a drop-down list.|

# See Also

 * [Understanding the Skin CSS File]({%slug toolbar/appearance-and-styling/understanding-the-skin-css-file%})

 * [Tutorial Creating A Custom Skin]({%slug toolbar/appearance-and-styling/tutorial-creating-a-custom-skin%})

 * [Setting  the CSS Class of Buttons]({%slug toolbar/appearance-and-styling/setting-the-css-class-of-buttons%})
