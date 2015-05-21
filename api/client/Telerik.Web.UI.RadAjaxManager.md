---
title: Telerik.Web.UI.RadAjaxManager
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadAjaxManager
---

# Telerik.Web.UI.RadAjaxManager : Telerik.Web.UI.RadAjaxControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadAjaxControl]({%slug Telerik.Web.UI.RadAjaxControl%})
* *[Telerik.Web.UI.RadAjaxManager]({%slug Telerik.Web.UI.RadAjaxManager%})*

## Methods

### updateElement

Updates the html of the DOM element with the specified id

#### Parameters

##### id `String`

The id of the DOM element to update

##### html `String`

The html which is to be assigned to the specified DOM element

#### Returns

`None` 

### set_ajaxSettings

Sets the current ajax settings of the RadAjaxManager

#### Parameters

##### value `Array`

#### Returns

`None` 

### set_enableHistory

true

#### Parameters

##### boolean `Object`

#### Returns

`Object` 

### get_enableHistory

True

#### Parameters

#### Returns

`Object` 

### set_updatePanelsRenderMode

Sets the current update panels render mode of the RadAjaxManager

#### Parameters

##### value `Number`

#### Returns

`None` 

### showLoadingPanels

Shows loading panels over the updated controls from the ajax request initiator specified as a parameter

#### Parameters

##### id `String`

The id of the ajax request initiator control

##### ajaxSettings `Array`

The RadAjaxManager ajax settings

#### Returns

`None` 

### get_ajaxSettings

Gets the current ajax settings of the RadAjaxManager

#### Parameters

#### Returns

`Array` 

### set_enableAJAX

true

#### Parameters

##### boolean `Object`

#### Returns

`Object` 

### get_defaultLoadingPanelID

Gets the id of the default loading panel of the RadAjaxManager

#### Parameters

#### Returns

`String` 

### get_updatePanelsRenderMode

Gets the current update panels render mode of the RadAjaxManager

#### Parameters

#### Returns

`Number` 

### get_enableAJAX

True

#### Parameters

#### Returns

`Object` 

### set_defaultLoadingPanelID

Sets the id of the default loading panel of the RadAjaxManager

#### Parameters

##### value `String`

#### Returns

`None` 

## Events

### RequestStart

Fire aftre the ajax request begin.

#### Event Data

#####  sender `Telerik.Web.UI.RadAjaxManager`

The instance of the RadAjaxManager raised the event.

##### args `Telerik.Web.UI.AjaxRequestEventArgs`

The event arguments.

### ResponseEnd

Fire aftre the ajax request ends.

#### Event Data

#####  sender `Telerik.Web.UI.RadAjaxManager`

The instance of the RadAjaxManager raised the event.

##### args `Telerik.Web.UI.AjaxRequestEventArgs`

The event arguments.