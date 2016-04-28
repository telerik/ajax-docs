---
title: Telerik.Web.UI.PivotGridConfigurationPanel
page_title: Client-side API Reference
description: Telerik.Web.UI.PivotGridConfigurationPanel
slug: Telerik.Web.UI.PivotGridConfigurationPanel
---

# Telerik.Web.UI.PivotGridConfigurationPanel : Sys.UI.Control 

## Inheritance Hierarchy

* Sys.UI.Control
* *[Telerik.Web.UI.PivotGridConfigurationPanel]({%slug Telerik.Web.UI.PivotGridConfigurationPanel%})*


## Methods

###  get_deferLayoutUpdateCheckBox

Gets the html input element which determines if the updates will be made on every operation or only when clicking the Update button.

#### Parameters

#### Returns

`Object` Gets the html input element which determines if the updates will be made on every operation or only when clicking the Update button.

### get_fields

Gets the collection of Telerik.Web.UI.PivotGridField items which are part of the configuration panel.

#### Parameters

#### Returns

`Array`  The collection of Telerik.Web.UI.PivotGridField items which are part of the configuration panel. 

### get_isDeferedLayoutUpdate

Gets if the defered layout update is enabled which determines if the changes will be applied after every operation or only when clicking the Update button.

#### Parameters

#### Returns

`Boolean` The defered layout update determines if the changes will be applied after every operation or only when clicking the Update button.

### get_layoutType

Gets the panel layout which could be altered on the client and its default type could be changed by setting on of the four available values.

#### Parameters

#### Returns

`Telerik.Web.UI.PivotGridConfigurationPanelLayoutType`  The current configuration panel layout type. 

### get_owner

Gets the owner pivot grid.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPivotGrid` The owner pivot grid.

### get_treeView

#### Parameters

#### Returns

`None` 

### get_updateButton

Gets the html button element which is enabled when get_isDeferedLayoutUpdate returns true and performs postback updating the RadPivotGrid control.

#### Parameters

#### Returns

`Object` The 

### set_layoutType

Sets a value indicating whether the row header zone of the PivotGrid will be shown.

#### Parameters

##### value `Telerik.Web.UI.PivotGridConfigurationPanelLayoutType`

 The new layout type. 

#### Returns

`None` 

### update

Updates the RadPivotGrid layout after configuration panel operations.

#### Parameters

##### forceUpdate `Boolean`

 Set to true if update should happen no matter what.

#### Returns

`None` 



