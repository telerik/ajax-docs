---
title: Modifying RadEditor's built-in dialogs
page_title: Modifying RadEditor's built-in dialogs | UI for ASP.NET AJAX Documentation
description: Modifying RadEditor's built-in dialogs
slug: sharepoint/2007/radeditor-for-moss/customization/modifying-radeditor's-built-in-dialogs
tags: modifying,radeditor's,built-in,dialogs
published: True
position: 6
---

# Modifying RadEditor's built-in dialogs

By default, all RadEditor dialogs are embedded as resource files in the Telerik.Web.UI.dll file, which makes their customization harder. In order to provide an easy way to modify the editor's dialogs, the Telerik® UI for ASP.NET AJAX installation now comes with an extra folder named **EditorDialogs** which contains the dialogs' ascx files. You can configure RadEditor to use the external dialog files by copying the **EditorDialogs** within you web application's root and set the editor's **ExternalDialogsPath** property to point to it in the respective ConfigFile.

**Example:** The example below demonstrates how to hide the "Create New Folder" button in the Image Manager dialog. Here are the steps:

1. Copy the **EditorDialogs** folder to the \wpresources\RadEditorSharePoint\5.x.x.0**1f131a624888eeed\Resources\ directory.

1. Set the **ExternalDialogsPath** property to point to the **EditorDialogs** folder e.g. <property name="**ExternalDialogsPath**">/_wpresources/RadEditorSharePoint/5.x.x.0**1f131a624888eeed/Resources/EditorDialogs</property>

1. Open the \EditorDialogs\ImageManager.ascx file and locate the following control, which represent the "Create New Folder" button:

	**ASP.NET**
	
		<telerik:RadToolBarButton Text=" " ToolTip="New Folder" Value="NewFolder" Enabled="false"
			CssClass="rtbIconOnly icnNewFolder" />


1. To hide it just set either style="display:none;" or Visible="false":

	**ASP.NET**
	    
		<telerik:RadToolBarButton Text=" " Style="display: none;" ToolTip="New Folder" Value="NewFolder"
	        Enabled="false" CssClass="rtbIconOnly icnNewFolder" />

1. Save the file and test the editor.
