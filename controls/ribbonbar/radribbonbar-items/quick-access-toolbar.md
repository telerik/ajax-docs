---
title: Quick Access Toolbar
page_title: Quick Access Toolbar | UI for ASP.NET AJAX Documentation
description: Quick Access Toolbar
slug: ribbonbar/radribbonbar-items/quick-access-toolbar
tags: quick,access,toolbar
published: True
position: 10
---

# Quick Access Toolbar



## 

The Quick Access Toolbar is listed in the title bar of the control. It allows you to choose the most used RadRibbonBar commands that are currently available and put their shortcuts in the title bar of the control. The shortcuts function in the same way as the original commands - they fire both their client-side and server-side events. All types of commands (Button, Split Button, Menu, Toggle Button) are supported.

Additionally the drop down of the QAT allows the user to hide/show those commands they do or do not need at the moment of interaction with the control.

![Quick Access Toolbar](images/ribbonbar-quick_access_toolbar.png)

Configuring the Quick Access Toolbar is straightforward:

* RadRibbonBar.__EnableQuickAccessToolbar__

* __False__ (default) - disables the QAT.

* __True__ - enables the QAT (allows the buttons whose QuickAccess property is set to true).

* RibbonBar[Button|SplitButton|Menu|ToggleButton].__QuickAccess__

* __Disabled__ (default) - the command does not appear in the QAT.

* __Active__ - the command is added to the QAT and is immediately available for usage.

* __Inactive__ - the command is added to the QAT but is not immediately available for usage. Can be shown by checking its corresponding option in the QAT drop down.

# See Also

 * [Quick Access Toolbar](http://demos.telerik.com/aspnet-ajax/ribbonbar/examples/quickaccesstoolbar/defaultcs.aspx)
