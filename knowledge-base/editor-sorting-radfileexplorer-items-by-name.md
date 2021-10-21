---
title: Sorting RadFileExplorer items by name
description: See how to sort RadFileExplorer items by name in RadEditor file browser dialogs.
type: how-to
page_title: Sorting RadFileExplorer items by name
slug: editor-sorting-radfileexplorer-items-by-name
res_type: kb
---

## HOW-TO
Sorting RadFileExplorer items by name

## SOLUTION
1) For RadFileExplorer:
To sort the FileExplorer items use the RadGrid's Client-Side API as follows:

````ASP.NET
<script type="text/javascript"> 
    function OnFileExplorerClientLoad(oExplorer, args) 
    { 
        var masterTable = oExplorer.get_grid().get_masterTableView(); 
   
        masterTable.sort("Name"); 
        // masterTable.sort("Size");  //sort the files by size
    } 
</script>
````

Attach the OnFileExplorerClientLoad function to the OnClientLoad event property of the RadFileExplorer control.

2) for RadEditor:

Register the [external dialog files of RadEditor](http://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx) so that you can modify the FileBrowser.ascx file loaded in the RadEditor's FileBrowser managers (Image, Document, Flash, Media, Template, Silverlight). After that open the \EditorDialogs\FileBrowser.ascx file, locate the <telerik:RadFileExplorer> control and attach the OnFileExplorerClientLoad function below to the OnClientLoad event property of the RadFileExplorer control, e.g.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" OnClientLoad="OnFileExplorerClientLoad" Height="450px" Width="400px" TreePaneWidth="150px"
runat="Server" EnableOpenFile="false" AllowPaging="true" />
<script type="text/javascript">
function OnFileExplorerClientLoad(oExplorer, args)
{
    var masterTable = oExplorer.get_grid().get_masterTableView(); 
    masterTable.sort("Name ASC"); //sort in ascending order
    //masterTable.sort("Name DESC"); //sort in descending order
}
</script>
````



