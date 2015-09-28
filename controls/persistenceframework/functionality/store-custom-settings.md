---
title: Store Custom Settings
page_title: Store Custom Settings | RadPersistenceFramework for ASP.NET AJAX Documentation
description: Store Custom Settings
slug: persistenceframework/functionality/store-custom-settings
tags: custom,store,provider
published: True
position: 1
---

#  Store Custom Settings

Since **Q3 2015** version of **UI for ASP.NET AJAX** a new functionality of **RadPersistenceFramework** was added which allows you to store custom settings. Until this version all settings of a control were persisted and removing a single setting was not supported. Nevertheless, currently there is two events which allows you to remove a single setting or all of them. The first event is called **LoadSettings** and fires after calling **RadPersistenceManager.LoadState** method but before actually loading the settings so the user can remove the desired settings (if any). The second event is called **SaveSettings** and fires after calling **RadPersistenceManager.SaveState** method but before actually writing the settings using the chosen provider so the user can prevent any of these from saving in the corresponding storage. Both events have **Settings** property in the event arguments which should be used for accessing/modifying the RadControlState collection. The custom settings (if any) will also be available through that property.

## Accessing control settings

In order to get a control settings collection we have added two methods. the first one is **FindByUniqueId** that returns the first RadControlState instance which matches the specified unique id. The second one named **FindByUniqueKey** is the same as the previous one but the difference is that in some cases it is possible that there are two different controls with the same unique id's. For that case, the persistence framework will generate that unique key. These methods will work for **List<RadControlState>** only that is available through the event arguments of the **LoadSettings** and **SaveSettings** events. The RadControlState object holds all the settings for the given control. 

The example below demonstrates how to access the grid settings and remove the current page from persisting.

````C#
protected void RadPersistenceManager1_SaveSettings(object sender, PersistenceManagerSaveAllStateEventArgs e)
{
	var gridSetting = e.Settings.FindByUniqueId("RadGrid1");
	if (gridSetting != null)
	{
		for (int i = 0; i < gridSetting.ControlSettings.Count; i++)
		{
			if (gridSetting.ControlSettings[i].Name.Contains("CurrentPageIndex"))
			{
				gridSetting.ControlSettings.Remove(gridSetting.ControlSettings[i]);
			}
		}
	}
}
````
````VB
Protected Sub RadPersistenceManager1_SaveSettings(sender As Object, e As PersistenceManagerSaveAllStateEventArgs)
	Dim gridSetting = e.Settings.FindByUniqueId("RadGrid1")
	If gridSetting IsNot Nothing Then
		For i As Integer = 0 To gridSetting.ControlSettings.Count - 1
			If gridSetting.ControlSettings(i).Name.Contains("CurrentPageIndex") Then
				gridSetting.ControlSettings.Remove(gridSetting.ControlSettings(i))
			End If
		Next
	End If
End Sub
````

The same approach could be used in case you need to persist the setting but you do not want to apply it to the appropriate control. For this purpose you have to use **LoadSettings** event.

## Remove control settings

The aforementioned code snippet demonstrates how to remove a single setting from the setting collection. Nevertheless, there are cases when you do not want to persist or load all settings of a control. For such cases you can use **RemoveByUniqueId** and **RemoveByUniqueKey** methods. The first one removes the first **RadControlsState** instance from the collection which matches the given unique id. Returns true if successful, otherwise the method will return false. The second one do the same as the previous one only this time this will work with unique key instead of unique id. 

````C#
protected void RadPersistenceManager1_LoadSettings(object sender, PersistenceManagerSaveAllStateEventArgs e)
{
	bool isSuccess = e.Settings.RemoveByUniqueId("RadGrid2");
	if (isSuccess) { doSomething(); }
}
````
````VB
Protected Sub RadPersistenceManager1_LoadSettings(sender As Object, e As PersistenceManagerSaveAllStateEventArgs)
	Dim isSuccess As Boolean = e.Settings.RemoveByUniqueId("RadGrid2")
	If isSuccess Then
		doSomething()
	End If
End Sub
````

## See Also

 * [Server-side Programming]({%slug persistenceframework/server-side-programming/overview%})






 
