---
title: Add Custom Buttons
page_title: Add Custom Buttons | UI for ASP.NET AJAX Documentation
description: Add Custom Buttons
slug: sharepoint/2007/radeditor-for-moss/customization/add-custom-buttons
tags: add,custom,buttons
published: True
position: 3
---

# Add Custom Buttons



## 

Bellow are the exact steps that demonstrate how to add your custom button when using RadEditor for MOSS:

1. Open the respective ToolsFile situated in the /Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0**1f131a624888eeed/Resources folder and add the custom button's declaration e.g.<tool name="CustomCommand1" />

1. Next, open the /Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0**1f131a624888eeed/Resources/MOSSEditorTools.js and add the custom tool's command:

````JavaScript
	        Telerik.Web.UI.Editor.CommandList["CustomCommand1"] = function (commandName, editor, args)
	        {
	            alert("Custom command 1");
	            //for example you can apply bold formatting by firing the editor.fire("Bold");
	        };
````



1. The command above will be rendered as button on the toolbar. To improve the appearance, you should provide image file for it, by declaring the following CSS classes in corresponding Master page:

````XML
	        .rade_toolbar.<skinName> .<commandName>
	        {
	         background-image: url(MyImage.gif)!important;
	        }
	        .rade_toolbar.Telerik .CustomCommand1
	        {
	         background-image: url(http://www.telerik.com/DEMOS/ASPNET/RadControls/Editor/Skins/Default/buttons/CustomDialog.gif)!important;
	        }
	
````



1. Clear the browser's cache and test the result.
