---
title: Change zoom-in and zoom-out level of RadImageEditor
description: Learn how to change zoom-in and zoom-out level of RadImageEditor
type: how-to
page_title: Change zoom-in and zoom-out level of RadImageEditor
slug: imageeditor-change-zoom-level
ticketid: 1631855
res_type: kb
---

## Description

Learn how to change zoom-in and zoom-out level of RadImageEditor

## Solution

Add the [`OnClientCommandExecuting`](https://docs.telerik.com/devtools/aspnet-ajax/controls/imageeditor/client-side-programming/events/onclientcommandexecuting#onclientcommandexecuting) event in the markup of the Image editor:
````ASPX
<telerik:RadImageEditor
    ID="RadImageEditor1"
    runat="server"
    RenderMode="Lightweight"
    OnClientCommandExecuting="onClientCommandExecuting">
    <Tools>
        <telerik:ImageEditorToolGroup>
            <telerik:ImageEditorTool Text="ZoomIn" CommandName="ZoomIn" />
            <telerik:ImageEditorTool Text="ZoomOut" CommandName="ZoomOut" />
            <telerik:ImageEditorTool Text="ZoomOut" CommandName="Zoom" />
        </telerik:ImageEditorToolGroup>
    </Tools>
</telerik:RadImageEditor>
````

In the event handler, add the following logic to set the zoom level to 10% for both the zoom-in and zoom-out commands
````JavaScript
function onClientCommandExecuting(sender, args) {
    var imageEditor = sender
    var zoomLevel;

    if (args.get_commandName() == "ZoomIn") {
        zoomLevel = imageEditor.getEditableImage().get_zoomLevel() + 10

        if (zoomLevel > imageEditor.get_upperZoomBound()) {
            zoomLevel = imageEditor.get_upperZoomBound();
        }

        imageEditor.zoomImage(zoomLevel, true);
    }
    else if (args.get_commandName() == "ZoomOut") {
        zoomLevel = imageEditor.getEditableImage().get_zoomLevel() - 10

        if (zoomLevel < imageEditor.get_lowerZoomBound()) {
            zoomLevel = imageEditor.get_lowerZoomBound();
        }

        imageEditor.zoomImage(zoomLevel, true);
    }

    args.set_cancel(true)
}
````
 

   
