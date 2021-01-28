---
title: Keyboard Support
page_title: Keyboard Support - RadGantt
description: Check our Web Forms article about Keyboard Support.
slug: gantt/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support

**RadGantt** introduces keyboard support. In order to activate it, you must set the **KeyboardNavigationSettings**:

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server">
    <KeyboardNavigationSettings FocusKey="W" CommandKey="Alt" />
</telerik:RadGantt>              
````


>note Some key combination are reserved by the browsers for default actions and they cannot be used. Ex. Ctrl + D adds current page to favorites/bookmarks.
>


The keyboard navigation has the following functionalities:

## 

**ACTIONS APPLIED ON GANTT'S TIMELINE**

* **Delete** - deletes currently selected task and/or dependency.

**ACTIONS APPLIED ON GANTT'S TREELIST HEADER**

* **Enter** - sort by the column.

**ACTIONS APPLIED ON GANTT'S TREELIST DATA TABLE**

* **Arrow Keys** - to navigate over the cells.

* **Enter** - opens cell editor.

* **Esc** - closes cell editor.

* **Space** - selects currently highlighted cell's row.

* **1 - 3** - moves between the available views.

* **Alt Left Arrow / Alt Right Arrow** - scrolls timeline.

* **Ctrl Right Arrow / Ctrl Left Arrow** - expand/collapse summary row.

**ACTIONS APPLIED ON 'ADD TASK' ACTION DROPDOWN**

* **Up Arrow** - highlights previous item.

* **Down Arrow** - highlights next item.

* **Enter** - selects highlighted item.

* **Esc** - closes the dropdown.
