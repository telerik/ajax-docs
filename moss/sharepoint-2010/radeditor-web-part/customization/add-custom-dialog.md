---
title: Add Custom Dialog
page_title: Add Custom Dialog | UI for ASP.NET AJAX Documentation
description: Add Custom Dialog
slug: moss/sharepoint-2010/radeditor-web-part/customization/add-custom-dialog
tags: add,custom,dialog
published: True
position: 4
---

# Add Custom Dialog



## 

Bellow are the exact steps that demonstrate how to add your custom dialog when using RadEditor for SP2010:

1. Open the respective ToolsFile situated in the /Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources folder and add the custom button that will open the dialog e.g.<tool name="CustomDialog" />

1. To improve the button's appearance, add image file for it, by setting the following CSS class in corresponding Master page:

````XML
	    <style type="text/css">     
	        .rade_toolbar.<skinName> .<commandName>
	        {
	         background-image: url(MyImage.gif)!important;
	        }
	        .rade_toolbar.Telerik .CustomDialog
	        {
	         background-image: url(http://www.telerik.com/DEMOS/ASPNET/RadControls/Editor/Skins/Default/buttons/CustomDialog.gif)!important;
	        }
	    </style>
````



1. Open the \wpresources\RadEditorSharePoint\6.x.x.0__1f131a624888eeed\Resources\SPEditorTools.js file and provide a command with the same name in the editor's global commands array, which will call the __showExternalDialog(url, argument, width, height, callbackFunction, callbackArgs, title, modal, behaviors, showStatusbar, showTitlebar)__ function:

````JavaScript
	    Telerik.Web.UI.Editor.CommandList["CustomDialog"] = function(commandName, editor, args)
	    {
	         var myCallbackFunction = function(sender, args)  
	            {  
	            editor.set_html(args);  
	            }  
	   
	           var arg = editor.get_html();   
	           editor.showExternalDialog(  '/_wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/Dialogs/CustomDialog.aspx',
	           arg,
	           600,
	           400,
	           myCallbackFunction,
	           null,  
	           'CustomDialog',
	           true,  
	           Telerik.Web.UI.WindowBehaviors.Close + Telerik.Web.UI.WindowBehaviors.Move,
	           false,  
	           false);  
	    };
````



1. Put your custom dialog in the /Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/Dialogs folder and make sure that can be accessed.

1. Clear the browser's cache and test the behavior.

Bellow is a sample custom dialog's source:

````ASPNET
	    <style type="text/css">     
	        .rade_toolbar.<skinName> .<commandName>
	        {
	         background-image: url(MyImage.gif)!important;
	        }
	        .rade_toolbar.Telerik .CustomDialog
	        {
	         background-image: url(http://www.telerik.com/DEMOS/ASPNET/RadControls/Editor/Skins/Default/buttons/CustomDialog.gif)!important;
	        }
	    </style>
````


