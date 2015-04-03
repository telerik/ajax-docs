---
title: ExternalDialogsPath property
page_title: ExternalDialogsPath property | UI for ASP.NET AJAX Documentation
description: ExternalDialogsPath property
slug: moss/sharepoint-2007-(moss)/radeditor-for-moss/dialogs/externaldialogspath-property
tags: externaldialogspath,property
published: True
position: 8
---

# ExternalDialogsPath property



By default, all RadEditor dialogs are embedded as resource files in the Telerik.Web.UI.dll file, which makes their customization harder. In order to provide an easy way to modify the editor's dialogs, the Telerik UI for ASP.NET AJAX suite installation now comes with an extra folder named __EditorDialogs__which contains the dialogs' ascx files. You can configure RadEditor to use the external dialog files by copying the __EditorDialogs__folder to the root of the web application and setting the __ExternalDialogsPath__property to point to it, e.g.

## Example:

The example below demonstrates how to hide the "New Folder" button in all the dialogs containing FileExplorer. Here are the steps:

1. Copy the __EditorDialogs__folder to the __/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/__foder.

1. Set the __ExternalDialogsPath__property to point to the EditorDialogs folder. In order to do this add the following element in the respective ConfigFilie.xml and ListConfigFile.xml (for list, wiki, blog ...).

````XML
	    <property name="ExternalDialogsPath">/_wpresources/RadEditorSharePoint/5.x.x.0__1f131a624888eeed/Resources/EditorDialogs</property>
````



1. Open the __FileBrowser.ascx__ file, which is in the __EditorDialogs__folder and locate the following control, which represent the __FileExplorer__:

````ASPNET
	    <telerik:RadFileExplorer ID="RadFileExplorer2" Height="450px" Width="400px" TreePaneWidth="150px"
	        runat="Server" EnableOpenFile="false" AllowPaging="true" />
````



1. To hide the "New Folder" button set the __EnableCreateNewFolder__property to false.

````ASPNET
	    <telerik:RadFileExplorer ID="RadFileExplorer1" Height="450px" Width="400px" TreePaneWidth="150px"
	        EnableCreateNewFolder="false" runat="Server" EnableOpenFile="false" AllowPaging="true" />
````



1. Save the file and test the editor.
