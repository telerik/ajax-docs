---
title: Telerik.Web.UI.RadAjaxPanel
page_title: Client-side API Reference
description: Telerik.Web.UI.RadAjaxPanel
slug: Telerik.Web.UI.RadAjaxPanel
---

# Telerik.Web.UI.RadAjaxPanel : Telerik.Web.UI.RadAjaxControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadAjaxControl]({%slug Telerik.Web.UI.RadAjaxControl%})
* *[Telerik.Web.UI.RadAjaxPanel]({%slug Telerik.Web.UI.RadAjaxPanel%})*


## Methods

### get_enableHistory

True if browser history is enabled during AJAX requests.

#### Parameters

#### Returns

`Object` 

### get_loadingPanelID

Gets the id of the loading panel of the RadAjaxPanel

#### Parameters

#### Returns

`String` 

### set_ajaxSettings

Sets the array of objects representing the AjaxSettings.

#### Parameters

##### Array `Array`

#### Returns

`Object` 

### set_defaultLoadingPanelID

Sets the DefaultLoadingPanelID

#### Parameters

##### string `Object`

#### Returns

`Object` 

### set_enableAJAX

Allows or blocks the request to be executed through AJAX. Pass True to allow AJAX, False to have the request fulfilled through a standard postback.

#### Parameters

##### boolean `Object`

#### Returns

`Object` 

### set_enableHistory

Allows browser history during AJAX requests. Pass True to allow browser history during AJAX requests.

#### Parameters

##### boolean `Object`

#### Returns

`Object` 

### set_loadingPanelID

Sets the id of the loading panel of the RadAjaxPanel

#### Parameters

#### Returns

`String`


## Events

### RequestStart

Fire aftre the ajax request begin.

#### Event Data

#####  sender `Telerik.Web.UI.RadAjaxPanel`

The instance of the RadAjaxPanel raised the event.

##### args `Telerik.Web.UI.AjaxRequestEventArgs`

The event arguments.

### ResponseEnd

Fire aftre the ajax request ends.

#### Event Data

#####  sender `Telerik.Web.UI.RadAjaxPanel`

The instance of the RadAjaxPanel raised the event.

##### args `Telerik.Web.UI.AjaxRequestEventArgs` 

The event arguments.

