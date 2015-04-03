---
title: Custom Server-side Operations
page_title: Custom Server-side Operations | UI for ASP.NET AJAX Documentation
description: Custom Server-side Operations
slug: imageeditor/functionality/custom-server-side-operations
tags: custom,server-side,operations
published: True
position: 2
---

# Custom Server-side Operations



## 

Starting with Q1 2012 the __RadImageEditor__ allows its built-in __OnImageEditing__[server-side event]({%slug imageeditor/server-side-programming/events%}) to handle the server-side execution of custom commands you have added to its toolbar. By using this you can also override the behavior of the built-in commands or add some custom functionality to them.

In order to use a custom command you need to first add its handler in the JavaScript. To send the command to the server you need to call the control's __editImageOnServer__ JavaScript method.

The handler for the command receives three parameters which are common for all custom client-side commands:

1. imageEditor - the instance of the __RadImageEditor__ whose command is fired

1. commandName - the name of the command as declared in the custom tool's __CommandName__ property

1. args - an event arguments object that exposes the following two methods:

* get_item() - the toolbar button that was clicked

* get_domEvent() - the DOM event of the click

The editImageOnServer() method takes four arguments:

1. commandName - the command name that will be passed to the server and respective client events. It should be unique

1. commandText - the command text that will be used to record the operation in the Undo/Redo stack. If nothing is passed the commandName will be used

1. customArgument - additional command argument that will be passed to the server. By default it is an empty string. You can set it dynamically in order to transfer some information from the client

1. callbackFunction - the JavaScript function that is executed when the response from the server is received. It takes two arguments:

1. clientData - the same data that was originally sent from the client to the server

1. serverData - the data object that comes from the server. This is where you can read the argument which is modified on the server - it is contained in the *args* field of the serverData object

The __OnImageEditing__ server-side handler receives two arguments - one is of type object and is the __RadImageEditor__ instance and the second is of type *Telerik.Web.UI.ImageEditorEditingEventArgs* and contains the information passed from the client as well as the Image itself.

The below example shows how to add a custom command that will add some text to the image on the server. The added text is passed as an argument from the client and then some information is returned from the server to the client

````ASPNET
	    <telerik:RadImageEditor runat="server" ID="RadImageEditor1" ImageUrl="~/image1.png"
	        OnImageEditing="OnImageEditing">
	        <Tools>
	            <telerik:ImageEditorToolGroup>
	                <telerik:ImageEditorToolStrip CommandName="Undo">
	                </telerik:ImageEditorToolStrip>
	                <telerik:ImageEditorToolStrip CommandName="Redo">
	                </telerik:ImageEditorToolStrip>
	                <telerik:ImageEditorTool CommandName="RotateLeft" />
	                <telerik:ImageEditorTool CommandName="addCustomText" />
	            </telerik:ImageEditorToolGroup>
	        </Tools>
	    </telerik:RadImageEditor>
````



````JavaScript
	    <script type="text/javascript">
	        Telerik.Web.UI.ImageEditor.CommandList.addCustomText = function (imageEditor, commandName, args)
	        {
	            //custom argument that will be passed to the server
	            var customArgument = "custom argument";
	            //the text that will appear in the undo/redo stack
	            var commandText = "Add custom text";
	            imageEditor.editImageOnServer(commandName, commandText, customArgument, callbackFunction);
	        }
	
	
	        function callbackFunction(clientData, serverData)
	        {
	            //you can get the argument that comes from the server
	            alert(serverData.args);
	        }
	    </script>
````



>tabbedCode

````C#
	        using System.Drawing;
	
	        protected void OnImageEditing(object sender, Telerik.Web.UI.ImageEditorEditingEventArgs args)
	        {
	            args.Cancel = true; //cancel the default action if need be
	            //create the custom functionality
	            args.Image.AddText(new Point(100, 100), new Telerik.Web.UI.ImageEditor.ImageText()
	            {
	                Color = "#F00",
	                FontFamily = "Arial",
	                Size = 20f,
	                Value = args.Argument
	            });
	            //you can change the argument that is passed and it will be sent to the client
	            args.Argument = "information from the server";
	        }
````



````VB.NET
	    Imports System.Drawing
	
	    Protected Sub OnImageEditing(sender As Object, args As Telerik.Web.UI.ImageEditorEditingEventArgs)
	        args.Cancel = True
	        'cancel the default action if need be
	        'create the custom functionality
	        Dim newText As New Telerik.Web.UI.ImageEditor.ImageText()
	        With newText
	            .Color = "#F00"
	            .FontFamily = "Arial"
	            .Size = 20.0F
	            .Value = args.Argument
	        End With
	        args.Image.AddText(New Point(100, 100), newText)
	        'you can change the argument that is passed and it will be sent to the client
	        args.Argument = "information from the server"
	    End Sub
	#End Region
	End Class


>end

# See Also

 * [Custom Server Commands online demo](http://demos.telerik.com/aspnet-ajax/imageeditor/examples/customservercommands/defaultcs.aspx)
