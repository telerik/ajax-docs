---
title: Overview
page_title: Server-side Programming Overview | RadPersistenceFramework for ASP.NET AJAX Documentation
description: Overview
slug: persistenceframework/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-Side Programming Overview



## RadPersistenceManager

**RadPersistenceManager** is the main control responsible for persistence of the control settings. Only one instance should be placed per application. Following is a list of useful methods, properties and events:


| Name | Description |
| ------ | ------ |
| **StorageProviderKey** (property)|Unique key used by the storage provider to identify the persisted state.|
| **SerializationProvider** (property)|Get/set the serialization provider used by **RadPersistenceManager** for control state serialization. Default provider is **XmlStateSerializer** which serializes the state in XML.|
| **StorageProvider** (property)|Get/set the storage provider used by **RadPersistenceManager** for storing the serialized control state. Default storage provider is **AppDataStorageProvider** which stores the state in the **AppData** folder by using the **StorageProviderKey** as a file name.|
| **PersistenceSettings** (property)|Exposes the control settings describing which controls will be persisted.|
| **EnablePersistence** (property)|This property toggles the **RadPersistenceManager** functionality.|
| **SaveState** (method)|Invoke this method to begin saving the state.|
| **LoadState** (method)|This method will restore the saved state to the corresponding controls.|
| **GetCurrent** (method)|Returns the current instance of the **RadPersistenceManager** control.|
| **SaveCustomSettings** (event)|This event should be used to pass the custom settings to be persisted by the **RadPersistenceManager** control.|
| **LoadCustomSettings** (event)|**RadPersistenceManager** returns the deserialized custom settings in the event arguments of this event.|

## RadPersistenceManagerProxy

**RadPersistenceManagerProxy** helps configure the persistence in scenarios where **MasterPage** and/or user controls are used.In this case, **RadPersistenceManager** should be placed on the **MasterPage**. For each content page and/or user control where persistence is needed a **RadPersistenceManagerProxy** should be used.


| Name | Description |
| ------ | ------ |
| **PersistenceSettings** (property)|Exposes the control settings describing which controls will be persisted.|

## PersistenceSetting

This setting holds the information for the control(s) that will be persisted by **RadPersistenceManager**.


| Name | Description |
| ------ | ------ |
| **SettingType** (property)|Identifies the setting type (**ControlType**, **ControlInstance**, or **ControlID**).|
| **ControlID** (property)|Persist a control by its ID.|
| **ControlType** (property)|Persist controls by their type.|
| **ControlInstance** (property)|Persist control instance.|

## ControlSetting

This setting is used by the event arguments of the **SaveCustomSettings** / **LoadCustomSettings** events (exposed via the **CustomSettings** property).


| Name | Description |
| ------ | ------ |
| **Name** (property)|The name of the custom control setting.|
| **Value** (property)|Persist a control by its ID.|
| **ControlType** (property)|The value of the setting.|

# See Also

 * [ControlSetting Members](http://www.telerik.com/help/aspnet-ajax/allmembers_t_telerik_web_ui_controlsetting.html)

 * [PersistenceSetting Members](http://www.telerik.com/help/aspnet-ajax/allmembers_t_telerik_web_ui_persistencesetting.html)

 * [RadPersistenceManager Members](http://www.telerik.com/help/aspnet-ajax/allmembers_t_telerik_web_ui_radpersistencemanager.html)

 * [RadPersistenceManagerProxy Members](http://www.telerik.com/help/aspnet-ajax/allmembers_t_telerik_web_ui_radpersistencemanagerproxy.html)
