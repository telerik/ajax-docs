---
title: Telerik.Web.UI.RadAjaxControl
page_title: Client-side API Reference
description: Telerik.Web.UI.RadAjaxControl
slug: Telerik.Web.UI.RadAjaxControl
---

# Telerik.Web.UI.RadAjaxControl : Sys.UI.Control 

## Inheritance Hierarchy

* Sys.UI.Control
* *[Telerik.Web.UI.RadAjaxControl]({%slug Telerik.Web.UI.RadAjaxControl%})*


## Methods

###  ajaxRequest

Initiates a generic AJAX request through the RadAjax instance

#### Parameters

##### args `String`

The parameters

#### Returns

`None` 

### ajaxRequestWithTarget

Simulates a postback/AJAX request send by the control with the specified UniqueID and specified arguments

#### Parameters

##### eventTarget `String`

The control which should raise postback event. You should always use the control

##### eventArgument `String`

This is optional argument for the event

#### Returns

`None` 

### get_clientEvents

Returns the RadAjaxManager client-side events handler names. Example: get_clientEvents().OnRequestStart - returns the name of the RadAjax OnRequestStart client-side event handler. get_clientEvents().OnResponseEnd - returns the name of the RadAjax OnResponseEnd client-side event handler.

#### Parameters

#### Returns

`Object` 

### get_enableAJAX

Retuns a Boolean value indicating if the RadAjax ajax is enabled

#### Parameters

#### Returns

`Boolean` 

### get_enableHistory

Retuns a Boolean value indicating if the RadAjax history is enabled

#### Parameters

#### Returns

`Boolean` 

### get_requestQueueSize

Gets the size of the RadAjax ajax requests queue

#### Parameters

#### Returns

`Number` 

### set_clientEvents

Sets the RadAjax client-side events handler names.

#### Parameters

##### value `Object`

#### Returns

`None` 

### set_enableAJAX

Accepts a Boolean value indicating if the RadAjax ajax is enabled

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_enableHistory

Accepts a Boolean value indicating if the RadAjax ajax is enabled

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_requestQueueSize

Sets the size of the RadAjax ajax requests queue

#### Parameters

##### value `Number`

#### Returns

`None` 



