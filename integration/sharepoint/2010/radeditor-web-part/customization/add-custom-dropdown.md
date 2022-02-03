---
title: Add Custom DropDown
page_title: Add Custom DropDown
description: Check our Web Forms article about Add Custom DropDown.
slug: sharepoint/2010/radeditor-web-part/customization/add-custom-dropdown
tags: add,custom,dropdown
published: True
position: 3
---

# Add Custom DropDown

Bellow are the exact steps that demonstrate how to add a custom dropdown when using RadEditor for SP2010:

1. Open the respective ToolsFile situated in the */Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources* folder and add the custom dropdown's declaration e.g. `<tool name="CustomDropdown" type="dropdown"> <item name="Item 1" Value="1"/> <item name="Item 2" Value="2"/> <item name="Item 3" Value="3"/></tool>`

1. Next, open the _/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/SPEditorTools.js_ file and add the dropdown's command:

	**JavaScript**
	
		Telerik.Web.UI.Editor.CommandList["CustomDropdown"] = function (commandName, editor, args)
		{
		    alert("Value selected: " + args.get_value());
		};


1. To improve the custom dropdown's appearance, you should provide image file for it, by setting the following CSS class in corresponding Master page:

	**XML**
	
		<style type="text/css">
		    .rade_toolbar.<skinName> .<commandName>
		    {
		     background-image: url(MyImage.gif)!important;
		    }
		    .rade_toolbar.Telerik .CustomDropdown
		    {
		     background-image: url(https://www.telerik.com/DEMOS/ASPNET/RadControls/Editor/Skins/Default/buttons/CustomDialog.gif)!important;
		    }
		</style>

1. Clear the browser's cache and test the result.
