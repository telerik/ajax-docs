---
title: CSS Skin File Selectors
page_title: CSS Skin File Selectors | RadTreeView for ASP.NET AJAX Documentation
description: CSS Skin File Selectors
slug: treeview/appearance-and-styling/css-skin-file-selectors
tags: css,skin,file,selectors
published: True
position: 5
---

# CSS Skin File Selectors



## 

The following table lists significant CSS selectors and descriptions for **RadTreeView** style sheets.


|  CSS Selector  |  Description  |
| ------ | ------ |
|RadTreeView_Telerik|The default style for the <div> tag that contains the control representation.|
|rtPlus, rtMinus|Applied to the plus and minus (expand and collapse) buttons.|
|rtChk|Applied to the checkbox.|
|rtHover|Applied to Nodes which have been hovered with the mouse.|
|rtSelected|Applied to Nodes that have been selected.|
|rtEdit|Applied to Nodes in the process of being edited.|
|rtLines|Applied to the vertical connector lines that tie Nodes together.|
|rtFirst|Applied to the first, i.e. root, Node in the TreeView.|
|rtTop, rtMid, rtBot|Applied to the top, middle and bottom Nodes of a level, respectively.|
|rtUL, rtLI|Each level of the TreeView is represented in HTML as an unordered list <UL> with list items <li>. "rtUL" and "rtLI" styles control the basic appearance of the corresponding elements.|
|rtDropAbove_Telerik, rtDropBelow_Telerik|Applied to line appearing when dropping between Nodes.|
|rtDragClue|Applied to the container of the Dragging Clue (the element holding dragged nodes).|

>note There are several styles that end in "_rtl" that are used to style specific portions of the control when right-to-left support is turned on. These "_rtl" styles are variants of their left-to-right default counterparts and are appended only to the main CSS selectors: for example, ".RadTreeView_Telerik .rtLines .rtFirst".
>


# See Also

 * [Controlling Appearance]({%slug treeview/appearance-and-styling/controlling-appearance%})
 
 * [Skins]({%slug ribbonbar/appearance-and-styling/skins%})

 * [Tutorial on Creating a Custom Skin]({%slug treeview/appearance-and-styling/tutorial-on-creating-a-custom-skin%})

 * [Understanding the Skin CSS File]({%slug treeview/appearance-and-styling/understanding-the-skin-css-file%})

 * [Improvemnts in Lightweight RenderMode R3 2016]({%slug treeview/changes-and-backwards-compatibility/lightweight-rm-improvements-r3-2016%})
