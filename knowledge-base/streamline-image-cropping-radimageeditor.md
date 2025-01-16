---
title: Simplifying Image Cropping and Saving in RadImageEditor
description: Learn how to enable users to directly draw a rectangle on an image and save the cropped portion without prompts using RadImageEditor for ASP.NET AJAX.
type: how-to
page_title: Streamlining Image Cropping with RadImageEditor for ASP.NET AJAX
slug: streamline-image-cropping-radimageeditor
tags: radimageeditor, image cropping, asp.net ajax, client-side cropping, server-side saving
res_type: kb
ticketid: 1675772
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadImageEditor for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>all</td>
</tr>
</tbody>
</table>

## Description
Is it possible to crop a portion of an image by drawing a rectangle directly on it and then saving that cropped area to the server without any user prompts? This knowledge base article demonstrates how to simplify the image cropping process in the [RadImageEditor for ASP.NET AJAX](https://demos.telerik.com/aspnet-ajax/imageeditor/examples/crop/defaultcs.aspx), allowing users to directly select a portion of an image and save it with minimal interaction.

This knowledge base article also answers the following questions:
- How can I enable direct cropping in RadImageEditor?
- What is the method to save a cropped image directly to the server in RadImageEditor?
- Can the image cropping dialog in RadImageEditor be bypassed?

## Solution

To allow users to crop an image directly on the RadImageEditor and save the cropped portion without any prompts, follow these steps:

1. **Hide the Crop Dialog**: Use CSS to hide the tools panel and enable direct interaction with the image for cropping.

2. **Implement Client-Side Cropping**: Utilize custom JavaScript to capture the cropping rectangle drawn by the user and send the cropping parameters to the server.

3. **Server-Side Image Saving**: Leverage the `ImageSaving` event of the RadImageEditor to save the cropped portion of the image to a specified location on the server.

### Hiding the Crop Dialog and Implementing Direct Cropping

Add the following markup and script to your ASPX page to hide the crop dialog and implement direct cropping:

```html
<style>
    #RadImageEditor1_ToolsPanel {
        display: none !important;
    }
</style>
<telerik:RadImageEditor ID="RadImageEditor1" runat="server" OnImageSaving="RadImageEditor1_ImageSaving" ImageManager-ViewPaths="~/Images" ImageManager-UploadPaths="~/Images" ImageUrl="~/Images/YourImage.jpg">
    <Tools>
        <telerik:ImageEditorToolGroup>
            <telerik:ImageEditorTool CommandName="Crop" />
            <telerik:ImageEditorTool CommandName="Save" />
        </telerik:ImageEditorToolGroup>
    </Tools>
</telerik:RadImageEditor>
<script>
    function OnClientClicked(sender, args) {
        var imgEditor = $find("<%= RadImageEditor1.ClientID %>");
        imgEditor.getEditableImage().crop(collectBounds());
        imgEditor.saveImageOnServer("", true);
    }

    function collectBounds() {
        // Implement the logic to collect the crop bounds based on user selection
    }
</script>
<telerik:RadButton runat="server" ID="RadButton1" Text="Save" AutoPostBack="false" OnClientClicked="OnClientClicked" />
```

### Handling Server-Side Image Saving

Implement the `ImageSaving` event handler in your code-behind to save the cropped image:

```c#
    protected void RadImageEditor1_ImageSaving(object sender, Telerik.Web.UI.ImageEditorSavingEventArgs args)
    {
        // Save the cropped image to disk or database
        Telerik.Web.UI.ImageEditor.EditableImage img = args.Image;
        img.Image.Save(Server.MapPath("~/Images/CroppedImage.jpg"));
        args.Cancel = true; // Cancel the default save action
    }
```
```vb
Protected Sub RadImageEditor1_ImageSaving(sender As Object, args As Telerik.Web.UI.ImageEditorSavingEventArgs)
    Dim img As Telerik.Web.UI.ImageEditor.EditableImage = args.Image
    img.Image.Save(Server.MapPath("~/Images/CroppedImage.jpg"))
    args.Cancel = True ' Prevent the default save action
End Sub
```

This setup streamlines the image cropping process in RadImageEditor, enabling users to easily select and save a portion of an image without navigating through additional dialogs or prompts.

## See Also

- [RadImageEditor Crop Tool Demo](https://demos.telerik.com/aspnet-ajax/imageeditor/examples/crop/defaultcs.aspx)
- [RadImageEditor Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/imageeditor/client-side-programming/overview)
- [RadImageEditor Server-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/imageeditor/server-side-programming/overview)
