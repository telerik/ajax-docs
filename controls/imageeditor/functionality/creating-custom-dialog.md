---
title: Creating Custom Dialog
page_title: Creating Custom Dialog | RadImageEditor for ASP.NET AJAX Documentation
description: Creating Custom Dialog
slug: imageeditor/functionality/creating-custom-dialog
tags: creating,custom,dialog
published: True
position: 1
---

# Creating Custom Dialog



## Custom Dialogs Support

RadImageEditor provides a flexible mechanism for adding custom dialogs that plug directly into the undo/redo mechanism and have the Telerik RadImageEditor look and feel.

The custom image editor's dialog is a standard WebUserControl that has to be loaded in the tools panel. Here are the steps to create and add a custom dialog:

1. Add a custom button to the RadImageEditor's toolbar and in its command implementation call **executeCommand()** method:

````JavaScript
	        Telerik.Web.UI.ImageEditor.CommandList["CustomInsertImage"] = function (imgEditor, commandName, args)
	        {
	            imgEditor.executeCommand("CustomInsertImage");
	        };
````



1. Handle the RadImageEditor's DialogLoading server-side event and load the user control to the tools panel:



````C#
	    protected void RadImageEditor1_DialogLoading(object sender, ImageEditorDialogEventArgs args)
	    {
	        if (args.DialogName == "CustomInsertImage")
	        {
	            args.Panel.Controls.RemoveAt(1);//remove the predefined div
	            args.Panel.Controls.Add(LoadControl("~/ImageEditor/Examples/CustomDialogInsertImage/CustomInsertImageDialog.ascx"));
	        }
	    }
````
````VB
	    Protected Sub RadImageEditor1_DialogLoading(ByVal sender As Object, ByVal args As ImageEditorDialogEventArgs)
	        If args.DialogName = "CustomInsertImage" Then
	            args.Panel.Controls.RemoveAt(1)
	            'remove the predefined div
	            args.Panel.Controls.Add(LoadControl("~/ImageEditor/Examples/CustomDialogInsertImage/CustomInsertImageDialog.ascx"))
	        End If
	    End Sub
````


1. The user control should register a client-side class with the same name as the custom command. This client-side class should implement **Telerik.Web.UI.RadImageEditor.IToolWidget** interface with the following structure:

````JavaScript
	        Telerik.Web.UI.IToolWidget = function () { }
	        Telerik.Web.UI.IToolWidget.prototype =
	        {
	            updateUI: function () { },     //updates the controllers (such us sliders, textboxes and etc.) on the ToolWidget
	            get_name: function () { },     //the name of the tool widget used for identification
	            onOpen: function () { },           //the event handler for the close event of the tool panel
	            onClose: function () { }           //the event handler for the close event of the tool panel
	        };
	        Telerik.Web.UI.IToolWidget.registerInterface("Telerik.Web.UI.ImageEditor.IToolWidget");
````



Full working example of a custom dialog implementation is available in the [related live demo](http://demos.telerik.com/aspnet-ajax/imageeditor/examples/customdialoginsertimage/defaultcs.aspx).
