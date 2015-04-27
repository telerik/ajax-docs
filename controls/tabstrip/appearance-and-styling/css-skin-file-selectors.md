---
title: CSS Skin File Selectors
page_title: CSS Skin File Selectors | RadTabStrip for ASP.NET AJAX Documentation
description: CSS Skin File Selectors
slug: tabstrip/appearance-and-styling/css-skin-file-selectors
tags: css,skin,file,selectors
published: True
position: 7
---

# CSS Skin File Selectors



## 

The following table lists the CSS selectors and descriptions for **RadTabStrip** style sheets.


|  **Class Name**  |  **Element**  |  **Description**  |
| ------ | ------ | ------ |
|RadTabStrip_[Skin]e.g. RadTabStrip_ **Outlook** |DIV|Applied to the root element of the tab strip.|
|RadTabStrip_[Skin]_tabstrip-rtl|DIV|Applied to the root element of the tab strip when it has a right-to-left orientation.|
|RadTabStripTop_[Skin]|DIV|Applied to the root element of the tab strip when it has a "HorizontalTop" orientation.|
|RadTabStripBottom_[Skin]|DIV|Applied to the root element of the tab strip when it has a "HorizontalBottom" orientation.|
|RadTabStripLeft_[Skin]|DIV|Applied to the root element of the tab strip when it has a "VerticalLeft" orientation.|
|RadTabStripRight_[Skin]|DIV|Applied to the root element of the tab strip when it has a "VerticalRight" orientation.|
|RadTabStrip_[Skin]_disabled|DIV|Applied to the root element of the tab strip when the entire control is disabled.|
|.rtsLevel|DIV|Applied to the container for a set of tabs at a single level.|
|.rtsLevel[n]|DIV|Applied to tab containers at the respective level. The root level is level 1, the next level is level 2, and so on.|
|.rtsUL|UL|Applied to the UL element that contains the tabs for a level.|
|.rtsScroll|UL|Applied to the UL element that contains the tabs for a level when the parent has enabled scrolling.|
|.rtsLI|LI|Applied to the LI element that represents a single tab.|
|.rtsFirst|LI|Applied to the LI element for the first tab at a level.|
|.rtsLast|LI|Applied to the LI element for the last tab at a level.|
|.rtsSeparator|LI|Applied to the LI element for a separator.|
|.rtsBreak|LI|Applied to the LI element that is inserted when the previous tab has its **IsBreak** property set to **True** .|
|.rtsLink|A|Applied to the anchor element of a tab.|
|.rtsBefore|A|Applied to the anchor element of the tab before the selected tab.|
|.rtsSelected|A|Applied to the anchor element for the selected tab.|
|.rtsAfter|A|Applied to the anchor element for the tab after the selected tab.|
|.rtsDisabled|A|Applied to the anchor element for the tab when it is disabled.|
|.rtsLink:hover|A|Applied to the anchor element for the tab when the mouse hovers over it.|
|.rtsNextArrow|A|Applied to the scroll button that shows the next tabs.|
|.rtsPrevArrow|A|Applied to the scroll button that shows the previous tabs.|
|.rtsNextArrowDisabled|A|Applied to the scroll button that shows the next tabs when it is disabled (there are no more tabs).|
|.rtsPrevArrowDisabled|A|Applied to the scroll button that shows the previous tabs when it is disabled (the tabs are not scrolled).|
|.rtsOut|SPAN|Applied to the outer span that contains the tab label and image.|
|.rtsIn|SPAN|Applied to the inner span that contains the tab label and image.|
|.rtsTxt|SPAN|Applied to the span that contains the tab's text.|
|.rtsImg|IMG|Applied to the image element that contains the image on the tab.|

# See Also

 * [Understanding the Skin CSS File]({%slug tabstrip/appearance-and-styling/understanding-the-skin-css-file%})

 * [Tutorial Creating A Custom Skin]({%slug tabstrip/appearance-and-styling/tutorial-creating-a-custom-skin%})

 * [Setting the CSS Class of Tabs]({%slug tabstrip/appearance-and-styling/setting-the-css-class-of-tabs%})
