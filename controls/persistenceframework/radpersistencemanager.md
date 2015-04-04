---
title: RadPersistenceManager
page_title: RadPersistenceManager | UI for ASP.NET AJAX Documentation
description: RadPersistenceManager
slug: persistenceframework/radpersistencemanager
tags: radpersistencemanager
published: True
position: 3
---

# RadPersistenceManager



RadPersistenceManager is the main control from Telerik's Persistence Framework. RadPersistenceManager provides centralized configuration point for	Telerik controls' state persistence.

The main features of RadPersistenceManager are:

* Define visually and codeless(in Visual Studio design-time) Telerik controls whos state should be stored.

* No need to modify your application logic.

* No need to write JavaScript to restore controls client state.

>caution Note that you cannot have more than one RadPersistenceManager in a singe page. In case of MasterPage and / or WebUserControl, the best option isto use RadPersistenceManager on the master/main page and use[RadPersistenceManagerProxy]({%slug persistenceframework/radpersistencemanagerproxy%})in the content page / WebUserControl.
>


## Configure state persistence in Configuration Wizard

RadPersistenceManager comes with a visual builder for setting up the controls that should be persisted. You can access the Configuration Wizard from the RadPersistenceManager's SmartTag.The Wizard's dialog will contain a list of the supported Telerik controls that present in the same NamingContaner as the RadPersistenceManager and you can easily select specific control(s) for persistence.![persistence-framework-configuration-wizard](images/persistence-framework-configuration-wizard.png)

## Configure state persistence in the markup

Declaratively you can define PersistenceSetting by ControlId defining single control to be persisted.

````ASPNET
			<telerik:RadPersistenceManager ID="RadPersistenceManager1" runat="server">
				<PersistenceSettings>
					<telerik:PersistenceSetting ControlID="RadTreeView1" />
				</PersistenceSettings>
			</telerik:RadPersistenceManager>
````



## Configure state persistence in the code behind

In code-behind you can add persistence settings to define controls in three different ways:

1. Define PersistenceSetting by control's ID - define single control for persistence



````C#
			RadPersistenceManager1.PersistenceSettings.AddSetting("RadTreeView1");//add setting by control's ID
````
````VB.NET
			'add setting by control's ID
			RadPersistenceManager1.PersistenceSettings.AddSetting("RadTreeView1")
````


1. Define PersistenceSetting by control's instance - define single control for persistence



````C#
			RadPersistenceManager1.PersistenceSettings.AddSetting(RadTreeView1);//add setting by control's instance
````
````VB.NET
			'add setting by control's instance
			RadPersistenceManager1.PersistenceSettings.AddSetting(RadTreeView1)
````


1. Define PersistenceSetting by control's type - define all controls of specific type for persistence



````C#
			RadPersistenceManager1.PersistenceSettings.AddSetting(typeof(RadTreeView));//add setting by control's type
````
````VB.NET
			'add setting by control's type
			RadPersistenceManager1.PersistenceSettings.AddSetting(GetType(RadTreeView))
````

