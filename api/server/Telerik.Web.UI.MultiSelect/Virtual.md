---
title: Telerik.Web.UI.MultiSelect.Virtual
page_title: Telerik.Web.UI.MultiSelect.Virtual
description: Telerik.Web.UI.MultiSelect.Virtual
---

# Telerik.Web.UI.MultiSelect.Virtual

Enables the virtualization feature of the widget. The configuration can be set on an object, which contains two properties - itemHeight and valueMapper.For detailed information, refer to the article on virtualization.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.MultiSelect.Virtual : IDefaultCheck

## Properties

###  ItemHeight `Double`

Specifies the height of the virtual item. All items in the virtualized list must have the same height. If the developer does not specify one, the framework will automatically set itemHeight based on the current theme and font size.

###  MapValueTo `String`

The changes introduced with the Kendo UI R3 2016 release enable you to determine if the valueMapper must resolve a value to an index or a value to a dataItem. This is configured through the mapValueTo option that accepts two possible values - "index" or "dataItem". By default, the mapValueTo is set to "index", which does not affect the current behavior of the virtualization process.For more information, refer to the article on virtualization.

###  ValueMapper `String`

The widget calls the valueMapper function when the widget receives a value, that is not fetched from the remote server yet. The widget will pass the selected value(s) in the valueMapper function. In turn, the valueMapper implementation should return the respective data item(s) index/indices. > Important > > As of the Kendo UI R3 2016 release, the implementation of the valueMapper function is optional. It is required only if the widget contains an initial value or if the value method is used.

