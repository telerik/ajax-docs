---
title: Telerik.Web.UI.RadPersistenceManager
page_title: Telerik.Web.UI.RadPersistenceManager
description: Telerik.Web.UI.RadPersistenceManager
---

# Telerik.Web.UI.RadPersistenceManager

RadPersistenceManager control

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadPersistenceManager

## Properties

###  EnablePersistence `Boolean`

This property toggles the RadPersistenceManager functionality

###  PersistenceSettings `PersistenceSettingsCollection`

Collection of settings for RadPersistenceManager

###  SerializationProvider `IStateSerializer`

Gets/set the serialization provider used for data serialization. Default value is XmlStateSerializer.

###  StorageProvider `IStateStorageProvider`

Gets/set the storage provider used for data storage. Default value is AppDataStorageProvider.

###  StorageProviderKey `String`

Unique key used by the Storage Provider to identify the persisted state

## Methods

###  GetCurrent

Returns the current instance of the RadPersistenceManager

#### Parameters

#### page `System.Web.UI.Page`

Page object

#### Returns

`Telerik.Web.UI.RadPersistenceManager` 

###  LoadState

Instructs the RadPersistenceManager to begin loading the state

#### Returns

`System.Void` 

###  OnLoadCustomSettings

Raises the LoadCustomSettings event

#### Parameters

#### e `Telerik.Web.UI.PersistenceManagerLoadStateEventArgs`

PesistenceManagerLoadStateEventArgs object

#### Returns

`System.Void` 

###  OnLoadSettings

Raises the LoadSettings event

#### Parameters

#### e `Telerik.Web.UI.PersistenceManagerLoadAllStateEventArgs`

PesistenceManagerLoadAllStateEventArgs object

#### Returns

`System.Void` 

###  OnSaveCustomSettings

Raises the SaveCustomSettings event

#### Parameters

#### e `Telerik.Web.UI.PersistenceManagerSaveStateEventArgs`

PesistenceManagerSaveStateEventArgs object

#### Returns

`System.Void` 

###  OnSaveSettings

Raises the SaveSettings event

#### Parameters

#### e `Telerik.Web.UI.PersistenceManagerSaveAllStateEventArgs`

PesistenceManagerSaveAllStateEventArgs object

#### Returns

`System.Void` 

###  SaveState

Instructs the RadPersistenceManager to begin saving the state

#### Returns

`System.Void` 

