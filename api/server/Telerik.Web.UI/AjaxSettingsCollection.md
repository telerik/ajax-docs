---
title: Telerik.Web.UI.AjaxSettingsCollection
page_title: Telerik.Web.UI.AjaxSettingsCollection
description: Telerik.Web.UI.AjaxSettingsCollection
---

# Telerik.Web.UI.AjaxSettingsCollection

AjaxSettings collection. 
            See http://docs.telerik.com/devtools/aspnet-ajax/controls/ajax/radajaxmanager/how-to/add-ajaxsettings-programmatically AjaxSettingsfor more information.

## Inheritance Hierarchy

* System.Object
* System.Collections.CollectionBase
* Telerik.Web.UI.AjaxSettingsCollection

## Properties

###  Item `AjaxSetting`

Default indexer for the collection.

## Methods

###  Add

Adds an item to the collection.

#### Parameters

#### ajaxSetting `Telerik.Web.UI.AjaxSetting`

An instance of AjaxSetting to be added.

#### Returns

`System.Int32` 

###  AddAjaxSetting

This method adds a new AjaxSetting to the collection by building one from its
            parameters.

#### Parameters

#### ajaxifiedControl `System.Web.UI.Control`

The web control to be ajaxified (the initiator of the AJAX request)

#### updatedControl `System.Web.UI.Control`

The web control that has to be updated.

#### Returns

`System.Void` 

###  AddAjaxSetting

This method adds a new AjaxSetting to the collection by building one from its
            parameters.

#### Parameters

#### ajaxifiedControl `System.Web.UI.Control`

The web control to be ajaxified (the initiator of the AJAX request).

#### updatedControl `System.Web.UI.Control`

The web control that has to be updated.

#### loadingPanel `Telerik.Web.UI.RadAjaxLoadingPanel`

The loading panel which will be shown during the ajax request.

#### Returns

`System.Void` 

###  AddAjaxSetting

This method adds a new AjaxSetting to the collection by building one from its
            parameters.

#### Parameters

#### ajaxifiedControl `System.Web.UI.Control`

The web control to be ajaxified (the initiator of the AJAX request).

#### updatedControl `System.Web.UI.Control`

The web control that has to be updated.

#### loadingPanel `Telerik.Web.UI.RadAjaxLoadingPanel`

The loading panel which will be shown during the ajax request.

#### renderMode `System.Web.UI.UpdatePanelRenderMode`

The render mode which determines if the rendered content will be 
            inside of <div> or <span> HTML element.

#### Returns

`System.Void` 

###  AddAjaxSetting

This method adds a new AjaxSetting to the collection by building one from its
            parameters.

#### Parameters

#### ajaxifiedControl `System.Web.UI.Control`

The web control to be ajaxified (the initiator of the AJAX request).

#### updatedControl `System.Web.UI.Control`

The web control that has to be updated.

#### loadingPanel `Telerik.Web.UI.RadAjaxLoadingPanel`

The loading panel.

#### renderMode `System.Web.UI.UpdatePanelRenderMode`

The render mode which determines if the rendered content will be 
            inside of <div> or <span> HTML element.

#### updatePanelHeight `System.Web.UI.WebControls.Unit`

Determines the height of the update panel.

#### Returns

`System.Void` 

###  Contains

Checks wether the item is present in the collection.

#### Parameters

#### ajaxSetting `Telerik.Web.UI.AjaxSetting`

An instance of AjaxSetting

#### Returns

`System.Boolean` 

###  IndexOf

Determines the index of the specified item.

#### Parameters

#### ajaxSetting `Telerik.Web.UI.AjaxSetting`

An instance of AjaxSetting

#### Returns

`System.Int32` 

###  Insert

Inserts an item at the specificed index in the collection.

#### Parameters

#### index `System.Int32`

The index at which the setting will be inserted

#### ajaxSetting `Telerik.Web.UI.AjaxSetting`

An instance of AjaxSetting

#### Returns

`System.Void` 

###  Remove

Removes an item from the collection.

#### Parameters

#### ajaxSetting `Telerik.Web.UI.AjaxSetting`

An instance of AjaxSetting to be removed

#### Returns

`System.Void` 

