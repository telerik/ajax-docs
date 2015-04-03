---
title: Modfying Built-in Dialogs
page_title: Modfying Built-in Dialogs | UI for ASP.NET AJAX Documentation
description: Modfying Built-in Dialogs
slug: moss/sharepoint-2010/radeditor-web-part/customization/modfying-built-in-dialogs
tags: modfying,built-in,dialogs
published: True
position: 5
---

# Modfying Built-in Dialogs



## 

By default, all RadEditor dialogs are embedded as resource files in the Telerik.Web.UI.dll file, which makes their customization harder. In order to provide an easy way to modify the editor's dialogs, the Telerik UI for ASP.NET AJAX installation now comes with an extra folder named __EditorDialogs__ which contains the dialogs' ascx files. You can configure RadEditor to use the external dialog files by copying the __EditorDialogs__ within you web application's root and set the editor's __ExternalDialogsPath__ property to point to it in the respective ConfigFile.

__Example:__The example below demonstrates how to hide the "Create New Folder" button in the Image Manager dialog. Here are the steps:

1. Copy the __EditorDialogs__ folder to the \wpresources\RadEditorSharePoint\6.x.x.0__1f131a624888eeed\Resources\ directory.

1. Set the __ExternalDialogsPath__ property to point to the __EditorDialogs__ folder e.g.<property name="__ExternalDialogsPath__">/_wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/EditorDialogs</property>

1. Open the \EditorDialogs\ImageManager.ascx file and locate the following control, which represent the "Create New Folder" button:

````ASPNET
	    <telerik:RadToolBarButton Text=" " ToolTip="New Folder" Value="NewFolder" Enabled="false"
	        CssClass="rtbIconOnly icnNewFolder" />
````



1. To hide it just set either style="display:none;" or Visible="false":

````ASPNET
	    <telerik:RadToolBarButton Text=" " Style="display: none;" ToolTip="New Folder" Value="NewFolder"
	        Enabled="false" CssClass="rtbIconOnly icnNewFolder" />
````



1. Save the file and test the editor.
