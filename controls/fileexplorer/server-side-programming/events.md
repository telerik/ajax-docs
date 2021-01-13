---
title: Events
page_title: Events | RadFileExplorer for ASP.NET AJAX Documentation
description: Events
slug: fileexplorer/server-side-programming/events
tags: events
published: True
position: 1
---

# Events

The **RadFileExplorer** control provides the following server side events:

* [ItemCommand](#itemcommand)
* [ExplorerPopulated](#explorerpopulated)

## ItemCommand

Called on the following commands executed by the user:

* **UploadFile** - fired before each uploaded file is saved
* **CreateDirectory** - fired before the file explorer creates a new folder
* **DeleteDirectory** - fired before the file explorer deletes a folder
* **DeleteFile** - fired before a file is deleted
* **MoveFile** - fired before a file is moved/renamed
* **MoveDirectory** - fired before a directory is moved/renamed
* **CopyFile** - fired before a file is copied
* **CopyDirectory** - fired before the file explorer copies a folder

````ASP.NET
<telerik:RadFileExplorer RenderMode="Lightweight" runat="server" ID="RadFileExplorer1" Width="575px" EnableCopy="true"
	Height="375px" OnItemCommand="RadFileExplorer1_ItemCommand">
	<Configuration ViewPaths="~/ROOT/" DeletePaths="~/ROOT/" UploadPaths="~/ROOT/" />
</telerik:RadFileExplorer>
````

````C#
protected void RadFileExplorer1_ItemCommand(object sender, RadFileExplorerEventArgs e)
{
	switch (e.Command)
	{
		case "UploadFile": break;
		case "CreateDirectory": break;
		case "DeleteDirectory": break;
		case "DeleteFile": break;
		case "MoveFile": break;
		case "MoveDirectory": break;
		case "CopyFile": break;
		case "CopyDirectory": break;
		
	}
	// e.Cancel = true; // Cancel the operation
}
````
````VB
Protected Sub RadFileExplorer1_ItemCommand(ByVal sender As Object, ByVal e As RadFileExplorerEventArgs)
	Select Case e.Command
		Case "UploadFile"
			Exit Select
		Case "CreateDirectory"
			Exit Select
		Case "DeleteDirectory"
			Exit Select
		Case "DeleteFile"
			Exit Select
		Case "MoveFile"
			Exit Select
		Case "MoveDirectory"
			Exit Select
		Case "CopyFile"
			Exit Select
		Case "CopyDirectory"
			Exit Select

			' e.Cancel = true; // Cancel the operation
	End Select
End Sub
````

>tip You can use the `ItemCommand` event to validate the user actions in order to tighten security. You can find an example in the [Security](https://docs.telerik.com/devtools/aspnet-ajax/controls/fileexplorer/security) help article.

## ExplorerPopulated

This event is fired twice - once when the TreeView's items are populated and second time when the Grid's items are populated. The *ControlName* property contains the name of the control, which will consume the populated data (e.List). This event can be used to sort the FileExplorer's items for example.

````ASP.NET
<telerik:RadFileExplorer RenderMode="Lightweight" runat="server" ID="RadFileExplorer1" Width="575px" EnableCopy="true"
	Height="375px" OnExplorerPopulated="RadFileExplorer1_ExplorerPopulated">
	<Configuration ViewPaths="~/ROOT/" DeletePaths="~/ROOT/" UploadPaths="~/ROOT/" />
</telerik:RadFileExplorer>
````

````C#
protected void RadFileExplorer1_ExplorerPopulated(object sender, Telerik.Web.UI.RadFileExplorerPopulatedEventArgs e)
{
	switch (e.ControlName)
	{
		case "tree":
		{// The TreeView control will be populated
			// Sorts the items shown in the Tree by name
			e.List.Sort(delegate(FileBrowserItem fileBrowserItem1, FileBrowserItem fileBrowserItem2)
			{
				return fileBrowserItem1.Name.CompareTo(fileBrowserItem2.Name);
			});
		}; break;
		case "grid":
		{// The Grid control will be populated
			// Sorts the items shown in the Grid by name
			e.List.Sort(delegate(FileBrowserItem fileBrowserItem1, FileBrowserItem fileBrowserItem2)
			{
				return fileBrowserItem1.Name.CompareTo(fileBrowserItem2.Name);
			});

			// DESC order
			e.List.Reverse();
		}; break;
	}
}
````
````VB
Protected Sub RadFileExplorer1_ExplorerPopulated(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadFileExplorerPopulatedEventArgs)
	Select Case e.ControlName
		Case "tree"
			If True Then
				' The TreeView control will be populated
				' Sorts the items shown in the Tree by name
				e.List.Sort(Function(fileBrowserItem1 As FileBrowserItem, fileBrowserItem2 As FileBrowserItem) fileBrowserItem1.Name.CompareTo(fileBrowserItem2.Name))
			End If
			Exit Select
		Case "grid"
			If True Then
				' The Grid control will be populated
				' Sorts the items shown in the Grid by name
				e.List.Sort(Function(fileBrowserItem1 As FileBrowserItem, fileBrowserItem2 As FileBrowserItem) fileBrowserItem1.Name.CompareTo(fileBrowserItem2.Name))

				' DESC order
				e.List.Reverse()
			End If
			Exit Select
	End Select
End Sub
````

You can also handle some of the events of the controls nested in RadFileExplorer by accessing them in the Page_Load event through the RadFileExplorer object. More details about the controls nested in RadFileExplorer can be found here:

[RadFileExplorer Server-side Programming Overview]({%slug fileexplorer/server-side-programming/overview%})



