---
title: Element Structure
page_title: Element Structure | UI for ASP.NET AJAX Documentation
description: Element Structure
slug: window/getting-started/element-structure
tags: element,structure
published: True
position: 1
---

# Element Structure



## 

__RadWindow__ controls contain a title bar, which displays the icon, title, and title bar buttons, a content window, and a status bar. These are all configurable using the properties of __RadWindow__.


>caption 

![](images/window.png)

* __Title Bar__: Use the __VisibleTitlebar__ property to control whether the window has a title bar.

* __Icon__: Use the __IconUrl__ property to specify the image that appears at the far left of the Title Bar.

* __Title__: By default, the Title shows the title of the HTML in the Content Window or theURL that provides that content. You can override this behavior by setting the __Title__ property.

* __Title Bar Buttons__: Use the __Behaviors__ property to determine which of the buttons that let the user pin, reload, minimize, maximize, restore, and close the window appear on the Title Bar.

* __Content Window__: Use the __NavigateUrl__ property to control what content appears in the Content Window.

* __Status Bar__: Use the __VisibleStatusbar__ property to control whether the window has a Status Bar to display information about the status or contents of the Content Window.
