---
title: Telerik.Web.UI.Widgets.Polling
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.Widgets.Polling
---

# Telerik.Web.UI.Widgets.Polling

## Inheritance Hierarchy

* *[Telerik.Web.UI.Widgets.Polling]({%slug Telerik.Web.UI.Widgets.Polling%})*

### static waitFor

Start polling for a condition, defined by the result of the callback condition funciton

#### Parameters

##### condition `Function`

The conditional callback that is run for each polling iteration. True will end the polling successfully, while false will continue the polling.

#### Returns

A jQuery Promise object that is part of the Deferred object. It allows for improved coding for async cases as is the case with Polling.

`Object`

### static css

Start polling for an expected value on a specific css style.

#### Parameters

##### node `Element`

The DOM node, which styling should be checked against the expected value.

##### styleName `String`

The style name, over which the polling will be run.

##### expectedValue `String`

The expected value of the node's css styling.

#### Returns

A jQuery Promise object that is part of the Deferred object. It allows for improved coding for async cases as is the case with Polling.

`None`