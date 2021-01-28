---
title: SaveCustomSettings
page_title: SaveCustomSettings - RadPersistenceFramework
description: Check our Web Forms article about SaveCustomSettings.
slug: persistenceframework/server-side-programming/events/savecustomsettings
tags: savecustomsettings
published: True
position: 1
---

# SaveCustomSettings event

**SaveCustomSettings** server-side event is raised by the SaveState() method of **RadPersistenceManager** and can be used to store custom settings to be used when restoring the state.

The example below demonstrates how to store **CustomSettings** from a hidden field:

````ASP.NET
<asp:HiddenField ID="wndStateHolder" runat="server" />

<telerik:RadPersistenceManager id="persistenceMngr" runat="server"
	OnSaveCustomSettings="persistenceMngr_SaveCustomSettings" OnLoadCustomSettings="persistenceMngr_LoadCustomSettings">
</telerik:RadPersistenceManager>

<telerik:RadButton RenderMode="Lightweight" ID="saveBtn" Text="Save State" runat="server" Width="67px" OnClick="saveBtn_Click">
</telerik:RadButton>
<telerik:RadButton RenderMode="Lightweight" ID="loadBtn" Text="Load State" runat="server" Width="67px" OnClick="loadBtn_Click">
</telerik:RadButton>
````
````C#
protected void persistenceMngr_SaveCustomSettings(object sender, Telerik.Web.UI.PersistenceManagerSaveStateEventArgs e)
{
	e.CustomSettings.Add(new Telerik.Web.UI.ControlSetting() { Name = "pos", Value = wndStateHolder.Value });
}

protected void saveBtn_Click(object sender, EventArgs e)
{
	string fileId = Session["CustomPersistenceSettingsKey"].ToString();
	persistenceMngr.StorageProviderKey = fileId;
	persistenceMngr.SaveState();
}
````
````VB
Protected Sub persistenceMngr_SaveCustomSettings(sender As Object, e As Telerik.Web.UI.PersistenceManagerSaveStateEventArgs)
	e.CustomSettings.Add(New Telerik.Web.UI.ControlSetting() With { _
		.Name = "pos", _
		.Value = wndStateHolder.Value _
	})
End Sub

Protected Sub saveBtn_Click(sender As Object, e As EventArgs)
	Dim fileId As String = Session("CustomPersistenceSettingsKey").ToString()
	persistenceMngr.StorageProviderKey = fileId
	persistenceMngr.SaveState()
End Sub
````


## See Also

 * [PersistenceFramework - Custom Settings](https://demos.telerik.com/aspnet-ajax/persistenceframework/examples/customsettings/defaultcs.aspx)
