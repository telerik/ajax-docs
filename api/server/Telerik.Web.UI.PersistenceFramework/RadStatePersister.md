---
title: Telerik.Web.UI.PersistenceFramework.RadStatePersister
page_title: Telerik.Web.UI.PersistenceFramework.RadStatePersister
description: Telerik.Web.UI.PersistenceFramework.RadStatePersister
---

# Telerik.Web.UI.PersistenceFramework.RadStatePersister

State Persister Base Abstract class. Should be implemented for each control. ReadSettings / ApplySettings methods can be generated with T4 Template

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PersistenceFramework.RadStatePersister : IStatePersister

## Methods

###  SaveState

Saves the state of the corresponding control using the assigned StateSerializer and StateStorageProvider

#### Remarks
Raises StateSave event

#### Parameters

#### ctrl `System.Web.UI.Control`

RadControl instance which state should be saved

#### Returns

`System.Void` 

###  SaveState

Saves the state of the corresponding control using the assigned StateSerializer and StateStorageProvider

#### Remarks
Raises StateSave event

#### Parameters

#### ctrl `System.Web.UI.Control`

RadControl instance which state should be saved

#### key `System.String`

The indentifier under which the state will be saved.

#### Returns

`System.Void` 

###  LoadState

Loads the state to the corresponding control using the assigned StateSerializer and StateStorageProvider

#### Remarks
This method should be usable only when StateSerializer and StateStorageProvider are assigned to the StatePersister.This method should raise StateLoading event

#### Parameters

#### ctrl `System.Web.UI.Control`

RadControl instance which state should be loaded

#### key `System.String`

The indentifier under which the state is saved.

#### Returns

`System.Void` 

###  LoadState

Loads the state to the provided control

#### Remarks
This method should raise StateLoading event

#### Parameters

#### ctrl `System.Web.UI.Control`

Control that should receive the provided state

#### state `Telerik.Web.UI.RadControlState`

instance that will be applied to the provided control

#### Returns

`System.Void` 

###  ReadSettings

Reads the control's settings.

#### Returns

`System.Void` 

###  ApplySettings

Applys the control's settings. This method will be generated using T4 Template.

#### Returns

`System.Void` 

###  OnStateSave

#### Returns

`System.Void` 

###  OnStateLoad

#### Returns

`System.Void` 

