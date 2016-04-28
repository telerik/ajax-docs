---
title:  Telerik.Web.UI.RadDiagram
page_title: Client-side API Reference RadDiagram Client-side API
description: Client-side API Reference RadDiagram Client-side API
slug: Telerik.Web.UI.RadDiagram
---

# Telerik.Web.UI.RadDiagram : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadDiagram]({%slug Telerik.Web.UI.RadDiagram%})*


## Methods

###  get_kendoWidget

Gets a reference to the Kendo Diagram widget. 
To use the exposed Kendo methods make sure you have the kendo.dataviz.d.ts file and cast the returned object to kendo.dataviz.ui.Diagram.

#### Parameters

#### Returns

`Object` 

##Events

### Load

Fires when the control's client-side object is created.

#### Event Data

##### sender `Telerik.Web.UI.RadDiagram`

The RadDiagram instance that fired the event. You can get the underlying Kendo widget from this object via the get_kendoWidget() method.

##### args `Sys.EventArgs`

Empty event argument.

