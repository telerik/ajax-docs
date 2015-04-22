---
title: Controlling Absolute Positioning with z-index
page_title: Controlling Absolute Positioning with z-index | UI for ASP.NET AJAX Documentation
description: Controlling Absolute Positioning with z-index
slug: controls/controlling-absolute-positioning-with-z-index
tags: controlling,absolute,positioning,with,z-index
published: True
position: 6
---

# Controlling Absolute Positioning with z-index



## 

A number of Telerik controls render with absolute positioning and have their default z-indexes as shown below:



* __RadAjaxLoadingPanel__—90000

* __RadAutoCompleteBox dropdown__—7000

* __RadButton's SplitButton dropdown__—7000

* __RadColorPicker popup__—4001

* __RadComboBox dropdown__—6000

* __RadDatePicker popup__—5000

* __RadDropDownList dropdown__—7000

* __RadDropDownTree dropdown__—7000

* __RadFilter "add group/expression" dropdown__—3500

* __RadFormDecorator - decorated dropdown__—4007

* __RadGrid's PopUp edit form__—2500

* __RadHtmlChart's tooltips__—1000

* __RadLightBox__—3006

* __RadListBox dragged item__—6500

* __RadMenu__—8000

* __RadNotification__—10000

* __RadRibbonBar's Application Menu__—9000

* __RadRibbonBar's RibbonBarGroup dropdown__—9000

* __RadScheduler's PopUp edit form__—2500

* __RadSearchBox dropdown__—7000

* __RadSplitter's RadSlidingPane__—2000

* __RadTile's PeekTemplate__—1

* __RadTile while being dragged__—99999

* __RadToolBar__—9000

* __RadToolTip__—8000

* __RadWindow__—3000. If `ShowOnTopWhenMaximized` is `true` (its default value), a __maximized RadWindow__ will have 100 000 for its z-index.



In different scenarios, you may need to change these values in order to ensure that one specific control will be shown above the other—for example __RadWindow__ over __RadMenu__. To do this, you can simply set the value of the z-index property of every control by using the common style property, e.g.:

````ASPNET
	    <telerik:RadWindowManager ID="RadWindowManager1" runat="server" Style="z-index: 12345">
	    </telerik:RadWindowManager>
````



____
