---
title: Adding Custom Grid Columns
page_title: Adding Custom Grid Columns | RadFileExplorer for ASP.NET AJAX Documentation
description: Adding Custom Grid Columns
slug: fileexplorer/how-to/adding-custom-grid-columns
tags: adding,custom,grid,columns
published: True
position: 1
---

# Adding Custom Grid Columns

Since Telerik® UI for ASP.NET AJAX Q2 2009 it is possible to add custom columns in the embedded RadGrid. There are two main steps that need to be done in order to achieve this.

1. Implement a [custom FileSystemContentProvider]({%slug fileexplorer/server-side-programming/use-custom-filebrowsercontentprovider%}). The easiest way to do this is to override the FileSystemContentProvider class. We need to override the **ResolveDirectory** and **ResolveRootDirectoryAsTree** methods (**Example 1** and **Example 2**) in order to add two additional properties in the every **DirectoryItem** and **FileItem** respectively.

2. Build two GridTemplateColumns on the server and add them to the columns collection of the Grid (**Example 3**).

>caption Example 1: Override the ResolveDirectory method

````C#
public override DirectoryItem ResolveDirectory(string path)
{
	// Update all file items with the additional information (date, owner)
	DirectoryItem oldItem = base.ResolveDirectory(path);
	foreach (FileItem fileItem in oldItem.Files)
	{
		// Get the information from the physical file
		FileInfo fInfo = new FileInfo(Context.Server.MapPath(VirtualPathUtility.AppendTrailingSlash(oldItem.Path) + fileItem.Name));
		// Add the information to the attributes collection of the item. It will be automatically picked up by the FileExplorer
		// If the name attribute matches the unique name of a grid column
		fileItem.Attributes.Add("Date", fInfo.CreationTime.ToString());
		// Type targetType = typeof(System.Security.Principal.NTAccount);
		// string value = fInfo.GetAccessControl().GetOwner(targetType).Value.Replace("\\", "\\\\");
		string ownerName = "Telerik";
		fileItem.Attributes.Add("Owner", ownerName);
	}
	return oldItem;
}
````
````VB
Public Overloads Overrides Function ResolveDirectory(ByVal path As String) As DirectoryItem
	' Update all file items with the additional information (date, owner)
	Dim oldItem As DirectoryItem = MyBase.ResolveDirectory(path)
	For Each fileItem As FileItem In oldItem.Files
		' Get the information from the physical file
		Dim fInfo As New FileInfo(Context.Server.MapPath(VirtualPathUtility.AppendTrailingSlash(oldItem.Path) + fileItem.Name))
		' Add the information to the attributes collection of the item. It will be automatically picked up by the FileExplorer
		' If the name attribute matches the unique name of a grid column
		fileItem.Attributes.Add("Date", fInfo.CreationTime.ToString())
		' Type targetType = typeof(System.Security.Principal.NTAccount);
		' string value = fInfo.GetAccessControl().GetOwner(targetType).Value.Replace("\\", "\\\\");
		Dim ownerName As String = "Telerik"
		fileItem.Attributes.Add("Owner", ownerName)
	Next
	Return oldItem
End Function
````

>caption Example 2: Override the Resolve RootDirectoryAsTree:

````C#
public override DirectoryItem ResolveRootDirectoryAsTree(string path)
{
	// Update all directory items with the additional information (date, owner)
	DirectoryItem oldItem = base.ResolveRootDirectoryAsTree(path);
	foreach (DirectoryItem dirItem in oldItem.Directories)
	{
		// Get the information from the physical directory
		DirectoryInfo dInfo = new DirectoryInfo(Context.Server.MapPath(VirtualPathUtility.AppendTrailingSlash(dirItem.Path)));
		// Add the information to the attributes collection of the item. It will be automatically picked up by the FileExplorer
		// If the name attribute matches the unique name of a grid column
		dirItem.Attributes.Add("Date", dInfo.LastWriteTime.ToString());
		//Type targetType = typeof(System.Security.Principal.NTAccount);
		//string value = dInfo.GetAccessControl().GetOwner(targetType).Value.Replace("\\", "\\\\");
		string ownerName = "Telerik";
		dirItem.Attributes.Add("Owner", ownerName);
	}
	return oldItem;
}
````
````VB
Public Overloads Overrides Function ResolveRootDirectoryAsTree(ByVal path As String) As DirectoryItem
	' Update all directory items with the additional information (date, owner)
	Dim oldItem As DirectoryItem = MyBase.ResolveRootDirectoryAsTree(path)
	For Each dirItem As DirectoryItem In oldItem.Directories
		' Get the information from the physical directory
		Dim dInfo As New DirectoryInfo(Context.Server.MapPath(VirtualPathUtility.AppendTrailingSlash(dirItem.Path)))
		' Add the information to the attributes collection of the item. It will be automatically picked up by the FileExplorer
		' If the name attribute matches the unique name of a grid column
		dirItem.Attributes.Add("Date", dInfo.LastWriteTime.ToString())
		'Type targetType = typeof(System.Security.Principal.NTAccount);
		'string value = dInfo.GetAccessControl().GetOwner(targetType).Value.Replace("\\", "\\\\");
		Dim ownerName As String = "Telerik"
		dirItem.Attributes.Add("Owner", ownerName)
	Next
	Return oldItem
End Function
````


>caption Example 3: Adding two GridTemplateColumns columns collection of the Grid.

````C#
// Add a new “”column for the date
GridTemplateColumn gridTemplateColumn1 = new GridTemplateColumn();
gridTemplateColumn1.HeaderText = "Creation Date";
gridTemplateColumn1.SortExpression = "Date";
gridTemplateColumn1.UniqueName = "Date";
gridTemplateColumn1.DataField = "Date";
RadFileExplorer1.Grid.Columns.Add(gridTemplateColumn1); // Add the first column
// Add a new “”column for the file owner
GridTemplateColumn gridTemplateColumn2 = new GridTemplateColumn();
gridTemplateColumn2.HeaderText = "Owner Name";
gridTemplateColumn2.SortExpression = "Owner";
gridTemplateColumn2.UniqueName = "Owner";
gridTemplateColumn2.DataField = "Owner";
RadFileExplorer1.Grid.Columns.Add(gridTemplateColumn2);// Add the second column 
````
````VB
' Add a new “Date” column for the date
Dim gridTemplateColumn1 As New GridTemplateColumn()
gridTemplateColumn1.HeaderText = "Creation Date"
gridTemplateColumn1.SortExpression = "Date"
gridTemplateColumn1.UniqueName = "Date"
gridTemplateColumn1.DataField = "Date"
' Add the first column
RadFileExplorer1.Grid.Columns.Add(gridTemplateColumn1)
' Add a new “Owner” column for the file owner
Dim gridTemplateColumn2 As New GridTemplateColumn()
gridTemplateColumn2.HeaderText = "Owner Name"
gridTemplateColumn2.SortExpression = "Owner"
gridTemplateColumn2.UniqueName = "Owner"
gridTemplateColumn2.DataField = "Owner"
' Add the second column
RadFileExplorer1.Grid.Columns.Add(gridTemplateColumn2)
````

>important Set the newly added properties name (“Date” and “Owner”)to the **UniqueName** property of the newly created column

## See Also

 * ["Add Custom Columns" demo](https://demos.telerik.com/aspnet-ajax/fileexplorer/examples/applicationscenarios/customgridcolumns/defaultcs.aspx)

 * ["Filter files and download" demo](https://demos.telerik.com/aspnet-ajax/fileexplorer/examples/applicationscenarios/filteranddownloadfiles/defaultcs.aspx)
