---
title: Setting dialog pop up position of RadEditor
description: Setting dialog pop up position of RadEditor. Check it now!
type: how-to
page_title: Setting dialog pop up position of RadEditor
slug: editor-setting-dialog-pop-up-position
res_type: kb
---

**HOW-TO**  

Setting dialog pop up position of RadEditor 
   
**DESCRIPTION**  

The [built-in](https://demos.telerik.com/aspnet-ajax/editor/examples/built-in-dialogs/defaultcs.aspx) and [custom dialogs](http://demos.telerik.com/aspnet-ajax/editor/examples/customdialogs/defaultcs.aspx) of RadEditor always pop up at the center of the page. The code solution below demonstrates how to load the editor's dialogs at the desired position on the page.  
   
**SOLUTION**  

1) for built-in dialogs:  
   
 
````ASP.NET
<script type="text/javascript">
    function OnClientCommandExecuted(sender, args) {
        var dialogWindow,
            isIframe,
            commandName = args.get_commandName();
 
        switch (commandName) {
            case "PasteAsHtml":
            case "PasteFromWord":
            case "PasteFromWordNoFontsNoSizes":
                commandName = "CleanPasteHtmlContent";
                break;
            case "PastePlainText":
                commandName = "CleanPasteTextContent";
                break;
            case "InsertFormSelect":
                commandName = "InsertSelectDialog";
                break;
            case "SetImageProperties":
                commandName = "ImageProperties";
                break;
            case "SetCellProperties":
            case "SetTableProperties":
                commandName = "TableWizard";
                break;
            case "SetLinkProperties":
                commandName = "LinkManager";
                break;
            default:
        }
 
        dialogWindow = sender.get_dialogOpener()._dialogContainers[commandName];
 
        if (dialogWindow) {
            isIframe = dialogWindow.get_contentFrame();
 
            if (isIframe) {
                dialogWindow.add_pageLoad(moveDialog);
            }
            else
                moveDialog(dialogWindow);
        }
    }
 
    function moveDialog(sender) {
        sender.moveTo(0, 0);
        sender.set_reloadOnShow(true);
        sender.remove_pageLoad(moveDialog);
    }
</script>
 
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientCommandExecuted="OnClientCommandExecuted">
</telerik:RadEditor>
````


2) for custom dialogs: Use the getRadWindow() method to get a reference to the RadWindow custom dialog in it InitDialog function and set its moveTo method to position the dialog on the page:  
   
 
````ASP.NET
<script type="text/javascript">
if (window.attachEvent)
{
    window.attachEvent("onload", initDialog);
}
else if (window.addEventListener)
{
    window.addEventListener("load", initDialog, false);
}
  
function getRadWindow()
{
       if (window.radWindow)
    {
        return window.radWindow;
    }
    if (window.frameElement && window.frameElement.radWindow)
    {
        return window.frameElement.radWindow;
    }
    return null;
}
  
function initDialog()
{
    getRadWindow().moveTo(300, 300);   
  
}
</script>
 ````
   

This code should be placed in the ASPX dialog page loaded through the **showExternalDialog** method  
   
 **showExternalDialog**(*url (aspx/html file), argument, width, height, callbackFunction, callbackArgs, title, modal, behaviors, showStatusbar, showTitlebar*);  
   

More information is available in this live demo: [Custom Dialogs](http://demos.telerik.com/aspnet-ajax/editor/examples/customdialogs/defaultcs.aspx).


 