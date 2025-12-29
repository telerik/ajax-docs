---
title: Change the behaviors of the embedded dialogs
description: Change the behaviors of the embedded dialogs. Check it now!
type: how-to
page_title: Change the behaviors of the embedded dialogs
slug: fileexplorer-change-the-behaviors-of-the-embedded-dialogs
res_type: kb
---

## HOW TO  

Get reference to the embedded dialogs and change their parameters. The article shows how to change the size of the preview and upload RadWindows and the behaviors of the new folder and delete confirmation RadWindows, but all [client-side methods of the window object](https://docs.telerik.com/devtools/aspnet-ajax/controls/window/client-side-programming/radwindow-object) can be used in order to change their properties.  

## SOLUTION

### Resize the Preview window:  

Example

````ASP.NET
<telerik:RadFileExplorer runat="server" ID="RadFileExplorer1" Width="500px" Height="300px"
    OnClientFileOpen="OnExplorerFileOpen">
    <Configuration ViewPaths="~/ROOT" DeletePaths="~/ROOT" UploadPaths="~/ROOT" />
</telerik:RadFileExplorer>
````

````JavaScript
function OnExplorerFileOpen(oExplorer, args) {
    if (!args.get_item().isDirectory()) {
        setTimeout(function () {
            var oWindowManager = oExplorer.get_windowManager();
            var previewWinow = oWindowManager.getActiveWindow(); // Gets the current active widow.
            previewWinow.setSize(500, 500); // resize the window
            //previewWinow.maximize(); //alternatively, maximize it. You can use its entire API
        }, 100);   // Some timeout is required in order to allow the window to become active
    }
}
````

Note that some timeout is required in order to get the current active window.

### Resize the Upload window:

1. In the OnClientLoad event of the FileExplorer get reference to the embedded RadWindowManager and attach a handler to the OnClientShown event of the manager:

````JavaScript
var oWindowManager = oExplorer.get_windowManager();
oWindowManager.add_show(windowIsShownHandler);
````

2. In windowIsShownHandler call the handleOpenedWindow method after some timeout:

````JavaScript
// Called when a window is shown
function windowIsShownHandler(oWindow, args) {
    setTimeout(function() {
        handleOpenedWindow(oWindow);
    }, 100); // Some time out is required as well
}
````

3. Implement the *handleOpenedWindow* function:

````JavaScript
function handleOpenedWindow(oWindow) {
    var oExplorer = $find("<%= RadFileExplorer1.ClientID %>");
    var windowTitile = oWindow.get_title();

    // The title set to the RadWindowManager is the title shown in the Upload dialog
    // This code respects localization
    var uploadDialogTitle = oExplorer.get_windowManager().get_title();

    // The confirm dialog's title.
    // This title cannot be localized
    var deleteConfirmDialogTitle = "Delete";

    // The new folder dialog's title.
    // This code respects localization
    var newFolderDialogTitle = oExplorer.get_localization()["CreateNewFolder"];

    switch (windowTitile) {
        case uploadDialogTitle:
            // The upload dialog is opened
            oWindow.setSize(500, 500);
            break;
        case deleteConfirmDialogTitle:
            // The delete confirmation dialog is opened
            oWindow.set_behaviors(oWindow.get_behaviors() + Telerik.Web.UI.WindowBehaviors.Pin);
            break;
        case newFolderDialogTitle:
            // The create new folder dialog is opened
            oWindow.set_behaviors(oWindow.get_behaviors() + Telerik.Web.UI.WindowBehaviors.Minimize);
            break;
    }
}
````

The attached project [here](files/fileexplorer-change-behavior-dialogs.zip) contains the full source code of the described scenarios.
