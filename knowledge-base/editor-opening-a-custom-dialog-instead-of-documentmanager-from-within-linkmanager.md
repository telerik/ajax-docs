---
title: Opening a custom dialog instead of DocumentManager from within LinkManager 
description: Opening a custom dialog instead of DocumentManager from within LinkManager of RadEditor. Check it now!
type: how-to
page_title: Opening a custom dialog instead of DocumentManager from within LinkManager 
slug: opening-a-custom-dialog-instead-of-documentmanager-from-within-linkmanager
res_type: kb
---

## HOW TO 

Open a custom dialog from within LinkManager dialog in order to select an item to be linked.  

## DESCRIPTION

In some scenarios the users might want to be able to select a file to be linked not using DocumentManager but using a custom pattern - for example an image from a custom gallery. This can be achieved by modifying the built-in LinkManager dialog to open a custom dialog window.   
   
## SOLUTION  

In order to modify the built-in Link Manager of RadEditor, [register the external dialogs](http://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx). After that open the EditorDialogs/LinkManager.ascx file, locate the following code:  
 
````ASP.NET
<td style="padding-left: 4px;">
    <tools:StandardButton runat="server" ToolName="DocumentManager" id="DocumentManagerCaller" />
</td>
````

and modify it as follows:  
 
````ASP.NET
<td style="padding-left: 4px;">
    <asp:Button ID="Button1" runat="server" Text="Browse" OnClientClick="showCustomDialog();return false;" Width="70" />
</td>
<td style="padding-left: 4px; display:none;">
    <tools:StandardButton runat="server" ToolName="DocumentManager" id="DocumentManagerCaller" />
</td>
````
   
The style="display:none" inline attribute will hide the existing button that opens DocumentManager and will insert a custom button that will open the custom dialog by executing the following javascript function  
 

````ASP.NET
<script type="text/javascript"> 
function showCustomDialog()
{
    var argument = {};
   
    //a callback function to be executed when the RadWindow is closed
    var callbackFunction = function(sender, args)
    {
        var oTextBox = $get("LinkURL");
        oTextBox.value = args;
    }
    //get reference to the dialogOpener
    var dialogOpener = Telerik.Web.UI.Dialogs.CommonDialogScript.get_windowReference().get_dialogOpener();

    //open the dialog window
    dialogOpener.openUrl("CustomDialog.aspx", argument, 728, 542, callbackFunction, null, "CustomLinkItems", true, 36, false, true);
}
</script>
````

This Javascript function will open a custom dialog from CustomDialog.aspx file by executing the **openUrl()** method of dialogOpener.  
   

In the sample project attached to this article you will find a CustomDialog.aspx dialog containing RadFileExplorer used to navigate to a file that will be linked.  
 

