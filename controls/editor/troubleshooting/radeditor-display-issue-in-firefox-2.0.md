---
title: RadEditor Display Issue in Firefox 2.0
page_title: RadEditor Display Issue in Firefox 2.0 | RadEditor for ASP.NET AJAX Documentation
description: RadEditor Display Issue in Firefox 2.0
slug: editor/troubleshooting/radeditor-display-issue-in-firefox-2.0
tags: radeditor,display,issue,in,firefox,2.0
published: False
position: 0
---

# RadEditor Display Issue in Firefox 2.0



## 

**PROBLEM**

When I view the for ASP.NET AJAX version of the RadEditor in FireFox 2.0.x.x, it has a display issue. There is a bunch of extra toolbar space appearing above the toolbars (looks like a bunch of tool bar end caps in two long rows) and there's an extra gray bar tacked on to the bottom of the editor window:
>caption 

![](images/editor_skinningissue.png)

This happens both when I install and utilize the editor myself and when I view the RadEditor on the Telerik site with FireFox.

**SOLUTION**

The problem is due to that the **Minimum Font Size** of FireFox is set to a value different from **None**. In order to fix the problem go to :Tools -> Options -> Fonts & Colors -> Advanced -> Set the "Minimum Font Size" to None.
