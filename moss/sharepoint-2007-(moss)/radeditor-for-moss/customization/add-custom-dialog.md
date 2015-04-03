---
title: Add Custom Dialog
page_title: Add Custom Dialog | UI for ASP.NET AJAX Documentation
description: Add Custom Dialog
slug: moss/sharepoint-2007-(moss)/radeditor-for-moss/customization/add-custom-dialog
tags: add,custom,dialog
published: True
position: 5
---

# Add Custom Dialog



## 

Bellow are the exact steps that demonstrate how to add your custom dialog when using RadEditor for MOSS:

1. Open the respective ToolsFile situated in the /Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources folder and add the custom button that will open the dialog e.g.<tool name="CustomDialog" />

1. To improve the button's appearance, add image file for it, by setting the following CSS class in corresponding Master page:

````XML
	        
	        .rade_toolbar.<skinName> .<commandName>
	        {
	         background-image: url(MyImage.gif)!important;
	        }
	        .rade_toolbar.Telerik .CustomDialog
	        {
	         background-image: url(http://www.telerik.com/DEMOS/ASPNET/RadControls/Editor/Skins/Default/buttons/CustomDialog.gif)!important;
	        }
	        
````



1. Open the \wpresources\RadEditorSharePoint\5.x.x.0__1f131a624888eeed\Resources\MOSSEditorTools.js file and provide a command with the same name in the editor's global commands array, which will call the __showExternalDialog(url, argument, width, height, callbackFunction, callbackArgs, title, modal, behaviors, showStatusbar, showTitlebar)__ function:

````JavaScript
	        Telerik.Web.UI.Editor.CommandList["CustomDialog"] = function (commandName, editor, args)
	        {
	            var myCallbackFunction = function (sender, args)
	            {
	                editor.set_html(args);
	            }
	
	            var arg = editor.get_html();
	            editor.showExternalDialog('/_wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/Dialogs/CustomDialog.aspx',
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



1. Put your custom dialog in the /Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/Dialogs folder and make sure that can be accessed.

1. Clear the browser's cache and test the behavior.

Bellow is a sample custom dialog's source:

````ASPNET
	
	    <%@ page language="C#" autoeventwireup="true" %>
	
	    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	    <html xmlns="http://www.w3.org/1999/xhtml">
	    <head id="Head1" runat="server">
	        <title>Untitled Page</title>
	    </head>
	    <body>
	        <form id="form2" runat="server">
	        <fieldset style="width: 214px; height: 190px">
	            <input type="text" id="content" style="width: 350px; height: 290px"><br />
	            <input type="button" onclick="return content_onclick()" value="Return content" />
	        </fieldset>
	        <script type="text/javascript">
	            if (window.attachEvent)
	            {
	                window.attachEvent("onload", initDialog);
	            }
	            else if (window.addEventListener)
	            {
	                window.addEventListener("load", initDialog, false);
	            }
	
	            var content = document.getElementById("content");
	            function getRadWindow()
	            {
	                if (window.radWindow)
	                {
	                    return window.radWindow;
	                }
	                if (window.frameElement && window.frameElement.radWindow)
	                {
	                    return window.frameElement.radWindow;
	                }
	                return null;
	            }
	            var clientParameters;
	            function initDialog()
	            {
	
	                clientParameters = getRadWindow().ClientParameters; //return the arguments supplied from the parent page
	
	                content.value = clientParameters;
	            }
	            var returnValue;
	            function content_onclick() //fires when the Insert Link button is clicked
	            {
	                returnValue = content.value;
	                getRadWindow().close(returnValue); //use the close function of the getRadWindow to close the dialog and pass the arguments from the dialog to the callback function on the main page.
	            }
	        </script>
	        </form>
	    </body>
	    </html>
````


