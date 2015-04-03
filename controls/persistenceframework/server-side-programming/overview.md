---
title: Server-Side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: persistenceframework/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-Side Programming Overview



## RadPersistenceManager

RadPersistenceManager is the main control responsible for persistenceof the control settings. Only one instance should be placed per application. Following is a list of useful methods, properties and events:


| Name | Description |
| ------ | ------ |
| __StorageProviderKey__ (property)|Unique key used by the storage provider to identify the persisted state.|
| __SerializationProvider__ (property)|Get/set the serialization provider used by RadPersistenceManager for control state serialization. Default provider is	XmlStateSerializer which serializes the state in XML.|
| __StorageProvider__ (property)|Get/set the storage provider used by RadPersistenceManager for storing the serialized control state.	Default storage provider is AppDataStorageProvider which stores the state in the AppData folder by using the StorageProviderKey as a file name.|
| __PersistenceSettings__ (property)|Exposes the control settings describing which controls will be persisted.|
| __EnablePersistence__ (property)|This property toggles the RadPersistenceManager functionality.|
| __SaveState__ (method)|Invoke this method to begin saving the state.|
| __LoadState__ (method)|This method will restore the saved state to the corresponding controls.|
| __GetCurrent__ (method)|Returns the current instance of the RadPersistenceManager control.|
| __SaveCustomSettings__ (event)|This event should be used to pass the custom settings to be persisted by the RadPersistenceManager control.|
| __LoadCustomSettings__ (event)|RadPersistenceManager returns the deserialized custom settings in the event arguments of this event.|

## RadPersistenceManagerProxy

RadPersistenceManagerProxy helps configure the persistence in scenarios where MasterPage and/or user controls are used.In this case, the RadPersistenceManager should be placed in the MasterPage.For each content page and/or user control where persistence is needed a RadPersistenceManagerProxy should be used.


| Name | Description |
| ------ | ------ |
| __PersistenceSettings__ (property)|Exposes the control settings describing which controls will be persisted.|

## PersistenceSetting

This setting holds the information for the control(s) that will be persisted by RadPersistenceManager.


| Name | Description |
| ------ | ------ |
| __SettingType__ (property)|Identifies the setting type (ControlType, ControlInstance, or ControlID).|
| __ControlID__ (property)|Persist a control by its ID.|
| __ControlType__ (property)|Persist controls by their type.|
| __ControlInstance__ (property)|Persist control instance.|

## ControlSetting

This setting is used by the event arguments of the SaveCustomSettings / LoadCustomSettings events (exposed via the CustomSettings property).


| Name | Description |
| ------ | ------ |
| __Name__ (property)|The name of the custom control setting.|
| __Value__ (property)|Persist a control by its ID.|
| __ControlType__ (property)|The value of the setting.|

# See Also

 * [ControlSetting Members](http://www.telerik.com/help/aspnet-ajax/allmembers_t_telerik_web_ui_controlsetting.html)

 * [PersistenceSetting Members](http://www.telerik.com/help/aspnet-ajax/allmembers_t_telerik_web_ui_persistencesetting.html)

 * [RadPersistenceManager Members](http://www.telerik.com/help/aspnet-ajax/allmembers_t_telerik_web_ui_radpersistencemanager.html)

 * [RadPersistenceManagerProxy Members](http://www.telerik.com/help/aspnet-ajax/allmembers_t_telerik_web_ui_radpersistencemanagerproxy.html)
