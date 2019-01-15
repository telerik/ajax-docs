---
title: Telerik.Web.UI.MultiColumnComboBoxClientEvents
page_title: Telerik.Web.UI.MultiColumnComboBoxClientEvents
description: Telerik.Web.UI.MultiColumnComboBoxClientEvents
---

# Telerik.Web.UI.MultiColumnComboBoxClientEvents

Defines the client events handlers.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.MultiColumnComboBoxClientEvents : IDefaultCheck

## Properties

###  OnCascade `String`

Fired when the value of the widget is changed via API or user interaction.

###  OnChange `String`

Fired when the value of the widget is changed by the user. As of 2015 Q3 SP1 cascading widget will trigger change event when its value is changed due to parent update.The event handler function context (available via the this keyword) will be set to the widget instance.

###  OnClose `String`

Fired when the popup of the widget is closed.The event handler function context (available via the this keyword) will be set to the widget instance.

###  OnDataBound `String`

Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.

###  OnFiltering `String`

Fired when the widget is about to filter the data source.The event handler function context (available via the this keyword) will be set to the widget instance.

###  OnInitialize `String`

Fired when the multicolumncombobox control is initialized.

###  OnLoad `String`

Fired when the multicolumncombobox control is loaded on the page.

###  OnOpen `String`

Fired when the popup of the widget is opened by the user.The event handler function context (available via the this keyword) will be set to the widget instance.

###  OnSelect `String`

Fired when an item from the popup is selected by the user either with mouse/tap or with keyboard navigation.

