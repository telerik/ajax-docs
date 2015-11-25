---
title: LoadSettings
page_title: LoadSettings | RadPersistenceFramework for ASP.NET AJAX Documentation
description: LoadSettings
slug: persistenceframework/server-side-programming/events/loadsettings
tags: loadsettings
published: True
position: 2
---

# LoadSettings event

**LoadSettings** is a server-side event that fires after calling **LoadState()** method of **RadPersistenceManager** but before actually loading the settings so the user can remove the desired settings.

The example below demonstrates how to remove a grid settings before loading the saved state.

````C#
protected void RadPersistenceManager1_LoadSettings(object sender, PersistenceManagerSaveAllStateEventArgs e)
{
	var gridSetting = e.Settings.FindByUniqueId("RadGrid2");
	if (gridSetting != null)
	{
		e.Settings.RemoveByUniqueId("RadGrid2");
	}
}
````
````VB
Protected Sub RadPersistenceManager1_LoadSettings(sender As Object, e As PersistenceManagerSaveAllStateEventArgs)
	Dim gridSetting = e.Settings.FindByUniqueId("RadGrid2")
	If gridSetting IsNot Nothing Then
		e.Settings.RemoveByUniqueId("RadGrid2")
	End If
End Sub
````

## See Also

 * [PersistenceFramework - Store Custom Settings]({%slug persistenceframework/functionality/store-custom-settings%})
