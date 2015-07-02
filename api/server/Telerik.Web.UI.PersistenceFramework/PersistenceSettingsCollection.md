---
title: Telerik.Web.UI.PersistenceFramework.PersistenceSettingsCollection
page_title: Telerik.Web.UI.PersistenceFramework.PersistenceSettingsCollection
description: Telerik.Web.UI.PersistenceFramework.PersistenceSettingsCollection
---

# Telerik.Web.UI.PersistenceFramework.PersistenceSettingsCollection

Collection of RadStatePersisterManager settings

## Inheritance Hierarchy

* System.Object
* System.Collections.CollectionBase
* Telerik.Web.UI.PersistenceFramework.PersistenceSettingsCollection

## Properties

###  Item `PersistenceSetting`

PersistenceSetting indexer

## Methods

###  Add

Adds a PersistenceSetting to the end of the PersistenceSettingsCollection

#### Parameters

#### setting `Telerik.Web.UI.PersistenceSetting`

PersistenceSetting object

#### Returns

`System.Int32` PersistenceSetting index at which the PersistenceSetting has been added

###  Remove

Removes the first occurrence of a specific PersistenceSetting from the PersistenceSettingsCollection

#### Parameters

#### setting `Telerik.Web.UI.PersistenceSetting`

PersistenceSetting object

#### Returns

`System.Void` 

###  Contains

Determines whether the PersistenceSettingsCollection contains a specific PersistenceSetting

#### Parameters

#### setting `Telerik.Web.UI.PersistenceSetting`

PersistenceSetting object

#### Returns

`System.Boolean` Returns true if the PersistenceSettingsCollection contains the specified PersistenceSetting; otherwise, false

###  IndexOf

Searches for the specified PersistenceSetting and returns the zero-based index of the first occurrence within the entire PersistenceSettingsCollection

#### Parameters

#### setting `Telerik.Web.UI.PersistenceSetting`

PersistenceSetting object

#### Returns

`System.Int32` The zero-based index of the first occurrence of PersistenceSetting within the entire PersistenceSettingsCollection, if found; otherwise, -1

###  Insert

Inserts a PersistenceSetting into the PersistenceSettingsCollection at the specified index

#### Parameters

#### index `System.Int32`

The zero-based index at which the PersistenceSetting should be inserted

#### setting `Telerik.Web.UI.PersistenceSetting`

PersistenceSetting object

#### Returns

`System.Void` 

###  AddSetting

Adds a PersistenceSetting to the end of the PersistenceSettingsCollection

#### Parameters

#### controlToPersist `System.Web.UI.Control`

Type of the control to persist

#### Returns

`System.Void` 

###  AddSetting

Adds a PersistenceSetting to the end of the PersistenceSettingsCollection

#### Parameters

#### controlID `System.String`

The ID of the control to persist

#### Returns

`System.Void` 

###  AddSetting

Adds a PersistenceSetting to the end of the PersistenceSettingsCollection

#### Parameters

#### controlType `System.Type`

Type of the controls to persist

#### Returns

`System.Void` 

