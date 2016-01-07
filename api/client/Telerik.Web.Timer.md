---
title: Telerik.Web.Timer
page_title: Client-side API Reference
description: Telerik.Web.Timer
slug: Telerik.Web.Timer
---

# Telerik.Web.Timer : Sys.Component 

## Inheritance Hierarchy

* Sys.Component
* *[Telerik.Web.Timer]({%slug Telerik.Web.Timer%})*

## Methods

###  get_enabled

#### Parameters

#### Returns

`Boolean` Gets a value indicating whether this control is enabled

###  get_interval

#### Parameters

#### Returns

`Number` Retrieves the interval between 2 tick events

###  set_enabled

Sets the enable state of the control

#### Parameters

##### value `Boolean`

True if control is enabled

#### Returns

`None` 

###  set_interval

Sets the interval between 2 tick events

#### Parameters

##### value `Number`

The value of the interval

#### Returns

`None` 

###  updated

This method is called when Timer is updated after tick

#### Parameters

#### Returns

`None` 

## Events

### tick

Occurs when the interval has elapsed.

#### Event Data

##### sender `Telerik.Web.Timer`

The client-side Timer instance raised the event.

##### args `Sys.EventArgs`

The event arguments.




