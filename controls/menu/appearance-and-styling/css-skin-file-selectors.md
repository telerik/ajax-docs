---
title: CSS Skin File Selectors
page_title: CSS Skin File Selectors | RadMenu for ASP.NET AJAX Documentation
description: CSS Skin File Selectors
slug: menu/appearance-and-styling/css-skin-file-selectors
tags: css,skin,file,selectors
published: True
position: 9
---

# CSS Skin File Selectors





## 

The following table lists the CSS selectors and descriptions for **RadMenu** style sheets.


| Class Name | Element | Description |
| ------ | ------ | ------ |
|RadMenu_[Skin]e.g. RadMenu_ **Outlook** |DIV|Applied to the root element of the menu.|
|RadMenu_[Skin]_rtl|DIV|Applied to the root element of the menu when it has a right-to-left orientation.|
|.rmRootGroup|UL|Applied to the first level item container (root item group).|
|.rmVertical|UL|Applied to the item container if the item flow is vertical.|
|.rmHorizontal|UL|Applied to the item container if the item flow is horizontal.|
|.rmGroup|UL|Applied to each item container except the root level one.|
|.rmLevel[n]|UL|Applied to item containers at the respective level. (Does not apply to the root item group.)|
|.rmItem|LI|Applied to the LI elements enclosing each item.|
|.rmFirst|LI|Applied to the LI element enclosing the first item in a group. Used to customize the appearance of the first item only:.RadMenu_Office2007 .rmGroup . **rmFirst** .rmLink,.RadMenu_Office2007 .rmGroup . **rmFirst** .rmTemplate{background: transparent url(Menu/MenuItemBgFirst.gif) no-repeat left bottom;line-height: 58px;}|
|.rmLast|LI|Applied to the LI element enclosing the last item in a group. Used to customize the appearance of the last item only:.RadMenu_Office2007 .rmGroup . **rmLast** .rmLink{background: transparent url(Menu/MenuItemBgLast.gif) no-repeat;line-height: 58px;}|
|.rmSeparator|LI|Applied to the LI element enclosing an item that is a separator ( **IsSeparator** is **True** ).|
|.rmLink|A|Applied to the anchors representing each item in its default state.|
|.rmFocused|A|Applied to the item's anchor when it is focused by either the mouse or the keyboard.|
|.rmClicked|A|Applied to the item's anchor the user clicks the item.|
|.rmExpanded|A|Applied to the item's anchor tag when the item is opened.|
|.rmDisabled|A|Applied to the item's anchor when the item is disabled.|
|.rmLeftArrow|A|Applied to the left scrolling arrow. Scrolling arrows are dynamically created. Use that CSS class to customize the appearance of the left scrolling arrow (used in horizontal item flow).|
|.rmRightArrow|A|Applied to the right scrolling arrow. Scrolling arrows are dynamically created. Use that CSS class to customize the appearance of the right scrolling arrow (used in horizontal item flow).|
|.rmTopArrow|A|Applied to the top scrolling arrow. Scrolling arrows are dynamically created. Use that CSS class to customize the appearance of the top scrolling arrow (used in vertical item flow).|
|.rmBottomArrow|A|Applied to the bottom scrolling arrow. Scrolling arrows are dynamically created. Use that CSS class to customize the appearance of the bottom scrolling arrow (used in vertical item flow).|
|.rmLeftArrowDisabled|A|Applied to the left scrolling arrow if there is no scroll space left.|
|.rmRightArrowDisabled|A|Applied to the right scrolling arrow if there is no scroll space left.|
|.rmTopArrowDisabled|A|Applied to the top scrolling arrow if there is no scroll space left.|
|.rmBottomArrowDisabled|A|Applied to the bottom scrolling arrow if there is no scroll space left.|
|.rmText|SPAN|Applied to the SPAN element that encloses an item's text.|
|.rmExpandLeft|SPAN|Applied to the SPAN element that encloses each item text if the item has child items and will expand to the **right** . Used to specify the arrow image via the background CSS attribute:.RadMenu_Outlook_rtl . **rmExpandLeft** ,.RadMenu_Outlook_rtl .rmExpandRight{background:transparent url(Menu/groupImageRTL.gif) left center no-repeat;}|
|.rmExpandBottom|SPAN|Applied to the SPAN element which encloses each item text if the item has child items and will expand downward. Used to specify the arrow image via the background CSS attribute.|
|.rmExpandTop|SPAN|Applied to the SPAN element which encloses each item text if the item has child items and will expand upward **.** Used to specify the arrow image via the background CSS attribute.|
|.rmExpandRight|SPAN|Applied to the SPAN element that encloses each item text if the item has child items and will expand to the **left** . Used to specify the arrow image via the background CSS attribute:.RadMenu_Outlook_rtl .rmExpandLeft,.RadMenu_Outlook_rtl . **rmExpandRight** {background:transparent url(Menu/groupImageRTL.gif) left center no-repeat;}|

# See Also

 * [Understanding the Skin CSS File]({%slug menu/appearance-and-styling/understanding-the-skin-css-file%})

 * [Tutorial: Creating A Custom Skin]({%slug menu/appearance-and-styling/creating-custom-skin%})

 * [Setting  the CSS Class of Items]({%slug menu/appearance-and-styling/setting--the-css-class-of-items%})
