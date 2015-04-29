---
title: Controlling Absolute Positioning with z-index
page_title: Controlling Absolute Positioning with z-index | UI for ASP.NET AJAX Documentation
description: Controlling Absolute Positioning with z-index
slug: controls/controlling-absolute-positioning-with-z-index
tags: controlling,absolute,positioning,with,z-index
published: True
position: 16
---

# Controlling Absolute Positioning with z-index



## 

A number of Telerik controls render with absolute positioning and have their default z-indexes as shown below:



* **RadAjaxLoadingPanel** - 90000

* **RadAutoCompleteBox dropdown** - 7000

* **RadButton's SplitButton dropdown** - 7000

* **RadColorPicker popup** - 4001

* **RadComboBox dropdown** - 6000

* **RadDatePicker popup** - 5000

* **RadDropDownList dropdown** - 7000

* **RadDropDownTree dropdown** - 7000

* **RadFilter "add group/expression" dropdown** - 3500

* **RadFormDecorator - decorated dropdown** - 4007

* **RadGrid's PopUp edit form** - 2500

* **RadHtmlChart's tooltips** - 1000

* **RadLightBox** - 3006

* **RadListBox dragged item** - 6500

* **RadMenu** - 8000

* **RadNotification** - 10000

* **RadRibbonBar's Application Menu** - 9000

* **RadRibbonBar's RibbonBarGroup dropdown** - 9000

* **RadScheduler's PopUp edit form** - 2500

* **RadSearchBox dropdown** - 7000

* **RadSplitter's RadSlidingPane** - 2000

* **RadTile's PeekTemplate** - 1

* **RadTile while being dragged** - 99999

* **RadToolBar** - 9000

* **RadToolTip** - 8000

* **RadWindow** - 3000. If **ShowOnTopWhenMaximized** is **true** (its default value), a **maximized RadWindow** will have 100 000 for its z-index.



In different scenarios, you may need to change these values in order to ensure that one specific control will be shown above the other—for example **RadWindow** over **RadMenu**. To do this, you can simply set the value of the z-index property of every control by using the common style property, e.g.:

````ASPNET
<telerik:RadWindowManager ID="RadWindowManager1" runat="server" Style="z-index: 12345">
</telerik:RadWindowManager>
````

