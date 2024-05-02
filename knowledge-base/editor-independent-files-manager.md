---
title: Independent files manager
description: Learn how to implement an independent files manager.
type: troubleshooting
page_title: Independent files manager.  | RadEditor
slug: editor-independent-files-manager
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Editor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

this article aims to provide a solution for implementation of an independent file manager.

## Solution

In this sample, an use of image and documents manager dialogs are defined outside the Editor, so that it can support multi images/documents in a single page.

````ASP.NET
<asp:TextBox runat="server" ID="ImageTextBox1" Width="400px"></asp:TextBox>
<button onclick="OpenDialog('ImageTextBox1', 'DialogOpener1', 'ImageManager');return false;">Open ImageManager1</button><br />
<asp:TextBox runat="server" ID="ImageTextBox2" Width="400px"></asp:TextBox>
<button onclick="OpenDialog('ImageTextBox2', 'DialogOpener1', 'ImageManager');return false;">Open ImageManager2</button><br />
<asp:TextBox runat="server" ID="ImageTextBox3" Width="400px"></asp:TextBox>
<button onclick="OpenDialog('ImageTextBox3', 'DialogOpener1', 'ImageManager');return false;">Open ImageManager3</button><br />
<telerik:DialogOpener runat="server" ID="DialogOpener1" Skin="Telerik"></telerik:DialogOpener>
<br />
<button onclick="OpenDialog('ImageTextBox1', 'DialogOpener1', 'DocumentManager');return false;">Open Document Manager</button>
<button onclick="OpenDialog('ImageTextBox1', 'DialogOpener1', 'FlashManager');return false;">Open Flash Manager</button>
````

````JavaScript
var callBackControl = "";

function OpenDialog(currentCallBackControl, dialog, type) {
    callBackControl = currentCallBackControl;
    $find(dialog).open(type);
}

function ImageManagerFunction(sender, args) {
    var selectedItem = args.SelectedItem;
    var resultImageObject = args.Result;

    var txt = $get(callBackControl);
    if (document.all) {
        txt.value = selectedItem.getPath();
    }
    else {
        txt.value = selectedItem.getPath();
    }
}

function DocumentManagerFunction(sender, args) {
    var selectedItem = args.SelectedItem;
    var resultDocumentObject = args.Result;

    var txt = $get(callBackControl);
    if (document.all) {
        txt.value = selectedItem.getPath();;
    }
    else {
        txt.value = selectedItem.getPath();
    }
}
function FlashManagerFunction(sender, args) {
    var selectedItem = args.SelectedItem;
    var resultDocumentObject = args.Result;
    var txt = $get(callBackControl);

    if (document.all) {
        txt.value = selectedItem.getPath();
    }
    else {
        txt.value = selectedItem.getPath();
    }
}  
````

````C#
using Telerik.Web.UI;
using Telerik.Web.UI.Editor.DialogControls;

/// <summary>
/// Summary description for DialogOpenerHandler
/// </summary>
public static class DialogOpenerHandler
{
    public static void SetDocumentDialog(DialogOpener dialogOpener, string baseUrl)
    {
        FileManagerDialogParameters documentManagerParameters = new FileManagerDialogParameters();
        documentManagerParameters.ViewPaths = new string[] { baseUrl };
        documentManagerParameters.UploadPaths = new string[] { baseUrl };
        documentManagerParameters.DeletePaths = new string[] { baseUrl };
        documentManagerParameters.MaxUploadFileSize = 5000000;

        DialogDefinition documentManager = new DialogDefinition(typeof(DocumentManagerDialog), documentManagerParameters);
        documentManager.ClientCallbackFunction = "DocumentManagerFunction";
        documentManager.Width = System.Web.UI.WebControls.Unit.Pixel(694);
        documentManager.Height = System.Web.UI.WebControls.Unit.Pixel(440);

        dialogOpener.DialogDefinitions.Add("DocumentManager", documentManager);
    }

    public static void SetFlashDialog(DialogOpener dialogOpener, string baseUrl)
    {
        FileManagerDialogParameters documentManagerParameters = new FileManagerDialogParameters();
        documentManagerParameters.ViewPaths = new string[] { baseUrl };
        documentManagerParameters.UploadPaths = new string[] { baseUrl };
        documentManagerParameters.DeletePaths = new string[] { baseUrl };
        documentManagerParameters.MaxUploadFileSize = 5000000;

        DialogDefinition documentManager = new DialogDefinition(typeof(FlashManagerDialog), documentManagerParameters);
        documentManager.ClientCallbackFunction = "FlashManagerFunction";
        documentManager.Width = System.Web.UI.WebControls.Unit.Pixel(694);
        documentManager.Height = System.Web.UI.WebControls.Unit.Pixel(440);

        dialogOpener.DialogDefinitions.Add("FlashManager", documentManager);
    }

    public static void SetImageDialog(DialogOpener dialogOpener, string baseUrl)
    {
        FileManagerDialogParameters imageManagerParameters = new FileManagerDialogParameters();
        imageManagerParameters.ViewPaths = new string[] { baseUrl };
        imageManagerParameters.UploadPaths = new string[] { baseUrl };
        imageManagerParameters.DeletePaths = new string[] { baseUrl };
        imageManagerParameters.MaxUploadFileSize = 5000000;
        // If you don't set the following property, the default value will be used   
        // imageManagerParameters.SearchPatterns = new string[] { "*.jpg" };   
        DialogDefinition imageManager = new DialogDefinition(typeof(ImageManagerDialog), imageManagerParameters);
        imageManager.ClientCallbackFunction = "ImageManagerFunction";
        imageManager.Width = System.Web.UI.WebControls.Unit.Pixel(694);
        imageManager.Height = System.Web.UI.WebControls.Unit.Pixel(440);

        dialogOpener.DialogDefinitions.Add("ImageManager", imageManager);

        FileManagerDialogParameters imageEditorParameters = new FileManagerDialogParameters();
        imageEditorParameters.ViewPaths = new string[] { baseUrl };
        imageEditorParameters.UploadPaths = new string[] { baseUrl };
        imageEditorParameters.DeletePaths = new string[] { baseUrl };
        imageEditorParameters.MaxUploadFileSize = 5000000;

        DialogDefinition imageEditor = new DialogDefinition(typeof(ImageEditorDialog), imageEditorParameters);
        imageEditor.Width = System.Web.UI.WebControls.Unit.Pixel(832);
        imageEditor.Height = System.Web.UI.WebControls.Unit.Pixel(520);
        dialogOpener.DialogDefinitions.Add("ImageEditor", imageEditor);
    }
}
````

This C# code defines a static class named `DialogOpenerHandler` with several methods for setting up different types of dialogs for use with Telerik controls. Let's break down each method:

- **SetDocumentDialog**: This method configures a dialog for managing documents. It sets up a `FileManagerDialogParameters` object with specific view, upload, and delete paths, as well as a maximum upload file size. Then, it creates a `DialogDefinition` object for a `DocumentManagerDialog` with these parameters, specifying a client callback function, width, and height. Finally, it adds this `DialogDefinition` to the `DialogOpener` object passed as a parameter.

- **SetFlashDialog**: Similar to `SetDocumentDialog`, this method configures a dialog for managing Flash content. It follows the same pattern of setting up `FileManagerDialogParameters` and `DialogDefinition` for a `FlashManagerDialog` and adds it to the provided `DialogOpener`.

- **SetImageDialog**: This method sets up two dialogs related to managing images. The first part configures a dialog for browsing and selecting images, using `FileManagerDialogParameters` and `DialogDefinition` for an `ImageManagerDialog`. The second part configures a dialog for editing images, using `FileManagerDialogParameters` and `DialogDefinition` for an `ImageEditorDialog`. Both dialogs have specific paths and a maximum upload file size set.

   