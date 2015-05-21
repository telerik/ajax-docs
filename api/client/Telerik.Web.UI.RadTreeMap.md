---
title: Telerik.Web.UI.RadTreeMap
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadTreeMap
---

# Telerik.Web.UI.RadTreeMap : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadTreeMap]({%slug Telerik.Web.UI.RadTreeMap%})*

## Methods

###  get_kendoWidget

Gets a reference to the Kendo TreeMap widget. 
To use the exposed Kendo methods make sure you have the kendo.dataviz.d.ts file and cast the returned object to kendo.dataviz.ui.TreeMap.

#### Parameters

#### Returns

`Object` 

## Events

### load

Occurs after the RadTreeMap has been fully initialized on the client-side. 

#### Event Data

##### sender `Telerik.Web.UI.RadTreeMap`

The RadTreeMap instance raised the event.

##### args `Sys.EventArgs`

The arguments of the Load event.


### itemCreated

Occurs after the RadTreeMap has been fully initialized on the client-side. 

#### Event Data

##### sender `Telerik.Web.UI.RadTreeMap`

The RadTreeMap instance raised the event.

##### args `Telerik.Web.UI.TreeMapItemCreatedEventArgs`

The arguments of the ItemCreated event.