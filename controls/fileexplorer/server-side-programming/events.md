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

>tip You can use the `ItemCommand` event to validate the user actions in order to tighten security. You can find a basic example below. To further improve security, you can [create a custom content provider]({%slug fileexplorer/server-side-programming/use-custom-filebrowsercontentprovider%}) where you can perform all necessary permissions and validation checks.

````C#
protected void RadFileExplorer1_ItemCommand(object sender, RadFileExplorerEventArgs e)
{
    //NOTE: the example below is for illustrative purposes
    //You must employ strong protection according to the application logic and user actions
    bool suspiciousActivityDetected = false;
    string[] searchPatterns = (sender as RadFileExplorer).Configuration.SearchPatterns;
    if (!string.IsNullOrEmpty(e.Path))
    {
        suspiciousActivityDetected = IsSuspiciousActivity(e.Path, searchPatterns);
    }

    if (!string.IsNullOrEmpty(e.NewPath))
    {
        suspiciousActivityDetected = suspiciousActivityDetected ? suspiciousActivityDetected : IsSuspiciousActivity(e.NewPath, searchPatterns);
    }
    e.Cancel = suspiciousActivityDetected;
}

protected bool IsSuspiciousActivity(string pathToCheck, string[] allowedExtensions)
{
    //this is a basic example that checks for the extensions in a simplistic manner
    //you should implement stronger logic that fits your application needs

    string currExtension = pathToCheck.Substring(pathToCheck.LastIndexOf("."));
    currExtension = string.Concat("*", currExtension);

    //add sample extensions that must never be allowed regardless of control configuration
    string[] prohibitedExtensions = {"*.aspx", "*.config" };
    //check if the operation includes prohibited files
    if (prohibitedExtensions.Contains(currExtension))
    {
        return true;
    }

    //or, simply check for the presence of potentially harmful strings in the file names, which can be useful when uploading files
    if (pathToCheck.Contains(".aspx") || pathToCheck.Contains(".config"))
    {
        return true;
    }

    //Add other high priority checks/denial conditions here

    //Then check if you can allow the action
    //For example, if the extension is whitelisted in the control configuration

    //check if the operation includes allowed files that are not covered by the prohibited extensions
    //this example deliberately does not take into account the default *.* pattern
    if (allowedExtensions.Contains(currExtension))
    {
        return false;
    }

    return false;
}
````
````VB
Protected Sub RadFileExplorer1_ItemCommand(sender As Object, e As RadFileExplorerEventArgs) Handles RadFileExplorer1.ItemCommand
    'NOTE: the example below is for illustrative purposes
    'You must employ strong protection according to the application logic and user actions
    Dim suspiciousActivityDetected As Boolean = False
    Dim searchPatterns As String() = TryCast(sender, RadFileExplorer).Configuration.SearchPatterns
    If Not String.IsNullOrEmpty(e.Path) Then
        suspiciousActivityDetected = IsSuspiciousActivity(e.Path, searchPatterns)
    End If

    If Not String.IsNullOrEmpty(e.NewPath) Then
        suspiciousActivityDetected = If(suspiciousActivityDetected, suspiciousActivityDetected, IsSuspiciousActivity(e.NewPath, searchPatterns))
    End If
    e.Cancel = suspiciousActivityDetected
End Sub

Protected Function IsSuspiciousActivity(pathToCheck As String, allowedExtensions As String()) As Boolean
    'this is a basic example that checks for the extensions in a simplistic manner
    'you should implement stronger logic that fits your application needs

    Dim currExtension As String = pathToCheck.Substring(pathToCheck.LastIndexOf("."))
    currExtension = String.Concat("*", currExtension)

    'add sample extensions that must never be allowed regardless of control configuration
    Dim prohibitedExtensions As String() = {"*.aspx", "*.config"}
    'check if the operation includes prohibited files
    If prohibitedExtensions.Contains(currExtension) Then
        Return True
    End If

    'or, simply check for the presence of potentially harmful strings in the file names, which can be useful when uploading files
    If pathToCheck.Contains(".aspx") OrElse pathToCheck.Contains(".config") Then
        Return True
    End If

    'Add other high priority checks/denial conditions here

    'Then check if you can allow the action
    'For example, if the extension is whitelisted in the control configuration

    'check if the operation includes allowed files that are not covered by the prohibited extensions
    'this example deliberately does not take into account the default *.* pattern
    If allowedExtensions.Contains(currExtension) Then
        Return False
    End If

    Return False
End Function
````

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

