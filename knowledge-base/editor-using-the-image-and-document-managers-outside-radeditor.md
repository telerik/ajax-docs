---
title: Using the Image and Document managers outside RadEditor
description: See how to show the Image and Document managers or any other *Manager dialog without RadEditor
type: how-to
page_title: Using the Image and Document managers outside RadEditor
slug: editor-using-the-image-and-document-managers-outside-radeditor
res_type: kb
---

## Description

The code solution below shows how to isolate the Image and Document managers of RadEditor as standlone dialogs.



## Solution

Note: Since 2012.3.1308 the Image Manager dialog offers the ability to select multiple files and the value returned by the args.get_value() method is a collection but not a string as in the earlier versions.

Since June 2013 (Q2’13), RadUpload control has been obsoleted and replaced by RadAsyncUpload. You need to switch the Upload control in the newer versions manually by setting imageManagerParameters.EnableAsyncUpload = true;

Since Q1 2016 there is a new Material skin supported only by the Lightweight render mode. To take advantage of the skin set imageManagerParameters.RenderMode = RenderMode.Lightweight; 

You can easily show the Image and Document managers or any other *Manager dialog without RadEditor, using the code below:

Default.aspx:

````ASP.NET
<script type="text/javascript">
    function OpenImgManager() {
        var args = new Telerik.Web.UI.EditorCommandEventArgs("ImageManager", null, document.createElement("img"));
        args.CssClasses = [];
 
        $find('<%= DialogOpener1.ClientID %>').open('ImageManager', args);
    }
 
    function ImageManagerFunction(sender, args) {
        if (!args) {
            alert('No file was selected!');
            return false;
        }
 
        var path = args.get_value()[0].src;
        var txt = $get('<%= TextBox1.ClientID %>');
        txt.value = "<img src='" + path + "' />";
    }
 
 
 
    function OpenDocManager() {
        var args = new Telerik.Web.UI.EditorCommandEventArgs("DocumentManager", null, document.createElement("a"));
        args.CssClasses = [];
 
        $find('<%= DialogOpener1.ClientID %>').open('DocumentManager', args);
    }
 
    function DocumentManagerFunction(sender, args) {
        if (!args) {
            alert('No file was selected!');
            return false;
        }
 
        var path = args.get_value().href;
        var txt = $get('<%= TextBox1.ClientID %>');
                
        txt.value = "<a src='" + path + "' />";
    }
 
 
</script>
 
<asp:TextBox runat="server" ID="TextBox1" Width="400px"></asp:TextBox><br />
<telerik:DialogOpener RenderMode="Lightweight" runat="server" ID="DialogOpener1"></telerik:DialogOpener>
<button onclick="OpenImgManager();return false;">Open ImageManager</button>
<button onclick="OpenDocManager();return false;">Open Document Manager</button>
````

Default.aspx.cs
````C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;
using Telerik.Web.UI.Editor.DialogControls;
 
public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        FileManagerDialogParameters imageManagerParameters = new FileManagerDialogParameters();
        imageManagerParameters.EnableAsyncUpload = true;
        imageManagerParameters.RenderMode = RenderMode.Lightweight;
        imageManagerParameters.ViewPaths = new string[] { "~/Images" };
        imageManagerParameters.UploadPaths = new string[] { "~/Images" };
        imageManagerParameters.DeletePaths = new string[] { "~/Images" };
        imageManagerParameters.MaxUploadFileSize = 5000000;
        // If you don't set the following property, the default value will be used
        // imageManagerParameters.SearchPatterns = new string[] { "*.jpg" };
 
        DialogDefinition imageManager = new DialogDefinition(typeof(ImageManagerDialog), imageManagerParameters);
        imageManager.ClientCallbackFunction = "ImageManagerFunction";
        imageManager.Width = Unit.Pixel(694);
        imageManager.Height = Unit.Pixel(440);
        //If you need to customize the dialog then register the external dialog files
        //imageManager.Parameters["ExternalDialogsPath"] = "~/EditorDialogs/";
 
        DialogOpener1.DialogDefinitions.Add("ImageManager", imageManager);
 
        FileManagerDialogParameters documentManagerParameters = new FileManagerDialogParameters();
        documentManagerParameters.EnableAsyncUpload = true;
        documentManagerParameters.RenderMode = RenderMode.Lightweight;
        documentManagerParameters.ViewPaths = new string[] { "~/Documents" };
        documentManagerParameters.UploadPaths = new string[] { "~/Documents" };
        documentManagerParameters.DeletePaths = new string[] { "~/Documents" };
        documentManagerParameters.MaxUploadFileSize = 5000000;
 
 
        DialogDefinition documentManager = new DialogDefinition(typeof(DocumentManagerDialog), documentManagerParameters);
        documentManager.ClientCallbackFunction = "DocumentManagerFunction";
        documentManager.Width = Unit.Pixel(694);
        documentManager.Height = Unit.Pixel(440);
 
 
        DialogOpener1.DialogDefinitions.Add("DocumentManager", documentManager);
 
        FileManagerDialogParameters imageEditorParameters = new FileManagerDialogParameters();
        imageEditorParameters.EnableAsyncUpload = true;
        imageEditorParameters.RenderMode = RenderMode.Lightweight;
        imageEditorParameters.ViewPaths = new string[] { "~/Images" };
        imageEditorParameters.UploadPaths = new string[] { "~/Images" };
        imageEditorParameters.DeletePaths = new string[] { "~/Images" };
        imageEditorParameters.MaxUploadFileSize = 5000000;
 
        DialogDefinition imageEditor = new DialogDefinition(typeof(ImageEditorDialog), imageEditorParameters);
        imageEditor.Width = Unit.Pixel(832);
        imageEditor.Height = Unit.Pixel(520);
        DialogOpener1.DialogDefinitions.Add("ImageEditor", imageEditor);
    }
}
````

## See Also
* [Sample project - ImageDocumentManagersStandAlone.zip](https://d585tldpucybw.cloudfront.net/docs/default-source/knowledgebasearticleattachments/imagedocumentmanagersstandalone-zip.zip?sfvrsn=4ca66da_0)

