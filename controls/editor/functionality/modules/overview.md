---
title: Modules Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: editor/functionality/modules/overview
tags: overview
published: True
position: 0
---

# Modules Overview



The System Modules represent special tools, which can be displayed like Toolbars. However, the Modules do not accommodate buttons, but rather have a pre-defined purpose. The RadEditor modules currently shipped out-of-the-box are:
>caption 

![](images/editor-modules001.png)

## Statistics Module

This module displays general test statistics: the number of words and number of characters (including spaces).
>caption 

![](images/editor-statisticsmodule.png)

>note Please note that you have to click with the mouse inside the content area for the statistics module to update, i.e. it will not update on every keystroke for the purposes of performance optimization.
>By design the RadEditorStatistics module does not count the following characters: ! . ? ; , : & _ - – { } [ ] ( ) ~ # ' "
>


## Dom / Tag Inspector

This module displays the DOM path of the current tag. It allows you to easily select a given tag in the hierarchy and remove it using the "Remove Element" button:
>caption 

![](images/editor-nodeinspectore.png)

In the content area, each element is highlighted as the mouse passes over the tag. The screenshot below shows the mouse passing over an unordered list "<UL>" and the corresponding bullet points in the content area area highlighted.
>caption 

![](images/editor-modules002.png)

## Node Inspector

This powerful module displays relevant properties of the currently selected tag. As a result, the user can quickly configure the element (e.g. set cell width, shading, image alignment, etc.) without the need to open dialogs. To conserve space only important and frequently used properties are displayed.
>caption 

![](images/editor-modules003.png)

## HTML Inspector

This module displays a pane with the HTML code of the content. The HTML is updated and kept in real-time sync with the WYSIWYG content pane. The effect is similar to the Split mode of MS FrontPage. If you make a modification in the WYSIWYG pane or the HTML pane, the other pane will be automatically updated. This module is a great fine-tuning tool for advanced users:
>caption 

![](images/editor-modules004.png)

# See Also

 * [Built-in Modules](http://demos.telerik.com/aspnet-ajax/editor/examples/builtinmodules/defaultcs.aspx)

 * [Custom Modules](http://demos.telerik.com/aspnet-ajax/editor/examples/custommodules/defaultcs.aspx)
