---
title: Preventing users from deleting folders in the File Browser dialogs
description: Preventing users from deleting folders in the File Browser dialogs of RadEditor. Check it now!
type: how-to
page_title: Preventing users from deleting folders in the File Browser dialogs
slug: editor-preventing-users-from-deleting-folders-in-the-file-browser-dialogs
res_type: kb
---

   
## HOW-TO  
Prevent users from deleting folders in the File Browser dialogs  
   
## DESCRIPTION
 Sometimes it is needed to allow users to delete files but prevent them from deleting folders in the File Browser dialogs. The solution below demonstrates how to implement this functionality.  
   
## SOLUTION 
 Here are the steps on how to disable the folder deletion in the File Browser dialogs of RadEditor:  
 1) register [the external dialog files](http://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx) of RadEditor so that you can modify the FileBrowser.ascx file, e.g.  
   
````ASP.NET
<telerik:RadEditor runat="server" ExternalDialogsPath="~/EditorDialogs" ID="RadEditor1">
    <ImageManager ViewPaths="~/Images" UploadPaths="~/Images" DeletePaths="~/Images" />
</telerik:RadEditor>
````
   
 2) Open the \EditorDialogs\FileBrowser.ascx file, locate the &lt;RadFileExplorer&gt; control and attach the **OnClientDelete** function to the **OnClientDelete **event property, e.g.  
   
````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" OnClientDelete="OnClientDelete" Height="450px" Width="400px" TreePaneWidth="150px"
runat="Server" EnableOpenFile="false" AllowPaging="true" />
<script type="text/javascript">
function OnClientDelete(oExplorer, args)
{
 var item = args.get_item();
 
 if (item.isDirectory())
 {
  args.set_cancel(true);
  alert("You cannot delete directories");
 }
}
</script>
````


