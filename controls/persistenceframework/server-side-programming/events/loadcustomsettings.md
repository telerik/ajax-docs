---
title: LoadCustomSettings
page_title: LoadCustomSettings | UI for ASP.NET AJAX Documentation
description: LoadCustomSettings
slug: persistenceframework/server-side-programming/events/loadcustomsettings
tags: loadcustomsettings
published: True
position: 0
---

# LoadCustomSettings



__LoadCustomSettings__ server-side event is raised by the LoadState() method of RadPersistenceManager and can be used to	get previously stored custom settings

The example below demonstrates how to read the CustomSettings and pass them to a hidden field:

````ASPNET
				<asp:HiddenField ID="wndStateHolder" runat="server" />
	
				<telerik:RadPersistenceManager id="persistenceMngr" runat="server"
					OnSaveCustomSettings="persistenceMngr_SaveCustomSettings" OnLoadCustomSettings="persistenceMngr_LoadCustomSettings">
				</telerik:RadPersistenceManager>
	
				<telerik:RadButton ID="saveBtn" Text="Save State" runat="server" Width="67px" OnClick="saveBtn_Click">
				</telerik:RadButton>
				<telerik:RadButton ID="loadBtn" Text="Load State" runat="server" Width="67px" OnClick="loadBtn_Click">
				</telerik:RadButton>
````



>tabbedCode

````C#
		protected void loadBtn_Click(object sender, EventArgs e)
		{
			string fileId = Session["CustomPersistenceSettingsKey"].ToString();
			string FilePath = String.Format("{0}{2}{1}", MapPath("~/App_Data"), fileId, "\\");
			if (File.Exists(FilePath))
			{
				persistenceMngr.StorageProviderKey = fileId;
				persistenceMngr.LoadState();
			}
		}
	
		protected void persistenceMngr_LoadCustomSettings(object sender, Telerik.Web.UI.PersistenceManagerLoadStateEventArgs e)
		{
			foreach (ControlSetting setting in e.CustomSettings.ControlSettings)
			{
				if (setting.Name == "pos")
					wndStateHolder.Value = (string)setting.Value;
			}
		}
````
````VB.NET
		Protected Sub loadBtn_Click(sender As Object, e As EventArgs)
			Dim fileId As String = Session("CustomPersistenceSettingsKey").ToString()
			Dim FilePath As String = [String].Format("{0}{2}{1}", MapPath("~/App_Data"), fileId, "\")
			If File.Exists(FilePath) Then
				persistenceMngr.StorageProviderKey = fileId
				persistenceMngr.LoadState()
			End If
		End Sub
	
		Protected Sub persistenceMngr_LoadCustomSettings(sender As Object, e As Telerik.Web.UI.PersistenceManagerLoadStateEventArgs)
			For Each setting As ControlSetting In e.CustomSettings.ControlSettings
				If setting.Name = "pos" Then
					wndStateHolder.Value = DirectCast(setting.Value, String)
				End If
			Next
		End Sub
````
>end

# See Also

 * [PersistenceFramework - Custom Settings](http://demos.telerik.com/aspnet-ajax/persistenceframework/examples/customsettings/defaultcs.aspx)
