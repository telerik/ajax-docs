---
title: Events
page_title: Events | RadFileExplorer for ASP.NET AJAX Documentation
description: Events
slug: fileexplorer/client-side-programming/events
tags: events
published: True
position: 1
---

# Events



**RadFileExplorer** has a number of client-side events that you could use:

## RadFileExplorer's server-side properties for handling client-side events:


>caption  

|  **Event**  |  **Description**  |
| ------ | ------ |
| **OnClientCreateNewFolder** |Sets the the name of the JavaScript function called when a new folder is created|
| **OnClientDelete** |Sets the the name of the JavaScript function called when the user tries to delete an item(file or folder).|
| **OnClientFileOpen** |Sets the name of the JavaScript function called when an item is double clicked in the grid or in the tree.|
| **OnClientFolderChange** |Sets the name of the JavaScript function called when the selected folder in the tree changes.|
| **OnClientFolderLoaded** |Sets the name of the JavaScript function called when a folder is loaded in the grid.|
| **OnClientItemSelected** |Sets the name of the JavaScript function called when the user selects an item in the grid.|
| **OnClientLoad** |Sets the name of the JavaScript function called when the control loads in the browser.|
| **OnClientMove** |Set the name of the JavaScript function called when the user tries to move or rename an item.|
| **OnClientCopy** |Set the name of the JavaScript function called when the user tries to copy an item.|
| **OnClientFilter** |The name of the JavaScript function called when the user filters the files in the grid.|



## Examples:



## Cancelling Events

The following sample shows how to cancel events. This approach is useful in cases where you need to control the way RadFileExplorer handles files. In this case we are instructing the RadFileExplorer to open MS Office files directly in the browser and not in RadWindow.

````JavaScript
	
	        function OnClientFileOpen(sender, args)
	        {
	            var item = args.get_item();
	            if (item && !item.isDirectory() && (item.get_extension() == "docx" || item.get_extension() == "doc"))
	            {
	                //file is a MS Office document, do not open a new window.          
	                args.set_cancel(true);
	                //tell browser to open file directly          
	                window.location.href = item.get_url();
	            }
	        }
	
````





## Detecting file selection

You can detect file selection, and then determine whether the selected item is directory or a file. In case that the selected item is a file, then perform some desired action:



````JavaScript
	
	        function OnClientItemSelected(sender, args)
	        {
	            if (args.get_item().get_type() == Telerik.Web.UI.FileExplorerItemType.File)
	            {// if the item is a file        
	                var file = "File path : " + args.get_item().get_path() + "\n";
	                file = file + "File size : " + args.get_item().get_size();
	                alert("Selected file: \n" + file);
	            }
	            else
	            {// filder        
	                alert("The selected item is a directory");
	            }
	            alert("OnClientItemSelected : " + (args instanceof Telerik.Web.UI.RadFileExplorerEventArgs).toString());
	        }
	
````





## Detecting folder change:

````JavaScript
	
	        function OnClientFolderChange(sender, args)
	        {// Get the selected folder path    
	            alert(" Selected folder path : " + args.get_path());
	        }
	
````



## Detecting file/folder deletion:

````JavaScript
	
	        function OnClientDelete(sender, args)
	        {
	            alert("Deleted file : " + args.get_path());
	        }
	
````



## Confirm new folder creation:

````JavaScript
	
	        function OnClientCreateNewFolder(sender, args)
	        {
	            var alertResult = confirm(" Do you want to perform this operation ?");
	            if (alertResult)
	            {
	                alert("The new folder's name : " + args.get_newPath());
	                alert("The path : " + args.get_path());
	            } else
	            {// Cancel creation        
	                args.set_cancel(true);
	            }
	        }
	
````





## Detecting item Move/Rename

````JavaScript
	
	        function OnClientMove(oExplorer, args)
	        { // When renaming, the get_newPath() returns only the name of the item. 
	            // The name does not contain any slashes 
	            var isRename = args.get_newPath().search("/") < 0;
	            // When moving, the get_newPath() returns the destination directory's path. 
	            // The name does contain least one slash 
	            var isMove = args.get_newPath().search("/") >= 0;
	            alert("isRename : " + isRename + "\n isMove : " + isMove);
	            alert(args.get_newPath());
	        }
	
````





## Detecting itemCopy

````JavaScript
	        function OnClientCopy(oExplorer, args)
	        {
	            // args.set_cancel(true); 
	            var destinationDirectoryPath = args.get_newPath();
	            alert(destinationDirectoryPath);
	        }
````




