---
title: SaveSettings
page_title: SaveSettings - RadPersistenceFramework
description: Check our Web Forms article about SaveSettings.
slug: persistenceframework/server-side-programming/events/savesettings
tags: savesettings
published: True
position: 3
---

# SaveSettings event

**SaveSettings** is a server-side event that fires after calling **SaveState()** method of **RadPersistenceManager** but before actually writing the settings using the chosen provider so the user can prevent any of these from saving in the corresponding storage.

The example below demonstrates how to remove a grid settings before saving the state.

````C#
protected void RadPersistenceManager1_SaveSettings(object sender, PersistenceManagerSaveAllStateEventArgs e)
{
	var gridSetting = e.Settings.FindByUniqueId("RadGrid2");
	if (gridSetting != null)
	{
		e.Settings.RemoveByUniqueId("RadGrid2");
	}
}
````
````VB
Protected Sub RadPersistenceManager1_SaveSettings(sender As Object, e As PersistenceManagerSaveAllStateEventArgs)
	Dim gridSetting = e.Settings.FindByUniqueId("RadGrid2")
	If gridSetting IsNot Nothing Then
		e.Settings.RemoveByUniqueId("RadGrid2")
	End If
End Sub
````

## See Also

 * [PersistenceFramework - Store Custom Settings]({%slug persistenceframework/functionality/store-custom-settings%})
