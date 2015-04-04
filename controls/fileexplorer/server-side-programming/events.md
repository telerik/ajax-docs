---
title: Events
page_title: Events | UI for ASP.NET AJAX Documentation
description: Events
slug: fileexplorer/server-side-programming/events
tags: events
published: True
position: 1
---

# Events



The __RadFileExplorer__ control provides two server side event - __ItemCommand__ and __ExplorerPopulated__

## ItemCommand

Called on the following commands:

* __UploadFile__ - fired before each uploaded file is saved

* __CreateDirectory__ - fired before the file explorer creates a new folder

* __DeleteDirectory__ - fired before the file explorer deletes a folder

* __DeleteFile__ - fired before a file is deleted

* __MoveFile__ - fired before a file is moved/renamed

* __MoveDirectory__ - fired before a directory is moved/renamed

* __CopyFile__ - fired before a file is copied

* __CopyDirectory__ - fired before the file explorer copies a folder

Example:



````ASPNET
	    <telerik:RadFileExplorer runat="server" ID="RadFileExplorer1" Width="575px" EnableCopy="true"
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
````VB.NET
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


## ExplorerPopulated

This event is fired twice - once when the TreeView's items are populated and second time when the Grid's items are populated. The *ControlName* property contains the name of the control, which will consume the populated data (e.List). This event can be used to sort the FileExplorer's items for example.Example:

````ASPNET
	    <telerik:RadFileExplorer runat="server" ID="RadFileExplorer1" Width="575px" EnableCopy="true"
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
	}
	
````
````VB.NET
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

