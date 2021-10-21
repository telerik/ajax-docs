---
title: Notify the user that an image with invalid file name is being uploaded
description: See how to notify the user that an image with invalid file name is being uploaded in RadEditor.
type: how-to
page_title: Notify the user that an image with invalid file name is being uploaded
slug: editor-notify-the-user-that-an-image-with-invalid-file-name-is-uploaded
res_type: kb
---

## HOW-TO
Notify the user that an image with invalid file name is being uploaded

## DESCRIPTION
Browsers do not like and support special symbols such as such as +, ', &, etc... in the image file names. Such characters corrupt the rendering of the images not only in the browser page but also in the content area of the editable iframe and div elements like the content area of RadEditor. This behavior also occurs in the Image Manager thumbnails and preview modes.

To fix this issue, the developer could use the solutions provided below, which check the name of the uploaded image file and notifies the user for existence of unsupported characters in the file name.

## SOLUTION 1
In order to add a validation for the plus + symbol in the selected files in RadAsyncUpload, which is used in the RadEditor's File Browser dialogs follow the instructions below:

1. Register the external dialogs of RadEditor as shown in the following live demo: [Customizing Built-in dialogs(http://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx):
	````ASP.NET
	<telerik:RadEditor ID="RadEditor1" runat="server" ExternalDialogsPath="~/EditorDialogs">
		 <ImageManager ViewPaths="~/Images" UploadPaths="~/Images" />
	</telerik:RadEditor>
	````
2. Copy the EditorDialogs installation folder to the root of the web application. Open the EditorDialogs/FileBrowser.ascx file, locate the RadFileExplorer definition and set the OnClientLoad="explorerLoad" property in it.
3. Register the following functions:
	````ASP.NET
	<telerik:RadFileExplorer ID="RadFileExplorer1" Height="450px" Width="400px" TreePaneWidth="150px" OnClientLoad="explorerLoad"
	runat="Server" EnableOpenFile="false" AllowPaging="true" PageSize="100" />
	<script type="text/javascript">
		function explorerLoad(explorer) {
			var upload = $find(explorer.get_id() + "_upload1");
			upload.add_fileSelected(uploadFileSelected);
		}
		function uploadFileSelected(sender, args) {
			var fileName = args.get_fileInputField().value;
			if (fileName.indexOf("+") != -1) {
				var rowIndex = sender._getRowIndex(args.get_row());
				sender.clearFileInputAt(rowIndex)
				alert("File name contains plus symbol");
			}
		}
	</script>
	````
4. Save the files, restart the browser and test the Upload dialog

## SOLUTION 2
Another approach to prevent the upload of files with + symbols in their names is to use the server OnFileUpload server event of RadEditor:

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server"
    OnFileUpload="RadEditor1_FileUpload">
    <ImageManager ViewPaths="~/Images" UploadPaths="~/Images" />
</telerik:RadEditor>
````

Codebehind:

````C#
public bool RadEditor1_FileUpload(object sender, string fileName)
{
    if (fileName.Contains("+"))
    {
        return false;
    }
    else return true;
}
````

However in the second approach you cannot alert a message on the screen.

## SOLUTION 3
You can also implement a [FileSystemContentProvider](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/dialogs/examples/custom-filebrowsercontentprovider) and override the StoreFile method which will allow you to modify and rename the uploaded file name on the server. See this KB article on the subject: [Giving the uploaded files unique names](https://www.telerik.com/support/kb/aspnet-ajax/editor/giving-the-uploaded-files-unique-names).

