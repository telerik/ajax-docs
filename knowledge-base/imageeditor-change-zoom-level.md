---
title: Change the zoom level in ImageEditor
description: How to change the zoom level of Telerik WebForms ImageEditor from the default 50% to another level
type: how-to
page_title: Change zoom-in and zoom-out level of ImageEditor
slug: imageeditor-change-zoom-level
ticketid: 1631855
res_type: kb
---

## Description

How to change the zoom level of Telerik WebForms ImageEditor from the default 50% to another level.

## Solution

Add the specific buttons with the respective `CommandName` attributes and attach the [`OnClientCommandExecuting`]({%slug imageeditor/client-side-programming/events/onclientcommandexecuting%}) event to the ImageEditor. 

Example

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

In the event handler, adjust the `zoomLevel` property based on your preference.
To set the `zoomLevel` property to a specific value, we first need to get the zoom level of the image with the [`get_zoomLevel()`]({%slug imageeditor/client-side-programming/overview%}) and then we set it to 10% ().

Example

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
 

   
